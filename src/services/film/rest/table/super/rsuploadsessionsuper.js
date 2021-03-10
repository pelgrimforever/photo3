//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in uploadsession.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Uploadsessionpk } from '../../../../../data/film/table/super/uploadsessionsuper.js';
import Uploadsession from '../../../../../data/film/table/uploadsession.js';
import UploadsessionJson from '../conversion/uploadsessionjson.js';
import { Creatorpk } from '../../../../../data/film/table/super/creatorsuper.js';
import CreatorJson from '../conversion/creatorjson.js';


class Rsuploadsessionsuper extends Filmservice {	

	static restservice = 'rsuploadsession';

	//SELECT OPERATIONS
	static SELECT_UPLOADSESSION = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Creator = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_UPLOADSESSION = 10;

	//INSERT OPERATIONS
	static INSERT_UPLOADSESSION = 20;

	//DELETE OPERATIONS
	static DELETE_Creator = 100 + 1;
	static DELETE_UPLOADSESSION = 30;

	static extractDataArray = (jsonarray): Uploadsession[] => {
		let uploadsessions: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			uploadsessions.push(UploadsessionJson.fromJSON(jsonarray[i]));
		}
   	return uploadsessions;
	}

	static extractDataObject = (jsonobject): Uploadsession => {
    return UploadsessionJson.fromJSON(jsonobject);
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

	static getOne = async (uploadsessionpk: Uploadsessionpk): Uploadsession => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_UPLOADSESSION },
      "uploadsessionpk": UploadsessionJson.PKtoJSON(uploadsessionpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadUploadsessions4creator = async (creatorpk: Creatorpk): Uploadsession[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Creator },
     	"creatorpk": CreatorJson.PKtoJSON(creatorpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (uploadsessionsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": uploadsessionsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (uploadsessionsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": uploadsessionsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (uploadsession: Uploadsession) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_UPLOADSESSION },
     	"uploadsession": UploadsessionJson.toJSON(uploadsession)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (uploadsession: Uploadsession) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_UPLOADSESSION },
     	"uploadsession": UploadsessionJson.toJSON(uploadsession)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (uploadsession: Uploadsession) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_UPLOADSESSION },
     	"uploadsession": UploadsessionJson.toJSON(uploadsession)
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

	static sec_getOne = async (user, uploadsessionpk: Uploadsessionpk): Uploadsession => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_UPLOADSESSION },
      "uploadsessionpk": UploadsessionJson.PKtoJSON(uploadsessionpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadUploadsessions4creator = async (user, creatorpk: Uploadsessionpk): Uploadsession[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Creator },
     	"creatorpk": CreatorJson.PKtoJSON(creatorpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, uploadsessionsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": uploadsessionsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, uploadsessionsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": uploadsessionsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, uploadsession: Uploadsession) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_UPLOADSESSION },
     	"uploadsession": UploadsessionJson.toJSON(uploadsession)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, uploadsession: Uploadsession) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_UPLOADSESSION },
     	"uploadsession": UploadsessionJson.toJSON(uploadsession)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, uploadsession: Uploadsession) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_UPLOADSESSION },
     	"uploadsession": UploadsessionJson.toJSON(uploadsession)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsuploadsessionsuper;
