import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import Moment from 'moment';

import Store from '../../services/store.js';

//app components
import Photoslides from '../../popups/photoslides.js';
//services

//data models

class Photogallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: Store.user.loggedin,
      photocounter: Store.appevents.photocounter,
      showphotoslides: false,
      slides: [],
    };
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.locationsupdates!=this.props.locationsupdates) {
    }
  }

  showPhoto = (photo) => {
    this.setState({
      showphotoslides: true,
      slides: [photo],
    });
  }

  onCloseslides = () => {
    this.setState({
      showphotoslides: false
    })
  }

  displayid = (photopk) => {
    return photopk.filmPK.id.substring(0,3) + "-" + photopk.filmPK.id.substring(3,6) + " " + photopk.id;
  }

  displaydate = (date) => {
    return date!=null ? Moment(date).format("YYYY-MM-DD") : "____-__-__";
  }

  render() {
    
    return (
    <div className="root fullheight">
      <div className="containercontent container-relative">
        <div className="table-container container-fluid p-0 overflow-auto">
          <div className="flex-gallery">
{this.props.photos.map((photo, index) => (
          <div key={this.displayid(photo.PK)} className="bg-secondary border border-dark" style={{width:200}}  onClick={(e) => this.showPhoto(photo)}>
            <div className="d-flex" style={{width:200, height:200}}>
              <img src={photo.image} className="img-fluid mx-auto my-auto" />
            </div>
            <div class="desc w-100"><span className="row" style={{margin:"auto", display:"table"}}>{this.displayid(photo.PK)}</span></div>
          </div>
))}
        </div>
        </div>
      </div>
      <Photoslides 
        show={this.state.showphotoslides}
        photos={this.state.slides} 
        onCancel={this.onCloseslides}
      />
    </div>
    );
  }
}

export default Photogallery;