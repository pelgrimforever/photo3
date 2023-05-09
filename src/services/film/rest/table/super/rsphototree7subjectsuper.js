//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Phototree7subjectpk } from '../../../../../data/film/table/super/phototree7subjectsuper.js';
import Phototree7subject from '../../../../../data/film/table/phototree7subject.js';
import Phototree7subjectJson from '../conversion/phototree7subjectjson.js';
import { Tree7subjectpk } from '../../../../../data/film/table/super/tree7subjectsuper.js';
import Tree7subjectJson from '../conversion/tree7subjectjson.js';
import { Photopk } from '../../../../../data/film/table/super/photosuper.js';
import PhotoJson from '../conversion/photojson.js';


class Rsphototree7subjectsuper extends Filmservice {	

  static restserviceselect = 'rsphototree7subject_select';
  static restserviceinsert = 'rsphototree7subject_insert';
  static restserviceupdate = 'rsphototree7subject_update';
  static restservicedelete = 'rsphototree7subject_delete';

  //SELECT OPERATIONS
  static SELECT_PHOTOTREE7SUBJECT = 2;
  static SELECT_Tree7subject = 100 + 0;
  static SELECT_Photo = 100 + 1;

  //UPDATE OPERATIONS
  static UPDATE_PHOTOTREE7SUBJECT = 10;

  //INSERT OPERATIONS
  static INSERT_PHOTOTREE7SUBJECT = 20;

  //DELETE OPERATIONS
  static DELETE_Tree7subject = 100 + 2;
  static DELETE_Photo = 100 + 3;
  static DELETE_PHOTOTREE7SUBJECT = 30;

  static extractDataArray = (jsonarray): Phototree7subject[] => {
    let phototree7subjects: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      phototree7subjects.push(Phototree7subjectJson.fromJSON(jsonarray[i]));
    }
    return phototree7subjects;
  }

  static extractDataObject = (jsonobject): Phototree7subject => {
    return Phototree7subjectJson.fromJSON(jsonobject);
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

  static getOne = async (user, phototree7subjectpk: Phototree7subjectpk): Phototree7subject => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_PHOTOTREE7SUBJECT,
      "phototree7subjectpk": Phototree7subjectJson.PKtoJSON(phototree7subjectpk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadPhototree7subjects4tree7subject = async (user, tree7subjectpk: Phototree7subjectpk): Phototree7subject[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Tree7subject,
      "tree7subjectpk": Tree7subjectJson.PKtoJSON(tree7subjectpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadPhototree7subjects4photo = async (user, photopk: Phototree7subjectpk): Phototree7subject[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Photo,
      "photopk": PhotoJson.PKtoJSON(photopk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, phototree7subjectsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": phototree7subjectsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, phototree7subjectsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": phototree7subjectsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, phototree7subject: Phototree7subject) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_PHOTOTREE7SUBJECT,
      "phototree7subject": Phototree7subjectJson.toJSON(phototree7subject)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, phototree7subject: Phototree7subject) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_PHOTOTREE7SUBJECT,
      "phototree7subject": Phototree7subjectJson.toJSON(phototree7subject)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, phototree7subject: Phototree7subject) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_PHOTOTREE7SUBJECT,
      "phototree7subject": Phototree7subjectJson.toJSON(phototree7subject)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsphototree7subjectsuper;
