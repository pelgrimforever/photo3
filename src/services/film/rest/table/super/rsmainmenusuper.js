//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in mainmenu.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Mainmenupk } from '../../../../../data/film/table/super/mainmenusuper.js';
import Mainmenu from '../../../../../data/film/table/mainmenu.js';
import MainmenuJson from '../conversion/mainmenujson.js';
import { Menupk } from '../../../../../data/film/table/super/menusuper.js';
import MenuJson from '../conversion/menujson.js';


class Rsmainmenusuper extends Filmservice {	

	static restservice = 'rsmainmenu';

	//SELECT OPERATIONS
	static SELECT_MAINMENU = 2;
	static SELECT_Siteusergroup = 100 + 0;
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

	static getOne = async (mainmenupk: Mainmenupk): Mainmenu => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_MAINMENU },
      "mainmenupk": MainmenuJson.PKtoJSON(mainmenupk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadMainmenu4menu = async (menupk: Menupk): Mainmenu[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Menu },
     	"menupk": MenuJson.PKtoJSON(menupk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (mainmenusearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": mainmenusearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (mainmenusearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": mainmenusearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (mainmenu: Mainmenu) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_MAINMENU },
     	"mainmenu": MainmenuJson.toJSON(mainmenu)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (mainmenu: Mainmenu) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_MAINMENU },
     	"mainmenu": MainmenuJson.toJSON(mainmenu)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (mainmenu: Mainmenu) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_MAINMENU },
     	"mainmenu": MainmenuJson.toJSON(mainmenu)
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

	static sec_getOne = async (user, mainmenupk: Mainmenupk): Mainmenu => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_MAINMENU },
      "mainmenupk": MainmenuJson.PKtoJSON(mainmenupk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadMainmenu4menu = async (user, menupk: Menupk): Mainmenu[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Menu },
     	"menupk": MenuJson.PKtoJSON(menupk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, mainmenusearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": mainmenusearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, mainmenusearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": mainmenusearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, mainmenu: Mainmenu) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_MAINMENU },
     	"mainmenu": MainmenuJson.toJSON(mainmenu)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, mainmenu: Mainmenu) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_MAINMENU },
     	"mainmenu": MainmenuJson.toJSON(mainmenu)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, mainmenu: Mainmenu) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_MAINMENU },
     	"mainmenu": MainmenuJson.toJSON(mainmenu)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsmainmenusuper;
