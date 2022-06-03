import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import Moment from 'moment';

//app components
import Store from '../../services/store.js';
import Photoslides from '../../popups/photoslides.js';
import Popupmessage from '../../popups/popupmessage.js';
import Selectionview from './selectionview.js';
import Locationsmap from './locationsmap.js';

//services
import Rsphoto from '../../services/film/rest/table/rsphoto.js';
import Rsviewpublicphotolocations from '../../services/film/rest/view/rsviewpublicphotolocations.js';
import Rsviewphotolocations from '../../services/film/rest/view/rsviewphotolocations.js';

//data models
import Fieldsearcher from '../../data/search/fieldsearcher.js';
import {Photosearcher} from '../../data/film/table/super/photosuper.js';

const GOOGLEMAPS_SRID = 4326;
const POINT = 1;

class Explorelocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      showpopup: false,
      showphotoslides: false,
      slides: [],
      popuptitle: '',
      popupmessage: '',

      map: null,
      dataupdates: 0,
      data: [],
      mapproperties: {
        bounds: null,
        activelocationcount: 0,
        activephotocount: 0
      },
      activelocations: [],

      photosearcher: new Photosearcher()
    };
  }

  async componentDidMount() {
    if(Store.user!=null) {
      this.setState( { loggedin : Store.user.loggedin } );
    }
    Store.user.notifyme("explore", this.userchanged);
    const res = await this.getMapdata();
  }

  userchanged = async () => {
    const res = await this.getMapdata();
  }

  getMapdata = async () => {
    try {
      this.setState( { loading: true });
      let data = [];

      if(Store.user.loggedin) {
        data = await Rsviewphotolocations.getall(Store.user);
      } else {
        data = await Rsviewpublicphotolocations.getall(Store.user);
      }

      this.setState( { 
        dataupdates: this.state.dataupdates+1,
        data: data,
        loading: false
      } );
    } catch (e) {
      this.setState( { 
        dataupdates: this.state.dataupdates+1,
        data: [],
        loading: false
      } );
      console.log("getMapdata failed");
    }
    this.setState( { 
      loading: false
    } );
  }

  hidePopup = () => {
    this.setState( { showpopup: false });
  }

  onMapboundschange = (bounds) => {
    let activelocationcount = 0;
    let activephotocount = 0;
    let activelocations = [];
    this.state.data.forEach(location => {
      if(location.location!=null) { //photos without locations should not be in this query result, but just in case for future changes
        if(bounds.contains(location.location)) {
          activelocationcount++;
          activelocations.push(location);
          activephotocount += parseInt(location.locationcount);
        }
      }
    });
    let locations = activelocationcount<101 ? activelocations : [];
    this.setState({
      mapproperties: {
        bounds: bounds,
        activelocationcount: activelocationcount,
        activephotocount: activephotocount
      },
      activelocations: locations,
    });
  }

  onMarkerclusterClick = async (markers) => {
    if(markers.length===1) {
      this.setState({ loading: true });
      const location = { 
        type: POINT,
        srid: GOOGLEMAPS_SRID,
        lat: markers[0].position.lat(),
        lng: markers[0].position.lng(),
        radius: 0
        };
      const photos = await Rsphoto.loadPhotos4location(Store.user, location);
      this.setState({
        loading: false,
        showphotoslides: true,
        slides: photos
      })
    }
  }

  onCloseslides = () => {
    this.setState({
      showphotoslides: false
    })
  }

  onMapLoad = (map) => {
    this.setState( { map: map } );
  }

  onLocationselected = (location) => {
    if(this.state.map!=null) {
      this.state.map.setCenter(location);
    }
  }

  render() {
    const showspinner = this.state.loading || this.props.loading;

    return (
    <div className="d-flex h-100">
      <Selectionview
        mapproperties={this.state.mapproperties}
        activelocations={this.state.activelocations}
        onLocationselected={this.onLocationselected}
      />
      <div className="flex-grow-1 container-relative">

<div className="w-100 h-100 stack">
        <Locationsmap id="locationsmap" 
          locationsupdates={this.state.dataupdates}
          locations={this.state.data}
          onMapLoad={this.onMapLoad}
          onMapboundschange={this.onMapboundschange}
          onMarkerclusterClick={this.onMarkerclusterClick}
        />
{ showspinner &&
        <div className="h-100 w-100" >
          <div className="d-flex justify-content-center">
            <Spinner className="spinner-border-center" animation="border" role="status" />
          </div>
        </div>
}
</div>


      </div>
      <Photoslides 
        show={this.state.showphotoslides}
        photos={this.state.slides} 
        onCancel={this.onCloseslides}
      />
      <Popupmessage show={this.state.showpopup} title={this.state.popuptitle} message={this.state.popupmessage} onHide={this.hidePopup} />
    </div>
    );
  }
}

export default Explorelocation;