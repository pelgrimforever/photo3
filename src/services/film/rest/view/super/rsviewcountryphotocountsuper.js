//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Viewcountryphotocount from '../../../../../data/film/view/viewcountryphotocount.js';
import ViewcountryphotocountJson from '../conversion/viewcountryphotocountjson.js';

class Rsviewcountryphotocountsuper extends Filmservice {

	static restserviceselect = 'rsview_countryphotocount_select';
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
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewcountryphotocountsuper;
