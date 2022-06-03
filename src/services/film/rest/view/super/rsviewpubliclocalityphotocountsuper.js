//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Viewpubliclocalityphotocount from '../../../../../data/film/view/viewpubliclocalityphotocount.js';
import ViewpubliclocalityphotocountJson from '../conversion/viewpubliclocalityphotocountjson.js';

class Rsviewpubliclocalityphotocountsuper extends Filmservice {

	static restserviceselect = 'rsview_publiclocalityphotocount_select';
	static restservice = 'rsview_publiclocalityphotocount';

	static extractDataArray = (jsonarray): Viewpubliclocalityphotocount[] => {
		let viewpubliclocalityphotocounts: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewpubliclocalityphotocounts.push(ViewpubliclocalityphotocountJson.fromJSON(jsonarray[i]));
		}
   	return viewpubliclocalityphotocounts;
	}

	static extractDataObject = (jsonobject): Viewpubliclocalityphotocount => {
    return ViewpubliclocalityphotocountJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewpubliclocalityphotocountsuper;
