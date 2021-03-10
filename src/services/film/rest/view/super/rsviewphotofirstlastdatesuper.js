//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in Rsviewphotofirstlastdateservice.js
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Viewphotofirstlastdate from '../../../../../data/film/view/viewphotofirstlastdate.js';
import ViewphotofirstlastdateJson from '../conversion/viewphotofirstlastdatejson.js';

class Rsviewphotofirstlastdatesuper extends Filmservice {

	static restservice = 'rsview_photo_firstlastdate';

	static extractDataArray = (jsonarray): Viewphotofirstlastdate[] => {
		let viewphotofirstlastdates: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewphotofirstlastdates.push(ViewphotofirstlastdateJson.fromJSON(jsonarray[i]));
		}
   	return viewphotofirstlastdates;
	}

	static extractDataObject = (jsonobject): Viewphotofirstlastdate => {
    return ViewphotofirstlastdateJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewphotofirstlastdatesuper;
