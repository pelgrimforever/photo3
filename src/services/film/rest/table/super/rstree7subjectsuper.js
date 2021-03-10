//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in tree7subject.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Tree7subjectpk } from '../../../../../data/film/table/super/tree7subjectsuper.js';
import Tree7subject from '../../../../../data/film/table/tree7subject.js';
import Tree7subjectJson from '../conversion/tree7subjectjson.js';
import { Phototree7subjectpk } from '../../../../../data/film/table/super/phototree7subjectsuper.js';
import Phototree7subjectJson from '../conversion/phototree7subjectjson.js';


class Rstree7subjectsuper extends Filmservice {	

	static restservice = 'rstree7subject';

	//SELECT OPERATIONS
	static SELECT_TREE7SUBJECT = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Tree7subjectparentsubjectid = 100 + 0;
	static SELECT_Phototree7subject = 100 + 1;

	//UPDATE OPERATIONS
	static UPDATE_TREE7SUBJECT = 10;

	//INSERT OPERATIONS
	static INSERT_TREE7SUBJECT = 20;

	//DELETE OPERATIONS
	static DELETE_Tree7subjectparentsubjectid = 100 + 2;
	static DELETE_TREE7SUBJECT = 30;

	static extractDataArray = (jsonarray): Tree7subject[] => {
		let tree7subjects: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			tree7subjects.push(Tree7subjectJson.fromJSON(jsonarray[i]));
		}
   	return tree7subjects;
	}

	static extractDataObject = (jsonobject): Tree7subject => {
    return Tree7subjectJson.fromJSON(jsonobject);
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

	static getOne = async (tree7subjectpk: Tree7subjectpk): Tree7subject => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_TREE7SUBJECT },
      "tree7subjectpk": Tree7subjectJson.PKtoJSON(tree7subjectpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadTree7subjects4tree7subjectParentsubjectid = async (tree7subjectpk: Tree7subjectpk): Tree7subject[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Tree7subjectparentsubjectid },
     	"tree7subjectpk": Tree7subjectJson.PKtoJSON(tree7subjectpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadTree7subject4phototree7subject = async (phototree7subjectpk: Phototree7subjectpk): Tree7subject[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Phototree7subject },
     	"phototree7subjectpk": Phototree7subjectJson.PKtoJSON(phototree7subjectpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (tree7subjectsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": tree7subjectsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (tree7subjectsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": tree7subjectsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (tree7subject: Tree7subject) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_TREE7SUBJECT },
     	"tree7subject": Tree7subjectJson.toJSON(tree7subject)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (tree7subject: Tree7subject) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_TREE7SUBJECT },
     	"tree7subject": Tree7subjectJson.toJSON(tree7subject)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (tree7subject: Tree7subject) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_TREE7SUBJECT },
     	"tree7subject": Tree7subjectJson.toJSON(tree7subject)
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

	static sec_getOne = async (user, tree7subjectpk: Tree7subjectpk): Tree7subject => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_TREE7SUBJECT },
      "tree7subjectpk": Tree7subjectJson.PKtoJSON(tree7subjectpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadTree7subjects4tree7subjectParentsubjectid = async (user, tree7subjectpk: Tree7subjectpk): Tree7subject[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Tree7subjectparentsubjectid },
     	"tree7subjectpk": Tree7subjectJson.PKtoJSON(tree7subjectpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadTree7subject4phototree7subject = async (user, phototree7subjectpk: Phototree7subjectpk): Tree7subject[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Phototree7subject },
     	"phototree7subjectpk": Phototree7subjectJson.PKtoJSON(phototree7subjectpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, tree7subjectsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": tree7subjectsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, tree7subjectsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": tree7subjectsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, tree7subject: Tree7subject) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_TREE7SUBJECT },
     	"tree7subject": Tree7subjectJson.toJSON(tree7subject)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, tree7subject: Tree7subject) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_TREE7SUBJECT },
     	"tree7subject": Tree7subjectJson.toJSON(tree7subject)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, tree7subject: Tree7subject) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_TREE7SUBJECT },
     	"tree7subject": Tree7subjectJson.toJSON(tree7subject)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rstree7subjectsuper;
