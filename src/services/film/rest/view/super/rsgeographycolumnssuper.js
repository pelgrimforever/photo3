//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in Rsgeographycolumnsservice.js
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Geographycolumns from '../../../../../data/film/view/geographycolumns.js';
import GeographycolumnsJson from '../conversion/geographycolumnsjson.js';

class Rsgeographycolumnssuper extends Filmservice {

	static restservice = 'rsgeography_columns';

	static extractDataArray = (jsonarray): Geographycolumns[] => {
		let geographycolumnss: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			geographycolumnss.push(GeographycolumnsJson.fromJSON(jsonarray[i]));
		}
   	return geographycolumnss;
	}

	static extractDataObject = (jsonobject): Geographycolumns => {
    return GeographycolumnsJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsgeographycolumnssuper;
