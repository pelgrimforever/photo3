//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Spatialrefsyspk } from '../../../../../data/film/table/super/spatialrefsyssuper.js';
import Spatialrefsys from '../../../../../data/film/table/spatialrefsys.js';
import SpatialrefsysJson from '../conversion/spatialrefsysjson.js';


class Rsspatialrefsyssuper extends Filmservice {	

  static restserviceselect = 'rsspatial_ref_sys_select';
  static restserviceinsert = 'rsspatial_ref_sys_insert';
  static restserviceupdate = 'rsspatial_ref_sys_update';
  static restservicedelete = 'rsspatial_ref_sys_delete';

  //SELECT OPERATIONS
  static SELECT_SPATIALREFSYS = 2;
  static SELECT_Siteusergroup = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_SPATIALREFSYS = 10;

  //INSERT OPERATIONS
  static INSERT_SPATIALREFSYS = 20;

  //DELETE OPERATIONS
  static DELETE_SPATIALREFSYS = 30;

  static extractDataArray = (jsonarray): Spatialrefsys[] => {
    let spatialrefsyss: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      spatialrefsyss.push(SpatialrefsysJson.fromJSON(jsonarray[i]));
    }
    return spatialrefsyss;
  }

  static extractDataObject = (jsonobject): Spatialrefsys => {
    return SpatialrefsysJson.fromJSON(jsonobject);
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

  static getOne = async (user, spatialrefsyspk: Spatialrefsyspk): Spatialrefsys => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SPATIALREFSYS,
      "spatial_ref_syspk": SpatialrefsysJson.PKtoJSON(spatialrefsyspk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, spatialrefsyssearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": spatialrefsyssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, spatialrefsyssearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": spatialrefsyssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, spatialrefsys: Spatialrefsys) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_SPATIALREFSYS,
      "spatial_ref_sys": SpatialrefsysJson.toJSON(spatialrefsys)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, spatialrefsys: Spatialrefsys) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_SPATIALREFSYS,
      "spatial_ref_sys": SpatialrefsysJson.toJSON(spatialrefsys)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, spatialrefsys: Spatialrefsys) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_SPATIALREFSYS,
      "spatial_ref_sys": SpatialrefsysJson.toJSON(spatialrefsys)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsspatialrefsyssuper;
