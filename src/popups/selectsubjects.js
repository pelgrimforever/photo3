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
import Rstree7subject from '../services/film/rest/table/rstree7subject.js';

//data models

const subjectlisttool = 'list';
const subjecttreetool = 'tree';

const subjecttools = [ 
    { name:subjectlisttool, title: "text search" }, 
    { name:subjecttreetool, title: "browse subject tree" }, 
  ];


class Subjectstoolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activetool: subjecttools[0],
    };
  }

  clicktool = (tool, index) => {
    this.setState({ activetool: tool} );
    this.props.onToolselected(tool);
  }

  render() {
    const activetool = this.state.activetool;
    var getClass = function(name, tool) {
      if(tool.name===activetool.name)
        return name + ' active';
      return name;
    };

    let toolbuttons = subjecttools.map((item, index) =>
  <button key={item.name} className={getClass("btn btn-secondary", item)} onClick={() => this.clicktool(item, index)}>
    {item.title}
  </button>
    )

    return (
<div className="d-flex btn-group btn-group-sm p-0 w-100" role="group" data-toggle="button">
  {toolbuttons}
</div>
    );
  }
}

function Selectsubjects(props) {
  const inputsubjecttext = React.createRef();

  const [activetool, setActivetool] = useState(subjecttools[0]);
  const [subjects, setSubjects] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [treesubject, setTreesubject] = useState(null);
  const [treesubjects, setTreesubjects] = useState([]);

  const loadTreesubjectroot = async () => {
    const roots = await Rstree7subject.getStep1();
    setTreesubject(null);
    setTreesubjects(roots);
  };

  useEffect(() => {
    loadTreesubjectroot();
  }, []);
  
  const searchtext = async () => {
    const text = inputsubjecttext.current.value;
    const subjects = await Rstree7subject.getSearchtext(text);
    const descriptions = await Rsphoto.getSearchtext(Store.user, text);
    setSubjects(subjects);
    setDescriptions(descriptions);
  }

  const showsubject = (subject) => {
    let text = "";
    if(subject.parents!==undefined) {
      subject.parents.forEach(parent => {
        text += parent.subject + " - ";
      });
    }
    return text + subject.subject;
  }

  const onsubjecttextKeyUp = (e) => {
    if (e.charCode === 13) {
      searchtext();
    }    
  }

  const colbutton = {width: '60px'};

  const showbuttonarray = (subject) => {
    let buttonarray = [];
    let subparents = [];
    if(subject.parents!==undefined) {
      subject.parents.forEach(parent => {
        parent.parents = subparents;
        buttonarray.push(
          <button key={parent.tree7id} className="btn btn-secondary mr-1" onClick={() => props.addSubject(parent)}>
            {parent.subject}
          </button>
          );
        subparents = subparents.slice(0);
        subparents.push(parent);
      });
    }
    buttonarray.push(
      <button key={subject.tree7id} className="btn btn-primary" onClick={() => props.addSubject(subject)}>
        {subject.subject}
      </button>
      );
    return buttonarray;
  }

  const selecttree = async (parent) => {
    setTreesubject(parent);
    const children = await Rstree7subject.getChildren(parent.PK);
    setTreesubjects(children);
  }

  const showtreebuttonarray = (subject) => {
    let buttonarray = [];
    let subparents = [];
    buttonarray.push(
      <button className="btn btn-secondary mr-1" onClick={loadTreesubjectroot}>
        TOP
      </button>
      );
    if(subject!=null) {
      if(subject.parents!==undefined) {
        subject.parents.forEach(parent => {
          parent.parents = subparents;
          buttonarray.push(
            <button key={parent.tree7id} className="btn btn-secondary mr-1" onClick={() => selecttree(parent)}>
              {parent.subject}
            </button>
            );
          subparents = subparents.slice(0);
          subparents.push(parent);
        });
      }
      buttonarray.push(
        <button key={subject.tree7id} className="btn btn-secondary" onClick={() => selecttree(subject)}>
          {subject.subject}
        </button>
        );
    }
    return buttonarray;
  }

  const showtreechildren = (subjects) => {
    let buttonarray = [];
    subjects.forEach(subject => {
      buttonarray.push(
        <>
        <button key={subject.tree7id} className="btn btn-primary m-0" onClick={() => selecttree(subject)}>
          {subject.subject}
        </button>
        <button key={subject.tree7id + "_"} className="btn btn-primary mr-1" onClick={() => props.addSubject(subject)}>&#8595;</button>
        </>
        );
    });
    return buttonarray;
  }

  const list_visibility = activetool.name===subjectlisttool ? "visible" : "hidden";
  const tree_visibility = activetool.name===subjecttreetool ? "visible" : "hidden";

  return (
    <Modal show={props.show} size="xl" id="photoslidesmodal" centered>
      <ModalHeader className="bg-dark">
        <ModalTitle className="text-light">Subjects</ModalTitle>
        <button type="button" className="btn btn-warning" onClick={props.onCancel}>Close</button>
      </ModalHeader>
      <ModalBody className="labels-10">
        <div className="row m-0">
          <div className="col col-sm-2 input-group-prepend">
            <label className="input-group-text">subject text</label>
          </div>
          <div className="col col-sm-2 input-group-prepend">
            <Form.Control type="text" id="subjecttext" name="subjecttext" ref={inputsubjecttext} onKeyPress={onsubjecttextKeyUp}/>
          </div>
          <div className="col col-sm-2 input-group-prepend">
            <button type="button" className="btn btn-primary" onClick={searchtext}>search</button>
          </div>
        </div>

        <div className="row m-0">
          <div className="col input-group-prepend">
            <div className="bg-secondary input-group-text d-flex">
              <div className="float-left mr-1">subjects</div>
              <div className="flex-grow-1 container-relative float-right">
                <Subjectstoolbar onToolselected={setActivetool} />
              </div>
            </div>
          </div>
        </div>
        <div className="row m-0" style={{height:250}}>
          <div className="containercontent container-relative">
            <div className="root fullheight">
              <div className="containercontent container-relative">
                <div className="table-container container-fluid p-0">

                  <div className="w-100 h-100 stack" style={{visibility: list_visibility}}>
                    <table className="table table-dark table-striped table-bordered table-hover fillparent">
                      <tbody className="overflow text-body">

{subjects.map((subject, index) => (
                        <tr className="table-info" key={index}>
                          <td style={colbutton}>{showbuttonarray(subject)}</td>
                        </tr>  
))}

                      </tbody>
                    </table>
                  </div>

                  <div className="w-100 h-100 stack" style={{visibility: tree_visibility}}>
                    <div className="w-100 my-1">
                      {showtreebuttonarray(treesubject)}
                    </div>
                    <div className="w-100 m-0">
                      {showtreechildren(treesubjects)}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row m-0">
          <div className="col input-group-prepend">
            <label className="bg-secondary input-group-text">descriptions</label>
          </div>
        </div>
        <div className="row m-0" style={{height:150}}>
          <div className="containercontent container-relative">
            <div className="root fullheight">
              <div className="containercontent container-relative">
                <div className="table-container container-fluid p-0">

                  <table className="table table-dark table-striped table-bordered table-hover fillparent">
                    <tbody className="overflow text-body">

{descriptions.map((description, index) => (
                      <tr className="table-info" key={index}>
                        <td>{description}</td>
                        <td style={colbutton}>
                          <button className="btn btn-primary glyphicon glyphicon-ok" onClick={(e) => props.addDescription(description)} />
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
        <div className="row m-0" style={{height:200}}>
          <div className="containercontent container-relative">
            <div className="root fullheight">
              <div className="containercontent container-relative">
                <div className="table-container container-fluid p-0">

                  <table className="table table-dark table-striped table-bordered table-hover fillparent">
                    <tbody className="overflow text-body">

{props.subjects.map((subject, index) => (
                      <tr className="table-info" key={index}>
                        <td>{showsubject(subject)}</td>
                        <td style={colbutton}>
                          <button className="btn btn-primary glyphicon glyphicon-remove" onClick={(e) => props.removeSubject(index)} />
                        </td>
                      </tr>  
))}
{props.descriptions.map((description, index) => (
                      <tr className="table-info" key={index}>
                        <td>{description}</td>
                        <td style={colbutton}>
                          <button className="btn btn-primary glyphicon glyphicon-remove" onClick={(e) => props.removeDescription(index)} />
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

export default Selectsubjects;