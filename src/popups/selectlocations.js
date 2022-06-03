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
import Rscountry from '../services/film/rest/table/rscountry.js';
import Rsarealevel1 from '../services/film/rest/table/rsarealevel1.js';
import Rsarealevel2 from '../services/film/rest/table/rsarealevel2.js';
import Rsarealevel3 from '../services/film/rest/table/rsarealevel3.js';
import Rslocality from '../services/film/rest/table/rslocality.js';
import Rssublocality from '../services/film/rest/table/rssublocality.js';
import Rsroute from '../services/film/rest/table/rsroute.js';
import Locationsearchbuilder from '../services/film/rest/custom/locationsearchbuilder.js';

//data models

const locationlisttool = 'list';
const locationtreetool = 'tree';

const locationtools = [ 
    { name:locationlisttool, title: "text search" }, 
    { name:locationtreetool, title: "browse location tree" }, 
  ];


class Locationstoolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activetool: locationtools[0],
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

    let toolbuttons = locationtools.map((item, index) =>
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

function Selectlocations(props) {
  const inputlocationtext = React.createRef();

  const [activetool, setActivetool] = useState(locationtools[0]);
  //free text search
  const [countries, setCountries] = useState([]);
  const [al1s, setAl1s] = useState([]);
  const [al2s, setAl2s] = useState([]);
  const [al3s, setAl3s] = useState([]);
  const [localities, setLocalities] = useState([]);
  const [sublocalities, setSublocalities] = useState([]);
  const [routes, setRoutes] = useState([]);
  //location tree search
  const [treecountry, setTreecountry] = useState(null);
  const [treecountries, setTreecountries] = useState([]);
  const [treeal1, setTreeal1] = useState(null);
  const [treeal1s, setTreeal1s] = useState([]);
  const [treeal2, setTreeal2] = useState(null);
  const [treeal2s, setTreeal2s] = useState([]);
  const [treeal3, setTreeal3] = useState(null);
  const [treeal3s, setTreeal3s] = useState([]);
  const [treelocality, setTreelocality] = useState(null);
  const [treelocalities, setTreelocalities] = useState([]);
  const [treesublocality, setTreesublocality] = useState(null);
  const [treesublocalities, setTreesublocalities] = useState([]);
  const [treeroutes, setTreeroutes] = useState([]);

  const resetTreecountry = () => {
    setTreecountry(null);
    resetA11();
  }

  const resetA11 = () => {
    setTreeal1(null);
    resetA12();
  }

  const resetA12 = () => {
    setTreeal2(null);
    resetA13();
  }

  const resetA13 = () => {
    setTreeal3(null);
    resetLocality();
  }

  const resetLocality = () => {
    setTreelocality(null);
    resetSublocality();
  }

  const resetSublocality = () => {
    setTreesublocality(null);
  }

  const loadCountries = async () => {
    const countrylist = await Rscountry.getall(Store.user);
    resetTreecountry();
    setTreecountries(countrylist);
  };

  const loadAl1s = async (country) => {
    const list = await Rsarealevel1.search(Locationsearchbuilder.getAl1searcher(Store.user, country.PK));
    resetA11();
    setTreeal1s(list);
  };

  const loadAl2s = async (al1) => {
    const list = await Rsarealevel2.search(Locationsearchbuilder.getAl2searcher(Store.user, al1.PK));
    resetA12();
    setTreeal2s(list);
  };

  const loadAl3s = async (al2) => {
    const list = await Rsarealevel3.search(Locationsearchbuilder.getAl3searcher(Store.user, al2.PK));
    resetA13();
    setTreeal3s(list);
  };

  const loadLocalities = async (al3) => {
    const list = await Rslocality.search(Locationsearchbuilder.getLocalitysearcher(Store.user, al3.PK));
    resetLocality();
    setTreelocalities(list);
  };

  const loadSublocalities = async (locality) => {
    const list = await Rssublocality.search(Locationsearchbuilder.getSublocalitysearcher(Store.user, locality.PK));
    resetSublocality();
    setTreesublocalities(list);
  };

  const loadRoutes = async (sublocality) => {
    const list = await Rsroute.search(Locationsearchbuilder.getRoutesearcher(Store.user, sublocality.PK));
    setTreeroutes(list);
  };

  useEffect(() => {
    loadCountries();
  }, []);
  
  const searchtext = async () => {
    const text = inputlocationtext.current.value;
    setCountries(await Rscountry.search(Store.user, Locationsearchbuilder.textCountrysearcher(text)));
    setLocalities(await Rslocality.search(Store.user, Locationsearchbuilder.textLocalitysearcher(text)));
    setSublocalities(await Rssublocality.search(Store.user, Locationsearchbuilder.textSublocalitysearcher(text)));
    setRoutes(await Rsroute.search(Store.user, Locationsearchbuilder.textRoutesearcher(text)));
  }

  const onlocationtextKeyUp = (e) => {
    if (e.charCode === 13) {
      searchtext();
    }    
  }

  const colbutton = {width: '60px'};

  const showbuttonarray = (location) => {
    let buttonarray = [];
/*    let subparents = [];
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
      );*/
    return buttonarray;
  }

  const selectcountry = async (country) => {
    setTreecountry(country);
    loadAl1s(country);
  }

  const selectal1 = async (al1) => {
    setTreeal1(al1);
    loadAl2s(al1);
  }

  const selectal2 = async (al2) => {
    setTreeal2(al2);
    loadAl3s(al2);
  }

  const selectal3 = async (al3) => {
    setTreeal3(al3);
    loadLocalities(al3);
  }

  const selectlocality = async (locality) => {
    setTreelocality(locality);
    loadSublocalities(locality);
  }

  const selectsublocality = async (sublocality) => {
    setTreesublocality(sublocality);
    loadRoutes(sublocality);
  }

  const showtreebuttonarray = () => {
    let buttonarray = [];
    buttonarray.push(
      <button className="btn btn-secondary mr-1" onClick={loadCountries}>
        Countries
      </button>
      );
    if(treecountry!==null) {
      if(treeal1===null) {
        buttonarray.push(
          <button key={treecountry.PK.code} className="btn btn-primary mr-1" onClick={() => props.addCountry(treecountry)}>
            {treecountry.name}
          </button>
          );      
      } else {
        buttonarray.push(
          <button key={treecountry.PK.code} className="btn btn-secondary mr-1" onClick={() => selectcountry(treecountry)}>
            {treecountry.name}
          </button>
          );      
      }
    }
    if(treeal1!==null) {
      if(treeal2===null) {
        buttonarray.push(
          <button key={"al1" + treeal1.PK.al1code} className="btn btn-primary mr-1" onClick={() => props.addAl1(treeal1)}>
            {treeal1.name}
          </button>
          );      
      } else {
        buttonarray.push(
          <button key={"al1" + treeal1.PK.al1code} className="btn btn-secondary mr-1" onClick={() => selectal1(treeal1)}>
            {treeal1.name}
          </button>
          );      
      }
    }
    if(treeal2!==null) {
      if(treeal3===null) {
        buttonarray.push(
          <button key={"al2" + treeal2.PK.al2code} className="btn btn-primary mr-1" onClick={() => props.addAl2(treeal2)}>
            {treeal2.name}
          </button>
          );      
      } else {
        buttonarray.push(
          <button key={"al2" + treeal2.PK.al2code} className="btn btn-secondary mr-1" onClick={() => selectal2(treeal2)}>
            {treeal2.name}
          </button>
          );      
      }
    }
    if(treeal3!==null) {
      if(treelocality===null) {
        buttonarray.push(
          <button key={"al3" + treeal3.PK.al3code} className="btn btn-primary mr-1" onClick={() => props.addAl3(treeal3)}>
            {treeal3.name}
          </button>
          );      
      } else {
        buttonarray.push(
          <button key={"al3" + treeal3.PK.al3code} className="btn btn-secondary mr-1" onClick={() => selectal3(treeal3)}>
            {treeal3.name}
          </button>
          );      
      }
    }
    if(treelocality!==null) {
      if(treesublocality===null) {
        buttonarray.push(
          <button key={"locality" + treelocality.PK.postalcode() + treelocality.PK.locality} className="btn btn-primary mr-1" onClick={() => props.addLocality(treelocality)}>
            {treelocality.PK.postalcode()} {treelocality.PK.locality}
          </button>
          );      
      } else {
        buttonarray.push(
          <button key={"locality" + treelocality.PK.postalcode() + treelocality.PK.locality} className="btn btn-secondary mr-1" onClick={() => selectlocality(treelocality)}>
            {treelocality.PK.postalcode()} {treelocality.PK.locality}
          </button>
          );      
      }
    }
    if(treesublocality!==null) {
      buttonarray.push(
        <button key={"sublocality" + treesublocality.PK.sublocality} className="btn btn-primary mr-1" onClick={() => props.addSublocality(treesublocality)}>
          {treesublocality.PK.sublocality}
        </button>
        );      
    }
    return buttonarray;
  }

  const showtreechildren = () => {
    let buttonarray = [];

    if(treecountry===null) {
      treecountries.forEach(country => {
        buttonarray.push(
          <>
            <button key={country.PK.code} className="btn btn-primary m-0" onClick={() => selectcountry(country)}>
              {country.name}
            </button>
            <button key={country.PK.code + "_"} className="btn btn-primary mr-1" onClick={() => props.addCountry(country)}>&#8595;</button>
          </>
          );
      });
    } else if(treeal1===null) {
      treeal1s.forEach((al1, index) => {
        buttonarray.push(
          <>
            <button key={index} className="btn btn-primary m-0" onClick={() => selectal1(al1)}>
              {al1.name}
            </button>
            <button key={index + "_"} className="btn btn-primary mr-1" onClick={() => props.addAl1(al1)}>&#8595;</button>
          </>
          );
      });
    } else if(treeal2===null) {
      treeal2s.forEach((al2, index) => {
        buttonarray.push(
          <>
            <button key={index} className="btn btn-primary m-0" onClick={() => selectal2(al2)}>
              {al2.name}
            </button>
            <button key={index + "_"} className="btn btn-primary mr-1" onClick={() => props.addAl2(al2)}>&#8595;</button>
          </>
          );
      });
    } else if(treeal3===null) {
      treeal3s.forEach((al3, index) => {
        buttonarray.push(
          <>
            <button key={index} className="btn btn-primary m-0" onClick={() => selectal3(al3)}>
              {al3.name}
            </button>
            <button key={index + "_"} className="btn btn-primary mr-1" onClick={() => props.addAl3(al3)}>&#8595;</button>
          </>
          );
      });
    } else if(treelocality===null) {
      treelocalities.forEach((locality, index) => {
        buttonarray.push(
          <>
            <button key={index} className="btn btn-primary m-0" onClick={() => selectlocality(locality)}>
              {locality.PK.postalcode()} {locality.PK.locality}
            </button>
            <button key={index + "_"} className="btn btn-primary mr-1" onClick={() => props.addLocality(locality)}>&#8595;</button>
          </>
          );
      });
    } else if(treesublocality===null) {
      treesublocalities.forEach((sublocality, index) => {
        buttonarray.push(
          <>
            <button key={index} className="btn btn-primary m-0" onClick={() => selectsublocality(sublocality)}>
              {sublocality.PK.sublocality}
            </button>
            <button key={index + "_"} className="btn btn-primary mr-1" onClick={() => props.addSublocality(sublocality)}>&#8595;</button>
          </>
          );
      });
    } else {
      treeroutes.forEach((route, index) => {
        buttonarray.push(
          <>
            <label key={index} className="btn btn-secondary m-0" onClick={() => props.addRoute(route)}>
              {route.name}
            </label>
            <button key={index + "_"} className="btn btn-primary mr-1" onClick={() => props.addRoute(route)}>&#8595;</button>
          </>
          );
      });
    }

    return buttonarray;
  }

  const list_visibility = activetool.name===locationlisttool ? "visible" : "hidden";
  const tree_visibility = activetool.name===locationtreetool ? "visible" : "hidden";

  return (
    <Modal show={props.show} size="xl" id="photoslidesmodal" centered>
      <ModalHeader className="bg-dark">
        <ModalTitle className="text-light">Locations</ModalTitle>
        <button type="button" className="btn btn-warning" onClick={props.onCancel}>Close</button>
      </ModalHeader>
      <ModalBody className="labels-10">
        <div className="row m-0">
          <div className="col col-sm-2 input-group-prepend">
            <label className="input-group-text">Location text</label>
          </div>
          <div className="col col-sm-2 input-group-prepend">
            <Form.Control type="text" id="locationtext" name="locationtext" ref={inputlocationtext} onKeyPress={onlocationtextKeyUp}/>
          </div>
          <div className="col col-sm-2 input-group-prepend">
            <button type="button" className="btn btn-primary" onClick={searchtext}>search</button>
          </div>
        </div>

        <div className="row m-0">
          <div className="col input-group-prepend">
            <div className="bg-secondary input-group-text d-flex">
              <div className="float-left mr-1">locations</div>
              <div className="flex-grow-1 container-relative float-right">
                <Locationstoolbar onToolselected={setActivetool} />
              </div>
            </div>
          </div>
        </div>
        <div className="row m-0" style={{height:350}}>
          <div className="containercontent container-relative">
            <div className="root fullheight">
              <div className="containercontent container-relative">
                <div className="table-container container-fluid p-0">

                  <div className="w-100 h-100 stack" style={{visibility: list_visibility}}>
                    <table className="table table-dark table-striped table-bordered table-hover fillparent">
                      <tbody className="overflow text-body">

{countries.map((country, index) => (
                        <tr className="table-info" key={index}>
                          <td>{country.PK.code} {country.name}</td>
                          <td style={colbutton}>
                            <button className="btn btn-primary glyphicon glyphicon-ok" onClick={(e) => props.addCountry(country)} />
                          </td>
                        </tr>  
))}
{localities.map((locality, index) => (
                        <tr className="table-info" key={index}>
                          <td>{locality.PK.countrycode()} - {locality.PK.postalcode()} {locality.PK.locality}</td>
                          <td style={colbutton}>
                            <button className="btn btn-primary glyphicon glyphicon-ok" onClick={(e) => props.addLocality(locality)} />
                          </td>
                        </tr>  
))}
{sublocalities.map((sublocality, index) => (
                        <tr className="table-info" key={index}>
                          <td>{sublocality.PK.countrycode()} {sublocality.PK.postalcode()} {sublocality.PK.locality()} {sublocality.PK.sublocality}</td>
                          <td style={colbutton}>
                            <button className="btn btn-primary glyphicon glyphicon-ok" onClick={(e) => props.addSublocality(sublocality)} />
                          </td>
                        </tr>  
))}
{routes.map((route, index) => (
                        <tr className="table-info" key={index}>
                          <td>{route.PK.countrycode()} {route.PK.postalcode()} {route.PK.locality()} {route.PK.sublocality()} {route.name}</td>
                          <td style={colbutton}>
                            <button className="btn btn-primary glyphicon glyphicon-ok" onClick={(e) => props.addRoute(route)} />
                          </td>
                        </tr>  
))}

                      </tbody>
                    </table>
                  </div>

                  <div className="w-100 h-100 stack" style={{visibility: tree_visibility}}>
                    <div className="w-100 my-1">
                      {showtreebuttonarray()}
                    </div>
                    <div className="w-100 m-0">
                      {showtreechildren()}
                    </div>
                  </div>

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

{props.countries.map((country, index) => (
                      <tr className="table-info" key={index}>
                        <td>{country.PK.code} {country.name}</td>
                        <td style={colbutton}>
                          <button className="btn btn-primary glyphicon glyphicon-remove" onClick={(e) => props.removeCountry(index)} />
                        </td>
                      </tr>  
))}
{props.al1s.map((al1, index) => (
                      <tr className="table-info" key={index}>
                        <td>{al1.PK.countrycode()} - {al1.name}</td>
                        <td style={colbutton}>
                          <button className="btn btn-primary glyphicon glyphicon-remove" onClick={(e) => props.removeAl1(index)} />
                        </td>
                      </tr>  
))}
{props.al2s.map((al2, index) => (
                      <tr className="table-info" key={index}>
                        <td>{al2.PK.countrycode()} - {al2.PK.al1code()} - {al2.name}</td>
                        <td style={colbutton}>
                          <button className="btn btn-primary glyphicon glyphicon-remove" onClick={(e) => props.removeAl2(index)} />
                        </td>
                      </tr>  
))}
{props.al3s.map((al3, index) => (
                      <tr className="table-info" key={index}>
                        <td>{al3.PK.countrycode()} - {al3.PK.al1code()} - {al3.PK.al2code()} - {al3.name}</td>
                        <td style={colbutton}>
                          <button className="btn btn-primary glyphicon glyphicon-remove" onClick={(e) => props.removeAl3(index)} />
                        </td>
                      </tr>  
))}
{props.localities.map((locality, index) => (
                      <tr className="table-info" key={index}>
                        <td>{locality.PK.countrycode()} - {locality.PK.postalcode()} {locality.PK.locality}</td>
                        <td style={colbutton}>
                          <button className="btn btn-primary glyphicon glyphicon-remove" onClick={(e) => props.removeLocality(index)} />
                        </td>
                      </tr>  
))}
{props.sublocalities.map((sublocality, index) => (
                      <tr className="table-info" key={index}>
                        <td>{sublocality.PK.countrycode()} {sublocality.PK.postalcode()} {sublocality.PK.locality()} {sublocality.PK.sublocality}</td>
                        <td style={colbutton}>
                          <button className="btn btn-primary glyphicon glyphicon-remove" onClick={(e) => props.removeSublocality(index)} />
                        </td>
                      </tr>  
))}
{props.routes.map((route, index) => (
                      <tr className="table-info" key={index}>
                        <td>{route.PK.countrycode()} {route.PK.postalcode()} {route.PK.locality()} {route.PK.sublocality()} {route.name}</td>
                        <td style={colbutton}>
                          <button className="btn btn-primary glyphicon glyphicon-remove" onClick={(e) => props.removeRoute(index)} />
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

export default Selectlocations;