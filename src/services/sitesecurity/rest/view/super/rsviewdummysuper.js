//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 23.8.2022 15:18
    Author     : Franky Laseure
*/

import Sitesecurityservice from '../../../../sitesecurityservice.js';
import Viewdummy from '../../../../../data/sitesecurity/view/viewdummy.js';
import ViewdummyJson from '../conversion/viewdummyjson.js';

class Rsviewdummysuper extends Sitesecurityservice {

	static restserviceselect = 'rsview_dummy_select';
	static restservice = 'rsview_dummy';

	static extractDataArray = (jsonarray): Viewdummy[] => {
		let viewdummys: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewdummys.push(ViewdummyJson.fromJSON(jsonarray[i]));
		}
   	return viewdummys;
	}

	static extractDataObject = (jsonobject): Viewdummy => {
    return ViewdummyJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewdummysuper;
