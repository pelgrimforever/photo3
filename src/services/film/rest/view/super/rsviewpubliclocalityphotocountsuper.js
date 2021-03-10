//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in Rsviewpubliclocalityphotocountservice.js
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Viewpubliclocalityphotocount from '../../../../../data/film/view/viewpubliclocalityphotocount.js';
import ViewpubliclocalityphotocountJson from '../conversion/viewpubliclocalityphotocountjson.js';

class Rsviewpubliclocalityphotocountsuper extends Filmservice {

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
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewpubliclocalityphotocountsuper;
