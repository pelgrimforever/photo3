//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in creator.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Creatorpk } from '../../../../../data/film/table/super/creatorsuper.js';
import Creator from '../../../../../data/film/table/creator.js';
import CreatorJson from '../conversion/creatorjson.js';


class Rscreatorsuper extends Filmservice {	

	static restservice = 'rscreator';

	//SELECT OPERATIONS
	static SELECT_CREATOR = 2;
	static SELECT_Siteusergroup = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_CREATOR = 10;

	//INSERT OPERATIONS
	static INSERT_CREATOR = 20;

	//DELETE OPERATIONS
	static DELETE_CREATOR = 30;

	static extractDataArray = (jsonarray): Creator[] => {
		let creators: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			creators.push(CreatorJson.fromJSON(jsonarray[i]));
		}
   	return creators;
	}

	static extractDataObject = (jsonobject): Creator => {
    return CreatorJson.fromJSON(jsonobject);
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

	static getOne = async (creatorpk: Creatorpk): Creator => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_CREATOR },
      "creatorpk": CreatorJson.PKtoJSON(creatorpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static search = async (creatorsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": creatorsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (creatorsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": creatorsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (creator: Creator) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_CREATOR },
     	"creator": CreatorJson.toJSON(creator)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (creator: Creator) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_CREATOR },
     	"creator": CreatorJson.toJSON(creator)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (creator: Creator) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_CREATOR },
     	"creator": CreatorJson.toJSON(creator)
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

	static sec_getOne = async (user, creatorpk: Creatorpk): Creator => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_CREATOR },
      "creatorpk": CreatorJson.PKtoJSON(creatorpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, creatorsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": creatorsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, creatorsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": creatorsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, creator: Creator) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_CREATOR },
     	"creator": CreatorJson.toJSON(creator)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, creator: Creator) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_CREATOR },
     	"creator": CreatorJson.toJSON(creator)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, creator: Creator) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_CREATOR },
     	"creator": CreatorJson.toJSON(creator)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rscreatorsuper;
