//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in Rsviewphotodatesservice.js
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Viewphotodates from '../../../../../data/film/view/viewphotodates.js';
import ViewphotodatesJson from '../conversion/viewphotodatesjson.js';

class Rsviewphotodatessuper extends Filmservice {

	static restservice = 'rsview_photodates';

	static extractDataArray = (jsonarray): Viewphotodates[] => {
		let viewphotodatess: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewphotodatess.push(ViewphotodatesJson.fromJSON(jsonarray[i]));
		}
   	return viewphotodatess;
	}

	static extractDataObject = (jsonobject): Viewphotodates => {
    return ViewphotodatesJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewphotodatessuper;
