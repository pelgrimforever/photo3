import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

//app components
import Store from '../../services/store.js';
import Popupmessage from '../../popups/popupmessage.js';
import Edittoolbar from './edittoolbar.js';
import Viewphoto from './viewphoto.js';
import Editmap from './editmap.js';

//services
import Rsphoto from '../../services/film/rest/table/rsphoto.js';

//data models

const maptoolname = 'map';
const imagetoolname = 'image';

const tools = [ 
    { name:maptoolname, icon: '/photo3/images/googlemaps.png' }, 
    { name:imagetoolname, icon: '/photo3/images/iconcamera.png' }, 
  ];

class Editphoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      showpopup: false,
      popuptitle: '',
      popupmessage: '',
      map: null,
      markers: [],
      activetool: tools[0],
      photoimage: "",
    };
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.photo!=this.props.photo) {
      let image = "";
      if(this.props.photo!=null) {
        image = await Rsphoto.getSmall(Store.user, this.props.photo.PK);
      }
      this.setState( { photoimage: image } );
    }
  }

  onToolselected = (tool) => {
    this.setState( { activetool: tool } );
  }

  updatedPhotolocation = async (photo) => {
    const result = await Rsphoto.updGeolocation(Store.user, photo);
    const updatedphoto = await Rsphoto.getOne(Store.user, photo.PK);
    //this does update the photo in the array, which is not 100% "by the book" but prevents reloading the complete array
    photo.routePK = updatedphoto.routePK;
    photo.streetnumber = updatedphoto.streetnumber;
    photo.formattedaddress = updatedphoto.formattedaddress;
    //force update of the photo object in parent
    this.props.onPhotoupdated(photo);
  }

  copyPrevGeolocation = async (photo) => {
    const result = await Rsphoto.copyPrevGeolocation(Store.user, photo);
    if(result.status==="OK") {
      const updatedphoto = await Rsphoto.getOne(Store.user, photo.PK);
      //this does update the photo in the array, which is not 100% "by the book" but prevents reloading the complete array
      photo.location = updatedphoto.location;
      photo.reversegeocode = updatedphoto.reversegeocode;
      photo.routePK = updatedphoto.routePK;
      photo.streetnumber = updatedphoto.streetnumber;
      photo.formattedaddress = updatedphoto.formattedaddress;
      //force update of the photo object in parent
      this.props.onPhotoupdated(photo);
    } else {
      this.setState({
        showpopup: true,
        popuptitle: 'Copy previous location failed',
        popupmessage: result.status,
      })
    }
  }

  copyPhotoGeolocation = async (photo, photopk) => {
    const result = await Rsphoto.copyPhotoGeolocation(Store.user, photo, photopk);
    if(result.status==="OK") {
      const updatedphoto = await Rsphoto.getOne(Store.user, photo.PK);
      //this does update the photo in the array, which is not 100% "by the book" but prevents reloading the complete array
      photo.location = updatedphoto.location;
      photo.reversegeocode = updatedphoto.reversegeocode;
      photo.routePK = updatedphoto.routePK;
      photo.streetnumber = updatedphoto.streetnumber;
      photo.formattedaddress = updatedphoto.formattedaddress;
      //force update of the photo object in parent
      this.props.onPhotoupdated(photo);
    } else {
      this.setState({
        showpopup: true,
        popuptitle: 'Copy photo location failed',
        popupmessage: result.status,
      });
    }
    return result;
  }

  hidePopup = () => {
    this.setState( { showpopup: false });
  }

  render() {
    const showspinner = this.state.loading || this.props.loading;

    //tool selected = what element is visible
    const map_visibility = this.state.activetool.name===maptoolname ? "visible" : "hidden";
    const image_visibility = this.state.activetool.name===imagetoolname ? "visible" : "hidden";

    return (
    <div className="d-flex h-100">
      <Edittoolbar tools={tools} onToolselected={this.onToolselected}/>
      <div className="flex-grow-1 container-relative">

<div className="w-100 h-100 stack" style={{visibility: map_visibility}}>
        <Editmap id="photomap" 
          film={this.props.film} 
          photos={this.props.photos} 
          photo={this.props.photo} 
          updatedPhotolocation={this.updatedPhotolocation} 
          copyPrevGeolocation={this.copyPrevGeolocation}
          copyPhotoGeolocation={this.copyPhotoGeolocation}
        />
{ showspinner &&
        <div className="h-100 w-100" >
          <div className="d-flex justify-content-center">
            <Spinner className="spinner-border-center" animation="border" role="status" />
          </div>
        </div>
}
</div>

<div className="w-100 h-100 stack d-flex" style={{visibility: image_visibility}}>
  <Viewphoto image={this.state.photoimage} />
</div>

      </div>
      <Popupmessage show={this.state.showpopup} title={this.state.popuptitle} message={this.state.popupmessage} onHide={this.hidePopup} />
    </div>
    );
  }
}

export default Editphoto;