//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Geometrycolumns from '../../../../../data/film/view/geometrycolumns.js';
import GeometrycolumnsJson from '../conversion/geometrycolumnsjson.js';

class Rsgeometrycolumnssuper extends Filmservice {

	static restserviceselect = 'rsgeometry_columns_select';
	static restservice = 'rsgeometry_columns';

	static extractDataArray = (jsonarray): Geometrycolumns[] => {
		let geometrycolumnss: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			geometrycolumnss.push(GeometrycolumnsJson.fromJSON(jsonarray[i]));
		}
   	return geometrycolumnss;
	}

	static extractDataObject = (jsonobject): Geometrycolumns => {
    return GeometrycolumnsJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsgeometrycolumnssuper;
