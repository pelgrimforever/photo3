//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Viewphotodates from '../../../../../data/film/view/viewphotodates.js';
import ViewphotodatesJson from '../conversion/viewphotodatesjson.js';

class Rsviewphotodatessuper extends Filmservice {

	static restserviceselect = 'rsview_photodates_select';
	static restservice = 'rsview_photodates';

	static extractDataArray = (jsonarray): Viewphotodates[] => {
		let viewphotodatess: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewphotodatess.push(ViewphotodatesJson.fromJSON(jsonarray[i]));
		}
   	return viewphotodatess;
	}

	static extractDataObject = (jsonobject): Viewphotodates => {
    return ViewphotodatesJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewphotodatessuper;
