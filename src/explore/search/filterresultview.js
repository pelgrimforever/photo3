import React, { useState, useEffect } from 'react';
import FormControl from "react-bootstrap/FormControl";
import { Col, Row, Form } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner'

//app components

//services

//data models

const maxphotos = 100;

function Filterresultview(props) {
  const [disable_showslides, setDisable_showslides] = useState(props.searchcount>maxphotos);

  useEffect(async () => {
    setDisable_showslides(props.searchcount>maxphotos)
  }, [props]);

  return (
    <>
      <div className="row m-0">
        <div className="col input-group-prepend">
          <label className="input-group-text bg-secondary">Search results</label>
        </div>
      </div>
      <div className="row m-0">
        <div className="col col-sm-4 input-group-prepend">
          <label className="input-group-text">photos found</label>
        </div>
        <div className="col col-sm-4 input-group-prepend">
          <label className="input-group-text">{props.searchcount}</label>
        </div>
        <div className="col col-sm-4 input-group-prepend">
{ props.loading ?
  (
          <div className="d-flex justify-content-center">
            <Spinner className="spinner-border-center position-relative" animation="border" role="status" />
          </div>
  ) : (
          <button className='btn btn-primary btn-block glyphicon glyphicon-eye-open' onClick={props.showslides} disabled={disable_showslides} />
  )
}
        </div>
      </div>
    </>
  );
}

export default Filterresultview;