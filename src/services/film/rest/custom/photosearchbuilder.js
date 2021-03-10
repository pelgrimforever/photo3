/* 
  Build Photosearcher object with given parameters  
  Author     : Franky Laseure
*/
//services
import Locationsearchbuilder from './locationsearchbuilder.js';

//data models
import Fieldsearcher from '../../../../data/search/fieldsearcher.js';
import {Photosearcher} from '../../../../data/film/table/super/photosuper.js';
import {Tree7subjectsearcher} from '../../../../data/film/table/super/tree7subjectsuper.js';
import {Creatorsearcher} from '../../../../data/film/table/super/creatorsuper.js';
import {Routesearcher} from '../../../../data/film/table/super/routesuper.js';
import {Sublocalitysearcher} from '../../../../data/film/table/super/sublocalitysuper.js';
import {Localitysearcher} from '../../../../data/film/table/super/localitysuper.js';
import {Postalcodesearcher} from '../../../../data/film/table/super/postalcodesuper.js';
import {Arealevel3searcher} from '../../../../data/film/table/super/arealevel3super.js';
import {Arealevel2searcher} from '../../../../data/film/table/super/arealevel2super.js';
import {Arealevel1searcher} from '../../../../data/film/table/super/arealevel1super.js';
import {Countrysearcher} from '../../../../data/film/table/super/countrysuper.js';

class Photosearchbuilder {
  

  static buildSearcher = (searchcriteria) => {
    let fieldsearcher = new Fieldsearcher();

    let photosearcher = new Photosearcher();
    photosearcher.andoroperator = photosearcher.AND;
    photosearcher.photodate.setAndoroperator(fieldsearcher.AND);
    if(searchcriteria.startdate!=null) {
        photosearcher.addphotodates(["" + searchcriteria.startdate.getTime()], [fieldsearcher.DATETIME_BIGGEREQUAL]);
    }
    if(searchcriteria.enddate!=null) {
        photosearcher.addphotodates(["" + searchcriteria.enddate.getTime()], [fieldsearcher.DATETIME_SMALLEREQUAL]);
    }
    if(searchcriteria.subjects.length>0) {
      let tree7subjectsearcher = new Tree7subjectsearcher();
      tree7subjectsearcher.andoroperator = tree7subjectsearcher.AND;
      tree7subjectsearcher.tree7id.setCompareoperator(fieldsearcher.STRING_LIKE);
      let subjectids = [];
      let l = searchcriteria.subjects.length;
      for(let i=0; i<l; i++) {
          subjectids.push(searchcriteria.subjects[i].tree7id + ":*:");
      }
      tree7subjectsearcher.addtree7ids(subjectids);
      photosearcher.settree7subject(tree7subjectsearcher);
    }
    if(searchcriteria.descriptions.length>0) {
      photosearcher.description.setCompareoperator(fieldsearcher.STRING_EQUAL);
      let descriptionlist = [];
      let l = searchcriteria.descriptions.length;
      for(let i=0; i<l; i++) {
        descriptionlist.push(searchcriteria.descriptions[i]);
      }
      photosearcher.adddescriptions(descriptionlist);
    }
    if(searchcriteria.creators.length>0) {
      let creatorsearcher = new Creatorsearcher();
      creatorsearcher.andoroperator = creatorsearcher.OR;
      let creatorids = [];
      let l = searchcriteria.creators.length;
      for(let i=0; i<l; i++) {
        creatorids.push(searchcriteria.creators[i].PK.creatorid);
      }
      creatorsearcher.addcreatorids(creatorids);
      photosearcher.setcreator(creatorsearcher);
    }

    searchcriteria.countries.forEach(country => { photosearcher.setroute(Locationsearchbuilder.build4Country(country.PK)); });
    searchcriteria.al1s.forEach(al1 => { photosearcher.setroute(Locationsearchbuilder.build4Al1(al1.PK)); });
    searchcriteria.al2s.forEach(al2 => { photosearcher.setroute(Locationsearchbuilder.build4Al2(al2.PK)); });
    searchcriteria.al3s.forEach(al3 => { photosearcher.setroute(Locationsearchbuilder.build4Al3(al3.PK)); });
    searchcriteria.localities.forEach(locality => { photosearcher.setroute(Locationsearchbuilder.build4Locality(locality.PK)); });
    searchcriteria.sublocalities.forEach(sublocality => { photosearcher.setroute(Locationsearchbuilder.build4Sublocality(sublocality.PK)); });
    searchcriteria.routes.forEach(route => { photosearcher.setroute(Locationsearchbuilder.build4Route(route.PK)); });

    return photosearcher;
  }

}

export default Photosearchbuilder;
