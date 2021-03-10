/* 
  Build Photosearcher object with given parameters  
  Author     : Franky Laseure
*/

//data models
import Fieldsearcher from '../../../../data/search/fieldsearcher.js';
import {Photosearcher} from '../../../../data/film/table/super/photosuper.js';
import {Countrypk} from '../../../../data/film/table/super/countrysuper.js';
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

class Locationsearchbuilder {

//Routesearcher builds
  /*
  * Build a Routesearcher object with all subsearchers until country level
  * all subsearchers are accessible in the return object, but only the routesearcher is to be used as end result
  * this function can be concidered as a privavate function
  */
  static buildSearchers = () => {
    let routesearcher = new Routesearcher();
    let sublocalitysearcher = new Sublocalitysearcher();
    routesearcher.setsublocality(sublocalitysearcher);
    let localitysearcher = new Localitysearcher();
    sublocalitysearcher.setlocality(localitysearcher);
    let postalcodesearcher = new Postalcodesearcher();
    localitysearcher.setpostalcode(postalcodesearcher);
    let al3searcher = new Arealevel3searcher();
    postalcodesearcher.setarealevel3(al3searcher);
    let al2searcher = new Arealevel2searcher();
    al3searcher.setarealevel2(al2searcher);
    let al1searcher = new Arealevel1searcher();
    al2searcher.setarealevel1(al1searcher);
    let countrysearcher = new Countrysearcher();
    al1searcher.setcountry(countrysearcher);
    routesearcher.andoroperator = routesearcher.AND;
    sublocalitysearcher.andoroperator = sublocalitysearcher.AND;
    localitysearcher.andoroperator = localitysearcher.AND;
    postalcodesearcher.andoroperator = postalcodesearcher.AND;
    al3searcher.andoroperator = al3searcher.AND;
    al2searcher.andoroperator = al2searcher.AND;
    al1searcher.andoroperator = al1searcher.AND;
    countrysearcher.andoroperator = countrysearcher.AND;

    return {
      routesearcher: routesearcher,
      sublocalitysearcher: sublocalitysearcher,
      localitysearcher: localitysearcher,
      postalcodesearcher: postalcodesearcher,
      al3searcher: al3searcher,
      al2searcher: al2searcher,
      al1searcher: al1searcher,
      countrysearcher: countrysearcher
    }
  }

  /*
  * build Routesearcher for a route primary key
  * to be used as an argument in Photosearcher
  */
  static build4Route = (routePK, searchersobject) => {
    let searchers = searchersobject===undefined ? this.buildSearchers() : searchersobject;
    searchers.routesearcher.addroutecodes([routePK.routecode]);
    this.build4Sublocality(routePK.sublocalityPK, searchers);
    return searchers.routesearcher;
  }

  /*
  * build Routesearcher for a sublocality primary key
  * to be used as an argument in Photosearcher
  */
  static build4Sublocality = (sublocalityPK, searchersobject) => {
    let searchers = searchersobject===undefined ? this.buildSearchers() : searchersobject;
    searchers.sublocalitysearcher.addsublocalitys([sublocalityPK.sublocality]);
    this.build4Locality(sublocalityPK.localityPK, searchers);
    return searchers.routesearcher;
  }

  /*
  * build Routesearcher for a locality primary key
  * to be used as an argument in Photosearcher
  */
  static build4Locality = (localityPK, searchersobject) => {
    let searchers = searchersobject===undefined ? this.buildSearchers() : searchersobject;
    searchers.localitysearcher.addlocalitys([localityPK.locality]);
    this.build4Postalcode(localityPK.postalcodePK, searchers);
    return searchers.routesearcher;
  }

  /*
  * build Routesearcher for a postalcode primary key
  * to be used as an argument in Photosearcher
  */
  static build4Postalcode = (postalcodePK, searchersobject) => {
    let searchers = searchersobject===undefined ? this.buildSearchers() : searchersobject;
    searchers.postalcodesearcher.addpostalcodes([postalcodePK.postalcode]);
    let countryPK = new Countrypk();
    countryPK.code = postalcodePK.countrycode;
    this.build4Country(countryPK, searchers);
    return searchers.routesearcher;
  }

  /*
  * build Routesearcher for a arealevel 3 primary key
  * to be used as an argument in Photosearcher
  */
  static build4Al3 = (al3PK, searchersobject) => {
    let searchers = searchersobject===undefined ? this.buildSearchers() : searchersobject;
    searchers.al3searcher.addal3codes([al3PK.al3code]);
    this.build4Al2(al3PK.arealevel2PK, searchers);
    return searchers.routesearcher;
  }

  /*
  * build Routesearcher for a arealevel 2 primary key
  * to be used as an argument in Photosearcher
  */
  static build4Al2 = (al2PK, searchersobject) => {
    let searchers = searchersobject===undefined ? this.buildSearchers() : searchersobject;
    searchers.al2searcher.addal2codes([al2PK.al2code]);
    this.build4Al1(al2PK.arealevel1PK, searchers);
    return searchers.routesearcher;
  }

  /*
  * build Routesearcher for a arealevel 1 primary key
  * to be used as an argument in Photosearcher
  */
  static build4Al1 = (al1PK, searchersobject) => {
    let searchers = searchersobject===undefined ? this.buildSearchers() : searchersobject;
    searchers.al1searcher.addal1codes([al1PK.al1code]);
    this.build4Country(al1PK.countryPK, searchers);
    return searchers.routesearcher;
  }

