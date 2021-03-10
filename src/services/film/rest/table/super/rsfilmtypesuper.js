//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in filmtype.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Filmtypepk } from '../../../../../data/film/table/super/filmtypesuper.js';
import Filmtype from '../../../../../data/film/table/filmtype.js';
import FilmtypeJson from '../conversion/filmtypejson.js';


class Rsfilmtypesuper extends Filmservice {	

	static restservice = 'rsfilmtype';

	//SELECT OPERATIONS
	static SELECT_FILMTYPE = 2;
	static SELECT_Siteusergroup = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_FILMTYPE = 10;

	//INSERT OPERATIONS
	static INSERT_FILMTYPE = 20;

	//DELETE OPERATIONS
	static DELETE_FILMTYPE = 30;

	static extractDataArray = (jsonarray): Filmtype[] => {
		let filmtypes: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			filmtypes.push(FilmtypeJson.fromJSON(jsonarray[i]));
		}
   	return filmtypes;
	}

	static extractDataObject = (jsonobject): Filmtype => {
    return FilmtypeJson.fromJSON(jsonobject);
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

	static getOne = async (filmtypepk: Filmtypepk): Filmtype => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_FILMTYPE },
      "filmtypepk": FilmtypeJson.PKtoJSON(filmtypepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static search = async (filmtypesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": filmtypesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (filmtypesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": filmtypesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (filmtype: Filmtype) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_FILMTYPE },
     	"filmtype": FilmtypeJson.toJSON(filmtype)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (filmtype: Filmtype) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_FILMTYPE },
     	"filmtype": FilmtypeJson.toJSON(filmtype)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (filmtype: Filmtype) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_FILMTYPE },
     	"filmtype": FilmtypeJson.toJSON(filmtype)
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

	static sec_getOne = async (user, filmtypepk: Filmtypepk): Filmtype => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_FILMTYPE },
      "filmtypepk": FilmtypeJson.PKtoJSON(filmtypepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, filmtypesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": filmtypesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, filmtypesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": filmtypesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, filmtype: Filmtype) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_FILMTYPE },
     	"filmtype": FilmtypeJson.toJSON(filmtype)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, filmtype: Filmtype) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_FILMTYPE },
     	"filmtype": FilmtypeJson.toJSON(filmtype)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, filmtype: Filmtype) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_FILMTYPE },
     	"filmtype": FilmtypeJson.toJSON(filmtype)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsfilmtypesuper;
