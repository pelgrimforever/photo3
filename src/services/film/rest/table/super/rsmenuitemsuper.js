//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Menuitempk } from '../../../../../data/film/table/super/menuitemsuper.js';
import Menuitem from '../../../../../data/film/table/menuitem.js';
import MenuitemJson from '../conversion/menuitemjson.js';
import { Menupk } from '../../../../../data/film/table/super/menusuper.js';
import MenuJson from '../conversion/menujson.js';


class Rsmenuitemsuper extends Filmservice {	

  static restserviceselect = 'rsmenuitem_select';
  static restserviceinsert = 'rsmenuitem_insert';
  static restserviceupdate = 'rsmenuitem_update';
  static restservicedelete = 'rsmenuitem_delete';

  //SELECT OPERATIONS
  static SELECT_MENUITEM = 2;
  static SELECT_Menu = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_MENUITEM = 10;

  //INSERT OPERATIONS
  static INSERT_MENUITEM = 20;

  //DELETE OPERATIONS
  static DELETE_Menu = 100 + 1;
  static DELETE_MENUITEM = 30;

  static extractDataArray = (jsonarray): Menuitem[] => {
    let menuitems: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      menuitems.push(MenuitemJson.fromJSON(jsonarray[i]));
    }
    return menuitems;
  }

  static extractDataObject = (jsonobject): Menuitem => {
    return MenuitemJson.fromJSON(jsonobject);
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

  static getOne = async (user, menuitempk: Menuitempk): Menuitem => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_MENUITEM,
      "menuitempk": MenuitemJson.PKtoJSON(menuitempk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadMenuitems4menu = async (user, menupk: Menuitempk): Menuitem[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Menu,
      "menupk": MenuJson.PKtoJSON(menupk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, menuitemsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": menuitemsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, menuitemsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": menuitemsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, menuitem: Menuitem) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_MENUITEM,
      "menuitem": MenuitemJson.toJSON(menuitem)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, menuitem: Menuitem) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_MENUITEM,
      "menuitem": MenuitemJson.toJSON(menuitem)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, menuitem: Menuitem) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_MENUITEM,
      "menuitem": MenuitemJson.toJSON(menuitem)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsmenuitemsuper;
