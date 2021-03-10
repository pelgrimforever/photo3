import React, { Component } from 'react';
import { render } from 'react-dom';
//app components
import Store from '../../services/store.js';

class Map extends Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this)
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options);
    this.props.onMapLoad(map)
  }

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      console.log("GOOGLE API KEY " + Store.google_api_key);
      s.src = `https://maps.google.com/maps/api/js?key=` + Store.google_api_key;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      // Below is important. 
      //We cannot access google.maps until it's finished loading
      s.addEventListener('load', e => {
        this.onScriptLoad()
      })
    } else {
      this.onScriptLoad()
    }
  }

  render() {
    return (
      <div className="h-100 w-100" id={this.props.id} />
    );
  }
}

export default Map