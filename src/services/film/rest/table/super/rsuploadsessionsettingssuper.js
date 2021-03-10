//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in uploadsessionsettings.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Uploadsessionsettingspk } from '../../../../../data/film/table/super/uploadsessionsettingssuper.js';
import Uploadsessionsettings from '../../../../../data/film/table/uploadsessionsettings.js';
import UploadsessionsettingsJson from '../conversion/uploadsessionsettingsjson.js';


class Rsuploadsessionsettingssuper extends Filmservice {	

	static restservice = 'rsuploadsessionsettings';

	//SELECT OPERATIONS
	static SELECT_UPLOADSESSIONSETTINGS = 2;
	static SELECT_Siteusergroup = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_UPLOADSESSIONSETTINGS = 10;

	//INSERT OPERATIONS
	static INSERT_UPLOADSESSIONSETTINGS = 20;

	//DELETE OPERATIONS
	static DELETE_UPLOADSESSIONSETTINGS = 30;

	static extractDataArray = (jsonarray): Uploadsessionsettings[] => {
		let uploadsessionsettingss: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			uploadsessionsettingss.push(UploadsessionsettingsJson.fromJSON(jsonarray[i]));
		}
   	return uploadsessionsettingss;
	}

	static extractDataObject = (jsonobject): Uploadsessionsettings => {
    return UploadsessionsettingsJson.fromJSON(jsonobject);
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

	static getOne = async (uploadsessionsettingspk: Uploadsessionsettingspk): Uploadsessionsettings => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_UPLOADSESSIONSETTINGS },
      "uploadsessionsettingspk": UploadsessionsettingsJson.PKtoJSON(uploadsessionsettingspk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static search = async (uploadsessionsettingssearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": uploadsessionsettingssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (uploadsessionsettingssearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": uploadsessionsettingssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (uploadsessionsettings: Uploadsessionsettings) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_UPLOADSESSIONSETTINGS },
     	"uploadsessionsettings": UploadsessionsettingsJson.toJSON(uploadsessionsettings)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (uploadsessionsettings: Uploadsessionsettings) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_UPLOADSESSIONSETTINGS },
     	"uploadsessionsettings": UploadsessionsettingsJson.toJSON(uploadsessionsettings)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (uploadsessionsettings: Uploadsessionsettings) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_UPLOADSESSIONSETTINGS },
     	"uploadsessionsettings": UploadsessionsettingsJson.toJSON(uploadsessionsettings)
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

	static sec_getOne = async (user, uploadsessionsettingspk: Uploadsessionsettingspk): Uploadsessionsettings => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_UPLOADSESSIONSETTINGS },
      "uploadsessionsettingspk": UploadsessionsettingsJson.PKtoJSON(uploadsessionsettingspk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, uploadsessionsettingssearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": uploadsessionsettingssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, uploadsessionsettingssearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": uploadsessionsettingssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, uploadsessionsettings: Uploadsessionsettings) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_UPLOADSESSIONSETTINGS },
     	"uploadsessionsettings": UploadsessionsettingsJson.toJSON(uploadsessionsettings)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, uploadsessionsettings: Uploadsessionsettings) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_UPLOADSESSIONSETTINGS },
     	"uploadsessionsettings": UploadsessionsettingsJson.toJSON(uploadsessionsettings)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, uploadsessionsettings: Uploadsessionsettings) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_UPLOADSESSIONSETTINGS },
     	"uploadsessionsettings": UploadsessionsettingsJson.toJSON(uploadsessionsettings)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsuploadsessionsettingssuper;
