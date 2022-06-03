//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Viewphotodatespublic from '../../../../../data/film/view/viewphotodatespublic.js';
import ViewphotodatespublicJson from '../conversion/viewphotodatespublicjson.js';

class Rsviewphotodatespublicsuper extends Filmservice {

	static restserviceselect = 'rsview_photodatespublic_select';
	static restservice = 'rsview_photodatespublic';

	static extractDataArray = (jsonarray): Viewphotodatespublic[] => {
		let viewphotodatespublics: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewphotodatespublics.push(ViewphotodatespublicJson.fromJSON(jsonarray[i]));
		}
   	return viewphotodatespublics;
	}

	static extractDataObject = (jsonobject): Viewphotodatespublic => {
    return ViewphotodatespublicJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewphotodatespublicsuper;
