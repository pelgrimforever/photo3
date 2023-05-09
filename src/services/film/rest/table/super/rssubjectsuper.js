//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Subjectpk } from '../../../../../data/film/table/super/subjectsuper.js';
import Subject from '../../../../../data/film/table/subject.js';
import SubjectJson from '../conversion/subjectjson.js';
import { Subjectcatpk } from '../../../../../data/film/table/super/subjectcatsuper.js';
import SubjectcatJson from '../conversion/subjectcatjson.js';
import { Tree7subjectpk } from '../../../../../data/film/table/super/tree7subjectsuper.js';
import Tree7subjectJson from '../conversion/tree7subjectjson.js';
import { Filmsubjectspk } from '../../../../../data/film/table/super/filmsubjectssuper.js';
import FilmsubjectsJson from '../conversion/filmsubjectsjson.js';
import { Photosubjectspk } from '../../../../../data/film/table/super/photosubjectssuper.js';
import PhotosubjectsJson from '../conversion/photosubjectsjson.js';


class Rssubjectsuper extends Filmservice {	

  static restserviceselect = 'rssubject_select';
  static restserviceinsert = 'rssubject_insert';
  static restserviceupdate = 'rssubject_update';
  static restservicedelete = 'rssubject_delete';

  //SELECT OPERATIONS
  static SELECT_SUBJECT = 2;
  static SELECT_Subjectcatcat1 = 100 + 0;
  static SELECT_Tree7subject = 100 + 1;
  static SELECT_Subjectcatcat2 = 100 + 2;
  static SELECT_Filmsubjects = 100 + 3;
  static SELECT_Photosubjects = 100 + 4;

  //UPDATE OPERATIONS
  static UPDATE_SUBJECT = 10;

  //INSERT OPERATIONS
  static INSERT_SUBJECT = 20;

  //DELETE OPERATIONS
  static DELETE_Subjectcatcat1 = 100 + 5;
  static DELETE_Tree7subject = 100 + 6;
  static DELETE_Subjectcatcat2 = 100 + 7;
  static DELETE_SUBJECT = 30;

  static extractDataArray = (jsonarray): Subject[] => {
    let subjects: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      subjects.push(SubjectJson.fromJSON(jsonarray[i]));
    }
    return subjects;
  }

  static extractDataObject = (jsonobject): Subject => {
    return SubjectJson.fromJSON(jsonobject);
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

  static getOne = async (user, subjectpk: Subjectpk): Subject => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SUBJECT,
      "subjectpk": SubjectJson.PKtoJSON(subjectpk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadSubjects4subjectcatCat1 = async (user, subjectcatpk: Subjectpk): Subject[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Subjectcatcat1,
      "subjectcatpk": SubjectcatJson.PKtoJSON(subjectcatpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadSubjects4tree7subject = async (user, tree7subjectpk: Subjectpk): Subject[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Tree7subject,
      "tree7subjectpk": Tree7subjectJson.PKtoJSON(tree7subjectpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadSubjects4subjectcatCat2 = async (user, subjectcatpk: Subjectpk): Subject[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Subjectcatcat2,
      "subjectcatpk": SubjectcatJson.PKtoJSON(subjectcatpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadSubject4filmsubjects = async (user, filmsubjectspk: Filmsubjectspk): Subject[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Filmsubjects,
      "filmsubjectspk": FilmsubjectsJson.PKtoJSON(filmsubjectspk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadSubject4photosubjects = async (user, photosubjectspk: Photosubjectspk): Subject[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Photosubjects,
      "photosubjectspk": PhotosubjectsJson.PKtoJSON(photosubjectspk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, subjectsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": subjectsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, subjectsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": subjectsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, subject: Subject) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_SUBJECT,
      "subject": SubjectJson.toJSON(subject)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, subject: Subject) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_SUBJECT,
      "subject": SubjectJson.toJSON(subject)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, subject: Subject) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_SUBJECT,
      "subject": SubjectJson.toJSON(subject)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rssubjectsuper;
