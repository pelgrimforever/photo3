//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Viewlocalityphotolocations from '../../../../../data/film/view/viewlocalityphotolocations.js';
import Moment from 'moment';

class ViewlocalityphotolocationsJson {
	static toJSON = (viewlocalityphotolocations) => {
		var jsonobj = {
			"countrycode": viewlocalityphotolocations.countrycode,
			"locality": viewlocalityphotolocations.locality,
			"location": viewlocalityphotolocations.location,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewlocalityphotolocations => {
		let model = new Viewlocalityphotolocations();
		model.countrycode = jsonobj.countrycode;
		model.locality = jsonobj.locality;
		model.location = jsonobj.location;
		return model;
	}
}

export default ViewlocalityphotolocationsJson;
