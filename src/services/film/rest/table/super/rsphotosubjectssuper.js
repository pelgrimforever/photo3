//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Photosubjectspk } from '../../../../../data/film/table/super/photosubjectssuper.js';
import Photosubjects from '../../../../../data/film/table/photosubjects.js';
import PhotosubjectsJson from '../conversion/photosubjectsjson.js';
import { Photopk } from '../../../../../data/film/table/super/photosuper.js';
import PhotoJson from '../conversion/photojson.js';
import { Subjectpk } from '../../../../../data/film/table/super/subjectsuper.js';
import SubjectJson from '../conversion/subjectjson.js';


class Rsphotosubjectssuper extends Filmservice {	

  static restserviceselect = 'rsphotosubjects_select';
  static restserviceinsert = 'rsphotosubjects_insert';
  static restserviceupdate = 'rsphotosubjects_update';
  static restservicedelete = 'rsphotosubjects_delete';

  //SELECT OPERATIONS
  static SELECT_PHOTOSUBJECTS = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Photo = 100 + 0;
  static SELECT_Subject = 100 + 1;

  //UPDATE OPERATIONS
  static UPDATE_PHOTOSUBJECTS = 10;

  //INSERT OPERATIONS
  static INSERT_PHOTOSUBJECTS = 20;

  //DELETE OPERATIONS
  static DELETE_Photo = 100 + 2;
  static DELETE_Subject = 100 + 3;
  static DELETE_PHOTOSUBJECTS = 30;

  static extractDataArray = (jsonarray): Photosubjects[] => {
    let photosubjectss: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      photosubjectss.push(PhotosubjectsJson.fromJSON(jsonarray[i]));
    }
    return photosubjectss;
  }

  static extractDataObject = (jsonobject): Photosubjects => {
    return PhotosubjectsJson.fromJSON(jsonobject);
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

  static getOne = async (user, photosubjectspk: Photosubjectspk): Photosubjects => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_PHOTOSUBJECTS,
      "photosubjectspk": PhotosubjectsJson.PKtoJSON(photosubjectspk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadPhotosubjectss4photo = async (user, photopk: Photosubjectspk): Photosubjects[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Photo,
      "photopk": PhotoJson.PKtoJSON(photopk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadPhotosubjectss4subject = async (user, subjectpk: Photosubjectspk): Photosubjects[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Subject,
      "subjectpk": SubjectJson.PKtoJSON(subjectpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, photosubjectssearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": photosubjectssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, photosubjectssearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": photosubjectssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, photosubjects: Photosubjects) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_PHOTOSUBJECTS,
      "photosubjects": PhotosubjectsJson.toJSON(photosubjects)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, photosubjects: Photosubjects) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_PHOTOSUBJECTS,
      "photosubjects": PhotosubjectsJson.toJSON(photosubjects)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, photosubjects: Photosubjects) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_PHOTOSUBJECTS,
      "photosubjects": PhotosubjectsJson.toJSON(photosubjects)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsphotosubjectssuper;
