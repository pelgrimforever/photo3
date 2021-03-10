//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in Rsrastercolumnsservice.js
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Rastercolumns from '../../../../../data/film/view/rastercolumns.js';
import RastercolumnsJson from '../conversion/rastercolumnsjson.js';

class Rsrastercolumnssuper extends Filmservice {

	static restservice = 'rsraster_columns';

	static extractDataArray = (jsonarray): Rastercolumns[] => {
		let rastercolumnss: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			rastercolumnss.push(RastercolumnsJson.fromJSON(jsonarray[i]));
		}
   	return rastercolumnss;
	}

	static extractDataObject = (jsonobject): Rastercolumns => {
    return RastercolumnsJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsrastercolumnssuper;
