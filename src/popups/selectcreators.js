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
import Rscreator from '../services/film/rest/table/rscreator.js';

//data models

function Selectcreators(props) {
  const inputsubjecttext = React.createRef();

  const [creators, setCreators] = useState([]);

  const loadCreators = async () => {
    const creatorlist = await Rscreator.getall();
    setCreators(creatorlist);
  };

  useEffect(() => {
    loadCreators();
  }, []);
  
  const colid = {width: '200px'};
  const colbutton = {width: '60px'};

  return (
    <Modal show={props.show} size="lg" id="creatorsmodal" centered>
      <ModalHeader className="bg-dark">
        <ModalTitle className="text-light">Creators</ModalTitle>
        <button type="button" className="btn btn-warning" onClick={props.onCancel}>Close</button>
      </ModalHeader>
      <ModalBody className="labels-10">
        <div className="row m-0">
          <div className="col input-group-prepend">
            <label className="bg-secondary input-group-text">creators</label>
          </div>
        </div>
        <div className="row m-0" style={{height:250}}>
          <div className="containercontent container-relative">
            <div className="root fullheight">
              <div className="containercontent container-relative">
                <div className="table-container container-fluid p-0">
                  <table className="table table-dark table-striped table-bordered table-hover fillparent">
                    <tbody className="overflow text-body">

{creators.map((creator, index) => (
                      <tr className="table-info" key={creator.PK.creatorid}>
                        <td style={colid}>{creator.PK.creatorid}</td>
                        <td>{creator.name} {creator.surname}</td>
                        <td style={colbutton}>
                          <button className="btn btn-primary glyphicon glyphicon-ok" onClick={(e) => props.addCreator(creator)} />
                        </td>
                      </tr>  
))}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row m-0">
          <div className="col input-group-prepend">
            <label className="bg-secondary input-group-text">selected</label>
          </div>
        </div>
        <div className="row m-0" style={{height:150}}>
          <div className="containercontent container-relative">
            <div className="root fullheight">
              <div className="containercontent container-relative">
                <div className="table-container container-fluid p-0">
                  <table className="table table-dark table-striped table-bordered table-hover fillparent">
                    <tbody className="overflow text-body">
{props.creators.map((creator, index) => (
                      <tr className="table-info" key={index}>
                        <td style={colid}>{creator.PK.creatorid}</td>
                        <td>{creator.name} {creator.surname}</td>
                        <td style={colbutton}>
                          <button className="btn btn-primary glyphicon glyphicon-remove" onClick={(e) => props.removeCreator(index)} />
                        </td>
                      </tr>  
))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>  
  );
}

export default Selectcreators;