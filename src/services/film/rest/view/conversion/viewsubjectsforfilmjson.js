//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import Viewsubjectsforfilm from '../../../../../data/film/view/viewsubjectsforfilm.js';
import Moment from 'moment';

class ViewsubjectsforfilmJson {
	static toJSON = (viewsubjectsforfilm) => {
		var jsonobj = {
			"film": viewsubjectsforfilm.film,
			"cat1": viewsubjectsforfilm.cat1,
			"cat2": viewsubjectsforfilm.cat2,
			"id": viewsubjectsforfilm.id,
			"subject": viewsubjectsforfilm.subject,
			"description": viewsubjectsforfilm.description,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewsubjectsforfilm => {
		let model = new Viewsubjectsforfilm();
		model.film = jsonobj.film;
		model.cat1 = jsonobj.cat1;
		model.cat2 = jsonobj.cat2;
		model.id = jsonobj.id;
		model.subject = jsonobj.subject;
		model.description = jsonobj.description;
		return model;
	}
}

export default ViewsubjectsforfilmJson;
