//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Securityprofilepk } from '../../../../../data/film/table/super/securityprofilesuper.js';
import Securityprofile from '../../../../../data/film/table/securityprofile.js';
import SecurityprofileJson from '../conversion/securityprofilejson.js';
import { Securityuserprofilepk } from '../../../../../data/film/table/super/securityuserprofilesuper.js';
import SecurityuserprofileJson from '../conversion/securityuserprofilejson.js';


class Rssecurityprofilesuper extends Filmservice {	

  static restserviceselect = 'rssecurityprofile_select';
  static restserviceinsert = 'rssecurityprofile_insert';
  static restserviceupdate = 'rssecurityprofile_update';
  static restservicedelete = 'rssecurityprofile_delete';

  //SELECT OPERATIONS
  static SELECT_SECURITYPROFILE = 2;
  static SELECT_Securityuserprofile = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_SECURITYPROFILE = 10;

  //INSERT OPERATIONS
  static INSERT_SECURITYPROFILE = 20;

  //DELETE OPERATIONS
  static DELETE_SECURITYPROFILE = 30;

  static extractDataArray = (jsonarray): Securityprofile[] => {
    let securityprofiles: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      securityprofiles.push(SecurityprofileJson.fromJSON(jsonarray[i]));
    }
    return securityprofiles;
  }

  static extractDataObject = (jsonobject): Securityprofile => {
    return SecurityprofileJson.fromJSON(jsonobject);
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

  static getOne = async (user, securityprofilepk: Securityprofilepk): Securityprofile => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SECURITYPROFILE,
      "securityprofilepk": SecurityprofileJson.PKtoJSON(securityprofilepk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadSecurityprofile4securityuserprofile = async (user, securityuserprofilepk: Securityuserprofilepk): Securityprofile[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Securityuserprofile,
      "securityuserprofilepk": SecurityuserprofileJson.PKtoJSON(securityuserprofilepk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, securityprofilesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": securityprofilesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, securityprofilesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": securityprofilesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, securityprofile: Securityprofile) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_SECURITYPROFILE,
      "securityprofile": SecurityprofileJson.toJSON(securityprofile)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, securityprofile: Securityprofile) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_SECURITYPROFILE,
      "securityprofile": SecurityprofileJson.toJSON(securityprofile)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, securityprofile: Securityprofile) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_SECURITYPROFILE,
      "securityprofile": SecurityprofileJson.toJSON(securityprofile)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rssecurityprofilesuper;
