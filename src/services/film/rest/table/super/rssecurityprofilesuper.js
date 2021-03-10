//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in securityprofile.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Securityprofilepk } from '../../../../../data/film/table/super/securityprofilesuper.js';
import Securityprofile from '../../../../../data/film/table/securityprofile.js';
import SecurityprofileJson from '../conversion/securityprofilejson.js';
import { Securityuserprofilepk } from '../../../../../data/film/table/super/securityuserprofilesuper.js';
import SecurityuserprofileJson from '../conversion/securityuserprofilejson.js';


class Rssecurityprofilesuper extends Filmservice {	

	static restservice = 'rssecurityprofile';

	//SELECT OPERATIONS
	static SELECT_SECURITYPROFILE = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Securityuserprofile = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_SECURITYPROFILE = 10;

	//INSERT OPERATIONS
	static INSERT_SECURITYPROFILE = 20;

	//DELETE OPERATIONS
	static DELETE_SECURITYPROFILE = 30;

	static extractDataArray = (jsonarray): Securityprofile[] => {
		let securityprofiles: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			securityprofiles.push(SecurityprofileJson.fromJSON(jsonarray[i]));
		}
   	return securityprofiles;
	}

	static extractDataObject = (jsonobject): Securityprofile => {
    return SecurityprofileJson.fromJSON(jsonobject);
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

	static getOne = async (securityprofilepk: Securityprofilepk): Securityprofile => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SECURITYPROFILE },
      "securityprofilepk": SecurityprofileJson.PKtoJSON(securityprofilepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadSecurityprofile4securityuserprofile = async (securityuserprofilepk: Securityuserprofilepk): Securityprofile[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Securityuserprofile },
     	"securityuserprofilepk": SecurityuserprofileJson.PKtoJSON(securityuserprofilepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (securityprofilesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": securityprofilesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (securityprofilesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": securityprofilesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (securityprofile: Securityprofile) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_SECURITYPROFILE },
     	"securityprofile": SecurityprofileJson.toJSON(securityprofile)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (securityprofile: Securityprofile) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_SECURITYPROFILE },
     	"securityprofile": SecurityprofileJson.toJSON(securityprofile)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (securityprofile: Securityprofile) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_SECURITYPROFILE },
     	"securityprofile": SecurityprofileJson.toJSON(securityprofile)
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

	static sec_getOne = async (user, securityprofilepk: Securityprofilepk): Securityprofile => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SECURITYPROFILE },
      "securityprofilepk": SecurityprofileJson.PKtoJSON(securityprofilepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadSecurityprofile4securityuserprofile = async (user, securityuserprofilepk: Securityuserprofilepk): Securityprofile[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Securityuserprofile },
     	"securityuserprofilepk": SecurityuserprofileJson.PKtoJSON(securityuserprofilepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, securityprofilesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": securityprofilesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, securityprofilesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": securityprofilesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, securityprofile: Securityprofile) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_SECURITYPROFILE },
     	"securityprofile": SecurityprofileJson.toJSON(securityprofile)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, securityprofile: Securityprofile) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_SECURITYPROFILE },
     	"securityprofile": SecurityprofileJson.toJSON(securityprofile)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, securityprofile: Securityprofile) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_SECURITYPROFILE },
     	"securityprofile": SecurityprofileJson.toJSON(securityprofile)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rssecurityprofilesuper;
