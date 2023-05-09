//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Viewlocalityphotocount from '../../../../../data/film/view/viewlocalityphotocount.js';
import ViewlocalityphotocountJson from '../conversion/viewlocalityphotocountjson.js';

class Rsviewlocalityphotocountsuper extends Filmservice {

	static restserviceselect = 'rsview_localityphotocount_select';
	static restservice = 'rsview_localityphotocount';

	static extractDataArray = (jsonarray): Viewlocalityphotocount[] => {
		let viewlocalityphotocounts: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewlocalityphotocounts.push(ViewlocalityphotocountJson.fromJSON(jsonarray[i]));
		}
   	return viewlocalityphotocounts;
	}

	static extractDataObject = (jsonobject): Viewlocalityphotocount => {
    return ViewlocalityphotocountJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewlocalityphotocountsuper;
