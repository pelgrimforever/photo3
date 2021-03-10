//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in Rsviewpubliccountryphotocountservice.js
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Viewpubliccountryphotocount from '../../../../../data/film/view/viewpubliccountryphotocount.js';
import ViewpubliccountryphotocountJson from '../conversion/viewpubliccountryphotocountjson.js';

class Rsviewpubliccountryphotocountsuper extends Filmservice {

	static restservice = 'rsview_publiccountryphotocount';

	static extractDataArray = (jsonarray): Viewpubliccountryphotocount[] => {
		let viewpubliccountryphotocounts: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewpubliccountryphotocounts.push(ViewpubliccountryphotocountJson.fromJSON(jsonarray[i]));
		}
   	return viewpubliccountryphotocounts;
	}

	static extractDataObject = (jsonobject): Viewpubliccountryphotocount => {
    return ViewpubliccountryphotocountJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewpubliccountryphotocountsuper;
