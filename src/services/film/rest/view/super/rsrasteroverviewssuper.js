//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Rasteroverviews from '../../../../../data/film/view/rasteroverviews.js';
import RasteroverviewsJson from '../conversion/rasteroverviewsjson.js';

class Rsrasteroverviewssuper extends Filmservice {

	static restserviceselect = 'rsraster_overviews_select';
	static restservice = 'rsraster_overviews';

	static extractDataArray = (jsonarray): Rasteroverviews[] => {
		let rasteroverviewss: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			rasteroverviewss.push(RasteroverviewsJson.fromJSON(jsonarray[i]));
		}
   	return rasteroverviewss;
	}

	static extractDataObject = (jsonobject): Rasteroverviews => {
    return RasteroverviewsJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsrasteroverviewssuper;
