//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Artgrouppk } from '../../../../../data/film/table/super/artgroupsuper.js';
import Artgroup from '../../../../../data/film/table/artgroup.js';
import ArtgroupJson from '../conversion/artgroupjson.js';


class Rsartgroupsuper extends Filmservice {	

  static restserviceselect = 'rsart_group_select';
  static restserviceinsert = 'rsart_group_insert';
  static restserviceupdate = 'rsart_group_update';
  static restservicedelete = 'rsart_group_delete';

  //SELECT OPERATIONS
  static SELECT_ARTGROUP = 2;

  //UPDATE OPERATIONS
  static UPDATE_ARTGROUP = 10;

  //INSERT OPERATIONS
  static INSERT_ARTGROUP = 20;

  //DELETE OPERATIONS
  static DELETE_ARTGROUP = 30;

  static extractDataArray = (jsonarray): Artgroup[] => {
    let artgroups: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      artgroups.push(ArtgroupJson.fromJSON(jsonarray[i]));
    }
    return artgroups;
  }

  static extractDataObject = (jsonobject): Artgroup => {
    return ArtgroupJson.fromJSON(jsonobject);
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

  static getOne = async (user, artgrouppk: Artgrouppk): Artgroup => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_ARTGROUP,
      "art_grouppk": ArtgroupJson.PKtoJSON(artgrouppk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, artgroupsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": artgroupsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, artgroupsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": artgroupsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, artgroup: Artgroup) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_ARTGROUP,
      "art_group": ArtgroupJson.toJSON(artgroup)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, artgroup: Artgroup) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_ARTGROUP,
      "art_group": ArtgroupJson.toJSON(artgroup)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, artgroup: Artgroup) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_ARTGROUP,
      "art_group": ArtgroupJson.toJSON(artgroup)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsartgroupsuper;
