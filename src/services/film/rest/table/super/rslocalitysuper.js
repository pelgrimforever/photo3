//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in locality.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Localitypk } from '../../../../../data/film/table/super/localitysuper.js';
import Locality from '../../../../../data/film/table/locality.js';
import LocalityJson from '../conversion/localityjson.js';
import { Postalcodepk } from '../../../../../data/film/table/super/postalcodesuper.js';
import PostalcodeJson from '../conversion/postalcodejson.js';
import { Sublocalitypk } from '../../../../../data/film/table/super/sublocalitysuper.js';
import SublocalityJson from '../conversion/sublocalityjson.js';


class Rslocalitysuper extends Filmservice {	

	static restservice = 'rslocality';

	//SELECT OPERATIONS
	static SELECT_LOCALITY = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Postalcode = 100 + 0;
	static SELECT_Sublocality = 100 + 1;

	//UPDATE OPERATIONS
	static UPDATE_LOCALITY = 10;

	//INSERT OPERATIONS
	static INSERT_LOCALITY = 20;

	//DELETE OPERATIONS
	static DELETE_Postalcode = 100 + 2;
	static DELETE_LOCALITY = 30;

	static extractDataArray = (jsonarray): Locality[] => {
		let localitys: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			localitys.push(LocalityJson.fromJSON(jsonarray[i]));
		}
   	return localitys;
	}

	static extractDataObject = (jsonobject): Locality => {
    return LocalityJson.fromJSON(jsonobject);
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

	static getOne = async (localitypk: Localitypk): Locality => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_LOCALITY },
      "localitypk": LocalityJson.PKtoJSON(localitypk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadLocalitys4postalcode = async (postalcodepk: Postalcodepk): Locality[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Postalcode },
     	"postalcodepk": PostalcodeJson.PKtoJSON(postalcodepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadLocality4sublocality = async (sublocalitypk: Sublocalitypk): Locality[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Sublocality },
     	"sublocalitypk": SublocalityJson.PKtoJSON(sublocalitypk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (localitysearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": localitysearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (localitysearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": localitysearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (locality: Locality) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_LOCALITY },
     	"locality": LocalityJson.toJSON(locality)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (locality: Locality) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_LOCALITY },
     	"locality": LocalityJson.toJSON(locality)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (locality: Locality) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_LOCALITY },
     	"locality": LocalityJson.toJSON(locality)
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

	static sec_getOne = async (user, localitypk: Localitypk): Locality => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_LOCALITY },
      "localitypk": LocalityJson.PKtoJSON(localitypk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadLocalitys4postalcode = async (user, postalcodepk: Localitypk): Locality[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Postalcode },
     	"postalcodepk": PostalcodeJson.PKtoJSON(postalcodepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadLocality4sublocality = async (user, sublocalitypk: Sublocalitypk): Locality[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Sublocality },
     	"sublocalitypk": SublocalityJson.PKtoJSON(sublocalitypk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, localitysearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": localitysearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, localitysearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": localitysearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, locality: Locality) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_LOCALITY },
     	"locality": LocalityJson.toJSON(locality)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, locality: Locality) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_LOCALITY },
     	"locality": LocalityJson.toJSON(locality)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, locality: Locality) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_LOCALITY },
     	"locality": LocalityJson.toJSON(locality)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rslocalitysuper;
