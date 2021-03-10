//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in spatialrefsys.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Spatialrefsyspk } from '../../../../../data/film/table/super/spatialrefsyssuper.js';
import Spatialrefsys from '../../../../../data/film/table/spatialrefsys.js';
import SpatialrefsysJson from '../conversion/spatialrefsysjson.js';


class Rsspatialrefsyssuper extends Filmservice {	

	static restservice = 'rsspatial_ref_sys';

	//SELECT OPERATIONS
	static SELECT_SPATIALREFSYS = 2;
	static SELECT_Siteusergroup = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_SPATIALREFSYS = 10;

	//INSERT OPERATIONS
	static INSERT_SPATIALREFSYS = 20;

	//DELETE OPERATIONS
	static DELETE_SPATIALREFSYS = 30;

	static extractDataArray = (jsonarray): Spatialrefsys[] => {
		let spatialrefsyss: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			spatialrefsyss.push(SpatialrefsysJson.fromJSON(jsonarray[i]));
		}
   	return spatialrefsyss;
	}

	static extractDataObject = (jsonobject): Spatialrefsys => {
    return SpatialrefsysJson.fromJSON(jsonobject);
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

	static getOne = async (spatialrefsyspk: Spatialrefsyspk): Spatialrefsys => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SPATIALREFSYS },
      "spatialrefsyspk": SpatialrefsysJson.PKtoJSON(spatialrefsyspk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static search = async (spatialrefsyssearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": spatialrefsyssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (spatialrefsyssearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": spatialrefsyssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (spatialrefsys: Spatialrefsys) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_SPATIALREFSYS },
     	"spatialrefsys": SpatialrefsysJson.toJSON(spatialrefsys)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (spatialrefsys: Spatialrefsys) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_SPATIALREFSYS },
     	"spatialrefsys": SpatialrefsysJson.toJSON(spatialrefsys)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (spatialrefsys: Spatialrefsys) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_SPATIALREFSYS },
     	"spatialrefsys": SpatialrefsysJson.toJSON(spatialrefsys)
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

	static sec_getOne = async (user, spatialrefsyspk: Spatialrefsyspk): Spatialrefsys => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SPATIALREFSYS },
      "spatialrefsyspk": SpatialrefsysJson.PKtoJSON(spatialrefsyspk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, spatialrefsyssearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": spatialrefsyssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, spatialrefsyssearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": spatialrefsyssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, spatialrefsys: Spatialrefsys) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_SPATIALREFSYS },
     	"spatialrefsys": SpatialrefsysJson.toJSON(spatialrefsys)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, spatialrefsys: Spatialrefsys) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_SPATIALREFSYS },
     	"spatialrefsys": SpatialrefsysJson.toJSON(spatialrefsys)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, spatialrefsys: Spatialrefsys) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_SPATIALREFSYS },
     	"spatialrefsys": SpatialrefsysJson.toJSON(spatialrefsys)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsspatialrefsyssuper;
