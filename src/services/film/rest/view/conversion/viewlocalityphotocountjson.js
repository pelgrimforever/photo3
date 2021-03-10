//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Viewlocalityphotocount from '../../../../../data/film/view/viewlocalityphotocount.js';
import Moment from 'moment';

class ViewlocalityphotocountJson {
	static toJSON = (viewlocalityphotocount) => {
		var jsonobj = {
			"countrycode": viewlocalityphotocount.countrycode,
			"locality": viewlocalityphotocount.locality,
			"location": viewlocalityphotocount.location,
			"photocount": "" + viewlocalityphotocount.photocount,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewlocalityphotocount => {
		let model = new Viewlocalityphotocount();
		model.countrycode = jsonobj.countrycode;
		model.locality = jsonobj.locality;
		model.location = jsonobj.location;
		model.photocount = "" + jsonobj.photocount;
		return model;
	}
}

export default ViewlocalityphotocountJson;
