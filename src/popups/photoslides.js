import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import FormControl from "react-bootstrap/FormControl";
import { Col, Row, Form } from "react-bootstrap";
import Moment from 'moment';

//app components
import Store from '../services/store.js';
import Photoslidesselector from './photoslidesselector.js';

//services
import Rsphoto from '../services/film/rest/table/rsphoto.js';
import Rstree7subject from '../services/film/rest/table/rstree7subject.js';

//data models

function Photoslides(props) {
  const [activephoto, setActivephoto] = useState(null);
  const [activeindex, setActiveindex] = useState(0);
  const [smallimage, setSmallimage] = useState(null);
  const [subjects, setSubjects] = useState([]);

  useEffect(async () => {
    if(props.photos.length>0) {
      loadPhotoproperties(0);
    }
  }, [props]);

  const showfilmid = (photo) => {
    return photo!==null ? photo.PK.filmPK.id.substring(0,3) + "-" + photo.PK.filmPK.id.substring(3,6) : "";
  }

  const showphotoid = (photo) => {
    return photo!==null ? photo.PK.id : "";
  }

  const showDate = (photo) => {
    return photo!=null && photo.photodate!==null && photo.photodate!=='' ? Moment(new Date(photo.photodate)).format("YYYY-MM-DD") : "____-__-__";
  }

  const showTime = (photo) => {
    return photo!=null && photo.phototime!==null && photo.phototime!=='' ? Moment(new Date(photo.phototime)).format("HH:mm:ss") : "__:__:__";
  }

  const loadPhotoproperties = async (index) => {
    if(activephoto===null || props.photos[index].PK!=activephoto.PK) {
      setActiveindex(index);
      setActivephoto(props.photos[index]);
      const image = await Rsphoto.getSmall(Store.user, props.photos[index].PK);
      console.log("small image loaded " + props.photos[index].PK.filmPK.id + " " + props.photos[index].PK.id);
      setSmallimage(image);    
      const subjects = await Rstree7subject.loadTree7subject4photo(props.photos[index].PK);
      setSubjects(subjects);
    }
  }

  const onPhotoselected = (index) => {
    loadPhotoproperties(index);
  }

  return (
    <Modal show={props.show} size="xl" id="photoslidesmodal" centered>
      <ModalHeader className="bg-dark">
        <ModalTitle className="text-light">Photo slides</ModalTitle>
        <button type="button" className="btn btn-warning" onClick={props.onCancel}>Close</button>
      </ModalHeader>
      <ModalBody className="labels-10">
        <Photoslidesselector photos={props.photos} onPhotoselected={onPhotoselected} />
        <div className="d-flex w-100">
          <div className="d-flex bg-secondary" style={{height:600, width:800}}>
            <img src={smallimage} className="img-fluid rounded mx-auto my-auto" />
          </div>
          <div className="flex-grow-1 container-relative root" style={{height:600}}>
            <div className="containerheader">

              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">photo</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{showfilmid(activephoto)} {showphotoid(activephoto)}</label>
                </div>
              </div>            

              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">date</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{showDate(activephoto)}</label>
                </div>
              </div>            

              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">time</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{showTime(activephoto)}</label>
                </div>
              </div>            

              <div className="row m-0">
                <div className="col input-group-prepend">
                  <label className="input-group-text text-break">{activephoto!=null ? activephoto.description : "no description"}</label>
                </div>
              </div>            

              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">by</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{activephoto!=null && activephoto.creatorPK!=null ? activephoto.creatorPK.getCreatorid() : "?"}</label>
                </div>
              </div>            

              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">country</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{activephoto!=null && activephoto.routePK!=null ? activephoto.routePK.getCountrycode() : "N/A"}</label>
                </div>
              </div>            

              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">postal code</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{activephoto!=null && activephoto.routePK!=null ? activephoto.routePK.getPostalcode() : "N/A"}</label>
                </div>
              </div>            

              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text text-break">locality</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{activephoto!=null && activephoto.routePK!=null ? activephoto.routePK.getLocality() : "N/A"}</label>
                </div>
              </div>            

              <div className="row m-0">
                <div className="col input-group-prepend">
                  <label className="input-group-text">{activephoto!=null && activephoto.routePK!=null ? activephoto.routePK.getSublocality() : "N/A"}</label>
                </div>
              </div>            

              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">map lat</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{activephoto!=null && activephoto.location!=null ? activephoto.location.lat : "?"}</label>
                </div>
              </div>            

              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">map lng</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{activephoto!=null && activephoto.location!=null ? activephoto.location.lng : "?"}</label>
                </div>
              </div>            
            </div>

            <div className="containercontent container-relative">
    <div className="root fullheight">
      <div className="containercontent container-relative">
        <div className="table-container container-fluid p-0">

          <table className="table table-striped table-bordered table-hover fillparent">
            <tbody className="overflow text-body">

{subjects.map((subject, index) => (
              <tr className="table-info" key={index}>
                <td>{subject.subject}</td>
              </tr>  
))}

            </tbody>
          </table>
        </div>
      </div>
    </div>
          </div>

          </div>
        </div>
      </ModalBody>
    </Modal>  
  );
}

export default Photoslides;