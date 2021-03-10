//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in Rsgeometrycolumnsservice.js
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Geometrycolumns from '../../../../../data/film/view/geometrycolumns.js';
import GeometrycolumnsJson from '../conversion/geometrycolumnsjson.js';

class Rsgeometrycolumnssuper extends Filmservice {

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
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsgeometrycolumnssuper;
