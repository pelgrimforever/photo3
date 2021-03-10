//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in phototree7subject.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Phototree7subjectpk } from '../../../../../data/film/table/super/phototree7subjectsuper.js';
import Phototree7subject from '../../../../../data/film/table/phototree7subject.js';
import Phototree7subjectJson from '../conversion/phototree7subjectjson.js';
import { Tree7subjectpk } from '../../../../../data/film/table/super/tree7subjectsuper.js';
import Tree7subjectJson from '../conversion/tree7subjectjson.js';
import { Photopk } from '../../../../../data/film/table/super/photosuper.js';
import PhotoJson from '../conversion/photojson.js';


class Rsphototree7subjectsuper extends Filmservice {	

	static restservice = 'rsphototree7subject';

	//SELECT OPERATIONS
	static SELECT_PHOTOTREE7SUBJECT = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Tree7subject = 100 + 0;
	static SELECT_Photo = 100 + 1;

	//UPDATE OPERATIONS
	static UPDATE_PHOTOTREE7SUBJECT = 10;

	//INSERT OPERATIONS
	static INSERT_PHOTOTREE7SUBJECT = 20;

	//DELETE OPERATIONS
	static DELETE_Tree7subject = 100 + 2;
	static DELETE_Photo = 100 + 3;
	static DELETE_PHOTOTREE7SUBJECT = 30;

	static extractDataArray = (jsonarray): Phototree7subject[] => {
		let phototree7subjects: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			phototree7subjects.push(Phototree7subjectJson.fromJSON(jsonarray[i]));
		}
   	return phototree7subjects;
	}

	static extractDataObject = (jsonobject): Phototree7subject => {
    return Phototree7subjectJson.fromJSON(jsonobject);
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

	static getOne = async (phototree7subjectpk: Phototree7subjectpk): Phototree7subject => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_PHOTOTREE7SUBJECT },
      "phototree7subjectpk": Phototree7subjectJson.PKtoJSON(phototree7subjectpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadPhototree7subjects4tree7subject = async (tree7subjectpk: Tree7subjectpk): Phototree7subject[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Tree7subject },
     	"tree7subjectpk": Tree7subjectJson.PKtoJSON(tree7subjectpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadPhototree7subjects4photo = async (photopk: Photopk): Phototree7subject[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Photo },
     	"photopk": PhotoJson.PKtoJSON(photopk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (phototree7subjectsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": phototree7subjectsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (phototree7subjectsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": phototree7subjectsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (phototree7subject: Phototree7subject) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_PHOTOTREE7SUBJECT },
     	"phototree7subject": Phototree7subjectJson.toJSON(phototree7subject)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (phototree7subject: Phototree7subject) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_PHOTOTREE7SUBJECT },
     	"phototree7subject": Phototree7subjectJson.toJSON(phototree7subject)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (phototree7subject: Phototree7subject) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_PHOTOTREE7SUBJECT },
     	"phototree7subject": Phototree7subjectJson.toJSON(phototree7subject)
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

	static sec_getOne = async (user, phototree7subjectpk: Phototree7subjectpk): Phototree7subject => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_PHOTOTREE7SUBJECT },
      "phototree7subjectpk": Phototree7subjectJson.PKtoJSON(phototree7subjectpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadPhototree7subjects4tree7subject = async (user, tree7subjectpk: Phototree7subjectpk): Phototree7subject[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Tree7subject },
     	"tree7subjectpk": Tree7subjectJson.PKtoJSON(tree7subjectpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadPhototree7subjects4photo = async (user, photopk: Phototree7subjectpk): Phototree7subject[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Photo },
     	"photopk": PhotoJson.PKtoJSON(photopk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, phototree7subjectsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": phototree7subjectsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, phototree7subjectsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": phototree7subjectsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, phototree7subject: Phototree7subject) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_PHOTOTREE7SUBJECT },
     	"phototree7subject": Phototree7subjectJson.toJSON(phototree7subject)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, phototree7subject: Phototree7subject) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_PHOTOTREE7SUBJECT },
     	"phototree7subject": Phototree7subjectJson.toJSON(phototree7subject)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, phototree7subject: Phototree7subject) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_PHOTOTREE7SUBJECT },
     	"phototree7subject": Phototree7subjectJson.toJSON(phototree7subject)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsphototree7subjectsuper;
