//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in menu.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2021 11:47
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

	static restservice = 'rsmenu';

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

	static getOne = async (menupk: Menupk): Menu => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_MENU },
      "menupk": MenuJson.PKtoJSON(menupk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadMenus4mainmenu = async (mainmenupk: Mainmenupk): Menu[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Mainmenu },
     	"mainmenupk": MainmenuJson.PKtoJSON(mainmenupk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadMenu4menuitem = async (menuitempk: Menuitempk): Menu[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Menuitem },
     	"menuitempk": MenuitemJson.PKtoJSON(menuitempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (menusearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": menusearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (menusearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": menusearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (menu: Menu) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_MENU },
     	"menu": MenuJson.toJSON(menu)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (menu: Menu) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_MENU },
     	"menu": MenuJson.toJSON(menu)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (menu: Menu) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_MENU },
     	"menu": MenuJson.toJSON(menu)
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

	static sec_getOne = async (user, menupk: Menupk): Menu => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_MENU },
      "menupk": MenuJson.PKtoJSON(menupk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadMenus4mainmenu = async (user, mainmenupk: Menupk): Menu[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Mainmenu },
     	"mainmenupk": MainmenuJson.PKtoJSON(mainmenupk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadMenu4menuitem = async (user, menuitempk: Menuitempk): Menu[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Menuitem },
     	"menuitempk": MenuitemJson.PKtoJSON(menuitempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, menusearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": menusearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, menusearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": menusearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, menu: Menu) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_MENU },
     	"menu": MenuJson.toJSON(menu)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, menu: Menu) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_MENU },
     	"menu": MenuJson.toJSON(menu)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, menu: Menu) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_MENU },
     	"menu": MenuJson.toJSON(menu)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsmenusuper;