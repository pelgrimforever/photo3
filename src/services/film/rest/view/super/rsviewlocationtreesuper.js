//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Viewlocationtree from '../../../../../data/film/view/viewlocationtree.js';
import ViewlocationtreeJson from '../conversion/viewlocationtreejson.js';

class Rsviewlocationtreesuper extends Filmservice {

	static restserviceselect = 'rsview_locationtree_select';
	static restservice = 'rsview_locationtree';

	static extractDataArray = (jsonarray): Viewlocationtree[] => {
		let viewlocationtrees: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewlocationtrees.push(ViewlocationtreeJson.fromJSON(jsonarray[i]));
		}
   	return viewlocationtrees;
	}

	static extractDataObject = (jsonobject): Viewlocationtree => {
    return ViewlocationtreeJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewlocationtreesuper;
