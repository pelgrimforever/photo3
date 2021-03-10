//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in menuitem.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Menuitempk } from '../../../../../data/film/table/super/menuitemsuper.js';
import Menuitem from '../../../../../data/film/table/menuitem.js';
import MenuitemJson from '../conversion/menuitemjson.js';
import { Menupk } from '../../../../../data/film/table/super/menusuper.js';
import MenuJson from '../conversion/menujson.js';


class Rsmenuitemsuper extends Filmservice {	

	static restservice = 'rsmenuitem';

	//SELECT OPERATIONS
	static SELECT_MENUITEM = 2;
	static SELECT_Siteusergroup = 100 + 0;
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

	static getcount = async () => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_COUNT }
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

  static getall = async () => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static getOne = async (menuitempk: Menuitempk): Menuitem => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_MENUITEM },
      "menuitempk": MenuitemJson.PKtoJSON(menuitempk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadMenuitems4menu = async (menupk: Menupk): Menuitem[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Menu },
     	"menupk": MenuJson.PKtoJSON(menupk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (menuitemsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": menuitemsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (menuitemsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": menuitemsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (menuitem: Menuitem) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_MENUITEM },
     	"menuitem": MenuitemJson.toJSON(menuitem)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (menuitem: Menuitem) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_MENUITEM },
     	"menuitem": MenuitemJson.toJSON(menuitem)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (menuitem: Menuitem) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_MENUITEM },
     	"menuitem": MenuitemJson.toJSON(menuitem)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION START

	static sec_getcount = async (user) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: super.SELECT_COUNT }
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

  static sec_getall = async (user) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_getOne = async (user, menuitempk: Menuitempk): Menuitem => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_MENUITEM },
      "menuitempk": MenuitemJson.PKtoJSON(menuitempk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadMenuitems4menu = async (user, menupk: Menuitempk): Menuitem[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Menu },
     	"menupk": MenuJson.PKtoJSON(menupk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, menuitemsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": menuitemsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, menuitemsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": menuitemsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, menuitem: Menuitem) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_MENUITEM },
     	"menuitem": MenuitemJson.toJSON(menuitem)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, menuitem: Menuitem) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_MENUITEM },
     	"menuitem": MenuitemJson.toJSON(menuitem)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, menuitem: Menuitem) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_MENUITEM },
     	"menuitem": MenuitemJson.toJSON(menuitem)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsmenuitemsuper;
