//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in postalcode.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Postalcodepk } from '../../../../../data/film/table/super/postalcodesuper.js';
import Postalcode from '../../../../../data/film/table/postalcode.js';
import PostalcodeJson from '../conversion/postalcodejson.js';
import { Arealevel3pk } from '../../../../../data/film/table/super/arealevel3super.js';
import Arealevel3Json from '../conversion/arealevel3json.js';
import { Localitypk } from '../../../../../data/film/table/super/localitysuper.js';
import LocalityJson from '../conversion/localityjson.js';


class Rspostalcodesuper extends Filmservice {	

	static restservice = 'rspostalcode';

	//SELECT OPERATIONS
	static SELECT_POSTALCODE = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Arealevel3 = 100 + 0;
	static SELECT_Locality = 100 + 1;

	//UPDATE OPERATIONS
	static UPDATE_POSTALCODE = 10;

	//INSERT OPERATIONS
	static INSERT_POSTALCODE = 20;

	//DELETE OPERATIONS
	static DELETE_Arealevel3 = 100 + 2;
	static DELETE_POSTALCODE = 30;

	static extractDataArray = (jsonarray): Postalcode[] => {
		let postalcodes: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			postalcodes.push(PostalcodeJson.fromJSON(jsonarray[i]));
		}
   	return postalcodes;
	}

	static extractDataObject = (jsonobject): Postalcode => {
    return PostalcodeJson.fromJSON(jsonobject);
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

	static getOne = async (postalcodepk: Postalcodepk): Postalcode => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_POSTALCODE },
      "postalcodepk": PostalcodeJson.PKtoJSON(postalcodepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadPostalcodes4arealevel3 = async (arealevel3pk: Arealevel3pk): Postalcode[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Arealevel3 },
     	"arealevel3pk": Arealevel3Json.PKtoJSON(arealevel3pk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadPostalcode4locality = async (localitypk: Localitypk): Postalcode[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Locality },
     	"localitypk": LocalityJson.PKtoJSON(localitypk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (postalcodesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": postalcodesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (postalcodesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": postalcodesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (postalcode: Postalcode) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_POSTALCODE },
     	"postalcode": PostalcodeJson.toJSON(postalcode)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (postalcode: Postalcode) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_POSTALCODE },
     	"postalcode": PostalcodeJson.toJSON(postalcode)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (postalcode: Postalcode) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_POSTALCODE },
     	"postalcode": PostalcodeJson.toJSON(postalcode)
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

	static sec_getOne = async (user, postalcodepk: Postalcodepk): Postalcode => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_POSTALCODE },
      "postalcodepk": PostalcodeJson.PKtoJSON(postalcodepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadPostalcodes4arealevel3 = async (user, arealevel3pk: Postalcodepk): Postalcode[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Arealevel3 },
     	"arealevel3pk": Arealevel3Json.PKtoJSON(arealevel3pk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadPostalcode4locality = async (user, localitypk: Localitypk): Postalcode[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Locality },
     	"localitypk": LocalityJson.PKtoJSON(localitypk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, postalcodesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": postalcodesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, postalcodesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": postalcodesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, postalcode: Postalcode) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_POSTALCODE },
     	"postalcode": PostalcodeJson.toJSON(postalcode)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, postalcode: Postalcode) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_POSTALCODE },
     	"postalcode": PostalcodeJson.toJSON(postalcode)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, postalcode: Postalcode) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_POSTALCODE },
     	"postalcode": PostalcodeJson.toJSON(postalcode)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rspostalcodesuper;
