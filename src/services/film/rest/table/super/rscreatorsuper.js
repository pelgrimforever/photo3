//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Creatorpk } from '../../../../../data/film/table/super/creatorsuper.js';
import Creator from '../../../../../data/film/table/creator.js';
import CreatorJson from '../conversion/creatorjson.js';


class Rscreatorsuper extends Filmservice {	

  static restserviceselect = 'rscreator_select';
  static restserviceinsert = 'rscreator_insert';
  static restserviceupdate = 'rscreator_update';
  static restservicedelete = 'rscreator_delete';

  //SELECT OPERATIONS
  static SELECT_CREATOR = 2;
  static SELECT_Siteusergroup = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_CREATOR = 10;

  //INSERT OPERATIONS
  static INSERT_CREATOR = 20;

  //DELETE OPERATIONS
  static DELETE_CREATOR = 30;

  static extractDataArray = (jsonarray): Creator[] => {
    let creators: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      creators.push(CreatorJson.fromJSON(jsonarray[i]));
    }
    return creators;
  }

  static extractDataObject = (jsonobject): Creator => {
    return CreatorJson.fromJSON(jsonobject);
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

  static getOne = async (user, creatorpk: Creatorpk): Creator => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_CREATOR,
      "creatorpk": CreatorJson.PKtoJSON(creatorpk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, creatorsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": creatorsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, creatorsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": creatorsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, creator: Creator) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_CREATOR,
      "creator": CreatorJson.toJSON(creator)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, creator: Creator) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_CREATOR,
      "creator": CreatorJson.toJSON(creator)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, creator: Creator) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_CREATOR,
      "creator": CreatorJson.toJSON(creator)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rscreatorsuper;
