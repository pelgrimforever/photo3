//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Viewpubliclocalityphotocount from '../../../../../data/film/view/viewpubliclocalityphotocount.js';
import Moment from 'moment';

class ViewpubliclocalityphotocountJson {
	static toJSON = (viewpubliclocalityphotocount) => {
		var jsonobj = {
			"countrycode": viewpubliclocalityphotocount.countrycode,
			"locality": viewpubliclocalityphotocount.locality,
			"location": viewpubliclocalityphotocount.location,
			"photocount": "" + viewpubliclocalityphotocount.photocount,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewpubliclocalityphotocount => {
		let model = new Viewpubliclocalityphotocount();
		model.countrycode = jsonobj.countrycode;
		model.locality = jsonobj.locality;
		model.location = jsonobj.location;
		model.photocount = "" + jsonobj.photocount;
		return model;
	}
}

export default ViewpubliclocalityphotocountJson;
