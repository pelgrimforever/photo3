//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in artphoto.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Artphotopk } from '../../../../../data/film/table/super/artphotosuper.js';
import Artphoto from '../../../../../data/film/table/artphoto.js';
import ArtphotoJson from '../conversion/artphotojson.js';
import { Photopk } from '../../../../../data/film/table/super/photosuper.js';
import PhotoJson from '../conversion/photojson.js';
import { Artsubgrouppk } from '../../../../../data/film/table/super/artsubgroupsuper.js';
import ArtsubgroupJson from '../conversion/artsubgroupjson.js';
import { Artacademypk } from '../../../../../data/film/table/super/artacademysuper.js';
import ArtacademyJson from '../conversion/artacademyjson.js';
import { Artgrouppk } from '../../../../../data/film/table/super/artgroupsuper.js';
import ArtgroupJson from '../conversion/artgroupjson.js';


class Rsartphotosuper extends Filmservice {	

	static restservice = 'rsart_photo';

	//SELECT OPERATIONS
	static SELECT_ARTPHOTO = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Photo = 100 + 0;
	static SELECT_Artsubgroup = 100 + 1;
	static SELECT_Artacademy = 100 + 2;
	static SELECT_Artgroup = 100 + 3;

	//UPDATE OPERATIONS
	static UPDATE_ARTPHOTO = 10;

	//INSERT OPERATIONS
	static INSERT_ARTPHOTO = 20;

	//DELETE OPERATIONS
	static DELETE_Photo = 100 + 4;
	static DELETE_Artsubgroup = 100 + 5;
	static DELETE_Artacademy = 100 + 6;
	static DELETE_Artgroup = 100 + 7;
	static DELETE_ARTPHOTO = 30;

	static extractDataArray = (jsonarray): Artphoto[] => {
		let artphotos: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			artphotos.push(ArtphotoJson.fromJSON(jsonarray[i]));
		}
   	return artphotos;
	}

	static extractDataObject = (jsonobject): Artphoto => {
    return ArtphotoJson.fromJSON(jsonobject);
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

	static getOne = async (artphotopk: Artphotopk): Artphoto => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_ARTPHOTO },
      "artphotopk": ArtphotoJson.PKtoJSON(artphotopk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadArtphotos4photo = async (photopk: Photopk): Artphoto[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Photo },
     	"photopk": PhotoJson.PKtoJSON(photopk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadArtphotos4artsubgroup = async (artsubgrouppk: Artsubgrouppk): Artphoto[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Artsubgroup },
     	"artsubgrouppk": ArtsubgroupJson.PKtoJSON(artsubgrouppk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadArtphotos4artacademy = async (artacademypk: Artacademypk): Artphoto[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Artacademy },
     	"artacademypk": ArtacademyJson.PKtoJSON(artacademypk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadArtphotos4artgroup = async (artgrouppk: Artgrouppk): Artphoto[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Artgroup },
     	"artgrouppk": ArtgroupJson.PKtoJSON(artgrouppk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (artphotosearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": artphotosearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (artphotosearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": artphotosearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (artphoto: Artphoto) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_ARTPHOTO },
     	"artphoto": ArtphotoJson.toJSON(artphoto)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (artphoto: Artphoto) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_ARTPHOTO },
     	"artphoto": ArtphotoJson.toJSON(artphoto)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (artphoto: Artphoto) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_ARTPHOTO },
     	"artphoto": ArtphotoJson.toJSON(artphoto)
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

	static sec_getOne = async (user, artphotopk: Artphotopk): Artphoto => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_ARTPHOTO },
      "artphotopk": ArtphotoJson.PKtoJSON(artphotopk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadArtphotos4photo = async (user, photopk: Artphotopk): Artphoto[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Photo },
     	"photopk": PhotoJson.PKtoJSON(photopk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadArtphotos4artsubgroup = async (user, artsubgrouppk: Artphotopk): Artphoto[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Artsubgroup },
     	"artsubgrouppk": ArtsubgroupJson.PKtoJSON(artsubgrouppk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadArtphotos4artacademy = async (user, artacademypk: Artphotopk): Artphoto[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Artacademy },
     	"artacademypk": ArtacademyJson.PKtoJSON(artacademypk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadArtphotos4artgroup = async (user, artgrouppk: Artphotopk): Artphoto[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Artgroup },
     	"artgrouppk": ArtgroupJson.PKtoJSON(artgrouppk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, artphotosearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": artphotosearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, artphotosearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": artphotosearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, artphoto: Artphoto) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_ARTPHOTO },
     	"artphoto": ArtphotoJson.toJSON(artphoto)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, artphoto: Artphoto) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_ARTPHOTO },
     	"artphoto": ArtphotoJson.toJSON(artphoto)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, artphoto: Artphoto) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_ARTPHOTO },
     	"artphoto": ArtphotoJson.toJSON(artphoto)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsartphotosuper;
