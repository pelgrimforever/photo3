//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Subjectcatpk } from '../../../../../data/film/table/super/subjectcatsuper.js';
import Subjectcat from '../../../../../data/film/table/subjectcat.js';
import SubjectcatJson from '../conversion/subjectcatjson.js';
import { Subjectpk } from '../../../../../data/film/table/super/subjectsuper.js';
import SubjectJson from '../conversion/subjectjson.js';


class Rssubjectcatsuper extends Filmservice {	

  static restserviceselect = 'rssubjectcat_select';
  static restserviceinsert = 'rssubjectcat_insert';
  static restserviceupdate = 'rssubjectcat_update';
  static restservicedelete = 'rssubjectcat_delete';

  //SELECT OPERATIONS
  static SELECT_SUBJECTCAT = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Subjectcat1 = 100 + 0;
  static SELECT_Subjectcat2 = 100 + 1;

  //UPDATE OPERATIONS
  static UPDATE_SUBJECTCAT = 10;

  //INSERT OPERATIONS
  static INSERT_SUBJECTCAT = 20;

  //DELETE OPERATIONS
  static DELETE_SUBJECTCAT = 30;

  static extractDataArray = (jsonarray): Subjectcat[] => {
    let subjectcats: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      subjectcats.push(SubjectcatJson.fromJSON(jsonarray[i]));
    }
    return subjectcats;
  }

  static extractDataObject = (jsonobject): Subjectcat => {
    return SubjectcatJson.fromJSON(jsonobject);
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

  static getOne = async (user, subjectcatpk: Subjectcatpk): Subjectcat => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SUBJECTCAT,
      "subjectcatpk": SubjectcatJson.PKtoJSON(subjectcatpk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadSubjectcat4subjectCat1 = async (user, subjectCat1pk: Subjectpk): Subjectcat[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Subjectcat1,
      "subjectpk": SubjectJson.PKtoJSON(subjectCat1pk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadSubjectcat4subjectCat2 = async (user, subjectCat2pk: Subjectpk): Subjectcat[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Subjectcat2,
      "subjectpk": SubjectJson.PKtoJSON(subjectCat2pk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, subjectcatsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": subjectcatsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, subjectcatsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": subjectcatsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, subjectcat: Subjectcat) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_SUBJECTCAT,
      "subjectcat": SubjectcatJson.toJSON(subjectcat)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, subjectcat: Subjectcat) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_SUBJECTCAT,
      "subjectcat": SubjectcatJson.toJSON(subjectcat)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, subjectcat: Subjectcat) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_SUBJECTCAT,
      "subjectcat": SubjectcatJson.toJSON(subjectcat)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rssubjectcatsuper;
