//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Rastercolumns from '../../../../../data/film/view/rastercolumns.js';
import RastercolumnsJson from '../conversion/rastercolumnsjson.js';

class Rsrastercolumnssuper extends Filmservice {

	static restserviceselect = 'rsraster_columns_select';
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
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsrastercolumnssuper;
