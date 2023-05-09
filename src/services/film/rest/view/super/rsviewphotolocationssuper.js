//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Viewphotolocations from '../../../../../data/film/view/viewphotolocations.js';
import ViewphotolocationsJson from '../conversion/viewphotolocationsjson.js';

class Rsviewphotolocationssuper extends Filmservice {

	static restserviceselect = 'rsview_photolocations_select';
	static restservice = 'rsview_photolocations';

	static extractDataArray = (jsonarray): Viewphotolocations[] => {
		let viewphotolocationss: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewphotolocationss.push(ViewphotolocationsJson.fromJSON(jsonarray[i]));
		}
   	return viewphotolocationss;
	}

	static extractDataObject = (jsonobject): Viewphotolocations => {
    return ViewphotolocationsJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewphotolocationssuper;
