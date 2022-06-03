//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Filmsubjectspk } from '../../../../../data/film/table/super/filmsubjectssuper.js';
import Filmsubjects from '../../../../../data/film/table/filmsubjects.js';
import FilmsubjectsJson from '../conversion/filmsubjectsjson.js';
import { Subjectpk } from '../../../../../data/film/table/super/subjectsuper.js';
import SubjectJson from '../conversion/subjectjson.js';
import { Filmpk } from '../../../../../data/film/table/super/filmsuper.js';
import FilmJson from '../conversion/filmjson.js';


class Rsfilmsubjectssuper extends Filmservice {	

  static restserviceselect = 'rsfilmsubjects_select';
  static restserviceinsert = 'rsfilmsubjects_insert';
  static restserviceupdate = 'rsfilmsubjects_update';
  static restservicedelete = 'rsfilmsubjects_delete';

  //SELECT OPERATIONS
  static SELECT_FILMSUBJECTS = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Subject = 100 + 0;
  static SELECT_Film = 100 + 1;

  //UPDATE OPERATIONS
  static UPDATE_FILMSUBJECTS = 10;

  //INSERT OPERATIONS
  static INSERT_FILMSUBJECTS = 20;

  //DELETE OPERATIONS
  static DELETE_Subject = 100 + 2;
  static DELETE_Film = 100 + 3;
  static DELETE_FILMSUBJECTS = 30;

  static extractDataArray = (jsonarray): Filmsubjects[] => {
    let filmsubjectss: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      filmsubjectss.push(FilmsubjectsJson.fromJSON(jsonarray[i]));
    }
    return filmsubjectss;
  }

  static extractDataObject = (jsonobject): Filmsubjects => {
    return FilmsubjectsJson.fromJSON(jsonobject);
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

  static getOne = async (user, filmsubjectspk: Filmsubjectspk): Filmsubjects => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_FILMSUBJECTS,
      "filmsubjectspk": FilmsubjectsJson.PKtoJSON(filmsubjectspk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadFilmsubjectss4subject = async (user, subjectpk: Filmsubjectspk): Filmsubjects[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Subject,
      "subjectpk": SubjectJson.PKtoJSON(subjectpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadFilmsubjectss4film = async (user, filmpk: Filmsubjectspk): Filmsubjects[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Film,
      "filmpk": FilmJson.PKtoJSON(filmpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, filmsubjectssearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": filmsubjectssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, filmsubjectssearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": filmsubjectssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, filmsubjects: Filmsubjects) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_FILMSUBJECTS,
      "filmsubjects": FilmsubjectsJson.toJSON(filmsubjects)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, filmsubjects: Filmsubjects) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_FILMSUBJECTS,
      "filmsubjects": FilmsubjectsJson.toJSON(filmsubjects)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, filmsubjects: Filmsubjects) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_FILMSUBJECTS,
      "filmsubjects": FilmsubjectsJson.toJSON(filmsubjects)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsfilmsubjectssuper;
