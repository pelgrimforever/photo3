import React, { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import GoogleMap from 'google-map-react';
import MarkerClusterer from '@googlemaps/markerclustererplus';
//https://googlemaps.github.io/js-markerclustererplus/index.html


//services
//data models

function getMapOptions(maps: Maps) {
  return {
    streetViewControl: false,
    scaleControl: true,
    fullscreenControl: false,
    gestureHandling: "auto",
    disableDoubleClickZoom: false,
    minZoom: 3,
    maxZoom: 18,

    mapTypeControl: true,
    mapTypeId: maps.MapTypeId.HYBRID,
    mapTypeControlOptions: {
        style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: maps.ControlPosition.TOP_RIGHT,
        mapTypeIds: [
            maps.MapTypeId.ROADMAP,
            maps.MapTypeId.SATELLITE,
            maps.MapTypeId.HYBRID
        ]
    },

    zoomControl: true,
    clickableIcons: true
  };
}

class  MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      google: this.props.google,
      zoomlevel: this.props.zoomlevel,
      googleMapRef: null,
      googleRef: null,
      location: this.props.location,
      mapdata: this.props.mapdata,
      markerCluster: null,
    };
    console.log("MapContainer constructor");
  }


  setGoogleMapRef = (map, maps) => {
    this.setState( {
      googleMapRef: map,
      googleRef: maps
    } );
    map.addListener("center_changed", () => {
      alert("center changed");
    });    
    this.updateMarkers();
  }

  updateMarkers = () => {
    console.log("updateMarkers");
    if(this.state.MarkerCluster!=null) {
      console.log("clearMarkers");
      this.state.MarkerCluster.clearMarkers();
    }
    let locations = [];
    this.state.mapdata.forEach((point) => {
      locations.push( { location: point.location, text: point.text } );
    });
    let markers = locations && locations.map((location) => {
      return new this.state.googleRef.Marker({position: location.location})
    })
    this.setState( 
      { markerCluster: 
        new MarkerClusterer(this.state.googleMapRef, markers, {
          imagePath: 'https://unpkg.com/@googlemaps/markerclustererplus@1.0.3/images/m',
          gridSize: 40,
          minimumClusterSize: 2
        })
      }
    );
  }

  onmapClick = ({x, y, lat, lng, event}) => {
    console.log("onmapClick");
  }

  //props=selectedplace
  onMarkerClick = (props, marker, e) => { 
    alert(props.position.lat);
  }

  onInfoWindowClose = () => {

  }

  render() {
    return (
        <GoogleMap
          bootstrapURLKeys={{ key: 'AIzaSyCEFVtZAiOTZxdgm-3c9qsYPz4s1PyoSq8' }}
          defaultZoom={this.state.zoomlevel}
          defaultCenter={this.state.location}
          onClick={this.onmapClick}
          onChange={this.handleMapChange}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({map, maps}) => this.setGoogleMapRef(map, maps)}
          options={getMapOptions}
        >
      </GoogleMap>
    );
  }
}

export default MapContainer;