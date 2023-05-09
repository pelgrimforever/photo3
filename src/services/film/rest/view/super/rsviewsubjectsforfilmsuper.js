//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Viewsubjectsforfilm from '../../../../../data/film/view/viewsubjectsforfilm.js';
import ViewsubjectsforfilmJson from '../conversion/viewsubjectsforfilmjson.js';

class Rsviewsubjectsforfilmsuper extends Filmservice {

	static restserviceselect = 'rsview_subjects_for_film_select';
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
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewsubjectsforfilmsuper;
