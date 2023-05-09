//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Mainmenupk } from '../../../../../data/film/table/super/mainmenusuper.js';
import Mainmenu from '../../../../../data/film/table/mainmenu.js';
import MainmenuJson from '../conversion/mainmenujson.js';
import { Menupk } from '../../../../../data/film/table/super/menusuper.js';
import MenuJson from '../conversion/menujson.js';


class Rsmainmenusuper extends Filmservice {	

  static restserviceselect = 'rsmainmenu_select';
  static restserviceinsert = 'rsmainmenu_insert';
  static restserviceupdate = 'rsmainmenu_update';
  static restservicedelete = 'rsmainmenu_delete';

  //SELECT OPERATIONS
  static SELECT_MAINMENU = 2;
  static SELECT_Menu = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_MAINMENU = 10;

  //INSERT OPERATIONS
  static INSERT_MAINMENU = 20;

  //DELETE OPERATIONS
  static DELETE_MAINMENU = 30;

  static extractDataArray = (jsonarray): Mainmenu[] => {
    let mainmenus: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      mainmenus.push(MainmenuJson.fromJSON(jsonarray[i]));
    }
    return mainmenus;
  }

  static extractDataObject = (jsonobject): Mainmenu => {
    return MainmenuJson.fromJSON(jsonobject);
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

  static getOne = async (user, mainmenupk: Mainmenupk): Mainmenu => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_MAINMENU,
      "mainmenupk": MainmenuJson.PKtoJSON(mainmenupk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadMainmenu4menu = async (user, menupk: Menupk): Mainmenu[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Menu,
      "menupk": MenuJson.PKtoJSON(menupk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, mainmenusearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": mainmenusearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, mainmenusearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": mainmenusearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, mainmenu: Mainmenu) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_MAINMENU,
      "mainmenu": MainmenuJson.toJSON(mainmenu)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, mainmenu: Mainmenu) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_MAINMENU,
      "mainmenu": MainmenuJson.toJSON(mainmenu)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, mainmenu: Mainmenu) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_MAINMENU,
      "mainmenu": MainmenuJson.toJSON(mainmenu)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsmainmenusuper;
