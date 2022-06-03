//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Sublocalitypk } from '../../../../../data/film/table/super/sublocalitysuper.js';
import Sublocality from '../../../../../data/film/table/sublocality.js';
import SublocalityJson from '../conversion/sublocalityjson.js';
import { Localitypk } from '../../../../../data/film/table/super/localitysuper.js';
import LocalityJson from '../conversion/localityjson.js';
import { Routepk } from '../../../../../data/film/table/super/routesuper.js';
import RouteJson from '../conversion/routejson.js';


class Rssublocalitysuper extends Filmservice {	

  static restserviceselect = 'rssublocality_select';
  static restserviceinsert = 'rssublocality_insert';
  static restserviceupdate = 'rssublocality_update';
  static restservicedelete = 'rssublocality_delete';

  //SELECT OPERATIONS
  static SELECT_SUBLOCALITY = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Locality = 100 + 0;
  static SELECT_Route = 100 + 1;

  //UPDATE OPERATIONS
  static UPDATE_SUBLOCALITY = 10;

  //INSERT OPERATIONS
  static INSERT_SUBLOCALITY = 20;

  //DELETE OPERATIONS
  static DELETE_Locality = 100 + 2;
  static DELETE_SUBLOCALITY = 30;

  static extractDataArray = (jsonarray): Sublocality[] => {
    let sublocalitys: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      sublocalitys.push(SublocalityJson.fromJSON(jsonarray[i]));
    }
    return sublocalitys;
  }

  static extractDataObject = (jsonobject): Sublocality => {
    return SublocalityJson.fromJSON(jsonobject);
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

  static getOne = async (user, sublocalitypk: Sublocalitypk): Sublocality => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SUBLOCALITY,
      "sublocalitypk": SublocalityJson.PKtoJSON(sublocalitypk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadSublocalitys4locality = async (user, localitypk: Sublocalitypk): Sublocality[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Locality,
      "localitypk": LocalityJson.PKtoJSON(localitypk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadSublocality4route = async (user, routepk: Routepk): Sublocality[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Route,
      "routepk": RouteJson.PKtoJSON(routepk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, sublocalitysearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": sublocalitysearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, sublocalitysearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": sublocalitysearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, sublocality: Sublocality) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_SUBLOCALITY,
      "sublocality": SublocalityJson.toJSON(sublocality)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, sublocality: Sublocality) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_SUBLOCALITY,
      "sublocality": SublocalityJson.toJSON(sublocality)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, sublocality: Sublocality) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_SUBLOCALITY,
      "sublocality": SublocalityJson.toJSON(sublocality)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rssublocalitysuper;
