//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in Rsviewsubjectsforphotoservice.js
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Viewsubjectsforphoto from '../../../../../data/film/view/viewsubjectsforphoto.js';
import ViewsubjectsforphotoJson from '../conversion/viewsubjectsforphotojson.js';

class Rsviewsubjectsforphotosuper extends Filmservice {

	static restservice = 'rsview_subjects_for_photo';

	static extractDataArray = (jsonarray): Viewsubjectsforphoto[] => {
		let viewsubjectsforphotos: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewsubjectsforphotos.push(ViewsubjectsforphotoJson.fromJSON(jsonarray[i]));
		}
   	return viewsubjectsforphotos;
	}

	static extractDataObject = (jsonobject): Viewsubjectsforphoto => {
    return ViewsubjectsforphotoJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewsubjectsforphotosuper;
