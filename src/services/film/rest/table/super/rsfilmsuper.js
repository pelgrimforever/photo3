//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in film.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Filmpk } from '../../../../../data/film/table/super/filmsuper.js';
import Film from '../../../../../data/film/table/film.js';
import FilmJson from '../conversion/filmjson.js';
import { Filmtypepk } from '../../../../../data/film/table/super/filmtypesuper.js';
import FilmtypeJson from '../conversion/filmtypejson.js';
import { Filmsubjectspk } from '../../../../../data/film/table/super/filmsubjectssuper.js';
import FilmsubjectsJson from '../conversion/filmsubjectsjson.js';
import { Photopk } from '../../../../../data/film/table/super/photosuper.js';
import PhotoJson from '../conversion/photojson.js';


class Rsfilmsuper extends Filmservice {	

	static restservice = 'rsfilm';

	//SELECT OPERATIONS
	static SELECT_FILM = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Filmtype = 100 + 0;
	static SELECT_Filmsubjects = 100 + 1;
	static SELECT_Photo = 100 + 2;

	//UPDATE OPERATIONS
	static UPDATE_FILM = 10;

	//INSERT OPERATIONS
	static INSERT_FILM = 20;

	//DELETE OPERATIONS
	static DELETE_Filmtype = 100 + 3;
	static DELETE_FILM = 30;

	static extractDataArray = (jsonarray): Film[] => {
		let films: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			films.push(FilmJson.fromJSON(jsonarray[i]));
		}
   	return films;
	}

	static extractDataObject = (jsonobject): Film => {
    return FilmJson.fromJSON(jsonobject);
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

	static getOne = async (filmpk: Filmpk): Film => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_FILM },
      "filmpk": FilmJson.PKtoJSON(filmpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadFilms4filmtype = async (filmtypepk: Filmtypepk): Film[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Filmtype },
     	"filmtypepk": FilmtypeJson.PKtoJSON(filmtypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadFilm4filmsubjects = async (filmsubjectspk: Filmsubjectspk): Film[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Filmsubjects },
     	"filmsubjectspk": FilmsubjectsJson.PKtoJSON(filmsubjectspk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadFilm4photo = async (photopk: Photopk): Film[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Photo },
     	"photopk": PhotoJson.PKtoJSON(photopk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (filmsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": filmsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (filmsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": filmsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (film: Film) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_FILM },
     	"film": FilmJson.toJSON(film)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (film: Film) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_FILM },
     	"film": FilmJson.toJSON(film)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (film: Film) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_FILM },
     	"film": FilmJson.toJSON(film)
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

	static sec_getOne = async (user, filmpk: Filmpk): Film => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_FILM },
      "filmpk": FilmJson.PKtoJSON(filmpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadFilms4filmtype = async (user, filmtypepk: Filmpk): Film[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Filmtype },
     	"filmtypepk": FilmtypeJson.PKtoJSON(filmtypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadFilm4filmsubjects = async (user, filmsubjectspk: Filmsubjectspk): Film[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Filmsubjects },
     	"filmsubjectspk": FilmsubjectsJson.PKtoJSON(filmsubjectspk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadFilm4photo = async (user, photopk: Photopk): Film[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Photo },
     	"photopk": PhotoJson.PKtoJSON(photopk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, filmsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": filmsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, filmsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": filmsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, film: Film) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_FILM },
     	"film": FilmJson.toJSON(film)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, film: Film) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_FILM },
     	"film": FilmJson.toJSON(film)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, film: Film) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_FILM },
     	"film": FilmJson.toJSON(film)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsfilmsuper;
