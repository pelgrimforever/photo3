//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Phototagspk } from '../../../../../data/film/table/super/phototagssuper.js';
import Phototags from '../../../../../data/film/table/phototags.js';
import PhototagsJson from '../conversion/phototagsjson.js';
import { Photopk } from '../../../../../data/film/table/super/photosuper.js';
import PhotoJson from '../conversion/photojson.js';


class Rsphototagssuper extends Filmservice {	

  static restserviceselect = 'rsphototags_select';
  static restserviceinsert = 'rsphototags_insert';
  static restserviceupdate = 'rsphototags_update';
  static restservicedelete = 'rsphototags_delete';

  //SELECT OPERATIONS
  static SELECT_PHOTOTAGS = 2;
  static SELECT_Photo = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_PHOTOTAGS = 10;

  //INSERT OPERATIONS
  static INSERT_PHOTOTAGS = 20;

  //DELETE OPERATIONS
  static DELETE_Photo = 100 + 1;
  static DELETE_PHOTOTAGS = 30;

  static extractDataArray = (jsonarray): Phototags[] => {
    let phototagss: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      phototagss.push(PhototagsJson.fromJSON(jsonarray[i]));
    }
    return phototagss;
  }

  static extractDataObject = (jsonobject): Phototags => {
    return PhototagsJson.fromJSON(jsonobject);
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

  static getOne = async (user, phototagspk: Phototagspk): Phototags => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_PHOTOTAGS,
      "phototagspk": PhototagsJson.PKtoJSON(phototagspk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadPhototagss4photo = async (user, photopk: Phototagspk): Phototags[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Photo,
      "photopk": PhotoJson.PKtoJSON(photopk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, phototagssearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": phototagssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, phototagssearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": phototagssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, phototags: Phototags) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_PHOTOTAGS,
      "phototags": PhototagsJson.toJSON(phototags)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, phototags: Phototags) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_PHOTOTAGS,
      "phototags": PhototagsJson.toJSON(phototags)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, phototags: Phototags) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_PHOTOTAGS,
      "phototags": PhototagsJson.toJSON(phototags)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsphototagssuper;
