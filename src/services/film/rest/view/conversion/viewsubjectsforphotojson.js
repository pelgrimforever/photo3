//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Viewsubjectsforphoto from '../../../../../data/film/view/viewsubjectsforphoto.js';
import Moment from 'moment';

class ViewsubjectsforphotoJson {
	static toJSON = (viewsubjectsforphoto) => {
		var jsonobj = {
			"film": viewsubjectsforphoto.film,
			"photoid": viewsubjectsforphoto.photoid,
			"cat1": viewsubjectsforphoto.cat1,
			"cat2": viewsubjectsforphoto.cat2,
			"id": viewsubjectsforphoto.id,
			"subject": viewsubjectsforphoto.subject,
			"description": viewsubjectsforphoto.description,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewsubjectsforphoto => {
		let model = new Viewsubjectsforphoto();
		model.film = jsonobj.film;
		model.photoid = jsonobj.photoid;
		model.cat1 = jsonobj.cat1;
		model.cat2 = jsonobj.cat2;
		model.id = jsonobj.id;
		model.subject = jsonobj.subject;
		model.description = jsonobj.description;
		return model;
	}
}

export default ViewsubjectsforphotoJson;
