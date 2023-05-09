//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Viewphotodates from '../../../../../data/film/view/viewphotodates.js';
import Moment from 'moment';

class ViewphotodatesJson {
	static toJSON = (viewphotodates) => {
		var jsonobj = {
			"photodate": "" + viewphotodates.photodate,
			"photos": "" + viewphotodates.photos,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewphotodates => {
		let model = new Viewphotodates();
		model.photodate = jsonobj.photodate;
		if(model.photodate) {
			model.photodateUI = Moment(new Date(jsonobj.photodate)).format("YYYY MM DD");
		} else {
			model.photodate = "";
		}
		model.photos = "" + jsonobj.photos;
		return model;
	}
}

export default ViewphotodatesJson;
