//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in Rsviewlocalityphotocountservice.js
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Viewlocalityphotocount from '../../../../../data/film/view/viewlocalityphotocount.js';
import ViewlocalityphotocountJson from '../conversion/viewlocalityphotocountjson.js';

class Rsviewlocalityphotocountsuper extends Filmservice {

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
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewlocalityphotocountsuper;