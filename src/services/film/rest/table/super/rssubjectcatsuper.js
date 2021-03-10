//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in subjectcat.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Subjectcatpk } from '../../../../../data/film/table/super/subjectcatsuper.js';
import Subjectcat from '../../../../../data/film/table/subjectcat.js';
import SubjectcatJson from '../conversion/subjectcatjson.js';
import { Subjectpk } from '../../../../../data/film/table/super/subjectsuper.js';
import SubjectJson from '../conversion/subjectjson.js';


class Rssubjectcatsuper extends Filmservice {	

	static restservice = 'rssubjectcat';

	//SELECT OPERATIONS
	static SELECT_SUBJECTCAT = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Subjectcat1 = 100 + 0;
	static SELECT_Subjectcat2 = 100 + 1;

	//UPDATE OPERATIONS
	static UPDATE_SUBJECTCAT = 10;

	//INSERT OPERATIONS
	static INSERT_SUBJECTCAT = 20;

	//DELETE OPERATIONS
	static DELETE_SUBJECTCAT = 30;

	static extractDataArray = (jsonarray): Subjectcat[] => {
		let subjectcats: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			subjectcats.push(SubjectcatJson.fromJSON(jsonarray[i]));
		}
   	return subjectcats;
	}

	static extractDataObject = (jsonobject): Subjectcat => {
    return SubjectcatJson.fromJSON(jsonobject);
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

	static getOne = async (subjectcatpk: Subjectcatpk): Subjectcat => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SUBJECTCAT },
      "subjectcatpk": SubjectcatJson.PKtoJSON(subjectcatpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadSubjectcat4subjectCat1 = async (subjectCat1pk: Subjectpk): Subjectcat[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Subjectcat1 },
     	"subjectpk": SubjectJson.PKtoJSON(subjectCat1pk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadSubjectcat4subjectCat2 = async (subjectCat2pk: Subjectpk): Subjectcat[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Subjectcat2 },
     	"subjectpk": SubjectJson.PKtoJSON(subjectCat2pk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (subjectcatsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": subjectcatsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (subjectcatsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": subjectcatsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (subjectcat: Subjectcat) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_SUBJECTCAT },
     	"subjectcat": SubjectcatJson.toJSON(subjectcat)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (subjectcat: Subjectcat) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_SUBJECTCAT },
     	"subjectcat": SubjectcatJson.toJSON(subjectcat)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (subjectcat: Subjectcat) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_SUBJECTCAT },
     	"subjectcat": SubjectcatJson.toJSON(subjectcat)
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

	static sec_getOne = async (user, subjectcatpk: Subjectcatpk): Subjectcat => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SUBJECTCAT },
      "subjectcatpk": SubjectcatJson.PKtoJSON(subjectcatpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadSubjectcat4subjectCat1 = async (user, subjectCat1pk: Subjectpk): Subjectcat[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Subjectcat1 },
     	"subjectpk": SubjectJson.PKtoJSON(subjectCat1pk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadSubjectcat4subjectCat2 = async (user, subjectCat2pk: Subjectpk): Subjectcat[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Subjectcat2 },
     	"subjectpk": SubjectJson.PKtoJSON(subjectCat2pk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, subjectcatsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": subjectcatsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, subjectcatsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": subjectcatsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, subjectcat: Subjectcat) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_SUBJECTCAT },
     	"subjectcat": SubjectcatJson.toJSON(subjectcat)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, subjectcat: Subjectcat) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_SUBJECTCAT },
     	"subjectcat": SubjectcatJson.toJSON(subjectcat)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, subjectcat: Subjectcat) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_SUBJECTCAT },
     	"subjectcat": SubjectcatJson.toJSON(subjectcat)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rssubjectcatsuper;
