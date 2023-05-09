//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Viewpublicphotolocations from '../../../../../data/film/view/viewpublicphotolocations.js';
import ViewpublicphotolocationsJson from '../conversion/viewpublicphotolocationsjson.js';

class Rsviewpublicphotolocationssuper extends Filmservice {

	static restserviceselect = 'rsview_publicphotolocations_select';
	static restservice = 'rsview_publicphotolocations';

	static extractDataArray = (jsonarray): Viewpublicphotolocations[] => {
		let viewpublicphotolocationss: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewpublicphotolocationss.push(ViewpublicphotolocationsJson.fromJSON(jsonarray[i]));
		}
   	return viewpublicphotolocationss;
	}

	static extractDataObject = (jsonobject): Viewpublicphotolocations => {
    return ViewpublicphotolocationsJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewpublicphotolocationssuper;
