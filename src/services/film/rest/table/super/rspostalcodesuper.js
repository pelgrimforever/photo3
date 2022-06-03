//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Postalcodepk } from '../../../../../data/film/table/super/postalcodesuper.js';
import Postalcode from '../../../../../data/film/table/postalcode.js';
import PostalcodeJson from '../conversion/postalcodejson.js';
import { Arealevel3pk } from '../../../../../data/film/table/super/arealevel3super.js';
import Arealevel3Json from '../conversion/arealevel3json.js';
import { Localitypk } from '../../../../../data/film/table/super/localitysuper.js';
import LocalityJson from '../conversion/localityjson.js';


class Rspostalcodesuper extends Filmservice {	

  static restserviceselect = 'rspostalcode_select';
  static restserviceinsert = 'rspostalcode_insert';
  static restserviceupdate = 'rspostalcode_update';
  static restservicedelete = 'rspostalcode_delete';

  //SELECT OPERATIONS
  static SELECT_POSTALCODE = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Arealevel3 = 100 + 0;
  static SELECT_Locality = 100 + 1;

  //UPDATE OPERATIONS
  static UPDATE_POSTALCODE = 10;

  //INSERT OPERATIONS
  static INSERT_POSTALCODE = 20;

  //DELETE OPERATIONS
  static DELETE_Arealevel3 = 100 + 2;
  static DELETE_POSTALCODE = 30;

  static extractDataArray = (jsonarray): Postalcode[] => {
    let postalcodes: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      postalcodes.push(PostalcodeJson.fromJSON(jsonarray[i]));
    }
    return postalcodes;
  }

  static extractDataObject = (jsonobject): Postalcode => {
    return PostalcodeJson.fromJSON(jsonobject);
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

  static getOne = async (user, postalcodepk: Postalcodepk): Postalcode => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_POSTALCODE,
      "postalcodepk": PostalcodeJson.PKtoJSON(postalcodepk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadPostalcodes4arealevel3 = async (user, arealevel3pk: Postalcodepk): Postalcode[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Arealevel3,
      "arealevel3pk": Arealevel3Json.PKtoJSON(arealevel3pk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadPostalcode4locality = async (user, localitypk: Localitypk): Postalcode[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Locality,
      "localitypk": LocalityJson.PKtoJSON(localitypk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, postalcodesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": postalcodesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, postalcodesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": postalcodesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, postalcode: Postalcode) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_POSTALCODE,
      "postalcode": PostalcodeJson.toJSON(postalcode)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, postalcode: Postalcode) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_POSTALCODE,
      "postalcode": PostalcodeJson.toJSON(postalcode)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, postalcode: Postalcode) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_POSTALCODE,
      "postalcode": PostalcodeJson.toJSON(postalcode)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rspostalcodesuper;
