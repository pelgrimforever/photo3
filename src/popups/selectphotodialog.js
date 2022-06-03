import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import FormControl from "react-bootstrap/FormControl";
import { Col, Row, Form } from "react-bootstrap";

//app components
import Store from '../services/store.js';

//services
import Rsphoto from '../services/film/rest/table/rsphoto.js';

//data models
import {Filmpk} from '../data/film/table/super/filmsuper.js';

function Selectphotodialog(props) {
  const [loading, setLoading] = useState(false);
  const [datacomplete, setDatacomplete] = useState(false);
  const [searchfilmid, setSearchfilmid] = useState('');
  const [filmid, setFilmid] = useState('');
  const [photos, setPhotos] = useState([]);
  const collabels = "4";
  const coldata = "8";
  const coldata1 = "4";
  const coldata2 = "4";

  useEffect(() => {
    setLoading(false);
    setFilmid('');
    setPhotos([]);
    setSearchfilmid('');
  }, [props]);


  const handleChangesearchfilmid = async (e) => {
    setSearchfilmid(e.target.value);
    const newfilmid = e.target.value.toUpperCase();
    setFilmid(newfilmid);
    if(newfilmid.length==6) {
      setLoading(true);
      let filmpk = new Filmpk();
      filmpk.id = newfilmid;
      const filmphotos = await Rsphoto.loadPhotos4film(Store.user, filmpk);
      let locations = [];
      //filter photos with a location
      for(let i = 0; i < filmphotos.length; i++) {
        if(filmphotos[i].location!==null && filmphotos[i].location!==undefined) {
          locations.push(filmphotos[i]);
        }
      }
      setPhotos(locations);
      setLoading(false);
    }
  }

  return (
    <Modal show={props.show} id="bloglinemodal" centered>
        <Form>
      <ModalHeader className="bg-dark">
        <ModalTitle className="text-light">Select photo location</ModalTitle>
      </ModalHeader>
      <ModalBody className="labels-10">
          <Row m-0="true">
            <Col sm={collabels} p-0="true" className="input-group-prepend">
              <Form.Label className="input-group-text">film id</Form.Label>
            </Col>
            <Col sm={coldata1} p-0="true">
              <Form.Control type="text" maxLength={6} id="searchfilmid" name="searchfilmid" value={searchfilmid} onChange={handleChangesearchfilmid} />
            </Col>
            <Col sm={coldata2} p-0="true">
              <Form.Control type="text" id="filmid" name="filmid" readOnly value={filmid} />
            </Col>
          </Row>
          <Row m-0="true">
            <Col sm={collabels} className="input-group-prepend">
              <Form.Label className="input-group-text">photo id</Form.Label>
            </Col>
            <Col sm={coldata}>
              <div className="container-fluid p-1" style={{height:320}}>

{ loading ?
  (
              <div className="d-flex justify-content-center">
                <Spinner className="spinner-border-center" animation="border" role="status" />
              </div>
  ) : (
  <>
    {photos.map((photo, index) => (
                <button key={photo.PK.id} type="button" className="btn-secondary" style={{width:30}} onClick={() => props.onPhotoselect(photo.PK)}>
                  {photo.PK.id}
                </button>
    ))}
  </>
  )
}

              </div>
            </Col>
          </Row>
      </ModalBody>
      <ModalFooter>
        <button type="button" className="btn btn-warning" onClick={props.onCancel}>Cancel</button>
      </ModalFooter>
        </Form>

    </Modal>  
  );
}

export default Selectphotodialog;