//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in photosubjects.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Photosubjectspk } from '../../../../../data/film/table/super/photosubjectssuper.js';
import Photosubjects from '../../../../../data/film/table/photosubjects.js';
import PhotosubjectsJson from '../conversion/photosubjectsjson.js';
import { Photopk } from '../../../../../data/film/table/super/photosuper.js';
import PhotoJson from '../conversion/photojson.js';
import { Subjectpk } from '../../../../../data/film/table/super/subjectsuper.js';
import SubjectJson from '../conversion/subjectjson.js';


class Rsphotosubjectssuper extends Filmservice {	

	static restservice = 'rsphotosubjects';

	//SELECT OPERATIONS
	static SELECT_PHOTOSUBJECTS = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Photo = 100 + 0;
	static SELECT_Subject = 100 + 1;

	//UPDATE OPERATIONS
	static UPDATE_PHOTOSUBJECTS = 10;

	//INSERT OPERATIONS
	static INSERT_PHOTOSUBJECTS = 20;

	//DELETE OPERATIONS
	static DELETE_Photo = 100 + 2;
	static DELETE_Subject = 100 + 3;
	static DELETE_PHOTOSUBJECTS = 30;

	static extractDataArray = (jsonarray): Photosubjects[] => {
		let photosubjectss: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			photosubjectss.push(PhotosubjectsJson.fromJSON(jsonarray[i]));
		}
   	return photosubjectss;
	}

	static extractDataObject = (jsonobject): Photosubjects => {
    return PhotosubjectsJson.fromJSON(jsonobject);
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

	static getOne = async (photosubjectspk: Photosubjectspk): Photosubjects => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_PHOTOSUBJECTS },
      "photosubjectspk": PhotosubjectsJson.PKtoJSON(photosubjectspk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadPhotosubjectss4photo = async (photopk: Photopk): Photosubjects[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Photo },
     	"photopk": PhotoJson.PKtoJSON(photopk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadPhotosubjectss4subject = async (subjectpk: Subjectpk): Photosubjects[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Subject },
     	"subjectpk": SubjectJson.PKtoJSON(subjectpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (photosubjectssearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": photosubjectssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (photosubjectssearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": photosubjectssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (photosubjects: Photosubjects) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_PHOTOSUBJECTS },
     	"photosubjects": PhotosubjectsJson.toJSON(photosubjects)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (photosubjects: Photosubjects) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_PHOTOSUBJECTS },
     	"photosubjects": PhotosubjectsJson.toJSON(photosubjects)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (photosubjects: Photosubjects) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_PHOTOSUBJECTS },
     	"photosubjects": PhotosubjectsJson.toJSON(photosubjects)
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

	static sec_getOne = async (user, photosubjectspk: Photosubjectspk): Photosubjects => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_PHOTOSUBJECTS },
      "photosubjectspk": PhotosubjectsJson.PKtoJSON(photosubjectspk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadPhotosubjectss4photo = async (user, photopk: Photosubjectspk): Photosubjects[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Photo },
     	"photopk": PhotoJson.PKtoJSON(photopk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadPhotosubjectss4subject = async (user, subjectpk: Photosubjectspk): Photosubjects[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Subject },
     	"subjectpk": SubjectJson.PKtoJSON(subjectpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, photosubjectssearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": photosubjectssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, photosubjectssearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": photosubjectssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, photosubjects: Photosubjects) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_PHOTOSUBJECTS },
     	"photosubjects": PhotosubjectsJson.toJSON(photosubjects)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, photosubjects: Photosubjects) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_PHOTOSUBJECTS },
     	"photosubjects": PhotosubjectsJson.toJSON(photosubjects)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, photosubjects: Photosubjects) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_PHOTOSUBJECTS },
     	"photosubjects": PhotosubjectsJson.toJSON(photosubjects)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsphotosubjectssuper;
