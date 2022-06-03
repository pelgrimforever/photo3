//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Arealevel2pk } from '../../../../../data/film/table/super/arealevel2super.js';
import Arealevel2 from '../../../../../data/film/table/arealevel2.js';
import Arealevel2Json from '../conversion/arealevel2json.js';
import { Arealevel1pk } from '../../../../../data/film/table/super/arealevel1super.js';
import Arealevel1Json from '../conversion/arealevel1json.js';
import { Arealevel3pk } from '../../../../../data/film/table/super/arealevel3super.js';
import Arealevel3Json from '../conversion/arealevel3json.js';


class Rsarealevel2super extends Filmservice {	

  static restserviceselect = 'rsarealevel2_select';
  static restserviceinsert = 'rsarealevel2_insert';
  static restserviceupdate = 'rsarealevel2_update';
  static restservicedelete = 'rsarealevel2_delete';

  //SELECT OPERATIONS
  static SELECT_AREALEVEL2 = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Arealevel1 = 100 + 0;
  static SELECT_Arealevel3 = 100 + 1;

  //UPDATE OPERATIONS
  static UPDATE_AREALEVEL2 = 10;

  //INSERT OPERATIONS
  static INSERT_AREALEVEL2 = 20;

  //DELETE OPERATIONS
  static DELETE_Arealevel1 = 100 + 2;
  static DELETE_AREALEVEL2 = 30;

  static extractDataArray = (jsonarray): Arealevel2[] => {
    let arealevel2s: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      arealevel2s.push(Arealevel2Json.fromJSON(jsonarray[i]));
    }
    return arealevel2s;
  }

  static extractDataObject = (jsonobject): Arealevel2 => {
    return Arealevel2Json.fromJSON(jsonobject);
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

  static getOne = async (user, arealevel2pk: Arealevel2pk): Arealevel2 => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_AREALEVEL2,
      "arealevel2pk": Arealevel2Json.PKtoJSON(arealevel2pk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadArealevel2s4arealevel1 = async (user, arealevel1pk: Arealevel2pk): Arealevel2[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Arealevel1,
      "arealevel1pk": Arealevel1Json.PKtoJSON(arealevel1pk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadArealevel24arealevel3 = async (user, arealevel3pk: Arealevel3pk): Arealevel2[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Arealevel3,
      "arealevel3pk": Arealevel3Json.PKtoJSON(arealevel3pk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, arealevel2searcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": arealevel2searcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, arealevel2searcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": arealevel2searcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, arealevel2: Arealevel2) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_AREALEVEL2,
      "arealevel2": Arealevel2Json.toJSON(arealevel2)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, arealevel2: Arealevel2) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_AREALEVEL2,
      "arealevel2": Arealevel2Json.toJSON(arealevel2)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, arealevel2: Arealevel2) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_AREALEVEL2,
      "arealevel2": Arealevel2Json.toJSON(arealevel2)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsarealevel2super;
