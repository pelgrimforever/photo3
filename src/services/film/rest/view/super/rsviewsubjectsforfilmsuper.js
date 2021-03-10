//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in Rsviewsubjectsforfilmservice.js
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Viewsubjectsforfilm from '../../../../../data/film/view/viewsubjectsforfilm.js';
import ViewsubjectsforfilmJson from '../conversion/viewsubjectsforfilmjson.js';

class Rsviewsubjectsforfilmsuper extends Filmservice {

	static restservice = 'rsview_subjects_for_film';

	static extractDataArray = (jsonarray): Viewsubjectsforfilm[] => {
		let viewsubjectsforfilms: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewsubjectsforfilms.push(ViewsubjectsforfilmJson.fromJSON(jsonarray[i]));
		}
   	return viewsubjectsforfilms;
	}

	static extractDataObject = (jsonobject): Viewsubjectsforfilm => {
    return ViewsubjectsforfilmJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewsubjectsforfilmsuper;
