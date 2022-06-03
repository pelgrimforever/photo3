//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Uploadsessionpk } from '../../../../../data/film/table/super/uploadsessionsuper.js';
import Uploadsession from '../../../../../data/film/table/uploadsession.js';
import UploadsessionJson from '../conversion/uploadsessionjson.js';
import { Creatorpk } from '../../../../../data/film/table/super/creatorsuper.js';
import CreatorJson from '../conversion/creatorjson.js';


class Rsuploadsessionsuper extends Filmservice {	

  static restserviceselect = 'rsuploadsession_select';
  static restserviceinsert = 'rsuploadsession_insert';
  static restserviceupdate = 'rsuploadsession_update';
  static restservicedelete = 'rsuploadsession_delete';

  //SELECT OPERATIONS
  static SELECT_UPLOADSESSION = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Creator = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_UPLOADSESSION = 10;

  //INSERT OPERATIONS
  static INSERT_UPLOADSESSION = 20;

  //DELETE OPERATIONS
  static DELETE_Creator = 100 + 1;
  static DELETE_UPLOADSESSION = 30;

  static extractDataArray = (jsonarray): Uploadsession[] => {
    let uploadsessions: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      uploadsessions.push(UploadsessionJson.fromJSON(jsonarray[i]));
    }
    return uploadsessions;
  }

  static extractDataObject = (jsonobject): Uploadsession => {
    return UploadsessionJson.fromJSON(jsonobject);
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

  static getOne = async (user, uploadsessionpk: Uploadsessionpk): Uploadsession => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_UPLOADSESSION,
      "uploadsessionpk": UploadsessionJson.PKtoJSON(uploadsessionpk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadUploadsessions4creator = async (user, creatorpk: Uploadsessionpk): Uploadsession[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Creator,
      "creatorpk": CreatorJson.PKtoJSON(creatorpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, uploadsessionsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": uploadsessionsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, uploadsessionsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": uploadsessionsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, uploadsession: Uploadsession) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_UPLOADSESSION,
      "uploadsession": UploadsessionJson.toJSON(uploadsession)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, uploadsession: Uploadsession) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_UPLOADSESSION,
      "uploadsession": UploadsessionJson.toJSON(uploadsession)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, uploadsession: Uploadsession) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_UPLOADSESSION,
      "uploadsession": UploadsessionJson.toJSON(uploadsession)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsuploadsessionsuper;
