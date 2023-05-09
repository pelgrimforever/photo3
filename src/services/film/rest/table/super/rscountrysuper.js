//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Countrypk } from '../../../../../data/film/table/super/countrysuper.js';
import Country from '../../../../../data/film/table/country.js';
import CountryJson from '../conversion/countryjson.js';
import { Arealevel1pk } from '../../../../../data/film/table/super/arealevel1super.js';
import Arealevel1Json from '../conversion/arealevel1json.js';


class Rscountrysuper extends Filmservice {	

  static restserviceselect = 'rscountry_select';
  static restserviceinsert = 'rscountry_insert';
  static restserviceupdate = 'rscountry_update';
  static restservicedelete = 'rscountry_delete';

  //SELECT OPERATIONS
  static SELECT_COUNTRY = 2;
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

  static getcount = async (user) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: super.SELECT_COUNT
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static getall = async (user) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static getOne = async (user, countrypk: Countrypk): Country => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_COUNTRY,
      "countrypk": CountryJson.PKtoJSON(countrypk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadCountry4arealevel1 = async (user, arealevel1pk: Arealevel1pk): Country[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Arealevel1,
      "arealevel1pk": Arealevel1Json.PKtoJSON(arealevel1pk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, countrysearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": countrysearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, countrysearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": countrysearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, country: Country) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_COUNTRY,
      "country": CountryJson.toJSON(country)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, country: Country) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_COUNTRY,
      "country": CountryJson.toJSON(country)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, country: Country) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_COUNTRY,
      "country": CountryJson.toJSON(country)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rscountrysuper;
