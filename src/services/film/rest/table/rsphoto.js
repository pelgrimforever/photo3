//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in rsphotosuper.js
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 4.1.2021 12:8
    Author     : Franky Laseure
*/

import Rsphotosuper from './super/rsphotosuper.js';
import FilmJson from './conversion/filmjson.js';
import PhotoJson from './conversion/photojson.js';

import axios from 'axios';

class Rsphoto extends Rsphotosuper {
  static SELECT_LOCATION = 12;
  static SELECT_SEARCHWITHIMAGESBASE64 = 14;
  static SECURESELECT_DESCRIPTIONS = 16;
  static UPDATE_GEOLOCATION = 16;
  static UPDATE_COPYPREVGEOLOCATION = 17;
  static UPDATE_COPYPHOTOGEOLOCATION = 18;
  static SELECT_LOCATIONS = 19;
	static GETTHUMBNAIL = 20;
  static GETSMALL = 21;
  static SELECT_FilmWITHIMAGESBASE64 = 22;
	static imageservlet = 'film.PhotoImage';

	static getThumbnail = async (user, photopk: Photopk) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: this.GETTHUMBNAIL,
      "photopk": PhotoJson.PKtoJSON(photopk)
    }
    return super.extractImage(await super.postServlet(this.imageservlet, postdata));
	}

  static getSmall = async (user, photopk: Photopk) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: this.GETSMALL,
      "photopk": PhotoJson.PKtoJSON(photopk)
    }
    return super.extractImage(await super.postServlet(this.imageservlet, postdata));
  }

  static getThumbnailbase64 = async (user, photopk: Photopk) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: this.GETTHUMBNAIL,
      "photopk": PhotoJson.PKtoJSON(photopk)
    }
    return await super.post(this.restserviceselect, postdata);
  }

  static updGeolocation = async (user, photo) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: this.UPDATE_GEOLOCATION,
      "photo": PhotoJson.toJSON(photo)
    }
    return await super.post(this.restserviceupdate, postdata);    
  }

  static copyPrevGeolocation = async (user, photo: Photo) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: this.UPDATE_COPYPREVGEOLOCATION,
      "photo": PhotoJson.toJSON(photo)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static copyPhotoGeolocation = async (user, photo: Photo, photopk: Photopk) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: this.UPDATE_COPYPHOTOGEOLOCATION,
      "photo": PhotoJson.toJSON(photo),
      "photopk": PhotoJson.PKtoJSON(photopk)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static loadPhotos4film = async (user, filmpk: Filmpk): Photo[] => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: this.SELECT_FilmWITHIMAGESBASE64,
      "filmpk": FilmJson.PKtoJSON(filmpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadPhotos4location = async (user, location) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: this.SELECT_LOCATION,
      "location": location
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadPhotos4locations = async (user, locations) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: this.SELECT_LOCATIONS,
      "locations": locations
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchwithimages = async (user, photosearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHWITHIMAGESBASE64,
      "search": photosearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static getSearchtext = async (user, searchtext) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: this.SECURESELECT_DESCRIPTIONS,
      "searchtext": searchtext
    }
    const jsonarray = await super.post(this.restserviceselect, postdata);
    const descriptions = [];
    for(let i = 0; i < jsonarray.length; i++) {
      const jsonobject = jsonarray[i];
      descriptions.push(jsonobject.description);
    }
    return descriptions;    
  }


}

export default Rsphoto;

