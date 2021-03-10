//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in filmsubjects.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Filmsubjectspk } from '../../../../../data/film/table/super/filmsubjectssuper.js';
import Filmsubjects from '../../../../../data/film/table/filmsubjects.js';
import FilmsubjectsJson from '../conversion/filmsubjectsjson.js';
import { Subjectpk } from '../../../../../data/film/table/super/subjectsuper.js';
import SubjectJson from '../conversion/subjectjson.js';
import { Filmpk } from '../../../../../data/film/table/super/filmsuper.js';
import FilmJson from '../conversion/filmjson.js';


class Rsfilmsubjectssuper extends Filmservice {	

	static restservice = 'rsfilmsubjects';

	//SELECT OPERATIONS
	static SELECT_FILMSUBJECTS = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Subject = 100 + 0;
	static SELECT_Film = 100 + 1;

	//UPDATE OPERATIONS
	static UPDATE_FILMSUBJECTS = 10;

	//INSERT OPERATIONS
	static INSERT_FILMSUBJECTS = 20;

	//DELETE OPERATIONS
	static DELETE_Subject = 100 + 2;
	static DELETE_Film = 100 + 3;
	static DELETE_FILMSUBJECTS = 30;

	static extractDataArray = (jsonarray): Filmsubjects[] => {
		let filmsubjectss: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			filmsubjectss.push(FilmsubjectsJson.fromJSON(jsonarray[i]));
		}
   	return filmsubjectss;
	}

	static extractDataObject = (jsonobject): Filmsubjects => {
    return FilmsubjectsJson.fromJSON(jsonobject);
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

	static getOne = async (filmsubjectspk: Filmsubjectspk): Filmsubjects => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_FILMSUBJECTS },
      "filmsubjectspk": FilmsubjectsJson.PKtoJSON(filmsubjectspk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadFilmsubjectss4subject = async (subjectpk: Subjectpk): Filmsubjects[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Subject },
     	"subjectpk": SubjectJson.PKtoJSON(subjectpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadFilmsubjectss4film = async (filmpk: Filmpk): Filmsubjects[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Film },
     	"filmpk": FilmJson.PKtoJSON(filmpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (filmsubjectssearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": filmsubjectssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (filmsubjectssearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": filmsubjectssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (filmsubjects: Filmsubjects) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_FILMSUBJECTS },
     	"filmsubjects": FilmsubjectsJson.toJSON(filmsubjects)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (filmsubjects: Filmsubjects) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_FILMSUBJECTS },
     	"filmsubjects": FilmsubjectsJson.toJSON(filmsubjects)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (filmsubjects: Filmsubjects) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_FILMSUBJECTS },
     	"filmsubjects": FilmsubjectsJson.toJSON(filmsubjects)
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

	static sec_getOne = async (user, filmsubjectspk: Filmsubjectspk): Filmsubjects => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_FILMSUBJECTS },
      "filmsubjectspk": FilmsubjectsJson.PKtoJSON(filmsubjectspk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadFilmsubjectss4subject = async (user, subjectpk: Filmsubjectspk): Filmsubjects[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Subject },
     	"subjectpk": SubjectJson.PKtoJSON(subjectpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadFilmsubjectss4film = async (user, filmpk: Filmsubjectspk): Filmsubjects[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Film },
     	"filmpk": FilmJson.PKtoJSON(filmpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, filmsubjectssearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": filmsubjectssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, filmsubjectssearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": filmsubjectssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, filmsubjects: Filmsubjects) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_FILMSUBJECTS },
     	"filmsubjects": FilmsubjectsJson.toJSON(filmsubjects)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, filmsubjects: Filmsubjects) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_FILMSUBJECTS },
     	"filmsubjects": FilmsubjectsJson.toJSON(filmsubjects)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, filmsubjects: Filmsubjects) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_FILMSUBJECTS },
     	"filmsubjects": FilmsubjectsJson.toJSON(filmsubjects)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsfilmsubjectssuper;
