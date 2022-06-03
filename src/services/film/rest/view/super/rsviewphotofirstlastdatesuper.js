//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Viewphotofirstlastdate from '../../../../../data/film/view/viewphotofirstlastdate.js';
import ViewphotofirstlastdateJson from '../conversion/viewphotofirstlastdatejson.js';

class Rsviewphotofirstlastdatesuper extends Filmservice {

	static restserviceselect = 'rsview_photo_firstlastdate_select';
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
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewphotofirstlastdatesuper;
