import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import FormControl from "react-bootstrap/FormControl";
import { Col, Row, Form } from "react-bootstrap";

//app components
import Store from '../../services/store.js';
import Map from '../../utilities/googlemaps/map.js';
import Googlemapsservice from '../../utilities/googlemaps/googlemapsservice.js';
import Mapeditmode from './mapeditmode.js';
import Selectphotodialog from '../../popups/selectphotodialog.js';

//services

//data models

const GOOGLEMAPS_SRID = 4326;
const POINT = 1;

const viewmodename = 'view';
const editmodename = 'edit';

const editmodes = [ 
    { name:viewmodename, text: 'browse' }, 
    { name:editmodename, text: 'edit' }, 
  ];

class Editmap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      map: null,
      markers: [],
      editmode: editmodes[0],
      showphotodialog: false,
    };
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.film!=this.props.film) {
      this.buildMarkers(this.props.photos);
    }
    if(prevProps.photo!=this.props.photo && this.props.photo!=null) {
      if(this.props.photo.location!=undefined) {
        this.state.map.setCenter(this.props.photo.location); 
      }
    }
  }

  buildMarkers = (data) => {
    let oldmarkers = this.state.markers;
    while(oldmarkers.length) { 
      const marker = oldmarkers.pop();
      if(marker !== undefined) {
        marker.setMap(null); 
      }
    }
    this.setState( { 
      markers: []
    });    
    let bounds = new window.google.maps.LatLngBounds();
    let markercount = 0;
    const markers = data.map((photo, i) => {
      if(photo.location!=undefined) {
        bounds.extend(new window.google.maps.LatLng(photo.location));
        markercount++;
        return this.createMarker(photo);
      }
    });
    if(markercount>0) {
      this.state.map.fitBounds(bounds);
    }
    this.setState( { 
      markers: markers
    });
  }

  createMarker = (photo) => {
    const url = window.location.origin + window.location.pathname;
    const marker = new window.google.maps.Marker({
      photoid: photo.PK.id,
      position: photo.location,
      map: this.state.map,
      title: "ID: " + photo.PK.id,
      icon: url + "/images/iconcamera.png"
    });
    const infowindow = new window.google.maps.InfoWindow({ content: "ID: " + photo.PK.id });
    marker.addListener('click', () => { infowindow.open(this.state.map, marker); })      
    return marker;
  }

  movePhotoMarker = (photo) => {
    let markers = this.state.markers;
    let found = false;
    for(let i = 0; i < markers.length; i++) {
      if(markers[i] !== undefined) {
        if(markers[i].photoid===photo.PK.id) {
          found = true;
          markers[i].setPosition(photo.location);
          i = markers.length;
        }
      }
    }
    if(!found) {
      markers.push(this.createMarker(photo));
    }
    this.setState( { 
      markers: markers
    });    
  }

  onMapLoad = (map) => {
    this.setState( { map: map } );
    this.addEventlisteners(map);
  }

  addEventlisteners = (map: map) => {
    map.addListener("click", this.onMapClick);
  }

  onMapClick = async (e) => {
    const moveallowed = this.state.editmode.name==editmodename && this.props.photo!=null;
    if(moveallowed) {
      let photo = this.props.photo;
      if(photo!=null) {
        const location = { 
          type: POINT,
          srid: GOOGLEMAPS_SRID,
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
          radius: 0
          };
        let photo = this.props.photo;
        const geolocation = await Googlemapsservice.reversegeocode(location);
        photo.location = location;
        photo.reversegeocode = JSON.stringify(geolocation);
        this.movePhotoMarker(photo);
        this.props.updatedPhotolocation(photo);
      }
    }
  }

  copyPrevious = async () => {
    const moveallowed = this.state.editmode.name==editmodename && this.props.photo!=null;
    if(moveallowed) {
      const result = await this.props.copyPrevGeolocation(this.props.photo);
      this.movePhotoMarker(this.props.photo);
    }
  }

  onModeselected = (mode) => {
    this.setState({ editmode: mode });
  }


  enterLocation = () => {
    this.setState({ showphotodialog: true });
  }

  onPhotodialogselect = async (photopk) => {
    const moveallowed = this.state.editmode.name==editmodename && this.props.photo!=null;
    if(moveallowed) {
      const result = await this.props.copyPhotoGeolocation(this.props.photo, photopk);
      if(result.status==="OK") {
        this.setState({ showphotodialog: false });
        this.movePhotoMarker(this.props.photo);
      }
    }
  }

  onPhotodialogcancel = () => {
    this.setState({ showphotodialog: false });
  }

  render() {
    const location = {
      address: 'Erembodegem',
      lat: 50.917, lng: 4.055
    };
    const zoomlevel = 3;

    const options = {
      center: { lat: location.lat, lng: location.lng }, 
      zoom: zoomlevel
    }

    const disable_editcontrols = this.state.editmode.name!=editmodename || this.props.photo==null;

    let filmid = '';
    let photoid = '';
    let photoimage = null;
    let country = '';
    let postalcode = '';
    let locality = '';
    let sublocality = '';
    let route = '';
    if(this.props.photo!=null) {
      filmid = this.props.photo.PK.filmPK.id;
      photoid = this.props.photo.PK.id;
      photoimage = this.props.photo.image;
      country = this.props.photo.routePK.countrycode();
      postalcode = this.props.photo.routePK.postalcode();
      locality = this.props.photo.routePK.locality();
      sublocality = this.props.photo.routePK.sublocality();
      route = this.props.photo.routePK.routecode;
    }

    const collabels = "6";
    const coldata = "6";

    return (
      <div className="d-flex h-100">
        <div className="container-relative"  style={{width:400}}>
          <Mapeditmode modes={editmodes} onModeselected={this.onModeselected} />          
          <Form>
            <div className="w-100 d-flex bg-secondary" style={{height:200}}>
                <img src={photoimage} className="img-fluid rounded mx-auto my-auto" />
            </div>
            <Row m-0="true">
              <Col sm={collabels} p-0="true" className="input-group-prepend">
                <Form.Label className="input-group-text">photo id</Form.Label>
              </Col>
              <Col sm={coldata} p-0="true">
                <Form.Control type="text" id="bloglineid" name="bloglineid" readOnly value={filmid + " - " + photoid} />
              </Col>
            </Row>
            <Row m-0="true">
              <Col sm={collabels} p-0="true" className="input-group-prepend">
                <Form.Label className="input-group-text">previous location</Form.Label>
              </Col>
              <Col sm={coldata} p-0="true">
                <button type="button" className="btn btn-primary" onClick={this.copyPrevious} disabled={disable_editcontrols}>copy</button>
              </Col>
            </Row>                        
            <Row m-0="true">
              <Col sm={collabels} p-0="true" className="input-group-prepend">
                <Form.Label className="input-group-text">enter location</Form.Label>
              </Col>
              <Col sm={coldata} p-0="true">
                <button type="button" className="btn btn-primary" onClick={this.enterLocation} disabled={disable_editcontrols}>location dialog</button>
              </Col>
            </Row>                        
            <Row m-0="true">
              <Col sm={collabels} p-0="true" className="input-group-prepend">
                <Form.Label className="input-group-text">country</Form.Label>
              </Col>
              <Col sm={coldata} p-0="true">
                <Form.Control type="text" readOnly value={country} />
              </Col>
            </Row>                        
            <Row m-0="true">
              <Col sm={collabels} p-0="true" className="input-group-prepend">
                <Form.Label className="input-group-text">postal code</Form.Label>
              </Col>
              <Col sm={coldata} p-0="true">
                <Form.Control type="text" readOnly value={postalcode} />
              </Col>
            </Row>                        
            <Row m-0="true">
              <Col sm={collabels} p-0="true" className="input-group-prepend">
                <Form.Label className="input-group-text">locality</Form.Label>
              </Col>
              <Col sm={coldata} p-0="true">
                <Form.Control type="text" readOnly value={locality} />
              </Col>
            </Row>                        
            <Row m-0="true">
              <Col sm={collabels} p-0="true" className="input-group-prepend">
                <Form.Label className="input-group-text">sublocality</Form.Label>
              </Col>
              <Col sm={coldata} p-0="true">
                <Form.Control type="text" readOnly value={sublocality} />
              </Col>
            </Row>                        
            <Row m-0="true">
              <Col sm={collabels} p-0="true" className="input-group-prepend">
                <Form.Label className="input-group-text">route</Form.Label>
              </Col>
              <Col sm={coldata} p-0="true">
                <Form.Control type="text" readOnly value={route} />
              </Col>
            </Row>                        
          </Form>
        </div>
        <Map id="locationsmap" onMapLoad={this.onMapLoad} options={options} />

        <Selectphotodialog
          show={this.state.showphotodialog} 
          onPhotoselect={this.onPhotodialogselect} 
          onCancel={this.onPhotodialogcancel}
        />

      </div>
    );
  }
}

export default Editmap;