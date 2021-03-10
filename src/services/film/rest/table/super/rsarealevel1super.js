//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in arealevel1.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Arealevel1pk } from '../../../../../data/film/table/super/arealevel1super.js';
import Arealevel1 from '../../../../../data/film/table/arealevel1.js';
import Arealevel1Json from '../conversion/arealevel1json.js';
import { Countrypk } from '../../../../../data/film/table/super/countrysuper.js';
import CountryJson from '../conversion/countryjson.js';
import { Arealevel2pk } from '../../../../../data/film/table/super/arealevel2super.js';
import Arealevel2Json from '../conversion/arealevel2json.js';


class Rsarealevel1super extends Filmservice {	

	static restservice = 'rsarealevel1';

	//SELECT OPERATIONS
	static SELECT_AREALEVEL1 = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Country = 100 + 0;
	static SELECT_Arealevel2 = 100 + 1;

	//UPDATE OPERATIONS
	static UPDATE_AREALEVEL1 = 10;

	//INSERT OPERATIONS
	static INSERT_AREALEVEL1 = 20;

	//DELETE OPERATIONS
	static DELETE_Country = 100 + 2;
	static DELETE_AREALEVEL1 = 30;

	static extractDataArray = (jsonarray): Arealevel1[] => {
		let arealevel1s: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			arealevel1s.push(Arealevel1Json.fromJSON(jsonarray[i]));
		}
   	return arealevel1s;
	}

	static extractDataObject = (jsonobject): Arealevel1 => {
    return Arealevel1Json.fromJSON(jsonobject);
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

	static getOne = async (arealevel1pk: Arealevel1pk): Arealevel1 => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_AREALEVEL1 },
      "arealevel1pk": Arealevel1Json.PKtoJSON(arealevel1pk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadArealevel1s4country = async (countrypk: Countrypk): Arealevel1[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Country },
     	"countrypk": CountryJson.PKtoJSON(countrypk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadArealevel14arealevel2 = async (arealevel2pk: Arealevel2pk): Arealevel1[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Arealevel2 },
     	"arealevel2pk": Arealevel2Json.PKtoJSON(arealevel2pk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (arealevel1searcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": arealevel1searcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (arealevel1searcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": arealevel1searcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (arealevel1: Arealevel1) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_AREALEVEL1 },
     	"arealevel1": Arealevel1Json.toJSON(arealevel1)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (arealevel1: Arealevel1) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_AREALEVEL1 },
     	"arealevel1": Arealevel1Json.toJSON(arealevel1)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (arealevel1: Arealevel1) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_AREALEVEL1 },
     	"arealevel1": Arealevel1Json.toJSON(arealevel1)
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

	static sec_getOne = async (user, arealevel1pk: Arealevel1pk): Arealevel1 => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_AREALEVEL1 },
      "arealevel1pk": Arealevel1Json.PKtoJSON(arealevel1pk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadArealevel1s4country = async (user, countrypk: Arealevel1pk): Arealevel1[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Country },
     	"countrypk": CountryJson.PKtoJSON(countrypk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadArealevel14arealevel2 = async (user, arealevel2pk: Arealevel2pk): Arealevel1[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Arealevel2 },
     	"arealevel2pk": Arealevel2Json.PKtoJSON(arealevel2pk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, arealevel1searcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": arealevel1searcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, arealevel1searcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": arealevel1searcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, arealevel1: Arealevel1) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_AREALEVEL1 },
     	"arealevel1": Arealevel1Json.toJSON(arealevel1)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, arealevel1: Arealevel1) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_AREALEVEL1 },
     	"arealevel1": Arealevel1Json.toJSON(arealevel1)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, arealevel1: Arealevel1) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_AREALEVEL1 },
     	"arealevel1": Arealevel1Json.toJSON(arealevel1)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsarealevel1super;
