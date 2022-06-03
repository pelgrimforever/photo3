//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Arealevel1pk } from '../../../../../data/film/table/super/arealevel1super.js';
import Arealevel1 from '../../../../../data/film/table/arealevel1.js';
import Arealevel1Json from '../conversion/arealevel1json.js';
import { Countrypk } from '../../../../../data/film/table/super/countrysuper.js';
import CountryJson from '../conversion/countryjson.js';
import { Arealevel2pk } from '../../../../../data/film/table/super/arealevel2super.js';
import Arealevel2Json from '../conversion/arealevel2json.js';


class Rsarealevel1super extends Filmservice {	

  static restserviceselect = 'rsarealevel1_select';
  static restserviceinsert = 'rsarealevel1_insert';
  static restserviceupdate = 'rsarealevel1_update';
  static restservicedelete = 'rsarealevel1_delete';

  //SELECT OPERATIONS
  static SELECT_AREALEVEL1 = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Country = 100 + 0;
  static SELECT_Arealevel2 = 100 + 1;

  //UPDATE OPERATIONS
  static UPDATE_AREALEVEL1 = 10;

  //INSERT OPERATIONS
  static INSERT_AREALEVEL1 = 20;

  //DELETE OPERATIONS
  static DELETE_Country = 100 + 2;
  static DELETE_AREALEVEL1 = 30;

  static extractDataArray = (jsonarray): Arealevel1[] => {
    let arealevel1s: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      arealevel1s.push(Arealevel1Json.fromJSON(jsonarray[i]));
    }
    return arealevel1s;
  }

  static extractDataObject = (jsonobject): Arealevel1 => {
    return Arealevel1Json.fromJSON(jsonobject);
  }

  static getcount = async (user) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: super.SELECT_COUNT
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static getall = async (user) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static getOne = async (user, arealevel1pk: Arealevel1pk): Arealevel1 => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_AREALEVEL1,
      "arealevel1pk": Arealevel1Json.PKtoJSON(arealevel1pk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadArealevel1s4country = async (user, countrypk: Arealevel1pk): Arealevel1[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Country,
      "countrypk": CountryJson.PKtoJSON(countrypk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadArealevel14arealevel2 = async (user, arealevel2pk: Arealevel2pk): Arealevel1[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Arealevel2,
      "arealevel2pk": Arealevel2Json.PKtoJSON(arealevel2pk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, arealevel1searcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": arealevel1searcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, arealevel1searcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": arealevel1searcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, arealevel1: Arealevel1) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_AREALEVEL1,
      "arealevel1": Arealevel1Json.toJSON(arealevel1)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, arealevel1: Arealevel1) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_AREALEVEL1,
      "arealevel1": Arealevel1Json.toJSON(arealevel1)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, arealevel1: Arealevel1) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_AREALEVEL1,
      "arealevel1": Arealevel1Json.toJSON(arealevel1)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsarealevel1super;
