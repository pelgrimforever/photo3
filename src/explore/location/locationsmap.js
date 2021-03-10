import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import Moment from 'moment';
import MarkerClusterer from '@googlemaps/markerclustererplus';
//https://googlemaps.github.io/js-markerclustererplus/index.html

import Store from '../../services/store.js';

//app components
import Map from '../../utilities/googlemaps/map.js';
//services

//data models

class Locationsmap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: Store.user.loggedin,
      photocounter: Store.appevents.photocounter,
      map: null,
      markers: [],
      markerclusterer: null,
    };
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.locationsupdates!=this.props.locationsupdates) {
      this.buildMarkers(this.props.locations);
    }
  }

  buildMarkers = (data) => {
    if(this.state.map!=null) {
      if(this.state.markerclusterer!=null) {
        this.state.markerclusterer.clearMarkers();
        this.state.markerclusterer.setMap(null);
      }
      let bounds = new window.google.maps.LatLngBounds();
      const url = window.location.origin + window.location.pathname;
      let markers = [];
      data.forEach(location => {
        if(location.location!=null) { //photos without locations should not be in this query result, but just in case for future changes
          const latlng = new window.google.maps.LatLng(location.location);
          bounds.extend(latlng);
          const name = "" + location.locationcount;
          const marker = new window.google.maps.Marker({
            position: location.location,
            map: this.state.map,
            title: name,
            icon: url + "/images/iconcamera.png",
            photolocation: location
          });
          const infowindow = new window.google.maps.InfoWindow({ content: name });
          marker.addListener('click', (e) => this.onMarkerClick(e, marker));
          markers.push(marker);
        }
      });
      if(markers.length>0) {
        this.state.map.fitBounds(bounds);
        const markerclusterer = new MarkerClusterer(this.state.map, markers, {
            imagePath: url + "/images/markerclusterer/m",
            gridSize: 40,
            minimumClusterSize: 1
          });
        this.setState( { 
          markers: markers,
          markerclusterer: markerclusterer
        });
        //view-source:https://googlemaps.github.io/js-markerclustererplus/examples/events_example.html
        window.google.maps.event.addListener(markerclusterer, "click", (cluster) => this.onMarkerclusterClick(cluster));
        window.google.maps.event.addListener(markerclusterer, "mouseover", function (c) {
        });
        window.google.maps.event.addListener(markerclusterer, "mouseout", function (c) {
        });
      }
    }
  }

  addEventlisteners = (map: map) => {
    //map.addListener("click", this.onMapClick);
    map.addListener("center_changed", this.onMapboundschange);
    map.addListener("zoom_changed", this.onMapboundschange);
  }

  onMapClick = (e) => {
  }

  onMapboundschange = (e) => {
    this.props.onMapboundschange(this.state.map.getBounds());
  }

  onMarkerClick = (marker) => {
    const position = marker.position;
  }

  onMarkerclusterClick = (clustermarker) => {
    this.props.onMarkerclusterClick(clustermarker.getMarkers());
  }

  onMapLoad = (map) => {
    this.setState( { map: map } );
    this.props.onMapLoad(map);
    this.buildMarkers(this.props.locations);
    this.addEventlisteners(map);
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

    return (
      <>
      <Map id="locationsmap" onMapLoad={this.onMapLoad} options={options} />
{ this.props.loading &&
      <div className="h-100 w-100" >
        <div className="d-flex justify-content-center">
          <Spinner className="spinner-border-center" animation="border" role="status" />
        </div>
      </div>
}
      </>
    );
  }
}

export default Locationsmap;