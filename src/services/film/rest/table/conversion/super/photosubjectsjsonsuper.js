//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import { Photosubjectspk } from '../../../../../../data/film/table/super/photosubjectssuper.js';
import Photosubjects from '../../../../../../data/film/table/photosubjects.js';
import { Photopk } from '../../../../../../data/film/table/super/photosuper.js';
import PhotoJson from '../photojson.js';
import { Subjectpk } from '../../../../../../data/film/table/super/subjectsuper.js';
import SubjectJson from '../subjectjson.js';
import Moment from 'moment';
import PhotosubjectsJson from '../photosubjectsjson.js';

class PhotosubjectsJsonsuper {
	static PKtoJSON = (photosubjectsPK) => {
		let jsonobj = {
			"film": photosubjectsPK.photoPK==null ? null : photosubjectsPK.photoPK.getFilm(),
			"id": photosubjectsPK.photoPK==null ? null : photosubjectsPK.photoPK.getId(),

			"cat1": photosubjectsPK.subjectPK==null ? null : photosubjectsPK.subjectPK.getCat1(),
			"cat2": photosubjectsPK.subjectPK==null ? null : photosubjectsPK.subjectPK.getCat2(),
			"subject": photosubjectsPK.subjectPK==null ? null : photosubjectsPK.subjectPK.getId(),

		};
		if(photosubjectsPK!=null) {
		}
		return jsonobj;
	}

	static PKtoJSONstring = (photosubjectsPK) => {
		return JSON.stringify(this.PKtoJSON(photosubjectsPK));
	}
	
	static toJSON = (photosubjects) => {
		var jsonobj = {
			"PK": this.PKtoJSON(photosubjects.PK),
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Photosubjectspk => {
		let photosubjectsPK = new Photosubjectspk();
		if(jsonobj!=null) {
			let photoproperties = {
				"film": jsonobj.film,
				"id": jsonobj.id,
			}
			let photoPK = PhotoJson.PKfromJSON(photoproperties);
			photosubjectsPK.photoPK = photoPK;
			let subjectproperties = {
				"cat1": jsonobj.cat1,
				"cat2": jsonobj.cat2,
				"id": jsonobj.subject,
			}
			let subjectPK = SubjectJson.PKfromJSON(subjectproperties);
			photosubjectsPK.subjectPK = subjectPK;
		}
		return photosubjectsPK;
	}
	static fromJSON = (jsonobj): Photosubjects => {
		let model = new Photosubjects();
		model.PK = this.PKfromJSON(jsonobj.PK);
		return model;
	}
}

export default PhotosubjectsJsonsuper;
