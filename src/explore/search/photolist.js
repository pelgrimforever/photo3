import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import Moment from 'moment';

import Store from '../../services/store.js';

//app components
import Photoslides from '../../popups/photoslides.js';
//services

//data models

class Photolist extends React.Component {
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
    
    const colimg = {width: '100px'};
    const colid = {width: '120px'};
    const coldate = {width: '100px'};
    const colcountry = {width: '40px'};
    const colsublocality = {width: '400px'};
    const colbutton = {width: '65px'};

    return (
    <div className="root fullheight">
      <div className="containercontent container-relative">
        <div className="table-container container-fluid p-0">

          <table className="table table-dark table-striped table-bordered table-hover fillparent">
            <thead>
              <tr>
                <th style={colid}>id</th>
                <th style={coldate}>date</th>
                <th style={colcountry}>ctry</th>
                <th style={colsublocality}>location</th>
                <th>description</th>
                <th style={colimg}>image</th>
                <th style={colbutton}></th>
                <th className="dummyscroll"></th>
              </tr>
            </thead>
            <tbody className="overflow text-body">

{this.props.photos.map((photo, index) => (
              <tr className={this.state.selectedlocation===index ? "table-active" : "table-info"} style={{verticalAlign: 'baseline'}} key={index}>
                <td style={colid}>{this.displayid(photo.PK)}</td>
                <td style={coldate}>{this.displaydate(photo.photodate)}</td>
                <td style={colcountry}>{photo.routePK!==null ? photo.routePK.countrycode() : ""}</td>
                <td style={colsublocality}>{photo.routePK!==null ? photo.routePK.locality() + " - " + photo.routePK.routecode : ""}</td>
                <td>{photo.description}</td>
                <td style={colimg}><img src={photo.image} height="50" /></td>
                <td style={colbutton}>
                  <button className="btn btn-primary glyphicon glyphicon-eye-open" onClick={(e) => this.showPhoto(photo)} />
                </td>
              </tr>  
))}

            </tbody>
          </table>
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

export default Photolist;