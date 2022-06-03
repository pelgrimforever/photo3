//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Menupk } from '../../../../../data/film/table/super/menusuper.js';
import Menu from '../../../../../data/film/table/menu.js';
import MenuJson from '../conversion/menujson.js';
import { Mainmenupk } from '../../../../../data/film/table/super/mainmenusuper.js';
import MainmenuJson from '../conversion/mainmenujson.js';
import { Menuitempk } from '../../../../../data/film/table/super/menuitemsuper.js';
import MenuitemJson from '../conversion/menuitemjson.js';


class Rsmenusuper extends Filmservice {	

  static restserviceselect = 'rsmenu_select';
  static restserviceinsert = 'rsmenu_insert';
  static restserviceupdate = 'rsmenu_update';
  static restservicedelete = 'rsmenu_delete';

  //SELECT OPERATIONS
  static SELECT_MENU = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Mainmenu = 100 + 0;
  static SELECT_Menuitem = 100 + 1;

  //UPDATE OPERATIONS
  static UPDATE_MENU = 10;

  //INSERT OPERATIONS
  static INSERT_MENU = 20;

  //DELETE OPERATIONS
  static DELETE_Mainmenu = 100 + 2;
  static DELETE_MENU = 30;

  static extractDataArray = (jsonarray): Menu[] => {
    let menus: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      menus.push(MenuJson.fromJSON(jsonarray[i]));
    }
    return menus;
  }

  static extractDataObject = (jsonobject): Menu => {
    return MenuJson.fromJSON(jsonobject);
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

  static getOne = async (user, menupk: Menupk): Menu => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_MENU,
      "menupk": MenuJson.PKtoJSON(menupk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadMenus4mainmenu = async (user, mainmenupk: Menupk): Menu[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Mainmenu,
      "mainmenupk": MainmenuJson.PKtoJSON(mainmenupk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadMenu4menuitem = async (user, menuitempk: Menuitempk): Menu[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Menuitem,
      "menuitempk": MenuitemJson.PKtoJSON(menuitempk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, menusearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": menusearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, menusearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": menusearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, menu: Menu) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_MENU,
      "menu": MenuJson.toJSON(menu)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, menu: Menu) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_MENU,
      "menu": MenuJson.toJSON(menu)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, menu: Menu) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_MENU,
      "menu": MenuJson.toJSON(menu)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsmenusuper;
