import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import FormControl from "react-bootstrap/FormControl";
import { Col, Row, Form } from "react-bootstrap";

import { DateRangePicker, moment } from 'react-date-range';
import { addDays } from 'date-fns';

//app components
import Store from '../services/store.js';

//services

//data models

function Selectphotodates(props) {
  const [state, setState] = useState({
    selection: {
      startDate: props.startdate,
      endDate: props.enddate,
      key: 'selection'
    }
  });

  useEffect(() => {

  }, [props]);

  return (
    <Modal show={props.show} size="lg" id="photodatesmodal" centered>
      <ModalHeader className="bg-dark">
        <ModalTitle className="text-light">Select start/end date</ModalTitle>
      </ModalHeader>
      <ModalBody className="labels-10">
    <DateRangePicker
      onChange={item => setState({ ...state, ...item })}
      months={2}
      direction="vertical"
      scroll={{ enabled: true }}
      ranges={[state.selection]}
      minDate={props.mindate}
      maxDate={props.maxdate}
      opens='center'
    />
      </ModalBody>
      <ModalFooter>
        <button type="button" className="btn btn-warning" onClick={props.onCancel}>Cancel</button>
        <button type="button" className="btn btn-primary" onClick={() => props.onOK(state.selection.startDate, state.selection.endDate)}>OK</button>
      </ModalFooter>
    </Modal>  
  );
}

export default Selectphotodates;