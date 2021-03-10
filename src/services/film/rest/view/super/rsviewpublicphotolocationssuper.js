//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in Rsviewpublicphotolocationsservice.js
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Viewpublicphotolocations from '../../../../../data/film/view/viewpublicphotolocations.js';
import ViewpublicphotolocationsJson from '../conversion/viewpublicphotolocationsjson.js';

class Rsviewpublicphotolocationssuper extends Filmservice {

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
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewpublicphotolocationssuper;
