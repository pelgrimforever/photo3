import React from 'react';
import FormControl from "react-bootstrap/FormControl";
import { Col, Row, Form } from "react-bootstrap";
import Moment from 'moment';

//app components
import Store from '../../services/store.js';
import Selectphotodates from '../../popups/selectphotodates.js';
import Selectsubjects from '../../popups/selectsubjects.js';
import Selectcreators from '../../popups/selectcreators.js';
import Selectlocations from '../../popups/selectlocations.js';

//services
import Rsviewphotofirstlastdate from '../../services/film/rest/view/rsviewphotofirstlastdate.js';

//data models


class Filterview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showdatesdialog: false,
      mindate: new Date(),
      maxdate: new Date(),
      showsubjectsdialog: false,
      showcreatorsdialog: false,
      showlocationsdialog: false,
    };
  }

  async componentDidMount() {
    this.setState( { loggedin : Store.user.loggedin } );
    Store.user.notifyme("filterview", this.userchanged);
    const initres = await this.getInitialdata();
  }

  userchanged = async () => {
    this.setState( { loggedin : Store.user.loggedin } );
    const initres = await this.getInitialdata();
  }

  getInitialdata = async () => {
    const dates = await Rsviewphotofirstlastdate.getall(Store.user);
    if(dates.length!=0) {
      this.setState({
        mindate: new Date(dates[0].minphotodate),
        maxdate: new Date(dates[0].maxphotodate)
      });
      let startdate = this.props.startdate;
      let enddate = this.props.enddate;
      if(startdate===null) {
        startdate = new Date(dates[0].minphotodate);
      }
      if(enddate===null) {
        enddate = new Date(dates[0].maxphotodate);
      }
      this.props.setFilterdates(startdate, enddate);
    }
  }

  openDatesdialog = () => {
    this.setState({ showdatesdialog: true });
  }

  onShowdatesdialogOK = (startdate, enddate) => {
    this.setState({ 
      showdatesdialog: false
    });
    this.props.setFilterdates(startdate, enddate);
  }

  onShowdatesdialogcancel = () => {
    this.setState({ showdatesdialog: false });
  }

  openSubjectsdialog = () => {
    this.setState({ showsubjectsdialog: true });
  }

  onShowsubjectsdialogcancel = () => {
    this.setState({ showsubjectsdialog: false });
  }

  openCreatorsdialog = () => {
    this.setState({ showcreatorsdialog: true });
  }

  onShowcreatorsdialogcancel = () => {
    this.setState({ showcreatorsdialog: false });
  }

  openLocationsdialog = () => {
    this.setState({ showlocationsdialog: true });
  }

  onShowLocationsdialogcancel = () => {
    this.setState({ showlocationsdialog: false });
  }

  render() {
    const displaystartdate = this.props.startdate!=null ? Moment(this.props.startdate).format("YYYY-MM-DD") : "____-__-__";
    const displayenddate = this.props.enddate!=null ? Moment(this.props.enddate).format("YYYY-MM-DD") : "____-__-__";

    const collabels = "4";
    const coldata = "8";
    const coldata1 = "4";
    const coldata2 = "4";

    return (
      <div className="overflow-auto">
        <div className="row m-0">
          <div className="col input-group-prepend">
            <label className="bg-secondary input-group-text">Search parameters</label>
          </div>
        </div>
        <div className="row m-0">
          <div className="col col-sm-4 input-group-prepend">
          </div>
          <div className="col col-sm-4 input-group-prepend">
            <label className="input-group-text">from</label>
          </div>
          <div className="col col-sm-4 input-group-prepend">
            <label className="input-group-text">until</label>
          </div>
        </div>
        <div className="row m-0 ">
          <div className="col col-sm-4 input-group-prepend">
            <button className='btn btn-primary btn-block' onClick={this.openDatesdialog}>dates</button>
          </div>
          <div className="col col-sm-4 input-group-prepend">
            <label className="input-group-text">{displaystartdate}</label>
          </div>
          <div className="col col-sm-4 input-group-prepend">
            <label className="input-group-text">{displayenddate}</label>
          </div>
        </div>
        <div className="row m-0">
          <div className="col col-sm-4 input-group-prepend">
            <button className='btn btn-primary btn-block' onClick={this.openSubjectsdialog}>subjects</button>
          </div>
          <div className="col col-sm-8 input-group-prepend">
{(this.props.subjects.length===0 && this.props.descriptions.length===0) &&
            <label className="input-group-text">all</label>
}
{this.props.subjects.map((subject, index) => (
            <label className="input-group-text">{subject.subject}</label>
))}
          </div>
{this.props.descriptions.map((description, index) => (
          <div className="col col-sm-12 input-group-prepend">
            <label className="input-group-text">{description}</label>
          </div>
))}
        </div>
        <div className="row m-0">
          <div className="col col-sm-4 input-group-prepend">
            <button className='btn btn-primary btn-block' onClick={this.openCreatorsdialog}>creators</button>
          </div>
          <div className="col col-sm-8 input-group-prepend">
{(this.props.creators.length===0) &&
            <label className="input-group-text">all</label>
}
{this.props.creators.map((creator, index) => (
            <label className="input-group-text">{creator.PK.creatorid}</label>
))}
          </div>
        </div>

        <div className="row m-0">
          <div className="col col-sm-4 input-group-prepend">
            <button className='btn btn-primary btn-block' onClick={this.openLocationsdialog}>locations</button>
          </div>
          <div className="col col-sm-8 input-group-prepend">
{(this.props.countries.length===0 && 
  this.props.al1s.length===0 && 
  this.props.al2s.length===0 && 
  this.props.al3s.length===0 && 
  this.props.localities.length===0 && 
  this.props.sublocalities.length===0 && 
  this.props.routes.length===0) &&
            <label className="input-group-text">all</label>
}
{this.props.countries.map((country, index) => (
            <label key={"country" + country.PK.code} className="input-group-text">{country.PK.code} {country.name}</label>
))}
{this.props.al1s.map((al1, index) => (
            <label key={"al1" + al1.PK.al1code} className="input-group-text">{al1.PK.countrycode()} - {al1.name}</label>
))}
{this.props.al2s.map((al2, index) => (
            <label key={"al2" + al2.PK.al2code} className="input-group-text">{al2.PK.countrycode()} -- {al2.name}</label>
))}
{this.props.al3s.map((al3, index) => (
            <label key={"al3" + al3.PK.al3code} className="input-group-text">{al3.PK.countrycode()} --- {al3.name}</label>
))}
{this.props.localities.map((locality, index) => (
            <label key={"loc" + locality.PK.postalcode() + locality.PK.locality} className="input-group-text">{locality.PK.countrycode()} - {locality.PK.postalcode()} - {locality.PK.locality}</label>
))}
{this.props.sublocalities.map((sublocality, index) => (
            <label key={"subloc" + sublocality.PK.sublocality} className="input-group-text">{sublocality.PK.countrycode()} - {sublocality.PK.postalcode()} -- {sublocality.PK.sublocality}</label>
))}
{this.props.routes.map((route, index) => (
            <label key={"route" + route.PK.routecode} className="input-group-text">{route.name}<br/>{route.PK.countrycode()} - {route.PK.postalcode()} - {route.PK.sublocality()}</label>
))}
          </div>
        </div>

        <Selectphotodates 
          show={this.state.showdatesdialog}
          mindate={this.state.mindate}
          maxdate={this.state.maxdate}
          startdate={this.props.startdate}
          enddate={this.props.enddate}
          onCancel={this.onShowdatesdialogcancel}
          onOK={this.onShowdatesdialogOK}
          />

        <Selectsubjects
          show={this.state.showsubjectsdialog}
          subjects={this.props.subjects}
          addSubject={this.props.addSubject}
          removeSubject={this.props.removeSubject}
          descriptions={this.props.descriptions}
          addDescription={this.props.addDescription}
          removeDescription={this.props.removeDescription}
          onCancel={this.onShowsubjectsdialogcancel}
          />

        <Selectcreators
          show={this.state.showcreatorsdialog}
          creators={this.props.creators}
          addCreator={this.props.addCreator}
          removeCreator={this.props.removeCreator}
          onCancel={this.onShowcreatorsdialogcancel}
          />

        <Selectlocations
          show={this.state.showlocationsdialog}
          countries={this.props.countries}
          addCountry={this.props.addCountry}
          removeCountry={this.props.removeCountry}
          al1s={this.props.al1s}
          addAl1={this.props.addAl1}
          removeAl1={this.props.removeAl1}
          al2s={this.props.al2s}
          addAl2={this.props.addAl2}
          removeAl2={this.props.removeAl2}
          al3s={this.props.al3s}
          addAl3={this.props.addAl3}
          removeAl3={this.props.removeAl3}
          localities={this.props.localities}
          addLocality={this.props.addLocality}
          removeLocality={this.props.removeLocality}
          sublocalities={this.props.sublocalities}
          addSublocality={this.props.addSublocality}
          removeSublocality={this.props.removeSublocality}
          routes={this.props.routes}
          addRoute={this.props.addRoute}
          removeRoute={this.props.removeRoute}
          onCancel={this.onShowLocationsdialogcancel}
          />
      </div>
    );
  }
}

export default Filterview;