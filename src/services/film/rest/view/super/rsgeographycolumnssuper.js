//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Geographycolumns from '../../../../../data/film/view/geographycolumns.js';
import GeographycolumnsJson from '../conversion/geographycolumnsjson.js';

class Rsgeographycolumnssuper extends Filmservice {

	static restserviceselect = 'rsgeography_columns_select';
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
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsgeographycolumnssuper;
