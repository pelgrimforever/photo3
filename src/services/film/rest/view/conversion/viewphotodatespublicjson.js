//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Viewphotodatespublic from '../../../../../data/film/view/viewphotodatespublic.js';
import Moment from 'moment';

class ViewphotodatespublicJson {
	static toJSON = (viewphotodatespublic) => {
		var jsonobj = {
			"photodate": "" + viewphotodatespublic.photodate,
			"photos": "" + viewphotodatespublic.photos,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewphotodatespublic => {
		let model = new Viewphotodatespublic();
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

export default ViewphotodatespublicJson;
