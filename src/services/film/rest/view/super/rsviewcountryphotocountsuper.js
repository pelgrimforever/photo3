//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in Rsviewcountryphotocountservice.js
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Viewcountryphotocount from '../../../../../data/film/view/viewcountryphotocount.js';
import ViewcountryphotocountJson from '../conversion/viewcountryphotocountjson.js';

class Rsviewcountryphotocountsuper extends Filmservice {

	static restservice = 'rsview_countryphotocount';

	static extractDataArray = (jsonarray): Viewcountryphotocount[] => {
		let viewcountryphotocounts: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewcountryphotocounts.push(ViewcountryphotocountJson.fromJSON(jsonarray[i]));
		}
   	return viewcountryphotocounts;
	}

	static extractDataObject = (jsonobject): Viewcountryphotocount => {
    return ViewcountryphotocountJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewcountryphotocountsuper;