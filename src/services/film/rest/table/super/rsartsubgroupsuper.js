//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Artsubgrouppk } from '../../../../../data/film/table/super/artsubgroupsuper.js';
import Artsubgroup from '../../../../../data/film/table/artsubgroup.js';
import ArtsubgroupJson from '../conversion/artsubgroupjson.js';
import { Artgrouppk } from '../../../../../data/film/table/super/artgroupsuper.js';
import ArtgroupJson from '../conversion/artgroupjson.js';


class Rsartsubgroupsuper extends Filmservice {	

  static restserviceselect = 'rsart_subgroup_select';
  static restserviceinsert = 'rsart_subgroup_insert';
  static restserviceupdate = 'rsart_subgroup_update';
  static restservicedelete = 'rsart_subgroup_delete';

  //SELECT OPERATIONS
  static SELECT_ARTSUBGROUP = 2;
  static SELECT_Artgroup = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_ARTSUBGROUP = 10;

  //INSERT OPERATIONS
  static INSERT_ARTSUBGROUP = 20;

  //DELETE OPERATIONS
  static DELETE_Artgroup = 100 + 1;
  static DELETE_ARTSUBGROUP = 30;

  static extractDataArray = (jsonarray): Artsubgroup[] => {
    let artsubgroups: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      artsubgroups.push(ArtsubgroupJson.fromJSON(jsonarray[i]));
    }
    return artsubgroups;
  }

  static extractDataObject = (jsonobject): Artsubgroup => {
    return ArtsubgroupJson.fromJSON(jsonobject);
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

  static getOne = async (user, artsubgrouppk: Artsubgrouppk): Artsubgroup => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_ARTSUBGROUP,
      "art_subgrouppk": ArtsubgroupJson.PKtoJSON(artsubgrouppk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadArtsubgroups4artgroup = async (user, artgrouppk: Artsubgrouppk): Artsubgroup[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Artgroup,
      "art_grouppk": ArtgroupJson.PKtoJSON(artgrouppk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, artsubgroupsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": artsubgroupsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, artsubgroupsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": artsubgroupsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, artsubgroup: Artsubgroup) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_ARTSUBGROUP,
      "art_subgroup": ArtsubgroupJson.toJSON(artsubgroup)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, artsubgroup: Artsubgroup) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_ARTSUBGROUP,
      "art_subgroup": ArtsubgroupJson.toJSON(artsubgroup)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, artsubgroup: Artsubgroup) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_ARTSUBGROUP,
      "art_subgroup": ArtsubgroupJson.toJSON(artsubgroup)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsartsubgroupsuper;
