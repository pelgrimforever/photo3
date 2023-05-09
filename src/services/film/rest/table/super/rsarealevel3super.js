//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Arealevel3pk } from '../../../../../data/film/table/super/arealevel3super.js';
import Arealevel3 from '../../../../../data/film/table/arealevel3.js';
import Arealevel3Json from '../conversion/arealevel3json.js';
import { Arealevel2pk } from '../../../../../data/film/table/super/arealevel2super.js';
import Arealevel2Json from '../conversion/arealevel2json.js';


class Rsarealevel3super extends Filmservice {	

  static restserviceselect = 'rsarealevel3_select';
  static restserviceinsert = 'rsarealevel3_insert';
  static restserviceupdate = 'rsarealevel3_update';
  static restservicedelete = 'rsarealevel3_delete';

  //SELECT OPERATIONS
  static SELECT_AREALEVEL3 = 2;
  static SELECT_Arealevel2 = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_AREALEVEL3 = 10;

  //INSERT OPERATIONS
  static INSERT_AREALEVEL3 = 20;

  //DELETE OPERATIONS
  static DELETE_Arealevel2 = 100 + 1;
  static DELETE_AREALEVEL3 = 30;

  static extractDataArray = (jsonarray): Arealevel3[] => {
    let arealevel3s: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      arealevel3s.push(Arealevel3Json.fromJSON(jsonarray[i]));
    }
    return arealevel3s;
  }

  static extractDataObject = (jsonobject): Arealevel3 => {
    return Arealevel3Json.fromJSON(jsonobject);
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

  static getOne = async (user, arealevel3pk: Arealevel3pk): Arealevel3 => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_AREALEVEL3,
      "arealevel3pk": Arealevel3Json.PKtoJSON(arealevel3pk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadArealevel3s4arealevel2 = async (user, arealevel2pk: Arealevel3pk): Arealevel3[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Arealevel2,
      "arealevel2pk": Arealevel2Json.PKtoJSON(arealevel2pk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, arealevel3searcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": arealevel3searcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, arealevel3searcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": arealevel3searcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, arealevel3: Arealevel3) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_AREALEVEL3,
      "arealevel3": Arealevel3Json.toJSON(arealevel3)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, arealevel3: Arealevel3) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_AREALEVEL3,
      "arealevel3": Arealevel3Json.toJSON(arealevel3)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, arealevel3: Arealevel3) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_AREALEVEL3,
      "arealevel3": Arealevel3Json.toJSON(arealevel3)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsarealevel3super;
