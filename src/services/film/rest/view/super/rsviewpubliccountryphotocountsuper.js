//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Viewpubliccountryphotocount from '../../../../../data/film/view/viewpubliccountryphotocount.js';
import ViewpubliccountryphotocountJson from '../conversion/viewpubliccountryphotocountjson.js';

class Rsviewpubliccountryphotocountsuper extends Filmservice {

	static restserviceselect = 'rsview_publiccountryphotocount_select';
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
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewpubliccountryphotocountsuper;
