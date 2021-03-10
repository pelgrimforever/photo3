//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Viewpubliccountryphotocount from '../../../../../data/film/view/viewpubliccountryphotocount.js';
import Moment from 'moment';

class ViewpubliccountryphotocountJson {
	static toJSON = (viewpubliccountryphotocount) => {
		var jsonobj = {
			"code": viewpubliccountryphotocount.code,
			"name": viewpubliccountryphotocount.name,
			"photocount": "" + viewpubliccountryphotocount.photocount,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewpubliccountryphotocount => {
		let model = new Viewpubliccountryphotocount();
		model.code = jsonobj.code;
		model.name = jsonobj.name;
		model.photocount = "" + jsonobj.photocount;
		return model;
	}
}

export default ViewpubliccountryphotocountJson;
