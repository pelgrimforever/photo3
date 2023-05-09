//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Filmtypepk } from '../../../../../data/film/table/super/filmtypesuper.js';
import Filmtype from '../../../../../data/film/table/filmtype.js';
import FilmtypeJson from '../conversion/filmtypejson.js';


class Rsfilmtypesuper extends Filmservice {	

  static restserviceselect = 'rsfilmtype_select';
  static restserviceinsert = 'rsfilmtype_insert';
  static restserviceupdate = 'rsfilmtype_update';
  static restservicedelete = 'rsfilmtype_delete';

  //SELECT OPERATIONS
  static SELECT_FILMTYPE = 2;

  //UPDATE OPERATIONS
  static UPDATE_FILMTYPE = 10;

  //INSERT OPERATIONS
  static INSERT_FILMTYPE = 20;

  //DELETE OPERATIONS
  static DELETE_FILMTYPE = 30;

  static extractDataArray = (jsonarray): Filmtype[] => {
    let filmtypes: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      filmtypes.push(FilmtypeJson.fromJSON(jsonarray[i]));
    }
    return filmtypes;
  }

  static extractDataObject = (jsonobject): Filmtype => {
    return FilmtypeJson.fromJSON(jsonobject);
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

  static getOne = async (user, filmtypepk: Filmtypepk): Filmtype => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_FILMTYPE,
      "filmtypepk": FilmtypeJson.PKtoJSON(filmtypepk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, filmtypesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": filmtypesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, filmtypesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": filmtypesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, filmtype: Filmtype) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_FILMTYPE,
      "filmtype": FilmtypeJson.toJSON(filmtype)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, filmtype: Filmtype) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_FILMTYPE,
      "filmtype": FilmtypeJson.toJSON(filmtype)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, filmtype: Filmtype) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_FILMTYPE,
      "filmtype": FilmtypeJson.toJSON(filmtype)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsfilmtypesuper;
