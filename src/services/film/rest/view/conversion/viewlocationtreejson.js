//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import Viewlocationtree from '../../../../../data/film/view/viewlocationtree.js';
import Moment from 'moment';

class ViewlocationtreeJson {
	static toJSON = (viewlocationtree) => {
		var jsonobj = {
			"countrycode": viewlocationtree.countrycode,
			"countryname": viewlocationtree.countryname,
			"postalcode": viewlocationtree.postalcode,
			"al1code": viewlocationtree.al1code,
			"al1name": viewlocationtree.al1name,
			"al2code": viewlocationtree.al2code,
			"al2name": viewlocationtree.al2name,
			"al3code": viewlocationtree.al3code,
			"al3name": viewlocationtree.al3name,
			"locality": viewlocationtree.locality,
			"hassublocality": viewlocationtree.hassublocality,
			"sublocality": viewlocationtree.sublocality,
			"routecode": viewlocationtree.routecode,
			"routename": viewlocationtree.routename,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewlocationtree => {
		let model = new Viewlocationtree();
		model.countrycode = jsonobj.countrycode;
		model.countryname = jsonobj.countryname;
		model.postalcode = jsonobj.postalcode;
		model.al1code = jsonobj.al1code;
		model.al1name = jsonobj.al1name;
		model.al2code = jsonobj.al2code;
		model.al2name = jsonobj.al2name;
		model.al3code = jsonobj.al3code;
		model.al3name = jsonobj.al3name;
		model.locality = jsonobj.locality;
		model.hassublocality = jsonobj.hassublocality;
		model.sublocality = jsonobj.sublocality;
		model.routecode = jsonobj.routecode;
		model.routename = jsonobj.routename;
		return model;
	}
}

export default ViewlocationtreeJson;
