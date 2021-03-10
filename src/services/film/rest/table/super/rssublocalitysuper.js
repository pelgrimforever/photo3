//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in sublocality.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Sublocalitypk } from '../../../../../data/film/table/super/sublocalitysuper.js';
import Sublocality from '../../../../../data/film/table/sublocality.js';
import SublocalityJson from '../conversion/sublocalityjson.js';
import { Localitypk } from '../../../../../data/film/table/super/localitysuper.js';
import LocalityJson from '../conversion/localityjson.js';
import { Routepk } from '../../../../../data/film/table/super/routesuper.js';
import RouteJson from '../conversion/routejson.js';


class Rssublocalitysuper extends Filmservice {	

	static restservice = 'rssublocality';

	//SELECT OPERATIONS
	static SELECT_SUBLOCALITY = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Locality = 100 + 0;
	static SELECT_Route = 100 + 1;

	//UPDATE OPERATIONS
	static UPDATE_SUBLOCALITY = 10;

	//INSERT OPERATIONS
	static INSERT_SUBLOCALITY = 20;

	//DELETE OPERATIONS
	static DELETE_Locality = 100 + 2;
	static DELETE_SUBLOCALITY = 30;

	static extractDataArray = (jsonarray): Sublocality[] => {
		let sublocalitys: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			sublocalitys.push(SublocalityJson.fromJSON(jsonarray[i]));
		}
   	return sublocalitys;
	}

	static extractDataObject = (jsonobject): Sublocality => {
    return SublocalityJson.fromJSON(jsonobject);
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

	static getOne = async (sublocalitypk: Sublocalitypk): Sublocality => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SUBLOCALITY },
      "sublocalitypk": SublocalityJson.PKtoJSON(sublocalitypk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadSublocalitys4locality = async (localitypk: Localitypk): Sublocality[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Locality },
     	"localitypk": LocalityJson.PKtoJSON(localitypk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadSublocality4route = async (routepk: Routepk): Sublocality[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Route },
     	"routepk": RouteJson.PKtoJSON(routepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (sublocalitysearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": sublocalitysearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (sublocalitysearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": sublocalitysearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (sublocality: Sublocality) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_SUBLOCALITY },
     	"sublocality": SublocalityJson.toJSON(sublocality)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (sublocality: Sublocality) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_SUBLOCALITY },
     	"sublocality": SublocalityJson.toJSON(sublocality)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (sublocality: Sublocality) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_SUBLOCALITY },
     	"sublocality": SublocalityJson.toJSON(sublocality)
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

	static sec_getOne = async (user, sublocalitypk: Sublocalitypk): Sublocality => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SUBLOCALITY },
      "sublocalitypk": SublocalityJson.PKtoJSON(sublocalitypk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadSublocalitys4locality = async (user, localitypk: Sublocalitypk): Sublocality[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Locality },
     	"localitypk": LocalityJson.PKtoJSON(localitypk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadSublocality4route = async (user, routepk: Routepk): Sublocality[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Route },
     	"routepk": RouteJson.PKtoJSON(routepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, sublocalitysearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": sublocalitysearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, sublocalitysearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": sublocalitysearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, sublocality: Sublocality) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_SUBLOCALITY },
     	"sublocality": SublocalityJson.toJSON(sublocality)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, sublocality: Sublocality) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_SUBLOCALITY },
     	"sublocality": SublocalityJson.toJSON(sublocality)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, sublocality: Sublocality) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_SUBLOCALITY },
     	"sublocality": SublocalityJson.toJSON(sublocality)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rssublocalitysuper;
