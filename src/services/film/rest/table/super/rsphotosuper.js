//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in photo.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Photopk } from '../../../../../data/film/table/super/photosuper.js';
import Photo from '../../../../../data/film/table/photo.js';
import PhotoJson from '../conversion/photojson.js';
import { Routepk } from '../../../../../data/film/table/super/routesuper.js';
import RouteJson from '../conversion/routejson.js';
import { Creatorpk } from '../../../../../data/film/table/super/creatorsuper.js';
import CreatorJson from '../conversion/creatorjson.js';
import { Filmpk } from '../../../../../data/film/table/super/filmsuper.js';
import FilmJson from '../conversion/filmjson.js';
import { Phototree7subjectpk } from '../../../../../data/film/table/super/phototree7subjectsuper.js';
import Phototree7subjectJson from '../conversion/phototree7subjectjson.js';
import { Artphotopk } from '../../../../../data/film/table/super/artphotosuper.js';
import ArtphotoJson from '../conversion/artphotojson.js';
import { Photosubjectspk } from '../../../../../data/film/table/super/photosubjectssuper.js';
import PhotosubjectsJson from '../conversion/photosubjectsjson.js';
import { Phototagspk } from '../../../../../data/film/table/super/phototagssuper.js';
import PhototagsJson from '../conversion/phototagsjson.js';


class Rsphotosuper extends Filmservice {	

	static restservice = 'rsphoto';

	//SELECT OPERATIONS
	static SELECT_PHOTO = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Route = 100 + 0;
	static SELECT_Creator = 100 + 1;
	static SELECT_Film = 100 + 2;
	static SELECT_Phototree7subject = 100 + 3;
	static SELECT_Artphoto = 100 + 4;
	static SELECT_Photosubjects = 100 + 5;
	static SELECT_Phototags = 100 + 6;

	//UPDATE OPERATIONS
	static UPDATE_PHOTO = 10;

	//INSERT OPERATIONS
	static INSERT_PHOTO = 20;

	//DELETE OPERATIONS
	static DELETE_Route = 100 + 7;
	static DELETE_Creator = 100 + 8;
	static DELETE_Film = 100 + 9;
	static DELETE_PHOTO = 30;

	static extractDataArray = (jsonarray): Photo[] => {
		let photos: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			photos.push(PhotoJson.fromJSON(jsonarray[i]));
		}
   	return photos;
	}

	static extractDataObject = (jsonobject): Photo => {
    return PhotoJson.fromJSON(jsonobject);
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

	static getOne = async (photopk: Photopk): Photo => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_PHOTO },
      "photopk": PhotoJson.PKtoJSON(photopk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadPhotos4route = async (routepk: Routepk): Photo[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Route },
     	"routepk": RouteJson.PKtoJSON(routepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadPhotos4creator = async (creatorpk: Creatorpk): Photo[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Creator },
     	"creatorpk": CreatorJson.PKtoJSON(creatorpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadPhotos4film = async (filmpk: Filmpk): Photo[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Film },
     	"filmpk": FilmJson.PKtoJSON(filmpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadPhoto4phototree7subject = async (phototree7subjectpk: Phototree7subjectpk): Photo[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Phototree7subject },
     	"phototree7subjectpk": Phototree7subjectJson.PKtoJSON(phototree7subjectpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadPhoto4artphoto = async (artphotopk: Artphotopk): Photo[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Artphoto },
     	"artphotopk": ArtphotoJson.PKtoJSON(artphotopk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadPhoto4photosubjects = async (photosubjectspk: Photosubjectspk): Photo[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Photosubjects },
     	"photosubjectspk": PhotosubjectsJson.PKtoJSON(photosubjectspk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadPhoto4phototags = async (phototagspk: Phototagspk): Photo[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Phototags },
     	"phototagspk": PhototagsJson.PKtoJSON(phototagspk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (photosearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": photosearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (photosearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": photosearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (photo: Photo) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_PHOTO },
     	"photo": PhotoJson.toJSON(photo)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (photo: Photo) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_PHOTO },
     	"photo": PhotoJson.toJSON(photo)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (photo: Photo) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_PHOTO },
     	"photo": PhotoJson.toJSON(photo)
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

	static sec_getOne = async (user, photopk: Photopk): Photo => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_PHOTO },
      "photopk": PhotoJson.PKtoJSON(photopk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadPhotos4route = async (user, routepk: Photopk): Photo[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Route },
     	"routepk": RouteJson.PKtoJSON(routepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadPhotos4creator = async (user, creatorpk: Photopk): Photo[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Creator },
     	"creatorpk": CreatorJson.PKtoJSON(creatorpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadPhotos4film = async (user, filmpk: Photopk): Photo[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Film },
     	"filmpk": FilmJson.PKtoJSON(filmpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadPhoto4phototree7subject = async (user, phototree7subjectpk: Phototree7subjectpk): Photo[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Phototree7subject },
     	"phototree7subjectpk": Phototree7subjectJson.PKtoJSON(phototree7subjectpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadPhoto4artphoto = async (user, artphotopk: Artphotopk): Photo[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Artphoto },
     	"artphotopk": ArtphotoJson.PKtoJSON(artphotopk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadPhoto4photosubjects = async (user, photosubjectspk: Photosubjectspk): Photo[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Photosubjects },
     	"photosubjectspk": PhotosubjectsJson.PKtoJSON(photosubjectspk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadPhoto4phototags = async (user, phototagspk: Phototagspk): Photo[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Phototags },
     	"phototagspk": PhototagsJson.PKtoJSON(phototagspk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, photosearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": photosearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, photosearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": photosearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, photo: Photo) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_PHOTO },
     	"photo": PhotoJson.toJSON(photo)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, photo: Photo) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_PHOTO },
     	"photo": PhotoJson.toJSON(photo)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, photo: Photo) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_PHOTO },
     	"photo": PhotoJson.toJSON(photo)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsphotosuper;
