//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 1.5.2022 20:24
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

  static restserviceselect = 'rsart_photo_select';
  static restserviceinsert = 'rsart_photo_insert';
  static restserviceupdate = 'rsart_photo_update';
  static restservicedelete = 'rsart_photo_delete';

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

  static getOne = async (user, artphotopk: Artphotopk): Artphoto => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_ARTPHOTO,
      "art_photopk": ArtphotoJson.PKtoJSON(artphotopk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadArtphotos4photo = async (user, photopk: Artphotopk): Artphoto[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Photo,
      "photopk": PhotoJson.PKtoJSON(photopk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadArtphotos4artsubgroup = async (user, artsubgrouppk: Artphotopk): Artphoto[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Artsubgroup,
      "art_subgrouppk": ArtsubgroupJson.PKtoJSON(artsubgrouppk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadArtphotos4artacademy = async (user, artacademypk: Artphotopk): Artphoto[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Artacademy,
      "art_academypk": ArtacademyJson.PKtoJSON(artacademypk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadArtphotos4artgroup = async (user, artgrouppk: Artphotopk): Artphoto[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Artgroup,
      "art_grouppk": ArtgroupJson.PKtoJSON(artgrouppk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, artphotosearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": artphotosearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, artphotosearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": artphotosearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, artphoto: Artphoto) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_ARTPHOTO,
      "art_photo": ArtphotoJson.toJSON(artphoto)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, artphoto: Artphoto) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_ARTPHOTO,
      "art_photo": ArtphotoJson.toJSON(artphoto)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, artphoto: Artphoto) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_ARTPHOTO,
      "art_photo": ArtphotoJson.toJSON(artphoto)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsartphotosuper;
