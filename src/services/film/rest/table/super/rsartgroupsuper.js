//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in artgroup.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Artgrouppk } from '../../../../../data/film/table/super/artgroupsuper.js';
import Artgroup from '../../../../../data/film/table/artgroup.js';
import ArtgroupJson from '../conversion/artgroupjson.js';


class Rsartgroupsuper extends Filmservice {	

	static restservice = 'rsart_group';

	//SELECT OPERATIONS
	static SELECT_ARTGROUP = 2;
	static SELECT_Siteusergroup = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_ARTGROUP = 10;

	//INSERT OPERATIONS
	static INSERT_ARTGROUP = 20;

	//DELETE OPERATIONS
	static DELETE_ARTGROUP = 30;

	static extractDataArray = (jsonarray): Artgroup[] => {
		let artgroups: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			artgroups.push(ArtgroupJson.fromJSON(jsonarray[i]));
		}
   	return artgroups;
	}

	static extractDataObject = (jsonobject): Artgroup => {
    return ArtgroupJson.fromJSON(jsonobject);
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

	static getOne = async (artgrouppk: Artgrouppk): Artgroup => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_ARTGROUP },
      "artgrouppk": ArtgroupJson.PKtoJSON(artgrouppk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static search = async (artgroupsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": artgroupsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (artgroupsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": artgroupsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (artgroup: Artgroup) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_ARTGROUP },
     	"artgroup": ArtgroupJson.toJSON(artgroup)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (artgroup: Artgroup) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_ARTGROUP },
     	"artgroup": ArtgroupJson.toJSON(artgroup)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (artgroup: Artgroup) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_ARTGROUP },
     	"artgroup": ArtgroupJson.toJSON(artgroup)
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

	static sec_getOne = async (user, artgrouppk: Artgrouppk): Artgroup => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_ARTGROUP },
      "artgrouppk": ArtgroupJson.PKtoJSON(artgrouppk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, artgroupsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": artgroupsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, artgroupsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": artgroupsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, artgroup: Artgroup) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_ARTGROUP },
     	"artgroup": ArtgroupJson.toJSON(artgroup)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, artgroup: Artgroup) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_ARTGROUP },
     	"artgroup": ArtgroupJson.toJSON(artgroup)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, artgroup: Artgroup) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_ARTGROUP },
     	"artgroup": ArtgroupJson.toJSON(artgroup)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsartgroupsuper;
