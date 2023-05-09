//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Filmpk } from '../../../../../data/film/table/super/filmsuper.js';
import Film from '../../../../../data/film/table/film.js';
import FilmJson from '../conversion/filmjson.js';
import { Filmtypepk } from '../../../../../data/film/table/super/filmtypesuper.js';
import FilmtypeJson from '../conversion/filmtypejson.js';
import { Filmsubjectspk } from '../../../../../data/film/table/super/filmsubjectssuper.js';
import FilmsubjectsJson from '../conversion/filmsubjectsjson.js';
import { Photopk } from '../../../../../data/film/table/super/photosuper.js';
import PhotoJson from '../conversion/photojson.js';


class Rsfilmsuper extends Filmservice {	

  static restserviceselect = 'rsfilm_select';
  static restserviceinsert = 'rsfilm_insert';
  static restserviceupdate = 'rsfilm_update';
  static restservicedelete = 'rsfilm_delete';

  //SELECT OPERATIONS
  static SELECT_FILM = 2;
  static SELECT_Filmtype = 100 + 0;
  static SELECT_Filmsubjects = 100 + 1;
  static SELECT_Photo = 100 + 2;

  //UPDATE OPERATIONS
  static UPDATE_FILM = 10;

  //INSERT OPERATIONS
  static INSERT_FILM = 20;

  //DELETE OPERATIONS
  static DELETE_Filmtype = 100 + 3;
  static DELETE_FILM = 30;

  static extractDataArray = (jsonarray): Film[] => {
    let films: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      films.push(FilmJson.fromJSON(jsonarray[i]));
    }
    return films;
  }

  static extractDataObject = (jsonobject): Film => {
    return FilmJson.fromJSON(jsonobject);
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

  static getOne = async (user, filmpk: Filmpk): Film => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_FILM,
      "filmpk": FilmJson.PKtoJSON(filmpk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadFilms4filmtype = async (user, filmtypepk: Filmpk): Film[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Filmtype,
      "filmtypepk": FilmtypeJson.PKtoJSON(filmtypepk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadFilm4filmsubjects = async (user, filmsubjectspk: Filmsubjectspk): Film[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Filmsubjects,
      "filmsubjectspk": FilmsubjectsJson.PKtoJSON(filmsubjectspk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadFilm4photo = async (user, photopk: Photopk): Film[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Photo,
      "photopk": PhotoJson.PKtoJSON(photopk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, filmsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": filmsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, filmsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": filmsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, film: Film) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_FILM,
      "film": FilmJson.toJSON(film)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, film: Film) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_FILM,
      "film": FilmJson.toJSON(film)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, film: Film) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_FILM,
      "film": FilmJson.toJSON(film)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsfilmsuper;
