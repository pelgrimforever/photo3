//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in Rsviewphotolocationsservice.js
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Viewphotolocations from '../../../../../data/film/view/viewphotolocations.js';
import ViewphotolocationsJson from '../conversion/viewphotolocationsjson.js';

class Rsviewphotolocationssuper extends Filmservice {

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
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewphotolocationssuper;
