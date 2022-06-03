//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import Viewcountryphotocount from '../../../../../data/film/view/viewcountryphotocount.js';
import Moment from 'moment';

class ViewcountryphotocountJson {
	static toJSON = (viewcountryphotocount) => {
		var jsonobj = {
			"code": viewcountryphotocount.code,
			"name": viewcountryphotocount.name,
			"photocount": "" + viewcountryphotocount.photocount,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewcountryphotocount => {
		let model = new Viewcountryphotocount();
		model.code = jsonobj.code;
		model.name = jsonobj.name;
		model.photocount = "" + jsonobj.photocount;
		return model;
	}
}

export default ViewcountryphotocountJson;
