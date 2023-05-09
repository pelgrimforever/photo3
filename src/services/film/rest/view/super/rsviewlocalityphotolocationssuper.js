//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Viewlocalityphotolocations from '../../../../../data/film/view/viewlocalityphotolocations.js';
import ViewlocalityphotolocationsJson from '../conversion/viewlocalityphotolocationsjson.js';

class Rsviewlocalityphotolocationssuper extends Filmservice {

	static restserviceselect = 'rsview_locality_photolocations_select';
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
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewlocalityphotolocationssuper;
