//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in artsubgroup.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Artsubgrouppk } from '../../../../../data/film/table/super/artsubgroupsuper.js';
import Artsubgroup from '../../../../../data/film/table/artsubgroup.js';
import ArtsubgroupJson from '../conversion/artsubgroupjson.js';
import { Artgrouppk } from '../../../../../data/film/table/super/artgroupsuper.js';
import ArtgroupJson from '../conversion/artgroupjson.js';


class Rsartsubgroupsuper extends Filmservice {	

	static restservice = 'rsart_subgroup';

	//SELECT OPERATIONS
	static SELECT_ARTSUBGROUP = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Artgroup = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_ARTSUBGROUP = 10;

	//INSERT OPERATIONS
	static INSERT_ARTSUBGROUP = 20;

	//DELETE OPERATIONS
	static DELETE_Artgroup = 100 + 1;
	static DELETE_ARTSUBGROUP = 30;

	static extractDataArray = (jsonarray): Artsubgroup[] => {
		let artsubgroups: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			artsubgroups.push(ArtsubgroupJson.fromJSON(jsonarray[i]));
		}
   	return artsubgroups;
	}

	static extractDataObject = (jsonobject): Artsubgroup => {
    return ArtsubgroupJson.fromJSON(jsonobject);
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

	static getOne = async (artsubgrouppk: Artsubgrouppk): Artsubgroup => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_ARTSUBGROUP },
      "artsubgrouppk": ArtsubgroupJson.PKtoJSON(artsubgrouppk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadArtsubgroups4artgroup = async (artgrouppk: Artgrouppk): Artsubgroup[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Artgroup },
     	"artgrouppk": ArtgroupJson.PKtoJSON(artgrouppk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (artsubgroupsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": artsubgroupsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (artsubgroupsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": artsubgroupsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (artsubgroup: Artsubgroup) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_ARTSUBGROUP },
     	"artsubgroup": ArtsubgroupJson.toJSON(artsubgroup)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (artsubgroup: Artsubgroup) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_ARTSUBGROUP },
     	"artsubgroup": ArtsubgroupJson.toJSON(artsubgroup)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (artsubgroup: Artsubgroup) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_ARTSUBGROUP },
     	"artsubgroup": ArtsubgroupJson.toJSON(artsubgroup)
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

	static sec_getOne = async (user, artsubgrouppk: Artsubgrouppk): Artsubgroup => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_ARTSUBGROUP },
      "artsubgrouppk": ArtsubgroupJson.PKtoJSON(artsubgrouppk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadArtsubgroups4artgroup = async (user, artgrouppk: Artsubgrouppk): Artsubgroup[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Artgroup },
     	"artgrouppk": ArtgroupJson.PKtoJSON(artgrouppk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, artsubgroupsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": artsubgroupsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, artsubgroupsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": artsubgroupsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, artsubgroup: Artsubgroup) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_ARTSUBGROUP },
     	"artsubgroup": ArtsubgroupJson.toJSON(artsubgroup)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, artsubgroup: Artsubgroup) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_ARTSUBGROUP },
     	"artsubgroup": ArtsubgroupJson.toJSON(artsubgroup)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, artsubgroup: Artsubgroup) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_ARTSUBGROUP },
     	"artsubgroup": ArtsubgroupJson.toJSON(artsubgroup)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsartsubgroupsuper;
