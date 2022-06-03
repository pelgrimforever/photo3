//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Securityuserprofilepk } from '../../../../../data/film/table/super/securityuserprofilesuper.js';
import Securityuserprofile from '../../../../../data/film/table/securityuserprofile.js';
import SecurityuserprofileJson from '../conversion/securityuserprofilejson.js';
import { Securityprofilepk } from '../../../../../data/film/table/super/securityprofilesuper.js';
import SecurityprofileJson from '../conversion/securityprofilejson.js';


class Rssecurityuserprofilesuper extends Filmservice {	

  static restserviceselect = 'rssecurityuserprofile_select';
  static restserviceinsert = 'rssecurityuserprofile_insert';
  static restserviceupdate = 'rssecurityuserprofile_update';
  static restservicedelete = 'rssecurityuserprofile_delete';

  //SELECT OPERATIONS
  static SELECT_SECURITYUSERPROFILE = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Securityprofile = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_SECURITYUSERPROFILE = 10;

  //INSERT OPERATIONS
  static INSERT_SECURITYUSERPROFILE = 20;

  //DELETE OPERATIONS
  static DELETE_Securityprofile = 100 + 1;
  static DELETE_SECURITYUSERPROFILE = 30;

  static extractDataArray = (jsonarray): Securityuserprofile[] => {
    let securityuserprofiles: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      securityuserprofiles.push(SecurityuserprofileJson.fromJSON(jsonarray[i]));
    }
    return securityuserprofiles;
  }

  static extractDataObject = (jsonobject): Securityuserprofile => {
    return SecurityuserprofileJson.fromJSON(jsonobject);
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

  static getOne = async (user, securityuserprofilepk: Securityuserprofilepk): Securityuserprofile => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SECURITYUSERPROFILE,
      "securityuserprofilepk": SecurityuserprofileJson.PKtoJSON(securityuserprofilepk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadSecurityuserprofiles4securityprofile = async (user, securityprofilepk: Securityuserprofilepk): Securityuserprofile[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Securityprofile,
      "securityprofilepk": SecurityprofileJson.PKtoJSON(securityprofilepk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, securityuserprofilesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": securityuserprofilesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, securityuserprofilesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": securityuserprofilesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, securityuserprofile: Securityuserprofile) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_SECURITYUSERPROFILE,
      "securityuserprofile": SecurityuserprofileJson.toJSON(securityuserprofile)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, securityuserprofile: Securityuserprofile) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_SECURITYUSERPROFILE,
      "securityuserprofile": SecurityuserprofileJson.toJSON(securityuserprofile)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, securityuserprofile: Securityuserprofile) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_SECURITYUSERPROFILE,
      "securityuserprofile": SecurityuserprofileJson.toJSON(securityuserprofile)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rssecurityuserprofilesuper;
