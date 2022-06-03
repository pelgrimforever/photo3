import React from 'react';


//app components
import Store from '../services/store.js';
import Filmselector from './filmselector.js';
import Photoselector from './photoselector.js';

//components
import Editphoto from './editphoto/editphoto.js';
//services
import Rsphoto from '../services/film/rest/table/rsphoto.js';
//data models

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: Store.user.loggedin,
      film: null,
      photo: null,
      photos: [],

      photocounter: Store.appevents.photocounter,
    };
  }

  componentDidMount() {
    Store.user.notifyme("locationsmap", this.userchanged);
  }

  userchanged = () => {
    this.setState( { loggedin : Store.user.loggedin } );
  }

  photoschange = () => {
    if(this.state.photocounter!=Store.appevents.photocounter) {
      this.setState( { photocounter : Store.appevents.photocounter } );
    }
  }

  onFilmselected = (film) => {
    this.setState( { 
      film: null, 
      photo: null,
      photos: []
    } );
    this.loadphotos(film);
  }

  loadphotos = async (film) => {
    if(film!=null) {
      this.setState( { loading: true } );
      const photos = await Rsphoto.loadPhotos4film(Store.user, film.PK);
      this.setState( { 
        loading: false,
        film: film,
        photos: photos
      } );
    }
  }

  onPhotoselected = (photo) => {
    this.setState( { photo: photo } );
  }

  onPhotoupdated = (photo) => {
    this.onPhotoselected(null);
    this.onPhotoselected(photo);
  }

  render() {
    
    return (
<div className="root fullheight">
{ this.state.loggedin && 
  <>

  <div className="containerheader">
    <Filmselector onFilmselected={this.onFilmselected} />
    <Photoselector film={this.state.film} loading={this.state.loading} photos={this.state.photos} onPhotoselected={this.onPhotoselected} />
  </div>

  <div className="content containercontent">
    <Editphoto film={this.state.film} loading={this.state.loading} photos={this.state.photos} photo={this.state.photo} onPhotoupdated={this.onPhotoupdated} />
  </div>
  </>

}
</div>

    );
  }
}

export default Edit;