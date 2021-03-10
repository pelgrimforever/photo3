//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in country.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Countrypk } from '../../../../../data/film/table/super/countrysuper.js';
import Country from '../../../../../data/film/table/country.js';
import CountryJson from '../conversion/countryjson.js';
import { Arealevel1pk } from '../../../../../data/film/table/super/arealevel1super.js';
import Arealevel1Json from '../conversion/arealevel1json.js';


class Rscountrysuper extends Filmservice {	

	static restservice = 'rscountry';

	//SELECT OPERATIONS
	static SELECT_COUNTRY = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Arealevel1 = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_COUNTRY = 10;

	//INSERT OPERATIONS
	static INSERT_COUNTRY = 20;

	//DELETE OPERATIONS
	static DELETE_COUNTRY = 30;

	static extractDataArray = (jsonarray): Country[] => {
		let countrys: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			countrys.push(CountryJson.fromJSON(jsonarray[i]));
		}
   	return countrys;
	}

	static extractDataObject = (jsonobject): Country => {
    return CountryJson.fromJSON(jsonobject);
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

	static getOne = async (countrypk: Countrypk): Country => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_COUNTRY },
      "countrypk": CountryJson.PKtoJSON(countrypk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadCountry4arealevel1 = async (arealevel1pk: Arealevel1pk): Country[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Arealevel1 },
     	"arealevel1pk": Arealevel1Json.PKtoJSON(arealevel1pk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (countrysearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": countrysearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (countrysearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": countrysearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (country: Country) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_COUNTRY },
     	"country": CountryJson.toJSON(country)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (country: Country) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_COUNTRY },
     	"country": CountryJson.toJSON(country)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (country: Country) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_COUNTRY },
     	"country": CountryJson.toJSON(country)
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

	static sec_getOne = async (user, countrypk: Countrypk): Country => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_COUNTRY },
      "countrypk": CountryJson.PKtoJSON(countrypk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadCountry4arealevel1 = async (user, arealevel1pk: Arealevel1pk): Country[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Arealevel1 },
     	"arealevel1pk": Arealevel1Json.PKtoJSON(arealevel1pk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, countrysearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": countrysearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, countrysearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": countrysearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, country: Country) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_COUNTRY },
     	"country": CountryJson.toJSON(country)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, country: Country) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_COUNTRY },
     	"country": CountryJson.toJSON(country)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, country: Country) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_COUNTRY },
     	"country": CountryJson.toJSON(country)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rscountrysuper;
