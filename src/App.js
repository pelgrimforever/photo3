import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  HashRouter,
  Redirect
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
//make sure the customized css comes after the 3rd party css to enable overriding
import './app.scss';
import './photo3.scss';
import './glyphons.scss';

//general classes
import Sitesecurityservice from './services/sitesecurityservice.js';
import Filmservice from './services/filmservice.js';
import Store from './services/store.js';

import Menubar from './menubar/menubar.js';
import Clock from './utilities/clock.js';
import Popupmessage from './popups/popupmessage.js';

//app specific classes
//import Worldmap from './map/worldmap.js';
import Locationsmap from './explore/location/explorelocation.js';
import Search from './explore/search/search.js';
import Edit from './edit/edit.js';

//configured in .env and .env.production
const {REACT_APP_GOOGLE_API_KEY} = process.env;
const {REACT_APP_TEST} = process.env;
const {REACT_APP_CORS} = process.env;
const {REACT_APP_SERVERURL} = process.env;

class Page extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navitems: [ 
        { name:'Locations', link: '/locations' }, 
        { name:'Search', link: '/search' }, 
        { name:'Edit', link: '/edit' }, 
      ],
      navitem: null,
    };
    this.navigateEvent.bind(this);

    //set google API key
    Store.google_api_key = REACT_APP_GOOGLE_API_KEY;
    console.log(Store.google_api_key);
    //set REST service paramaters
    Filmservice.test = REACT_APP_TEST;
    Filmservice.cors = REACT_APP_CORS;
    Filmservice.serverurl = REACT_APP_SERVERURL;
    Sitesecurityservice.test = REACT_APP_TEST;
    Sitesecurityservice.cors = REACT_APP_CORS;
    Sitesecurityservice.serverurl = REACT_APP_SERVERURL;
  }

  async componentWillMount(){
    //can only download data after server settings are initialized
    await Store.load();
  }

  async componentDidMount(){
    document.getElementById('body').className='body';
    document.getElementById('root').className='root fullheight';
  }

  navigateEvent = (item) => {
    this.setState( { navitem: item } );
  }

  render() {

    return (
<HashRouter>      
<div className="root fullheight">

  <div className="containerheader">
    <Menubar navitems={this.state.navitems} navigateEvent={this.navigateEvent}/>
  </div>

  <div className="content containercontent">
    <Route exact path="/">
      <Redirect to="/locations" />
    </Route>
    <Route exact path="/locations" component={Locationsmap}/>
    <Route exact path="/search" component={Search}/>
    <Route exact path="/edit" component={Edit}/>
  </div>

  <div className="containerfooter bg-dark d-flex justify-content-end">
    <div className="text-light flex-grow-1"></div>
    <div className="text-light"><Clock/></div>
  </div>

  <Popupmessage />
</div>
</HashRouter>
    );
  }

}

export default Page;