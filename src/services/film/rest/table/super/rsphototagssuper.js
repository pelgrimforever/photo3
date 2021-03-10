//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in phototags.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Phototagspk } from '../../../../../data/film/table/super/phototagssuper.js';
import Phototags from '../../../../../data/film/table/phototags.js';
import PhototagsJson from '../conversion/phototagsjson.js';
import { Photopk } from '../../../../../data/film/table/super/photosuper.js';
import PhotoJson from '../conversion/photojson.js';


class Rsphototagssuper extends Filmservice {	

	static restservice = 'rsphototags';

	//SELECT OPERATIONS
	static SELECT_PHOTOTAGS = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Photo = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_PHOTOTAGS = 10;

	//INSERT OPERATIONS
	static INSERT_PHOTOTAGS = 20;

	//DELETE OPERATIONS
	static DELETE_Photo = 100 + 1;
	static DELETE_PHOTOTAGS = 30;

	static extractDataArray = (jsonarray): Phototags[] => {
		let phototagss: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			phototagss.push(PhototagsJson.fromJSON(jsonarray[i]));
		}
   	return phototagss;
	}

	static extractDataObject = (jsonobject): Phototags => {
    return PhototagsJson.fromJSON(jsonobject);
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

	static getOne = async (phototagspk: Phototagspk): Phototags => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_PHOTOTAGS },
      "phototagspk": PhototagsJson.PKtoJSON(phototagspk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadPhototagss4photo = async (photopk: Photopk): Phototags[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Photo },
     	"photopk": PhotoJson.PKtoJSON(photopk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (phototagssearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": phototagssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (phototagssearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": phototagssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (phototags: Phototags) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_PHOTOTAGS },
     	"phototags": PhototagsJson.toJSON(phototags)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (phototags: Phototags) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_PHOTOTAGS },
     	"phototags": PhototagsJson.toJSON(phototags)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (phototags: Phototags) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_PHOTOTAGS },
     	"phototags": PhototagsJson.toJSON(phototags)
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

	static sec_getOne = async (user, phototagspk: Phototagspk): Phototags => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_PHOTOTAGS },
      "phototagspk": PhototagsJson.PKtoJSON(phototagspk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadPhototagss4photo = async (user, photopk: Phototagspk): Phototags[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Photo },
     	"photopk": PhotoJson.PKtoJSON(photopk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, phototagssearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": phototagssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, phototagssearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": phototagssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, phototags: Phototags) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_PHOTOTAGS },
     	"phototags": PhototagsJson.toJSON(phototags)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, phototags: Phototags) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_PHOTOTAGS },
     	"phototags": PhototagsJson.toJSON(phototags)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, phototags: Phototags) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_PHOTOTAGS },
     	"phototags": PhototagsJson.toJSON(phototags)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsphototagssuper;
