//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in artacademy.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Artacademypk } from '../../../../../data/film/table/super/artacademysuper.js';
import Artacademy from '../../../../../data/film/table/artacademy.js';
import ArtacademyJson from '../conversion/artacademyjson.js';


class Rsartacademysuper extends Filmservice {	

	static restservice = 'rsart_academy';

	//SELECT OPERATIONS
	static SELECT_ARTACADEMY = 2;
	static SELECT_Siteusergroup = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_ARTACADEMY = 10;

	//INSERT OPERATIONS
	static INSERT_ARTACADEMY = 20;

	//DELETE OPERATIONS
	static DELETE_ARTACADEMY = 30;

	static extractDataArray = (jsonarray): Artacademy[] => {
		let artacademys: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			artacademys.push(ArtacademyJson.fromJSON(jsonarray[i]));
		}
   	return artacademys;
	}

	static extractDataObject = (jsonobject): Artacademy => {
    return ArtacademyJson.fromJSON(jsonobject);
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

	static getOne = async (artacademypk: Artacademypk): Artacademy => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_ARTACADEMY },
      "artacademypk": ArtacademyJson.PKtoJSON(artacademypk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static search = async (artacademysearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": artacademysearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (artacademysearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": artacademysearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (artacademy: Artacademy) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_ARTACADEMY },
     	"artacademy": ArtacademyJson.toJSON(artacademy)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (artacademy: Artacademy) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_ARTACADEMY },
     	"artacademy": ArtacademyJson.toJSON(artacademy)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (artacademy: Artacademy) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_ARTACADEMY },
     	"artacademy": ArtacademyJson.toJSON(artacademy)
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

	static sec_getOne = async (user, artacademypk: Artacademypk): Artacademy => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_ARTACADEMY },
      "artacademypk": ArtacademyJson.PKtoJSON(artacademypk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, artacademysearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": artacademysearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, artacademysearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": artacademysearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, artacademy: Artacademy) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_ARTACADEMY },
     	"artacademy": ArtacademyJson.toJSON(artacademy)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, artacademy: Artacademy) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_ARTACADEMY },
     	"artacademy": ArtacademyJson.toJSON(artacademy)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, artacademy: Artacademy) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_ARTACADEMY },
     	"artacademy": ArtacademyJson.toJSON(artacademy)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsartacademysuper;
