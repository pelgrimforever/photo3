//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Localitypk } from '../../../../../data/film/table/super/localitysuper.js';
import Locality from '../../../../../data/film/table/locality.js';
import LocalityJson from '../conversion/localityjson.js';
import { Postalcodepk } from '../../../../../data/film/table/super/postalcodesuper.js';
import PostalcodeJson from '../conversion/postalcodejson.js';
import { Sublocalitypk } from '../../../../../data/film/table/super/sublocalitysuper.js';
import SublocalityJson from '../conversion/sublocalityjson.js';


class Rslocalitysuper extends Filmservice {	

  static restserviceselect = 'rslocality_select';
  static restserviceinsert = 'rslocality_insert';
  static restserviceupdate = 'rslocality_update';
  static restservicedelete = 'rslocality_delete';

  //SELECT OPERATIONS
  static SELECT_LOCALITY = 2;
  static SELECT_Postalcode = 100 + 0;
  static SELECT_Sublocality = 100 + 1;

  //UPDATE OPERATIONS
  static UPDATE_LOCALITY = 10;

  //INSERT OPERATIONS
  static INSERT_LOCALITY = 20;

  //DELETE OPERATIONS
  static DELETE_Postalcode = 100 + 2;
  static DELETE_LOCALITY = 30;

  static extractDataArray = (jsonarray): Locality[] => {
    let localitys: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      localitys.push(LocalityJson.fromJSON(jsonarray[i]));
    }
    return localitys;
  }

  static extractDataObject = (jsonobject): Locality => {
    return LocalityJson.fromJSON(jsonobject);
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

  static getOne = async (user, localitypk: Localitypk): Locality => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_LOCALITY,
      "localitypk": LocalityJson.PKtoJSON(localitypk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadLocalitys4postalcode = async (user, postalcodepk: Localitypk): Locality[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Postalcode,
      "postalcodepk": PostalcodeJson.PKtoJSON(postalcodepk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadLocality4sublocality = async (user, sublocalitypk: Sublocalitypk): Locality[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Sublocality,
      "sublocalitypk": SublocalityJson.PKtoJSON(sublocalitypk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, localitysearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": localitysearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, localitysearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": localitysearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, locality: Locality) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_LOCALITY,
      "locality": LocalityJson.toJSON(locality)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, locality: Locality) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_LOCALITY,
      "locality": LocalityJson.toJSON(locality)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, locality: Locality) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_LOCALITY,
      "locality": LocalityJson.toJSON(locality)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rslocalitysuper;
