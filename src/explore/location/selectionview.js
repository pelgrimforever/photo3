import React from 'react';
import FormControl from "react-bootstrap/FormControl";
import { Col, Row, Form } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner'
import Moment from 'moment';

//app components
import Store from '../../services/store.js';
import Photoslides from '../../popups/photoslides.js';

//services
import Rsphoto from '../../services/film/rest/table/rsphoto.js';

//data models


class Selectionview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedlocation: null,
      showspinner: false,

      showphotoslides: false,
      slides: [],
    };
  }

  showslides = async () => {
    if(this.props.mapproperties.activephotocount<101) {
      this.setState({ showspinner: true });
      let locations = [];
      this.props.activelocations.forEach((location, index) => locations.push(location.location));
      const photos = await Rsphoto.loadPhotos4locations(Store.user, locations);

      this.setState({
        showspinner: false,
        showphotoslides: true,
        slides: photos
      })
    }
  }

  showlocationslides = async (location) => {
    this.setState({ showspinner: true });
    const photos = await Rsphoto.loadPhotos4location(Store.user, location.location);

    this.setState({
      showspinner: false,
      showphotoslides: true,
      slides: photos
    })
  }

  onCloseslides = () => {
    this.setState({
      showphotoslides: false
    })
  }

  render() {
    const digits = 8;
    const mapbounds = this.props.mapproperties.bounds;
    const locations = this.props.activelocations;
    const SWlat = mapbounds!=null ? mapbounds.getSouthWest().lat().toFixed(digits) : "0";
    const SWlng = mapbounds!=null ? mapbounds.getSouthWest().lng().toFixed(digits) : "0";
    const NElat = mapbounds!=null ? mapbounds.getNorthEast().lat().toFixed(digits) : "0";
    const NElng = mapbounds!=null ? mapbounds.getNorthEast().lng().toFixed(digits) : "0";

    const disable_showslides = this.props.mapproperties.activephotocount>100

    const collabels = "4";
    const coldata = "8";
    const coldata1 = "4";
    const coldata2 = "4";

    const colcountry = {width: '40px'};
    const colsublocality = {width: '200px'};
    const colphotos = {width: '40px'};

    return (
      <div className="root fullheight" style={{width:400}}>
        <div className="containerheader">
          <div className="row m-0">
            <div className="col col-sm-4 input-group-prepend">
              <label className="input-group-text">bounds</label>
            </div>
            <div className="col col-sm-4 input-group-prepend">
              <label className="input-group-text">lat</label>
            </div>
            <div className="col col-sm-4 input-group-prepend">
              <label className="input-group-text">lng</label>
            </div>
          </div>
          <div className="row m-0">
            <div className="col col-sm-4 input-group-prepend">
              <label className="input-group-text">SW</label>
            </div>
            <div className="col col-sm-4 input-group-prepend">
              <label className="input-group-text">{SWlat}</label>
            </div>
            <div className="col col-sm-4 input-group-prepend">
              <label className="input-group-text">{SWlng}</label>
            </div>
          </div>
          <div className="row m-0">
            <div className="col col-sm-4 input-group-prepend">
              <label className="input-group-text">NE</label>
            </div>
            <div className="col col-sm-4 input-group-prepend">
              <label className="input-group-text">{NElat}</label>
            </div>
            <div className="col col-sm-4 input-group-prepend">
              <label className="input-group-text">{NElng}</label>
            </div>
          </div>
          <div className="row m-0">
            <div className="col col-sm-4 input-group-prepend">
              <label className="input-group-text">locations</label>
            </div>
            <div className="col col-sm-4 input-group-prepend">
              <label className="input-group-text">{this.props.mapproperties.activelocationcount}</label>
            </div>
            <div className="col col-sm-4">
              <label className="input-group-text glyphicon glyphicon-eye-open"> max 100</label>
            </div>
          </div>
          <div className="row m-0">
            <div className="col col-sm-4 input-group-prepend">
              <label className="input-group-text">photos</label>
            </div>
            <div className="col col-sm-4 input-group-prepend">
              <label className="input-group-text">{this.props.mapproperties.activephotocount}</label>
            </div>
            <div className="col col-sm-4 input-group-prepend">
{ this.state.showspinner ?
  (
              <div className="d-flex justify-content-center">
                <Spinner className="spinner-border-center position-relative" animation="border" role="status" />
              </div>
  ) : (
              <button className='btn btn-primary btn-block glyphicon glyphicon-eye-open' onClick={this.showslides} disabled={disable_showslides} />
  )
}
            </div>
          </div>
        </div>
        <div className="containercontent container-relative">
    <div className="root fullheight">
      <div className="containercontent container-relative">
        <div className="table-container container-fluid p-0">

          <table className="table table-dark table-striped table-bordered table-hover fillparent">
            <thead>
              <tr>
                <th style={colcountry}></th>
                <th style={colsublocality}>location</th>
                <th style={colphotos}>#</th>
                <th>max 100</th>
                <th className="dummyscroll"></th>
              </tr>
            </thead>
            <tbody className="overflow text-body">

{locations.map((location, index) => (
              <tr className={this.state.selectedlocation===index ? "table-active" : "table-info"} key={index}>
                <td style={colcountry}>{location.countrycode}</td>
                <td style={colsublocality}>{location.sublocality} {location.routecode}</td>
                <td style={colphotos}>{location.locationcount}</td>
                <td>
                  <button className="btn btn-primary glyphicon glyphicon-map-marker" onClick={(e) => this.props.onLocationselected(location.location)} />
                  <button className="btn btn-primary glyphicon glyphicon-eye-open" onClick={(e) => this.showlocationslides(location)} />
                </td>
              </tr>  
))}

            </tbody>
          </table>
        </div>
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

export default Selectionview;