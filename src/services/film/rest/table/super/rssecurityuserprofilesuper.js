//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in securityuserprofile.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Securityuserprofilepk } from '../../../../../data/film/table/super/securityuserprofilesuper.js';
import Securityuserprofile from '../../../../../data/film/table/securityuserprofile.js';
import SecurityuserprofileJson from '../conversion/securityuserprofilejson.js';
import { Securityprofilepk } from '../../../../../data/film/table/super/securityprofilesuper.js';
import SecurityprofileJson from '../conversion/securityprofilejson.js';


class Rssecurityuserprofilesuper extends Filmservice {	

	static restservice = 'rssecurityuserprofile';

	//SELECT OPERATIONS
	static SELECT_SECURITYUSERPROFILE = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Securityprofile = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_SECURITYUSERPROFILE = 10;

	//INSERT OPERATIONS
	static INSERT_SECURITYUSERPROFILE = 20;

	//DELETE OPERATIONS
	static DELETE_Securityprofile = 100 + 1;
	static DELETE_SECURITYUSERPROFILE = 30;

	static extractDataArray = (jsonarray): Securityuserprofile[] => {
		let securityuserprofiles: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			securityuserprofiles.push(SecurityuserprofileJson.fromJSON(jsonarray[i]));
		}
   	return securityuserprofiles;
	}

	static extractDataObject = (jsonobject): Securityuserprofile => {
    return SecurityuserprofileJson.fromJSON(jsonobject);
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

	static getOne = async (securityuserprofilepk: Securityuserprofilepk): Securityuserprofile => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SECURITYUSERPROFILE },
      "securityuserprofilepk": SecurityuserprofileJson.PKtoJSON(securityuserprofilepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadSecurityuserprofiles4securityprofile = async (securityprofilepk: Securityprofilepk): Securityuserprofile[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Securityprofile },
     	"securityprofilepk": SecurityprofileJson.PKtoJSON(securityprofilepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (securityuserprofilesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": securityuserprofilesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (securityuserprofilesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": securityuserprofilesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (securityuserprofile: Securityuserprofile) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_SECURITYUSERPROFILE },
     	"securityuserprofile": SecurityuserprofileJson.toJSON(securityuserprofile)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (securityuserprofile: Securityuserprofile) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_SECURITYUSERPROFILE },
     	"securityuserprofile": SecurityuserprofileJson.toJSON(securityuserprofile)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (securityuserprofile: Securityuserprofile) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_SECURITYUSERPROFILE },
     	"securityuserprofile": SecurityuserprofileJson.toJSON(securityuserprofile)
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

	static sec_getOne = async (user, securityuserprofilepk: Securityuserprofilepk): Securityuserprofile => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SECURITYUSERPROFILE },
      "securityuserprofilepk": SecurityuserprofileJson.PKtoJSON(securityuserprofilepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadSecurityuserprofiles4securityprofile = async (user, securityprofilepk: Securityuserprofilepk): Securityuserprofile[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Securityprofile },
     	"securityprofilepk": SecurityprofileJson.PKtoJSON(securityprofilepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, securityuserprofilesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": securityuserprofilesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, securityuserprofilesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": securityuserprofilesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, securityuserprofile: Securityuserprofile) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_SECURITYUSERPROFILE },
     	"securityuserprofile": SecurityuserprofileJson.toJSON(securityuserprofile)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, securityuserprofile: Securityuserprofile) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_SECURITYUSERPROFILE },
     	"securityuserprofile": SecurityuserprofileJson.toJSON(securityuserprofile)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, securityuserprofile: Securityuserprofile) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_SECURITYUSERPROFILE },
     	"securityuserprofile": SecurityuserprofileJson.toJSON(securityuserprofile)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rssecurityuserprofilesuper;