  /*
  * build Routesearcher for a country primary key
  * to be used as an argument in Photosearcher
  */
  static build4Country = (countryPK, searchersobject) => {
    let searchers = searchersobject===undefined ? this.buildSearchers() : searchersobject;
    searchers.countrysearcher.addcodes([countryPK.code]);
    return searchers.routesearcher;
  }


//Location child searcher build
  /*
  * build arealevel 1 searcher with country primary key
  * to be used as an argument in Rsarealevel1.search()
  */
  static getAl1searcher = (countrypk) => {
    let al1searcher = new Arealevel1searcher();
    al1searcher.andoroperator = al1searcher.AND;
    let countrysearcher = new Countrysearcher();
    al1searcher.setcountry(countrysearcher);
    countrysearcher.addcodes([countrypk.code])
    return al1searcher;
  }

  /*
  * build arealevel 2 searcher with arealevel 1 primary key
  * to be used as an argument in Rsarealevel2.search()
  */
  static getAl2searcher = (al1pk) => {
    let al2searcher = new Arealevel2searcher();
    al2searcher.andoroperator = al2searcher.AND;
    let al1searcher = this.getAl1searcher(al1pk.countryPK);
    al1searcher.addal1codes([al1pk.al1code]);
    al2searcher.setarealevel1(al1searcher);
    return al2searcher;
  }

  /*
  * build arealevel 3 searcher with arealevel 2 primary key
  * to be used as an argument in Rsarealevel3.search()
  */
  static getAl3searcher = (al2pk) => {
    let al3searcher = new Arealevel3searcher();
    al3searcher.andoroperator = al3searcher.AND;
    let al2searcher = this.getAl2searcher(al2pk.arealevel1PK);
    al2searcher.addal2codes([al2pk.al2code]);
    al3searcher.setarealevel2(al2searcher);
    return al3searcher;
  }

  /*
  * build locality searcher with arealevel 3 primary key
  * the postalcode searcher is initiated as a step between locality and arealevel 3,
  * as postalcode is not a separate search step in the user interface
  * to be used as an argument in Rslocality.search()
  */
  static getLocalitysearcher = (al3pk) => {
    let postalcodesearcher = new Postalcodesearcher();
    postalcodesearcher.andoroperator = postalcodesearcher.AND;
    let al3searcher = this.getAl3searcher(al3pk.arealevel2PK);
    al3searcher.addal3codes([al3pk.al3code]);
    postalcodesearcher.setarealevel3(al3searcher);

    let localitysearcher = new Localitysearcher();
    localitysearcher.andoroperator = localitysearcher.AND;
    localitysearcher.setpostalcode(postalcodesearcher);
    return localitysearcher;
  }

  /*
  * build sublocality searcher with locality primary key
  * the postalcode key in localitypk has a country code and does not require arealevel codes
  * to be used as an argument in Rssublocality.search()
  */
  static getSublocalitysearcher = (localitypk) => {
    let sublocalitysearcher = new Sublocalitysearcher();
    sublocalitysearcher.andoroperator = sublocalitysearcher.AND;

    let localitysearcher = new Localitysearcher();
    localitysearcher.andoroperator = localitysearcher.AND;
    localitysearcher.addlocalitys([localitypk.locality]);

    let countrysearcher = new Countrysearcher();
    countrysearcher.addcodes([localitypk.countrycode()]);
    let al1searcher = new Arealevel1searcher();
    al1searcher.setcountry(countrysearcher);
    let al2searcher = new Arealevel2searcher();
    al2searcher.setarealevel1(al1searcher);
    let al3searcher = new Arealevel3searcher();
    al3searcher.setarealevel2(al2searcher);
    let postalcodesearcher = new Postalcodesearcher();
    postalcodesearcher.andoroperator = postalcodesearcher.AND;
    postalcodesearcher.addpostalcodes([localitypk.postalcode()]);
    postalcodesearcher.setarealevel3(al3searcher);
    localitysearcher.setpostalcode(postalcodesearcher);
    sublocalitysearcher.setlocality(localitysearcher);
    return sublocalitysearcher;
  }

  /*
  * build route searcher with sublocality primary key
  * to be used as an argument in Rsroute.search()
  */
  static getRoutesearcher = (sublocalitypk) => {
    let routesearcher = new Routesearcher();
    routesearcher.andoroperator = routesearcher.AND;
    let sublocalitysearcher = this.getSublocalitysearcher(sublocalitypk.localityPK);
    sublocalitysearcher.addsublocalitys([sublocalitypk.sublocality]);
    routesearcher.setsublocality(sublocalitysearcher);
    return routesearcher;
  }

//free text searchers
  static textCountrysearcher = (text) => {
    let countrysearcher = new Countrysearcher();
    countrysearcher.addnames([":*:" + text + ":*:"]);
    countrysearcher.name.compareoperator = countrysearcher.name.STRING_LIKE;
    return countrysearcher;
  }

  static textLocalitysearcher = (text) => {
    let localitysearcher = new Localitysearcher();
    localitysearcher.addlocalitys([":*:" + text + ":*:"]);
    localitysearcher.locality.compareoperator = localitysearcher.locality.STRING_LIKE;
    return localitysearcher;
  }

  static textSublocalitysearcher = (text) => {
    let sublocalitysearcher = new Sublocalitysearcher();
    sublocalitysearcher.addsublocalitys([":*:" + text + ":*:"]);
    sublocalitysearcher.sublocality.compareoperator = sublocalitysearcher.sublocality.STRING_LIKE;
    return sublocalitysearcher;
  }

  static textRoutesearcher = (text) => {
    let routesearcher = new Routesearcher();
    routesearcher.addnames([":*:" + text + ":*:"]);
    routesearcher.name.compareoperator = routesearcher.name.STRING_LIKE;
    return routesearcher;
  }

}

export default Locationsearchbuilder;
