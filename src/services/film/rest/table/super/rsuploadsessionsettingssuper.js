//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Uploadsessionsettingspk } from '../../../../../data/film/table/super/uploadsessionsettingssuper.js';
import Uploadsessionsettings from '../../../../../data/film/table/uploadsessionsettings.js';
import UploadsessionsettingsJson from '../conversion/uploadsessionsettingsjson.js';


class Rsuploadsessionsettingssuper extends Filmservice {	

  static restserviceselect = 'rsuploadsessionsettings_select';
  static restserviceinsert = 'rsuploadsessionsettings_insert';
  static restserviceupdate = 'rsuploadsessionsettings_update';
  static restservicedelete = 'rsuploadsessionsettings_delete';

  //SELECT OPERATIONS
  static SELECT_UPLOADSESSIONSETTINGS = 2;

  //UPDATE OPERATIONS
  static UPDATE_UPLOADSESSIONSETTINGS = 10;

  //INSERT OPERATIONS
  static INSERT_UPLOADSESSIONSETTINGS = 20;

  //DELETE OPERATIONS
  static DELETE_UPLOADSESSIONSETTINGS = 30;

  static extractDataArray = (jsonarray): Uploadsessionsettings[] => {
    let uploadsessionsettingss: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      uploadsessionsettingss.push(UploadsessionsettingsJson.fromJSON(jsonarray[i]));
    }
    return uploadsessionsettingss;
  }

  static extractDataObject = (jsonobject): Uploadsessionsettings => {
    return UploadsessionsettingsJson.fromJSON(jsonobject);
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

  static getOne = async (user, uploadsessionsettingspk: Uploadsessionsettingspk): Uploadsessionsettings => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_UPLOADSESSIONSETTINGS,
      "uploadsessionsettingspk": UploadsessionsettingsJson.PKtoJSON(uploadsessionsettingspk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, uploadsessionsettingssearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": uploadsessionsettingssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, uploadsessionsettingssearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": uploadsessionsettingssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, uploadsessionsettings: Uploadsessionsettings) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_UPLOADSESSIONSETTINGS,
      "uploadsessionsettings": UploadsessionsettingsJson.toJSON(uploadsessionsettings)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, uploadsessionsettings: Uploadsessionsettings) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_UPLOADSESSIONSETTINGS,
      "uploadsessionsettings": UploadsessionsettingsJson.toJSON(uploadsessionsettings)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, uploadsessionsettings: Uploadsessionsettings) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_UPLOADSESSIONSETTINGS,
      "uploadsessionsettings": UploadsessionsettingsJson.toJSON(uploadsessionsettings)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsuploadsessionsettingssuper;
