import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

//app components
import Store from '../../services/store.js';
import Photoslides from '../../popups/photoslides.js';
import Popupmessage from '../../popups/popupmessage.js';
import Filterview from './filterview.js';
import Filterresultview from './filterresultview.js';
import Exploretoolbar from './exploretoolbar.js';
import Locationsmap from './locationsmap.js';
import Photolist from './photolist.js';
import Photogallery from './photogallery.js';

//services
import Rsphoto from '../../services/film/rest/table/rsphoto.js';
import Photosearchbuilder from '../../services/film/rest/custom/photosearchbuilder.js';

//data models
import Fieldsearcher from '../../data/search/fieldsearcher.js';
import {Photosearcher} from '../../data/film/table/super/photosuper.js';
import {Tree7subjectsearcher} from '../../data/film/table/super/tree7subjectsuper.js';
import {Creatorsearcher} from '../../data/film/table/super/creatorsuper.js';

const GOOGLEMAPS_SRID = 4326;
const POINT = 1;

const maptoolname = 'map';
const listtoolname = 'list';
const gallerytoolname = 'gallery';

const maxresults = 100;

const tools = [ 
    { name:maptoolname, icon: '/photo3/images/googlemaps.png' }, 
    { name:listtoolname, icon: '/photo3/images/list.png' }, 
    { name:gallerytoolname, icon: '/photo3/images/gallery.png' }, 
  ];

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      loggedin: false,
      showpopup: false,
      popuptitle: '',
      popupmessage: '',
      activetool: tools[0],
      showphotoslides: false,
      slides: [],

      dataupdates: 0,
      loadingslides: false,
      photos: [],
      searchversion: 0, 
      searchcriteria: {
        startdate: null,
        enddate: null,
        subjects: [],
        descriptions: [],
        creators: [],
        countries: [],
        al1s: [],
        al2s: [],
        al3s: [],
        localities: [],
        sublocalities: [],
        routes: []
      },
      photosearcher: new Photosearcher(),
      searchcount: 0,
    };
  }

  async componentDidMount() {
    this.setState( { loggedin : Store.user.loggedin } );
    Store.user.notifyme("search", this.userchanged);
    const res = await this.getMapdata();
  }

  userchanged = async () => {
    this.setState( { loggedin : Store.user.loggedin } );
    const res = await this.getMapdata();
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevState.searchversion!=this.state.searchversion) {
      this.getMapdata();
    }
  }

  getMapdata = async () => {
    try {
      this.setState( { loading: true });
      let data = [];
      let amount = 0;

      const searcher = Photosearchbuilder.buildSearcher(this.state.searchcriteria);
      if(searcher.used()) {
        amount = await Rsphoto.searchcount(Store.user, searcher);
        if(amount<maxresults+1) {
          data = await Rsphoto.searchwithimages(Store.user, searcher);
        }
      }

      this.setState( { 
        dataupdates: this.state.dataupdates+1,
        searchcount: amount,
        photos: data,
        loading: false
      } );
    } catch (e) {
      this.setState( { 
        dataupdates: this.state.dataupdates+1,
        searchcount: 0,
        photos: [],
        loading: false
      } );
      console.log("getMapdata failed");
    }
    this.setState( { 
      loading: false
    } );
  }

  buildSearcher = () => {
    let fieldsearcher = new Fieldsearcher();

    let photosearcher = new Photosearcher();
    photosearcher.andoroperator = photosearcher.AND;
    photosearcher.photodate.setAndoroperator(fieldsearcher.AND);
    if(this.state.startdate!=null) {
        photosearcher.addphotodates(["" + this.state.startdate.getTime()], [fieldsearcher.DATETIME_BIGGEREQUAL]);
    }
    if(this.state.enddate!=null) {
        photosearcher.addphotodates(["" + this.state.enddate.getTime()], [fieldsearcher.DATETIME_SMALLEREQUAL]);
    }
    if(this.state.subjects.length>0) {
      let tree7subjectsearcher = new Tree7subjectsearcher();
      tree7subjectsearcher.andoroperator = tree7subjectsearcher.AND;
      tree7subjectsearcher.tree7id.setCompareoperator(fieldsearcher.STRING_LIKE);
      let subjectids = [];
      let l = this.state.subjects.length;
      for(let i=0; i<l; i++) {
          subjectids.push(this.state.subjects[i].tree7id + ":*:");
      }
      tree7subjectsearcher.addtree7ids(subjectids);
      photosearcher.settree7subject(tree7subjectsearcher);
    }
    if(this.state.descriptions.length>0) {
      photosearcher.description.setCompareoperator(fieldsearcher.STRING_EQUAL);
      let descriptionlist = [];
      let l = this.state.descriptions.length;
      for(let i=0; i<l; i++) {
        descriptionlist.push(this.state.descriptions[i]);
      }
      photosearcher.adddescriptions(descriptionlist);
    }
    if(this.state.creators.length>0) {
      let creatorsearcher = new Creatorsearcher();
      creatorsearcher.andoroperator = creatorsearcher.OR;
      let creatorids = [];
      let l = this.state.creators.length;
      for(let i=0; i<l; i++) {
        creatorids.push(this.state.creators[i].PK.creatorid);
      }
      creatorsearcher.addcreatorids(creatorids);
      photosearcher.setcreator(creatorsearcher);
    }
    if(this.state.countries.length>0) {
      
    }
    return photosearcher;
  }

  onToolselected = (tool) => {
    this.setState( { activetool: tool } );
  }

  hidePopup = () => {
    this.setState( { showpopup: false });
  }

  setFilterdates = (startdate, enddate) => {
    let searchcriteria = this.state.searchcriteria;
    searchcriteria.startdate = startdate;
    searchcriteria.enddate = enddate;
    this.setState({
      searchversion: this.state.searchversion+1,
      searchcriteria: searchcriteria
    });
  }

  addSubject = (subject) => {
    let searchcriteria = this.state.searchcriteria;
    let selection = searchcriteria.subjects;
    let found = false;
    for(let index in selection) {
      found = found || subject.PK===selection[index].PK;
    }
    if(!found) {
      selection.push(subject);
      searchcriteria.subjects = selection;
      this.setState({
        searchversion: this.state.searchversion+1,
        searchcriteria: searchcriteria
      });
    }
  }

  removeSubject = (index) => {
    let searchcriteria = this.state.searchcriteria;
    let selection = this.state.searchcriteria.subjects;
    selection.splice(index, 1);
    searchcriteria.subjects = selection;
    this.setState({
      searchversion: this.state.searchversion+1,
      searchcriteria: searchcriteria
    });
  }

  addDescription = (description) => {
    let searchcriteria = this.state.searchcriteria;
    let selection = searchcriteria.descriptions;
    let found = false;
    for(let index in selection) {
      found = found || description===selection[index];
    }
    if(!found) {
      selection.push(description);
      searchcriteria.descriptions = selection;
      this.setState({
        searchversion: this.state.searchversion+1,
        searchcriteria: searchcriteria
      });
    }
  }

  removeDescription = (index) => {
    let searchcriteria = this.state.searchcriteria;
    let selection = searchcriteria.descriptions;
    selection.splice(index, 1);
    searchcriteria.descriptions = selection;
    this.setState({
      searchversion: this.state.searchversion+1,
      searchcriteria: searchcriteria
    });
  }

  addCreator = (creator) => {
    let searchcriteria = this.state.searchcriteria;
    let selection = searchcriteria.creators;
    let found = false;
    for(let index in selection) {
      found = found || creator.PK===selection[index].PK;
    }
    if(!found) {
      selection.push(creator);
      searchcriteria.creators = selection;
      this.setState({
        searchversion: this.state.searchversion+1,
        searchcriteria: searchcriteria
      });
    }
  }

  removeCreator = (index) => {
    let searchcriteria = this.state.searchcriteria;
    let selection = searchcriteria.creators;
    selection.splice(index, 1);
    searchcriteria.creators = selection;
    this.setState({
      searchversion: this.state.searchversion+1,
      searchcriteria: searchcriteria
    });
  }

  addCountry = (country) => {
    let searchcriteria = this.state.searchcriteria;
    let selection = searchcriteria.countries;
    let found = false;
    for(let index in selection) {
      found = found || country.PK===selection[index].PK;
    }
    if(!found) {
      selection.push(country);
      searchcriteria.countries = selection;
      this.setState({
        searchversion: this.state.searchversion+1,
        searchcriteria: searchcriteria
      });
    }
  }

  removeCountry = (index) => {
    let searchcriteria = this.state.searchcriteria;
    let selection = searchcriteria.countries;
    selection.splice(index, 1);
    searchcriteria.countries = selection;
    this.setState({
      searchversion: this.state.searchversion+1,
      searchcriteria: searchcriteria
    });
  }

  addAl1 = (al1) => {
    let searchcriteria = this.state.searchcriteria;
    let selection = searchcriteria.al1s;
    let found = false;
    for(let index in selection) {
      found = found || al1.PK===selection[index].PK;
    }
    if(!found) {
      selection.push(al1);
      searchcriteria.al1s = selection;
      this.setState({
        searchversion: this.state.searchversion+1,
        searchcriteria: searchcriteria
      });
    }
  }

  removeAl1 = (index) => {
    let searchcriteria = this.state.searchcriteria;
    let selection = searchcriteria.al1s;
    selection.splice(index, 1);
    searchcriteria.al1s = selection;
    this.setState({
      searchversion: this.state.searchversion+1,
      searchcriteria: searchcriteria
    });
  }

  addAl2 = (al2) => {
    let searchcriteria = this.state.searchcriteria;
    let selection = searchcriteria.al2s;
    let found = false;
    for(let index in selection) {
      found = found || al2.PK===selection[index].PK;
    }
    if(!found) {
      selection.push(al2);
      searchcriteria.al2s = selection;
      this.setState({
        searchversion: this.state.searchversion+1,
        searchcriteria: searchcriteria
      });
    }
  }

  removeAl2 = (index) => {
    let searchcriteria = this.state.searchcriteria;
    let selection = searchcriteria.al2s;
    selection.splice(index, 1);
    searchcriteria.al2s = selection;
    this.setState({
      searchversion: this.state.searchversion+1,
      searchcriteria: searchcriteria
    });
  }

  addAl3 = (al3) => {
    let searchcriteria = this.state.searchcriteria;
    let selection = searchcriteria.al3s;
    let found = false;
    for(let index in selection) {
      found = found || al3.PK===selection[index].PK;
    }
    if(!found) {
      selection.push(al3);
      searchcriteria.al3s = selection;
      this.setState({
        searchversion: this.state.searchversion+1,
        searchcriteria: searchcriteria
      });
    }
  }

  removeAl3 = (index) => {
    let searchcriteria = this.state.searchcriteria;
    let selection = searchcriteria.al3s;
    selection.splice(index, 1);
    searchcriteria.al3s = selection;
    this.setState({
      searchversion: this.state.searchversion+1,
      searchcriteria: searchcriteria
    });
  }

  addLocality = (locality) => {
    let searchcriteria = this.state.searchcriteria;
    let selection = searchcriteria.localities;
    let found = false;
    for(let index in selection) {
      found = found || locality.PK===selection[index].PK;
    }
    if(!found) {
      selection.push(locality);
      searchcriteria.localities = selection;
      this.setState({
        searchversion: this.state.searchversion+1,
        searchcriteria: searchcriteria
      });
    }
  }

  removeLocality = (index) => {
    let searchcriteria = this.state.searchcriteria;
    let selection = searchcriteria.localities;
    selection.splice(index, 1);
    searchcriteria.localities = selection;
    this.setState({
      searchversion: this.state.searchversion+1,
      searchcriteria: searchcriteria
    });
  }

  addSublocality = (sublocality) => {
    let searchcriteria = this.state.searchcriteria;
    let selection = searchcriteria.sublocalities;
    let found = false;
    for(let index in selection) {
      found = found || sublocality.PK===selection[index].PK;
    }
    if(!found) {
      selection.push(sublocality);
      searchcriteria.sublocalities = selection;
      this.setState({
        searchversion: this.state.searchversion+1,
        searchcriteria: searchcriteria
      });
    }
  }

  removeSublocality = (index) => {
    let searchcriteria = this.state.searchcriteria;
    let selection = searchcriteria.sublocalities;
    selection.splice(index, 1);
    searchcriteria.sublocalities = selection;
    this.setState({
      searchversion: this.state.searchversion+1,
      searchcriteria: searchcriteria
    });
  }

  addRoute = (route) => {
    let searchcriteria = this.state.searchcriteria;
    let selection = searchcriteria.routes;
    let found = false;
    for(let index in selection) {
      found = found || route.PK===selection[index].PK;
    }
    if(!found) {
      selection.push(route);
      searchcriteria.routes = selection;
      this.setState({
        searchversion: this.state.searchversion+1,
        searchcriteria: searchcriteria
      });
    }
  }

  removeRoute = (index) => {
    let searchcriteria = this.state.searchcriteria;
    let selection = searchcriteria.routes;
    selection.splice(index, 1);
    searchcriteria.routes = selection;
    this.setState({
      searchversion: this.state.searchversion+1,
      searchcriteria: searchcriteria
    });
  }

  onMarkerClick = async (marker) => {
    this.setState({ loading: true });
    const photopk = marker.PK;
    let selection = [];
    this.state.photos.forEach(photo => {
      if(photo.location.lat===marker.position.lat() && photo.location.lng===marker.position.lng()) {
        selection.push(photo);
      }
    });

    this.setState({
      loading: false,
      showphotoslides: true,
      slides: selection
    });
  }

  onMarkerclusterClick = async (markercluster) => {
    this.setState({ loading: true });
    let markers = markercluster.getMarkers();
    let selection = [];
    let prevmarker = null;
    let positions = [];
    markers.forEach(marker => {
      let samelocation = false;
      //some pictures can be located in exact the same location
      //these doubles need to be filtered out
      positions.forEach(position => {
        samelocation = samelocation || marker.position.lat()===position.lat() && marker.position.lng()===position.lng();
      });
      if(!samelocation) {
        this.state.photos.forEach(photo => {
          if(photo.location.lat===marker.position.lat() && photo.location.lng===marker.position.lng()) {
            selection.push(photo);
          }
        });
        positions.push(marker.position);
      }
    });

    this.setState({
      loading: false,
      showphotoslides: true,
      slides: selection
    });    
  }

  showslides = async () => {
    this.setState({ 
      loadingslides: true
    });
    let photos = this.state.photos;
    this.setState({
      loadingslides: false,
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
    const showspinner = this.state.loading || this.props.loading;

    //tool selected = what element is visible
    const map_visibility = this.state.activetool.name===maptoolname ? "visible" : "hidden";
    const list_visibility = this.state.activetool.name===listtoolname ? "visible" : "hidden";
    const gallery_visibility = this.state.activetool.name===gallerytoolname ? "visible" : "hidden";

    return (
    <div className="d-flex h-100">
      <div className="h-100" style={{width:400}}>
        <Filterresultview searchcount={this.state.searchcount} loading={this.state.loading} showslides={this.showslides} />
        <Filterview 
          startdate={this.state.searchcriteria.startdate} 
          enddate={this.state.searchcriteria.enddate} 
          setFilterdates={this.setFilterdates} 
          subjects={this.state.searchcriteria.subjects}
          addSubject={this.addSubject}
          removeSubject={this.removeSubject}
          descriptions={this.state.searchcriteria.descriptions}
          addDescription={this.addDescription}
          removeDescription={this.removeDescription}
          creators={this.state.searchcriteria.creators}
          addCreator={this.addCreator}
          removeCreator={this.removeCreator}
          countries={this.state.searchcriteria.countries}
          addCountry={this.addCountry}
          removeCountry={this.removeCountry}
          al1s={this.state.searchcriteria.al1s}
          addAl1={this.addAl1}
          removeAl1={this.removeAl1}
          al2s={this.state.searchcriteria.al2s}
          addAl2={this.addAl2}
          removeAl2={this.removeAl2}
          al3s={this.state.searchcriteria.al3s}
          addAl3={this.addAl3}
          removeAl3={this.removeAl3}
          localities={this.state.searchcriteria.localities}
          addLocality={this.addLocality}
          removeLocality={this.removeLocality}
          sublocalities={this.state.searchcriteria.sublocalities}
          addSublocality={this.addSublocality}
          removeSublocality={this.removeSublocality}
          routes={this.state.searchcriteria.routes}
          addRoute={this.addRoute}
          removeRoute={this.removeRoute}
          />
      </div>
      <Exploretoolbar tools={tools} onToolselected={this.onToolselected}/>
      <div className="flex-grow-1 container-relative">

<div className="w-100 h-100 stack" style={{visibility: map_visibility}}>
        <Locationsmap id="locationsmap" 
          locationsupdates={this.state.dataupdates}
          locations={this.state.photos}
          onMarkerClick={this.onMarkerClick}
          onMarkerclusterClick={this.onMarkerclusterClick}
        />
{ showspinner &&
        <div className="h-100 w-100" >
          <div className="d-flex justify-content-center">
            <Spinner className="spinner-border-center" animation="border" role="status" />
          </div>
        </div>
}
</div>

<div className="w-100 h-100 stack" style={{visibility: list_visibility}}>
        <Photolist id="photolist" 
          photos={this.state.photos}
        />
{ showspinner &&
        <div className="h-100 w-100" >
          <div className="d-flex justify-content-center">
            <Spinner className="spinner-border-center" animation="border" role="status" />
          </div>
        </div>
}
</div>

<div className="w-100 h-100 stack" style={{visibility: gallery_visibility}}>
        <Photogallery id="photogallery" 
          photos={this.state.photos}
        />
{ showspinner &&
        <div className="h-100 w-100" >
          <div className="d-flex justify-content-center">
            <Spinner className="spinner-border-center" animation="border" role="status" />
          </div>
        </div>
}
</div>

      </div>
      <Photoslides 
        show={this.state.showphotoslides}
        photos={this.state.slides} 
        onCancel={this.onCloseslides}
      />
      <Popupmessage show={this.state.showpopup} title={this.state.popuptitle} message={this.state.popupmessage} onHide={this.hidePopup} />
    </div>
    );
  }
}

export default Search;