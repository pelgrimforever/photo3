//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in Rsviewlocationtreeservice.js
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Viewlocationtree from '../../../../../data/film/view/viewlocationtree.js';
import ViewlocationtreeJson from '../conversion/viewlocationtreejson.js';

class Rsviewlocationtreesuper extends Filmservice {

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
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewlocationtreesuper;
