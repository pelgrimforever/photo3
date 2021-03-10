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
      clusterermapbounds: null,
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
      data.forEach(photo => {
        if(photo.location!=null) {
          const latlng = new window.google.maps.LatLng(photo.location);
          bounds.extend(latlng);
          const name = "" + photo.PK.filmPK.id + " " + photo.PK.id;
          const marker = new window.google.maps.Marker({
            PK: photo.PK,
            position: photo.location,
            map: this.state.map,
            title: name,
            icon: url + "/images/iconcamera.png"
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
            minimumClusterSize: 5
          });
        this.setState( { 
          markers: markers,
          markerclusterer: markerclusterer
        });
        //view-source:https://googlemaps.github.io/js-markerclustererplus/examples/events_example.html
        window.google.maps.event.addListener(markerclusterer, "click", this.onMarkerclusterClick);
        window.google.maps.event.addListener(markerclusterer, "mouseover", function (c) {
        });
        window.google.maps.event.addListener(markerclusterer, "mouseout", function (c) {
        });
      }
    }
  }

  addEventlisteners = (map: map) => {
    //map.addListener("zoom_changed", this.onclusterermapboundschange);
  }

  onMapClick = (e) => {
  }

  onclusterermapboundschange = (e) => {    
  }

  onMarkerClick = (e, marker) => {
    this.props.onMarkerClick(marker);
  }

  onMarkerclusterClick = (markerclusterer) => {
    //clicking twice on a markerclusterer without the clusterer bounds changes means
    //the same clusterer is selected
    const clusterermapbounds_same = this.compareBounds(markerclusterer.getBounds(), this.state.clusterermapbounds);
    this.setState({
      clusterermapbounds: markerclusterer.getBounds()
    });
    if(clusterermapbounds_same) {
      this.props.onMarkerclusterClick(markerclusterer);
    }
  }

  compareBounds = (bounds1, bounds2) => {
    if(bounds1!=null && bounds2!=null) {
      return bounds1.getNorthEast().lat() === bounds2.getNorthEast().lat()
        && bounds1.getNorthEast().lng() === bounds2.getNorthEast().lng()
        && bounds1.getSouthWest().lat() === bounds2.getSouthWest().lat()
        && bounds1.getSouthWest().lng() === bounds2.getSouthWest().lng();
    } else {
      return false;
    }
  }

  onMapLoad = (map) => {
    this.setState( { map: map } );
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