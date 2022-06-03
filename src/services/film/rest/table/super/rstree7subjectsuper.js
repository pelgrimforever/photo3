//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Tree7subjectpk } from '../../../../../data/film/table/super/tree7subjectsuper.js';
import Tree7subject from '../../../../../data/film/table/tree7subject.js';
import Tree7subjectJson from '../conversion/tree7subjectjson.js';
import { Phototree7subjectpk } from '../../../../../data/film/table/super/phototree7subjectsuper.js';
import Phototree7subjectJson from '../conversion/phototree7subjectjson.js';


class Rstree7subjectsuper extends Filmservice {	

  static restserviceselect = 'rstree7subject_select';
  static restserviceinsert = 'rstree7subject_insert';
  static restserviceupdate = 'rstree7subject_update';
  static restservicedelete = 'rstree7subject_delete';

  //SELECT OPERATIONS
  static SELECT_TREE7SUBJECT = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Tree7subjectparentsubjectid = 100 + 0;
  static SELECT_Phototree7subject = 100 + 1;

  //UPDATE OPERATIONS
  static UPDATE_TREE7SUBJECT = 10;

  //INSERT OPERATIONS
  static INSERT_TREE7SUBJECT = 20;

  //DELETE OPERATIONS
  static DELETE_Tree7subjectparentsubjectid = 100 + 2;
  static DELETE_TREE7SUBJECT = 30;

  static extractDataArray = (jsonarray): Tree7subject[] => {
    let tree7subjects: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      tree7subjects.push(Tree7subjectJson.fromJSON(jsonarray[i]));
    }
    return tree7subjects;
  }

  static extractDataObject = (jsonobject): Tree7subject => {
    return Tree7subjectJson.fromJSON(jsonobject);
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

  static getOne = async (user, tree7subjectpk: Tree7subjectpk): Tree7subject => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_TREE7SUBJECT,
      "tree7subjectpk": Tree7subjectJson.PKtoJSON(tree7subjectpk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadTree7subjects4tree7subjectParentsubjectid = async (user, tree7subjectpk: Tree7subjectpk): Tree7subject[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Tree7subjectparentsubjectid,
      "tree7subjectpk": Tree7subjectJson.PKtoJSON(tree7subjectpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadTree7subject4phototree7subject = async (user, phototree7subjectpk: Phototree7subjectpk): Tree7subject[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Phototree7subject,
      "phototree7subjectpk": Phototree7subjectJson.PKtoJSON(phototree7subjectpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, tree7subjectsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": tree7subjectsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, tree7subjectsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": tree7subjectsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, tree7subject: Tree7subject) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_TREE7SUBJECT,
      "tree7subject": Tree7subjectJson.toJSON(tree7subject)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, tree7subject: Tree7subject) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_TREE7SUBJECT,
      "tree7subject": Tree7subjectJson.toJSON(tree7subject)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, tree7subject: Tree7subject) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_TREE7SUBJECT,
      "tree7subject": Tree7subjectJson.toJSON(tree7subject)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rstree7subjectsuper;
