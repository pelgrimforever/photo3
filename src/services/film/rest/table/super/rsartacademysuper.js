//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Artacademypk } from '../../../../../data/film/table/super/artacademysuper.js';
import Artacademy from '../../../../../data/film/table/artacademy.js';
import ArtacademyJson from '../conversion/artacademyjson.js';


class Rsartacademysuper extends Filmservice {	

  static restserviceselect = 'rsart_academy_select';
  static restserviceinsert = 'rsart_academy_insert';
  static restserviceupdate = 'rsart_academy_update';
  static restservicedelete = 'rsart_academy_delete';

  //SELECT OPERATIONS
  static SELECT_ARTACADEMY = 2;
  static SELECT_Siteusergroup = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_ARTACADEMY = 10;

  //INSERT OPERATIONS
  static INSERT_ARTACADEMY = 20;

  //DELETE OPERATIONS
  static DELETE_ARTACADEMY = 30;

  static extractDataArray = (jsonarray): Artacademy[] => {
    let artacademys: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      artacademys.push(ArtacademyJson.fromJSON(jsonarray[i]));
    }
    return artacademys;
  }

  static extractDataObject = (jsonobject): Artacademy => {
    return ArtacademyJson.fromJSON(jsonobject);
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

  static getOne = async (user, artacademypk: Artacademypk): Artacademy => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_ARTACADEMY,
      "art_academypk": ArtacademyJson.PKtoJSON(artacademypk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, artacademysearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": artacademysearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, artacademysearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": artacademysearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, artacademy: Artacademy) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_ARTACADEMY,
      "art_academy": ArtacademyJson.toJSON(artacademy)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, artacademy: Artacademy) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_ARTACADEMY,
      "art_academy": ArtacademyJson.toJSON(artacademy)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, artacademy: Artacademy) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_ARTACADEMY,
      "art_academy": ArtacademyJson.toJSON(artacademy)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsartacademysuper;
