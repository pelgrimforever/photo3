//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in Rsviewlocalityphotolocationsservice.js
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Viewlocalityphotolocations from '../../../../../data/film/view/viewlocalityphotolocations.js';
import ViewlocalityphotolocationsJson from '../conversion/viewlocalityphotolocationsjson.js';

class Rsviewlocalityphotolocationssuper extends Filmservice {

	static restservice = 'rsview_locality_photolocations';

	static extractDataArray = (jsonarray): Viewlocalityphotolocations[] => {
		let viewlocalityphotolocationss: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewlocalityphotolocationss.push(ViewlocalityphotolocationsJson.fromJSON(jsonarray[i]));
		}
   	return viewlocalityphotolocationss;
	}

	static extractDataObject = (jsonobject): Viewlocalityphotolocations => {
    return ViewlocalityphotolocationsJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewlocalityphotolocationssuper;
