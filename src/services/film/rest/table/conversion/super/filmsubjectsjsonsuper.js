//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import { Filmsubjectspk } from '../../../../../../data/film/table/super/filmsubjectssuper.js';
import Filmsubjects from '../../../../../../data/film/table/filmsubjects.js';
import { Subjectpk } from '../../../../../../data/film/table/super/subjectsuper.js';
import SubjectJson from '../subjectjson.js';
import { Filmpk } from '../../../../../../data/film/table/super/filmsuper.js';
import FilmJson from '../filmjson.js';
import Moment from 'moment';
import FilmsubjectsJson from '../filmsubjectsjson.js';

class FilmsubjectsJsonsuper {
	static PKtoJSON = (filmsubjectsPK) => {
		let jsonobj = {
			"cat1": filmsubjectsPK.subjectPK==null ? null : filmsubjectsPK.subjectPK.getCat1(),
			"cat2": filmsubjectsPK.subjectPK==null ? null : filmsubjectsPK.subjectPK.getCat2(),
			"subject": filmsubjectsPK.subjectPK==null ? null : filmsubjectsPK.subjectPK.getId(),

			"film": filmsubjectsPK.filmPK==null ? null : filmsubjectsPK.filmPK.getId(),

		};
		if(filmsubjectsPK!=null) {
		}
		return jsonobj;
	}

	static PKtoJSONstring = (filmsubjectsPK) => {
		return JSON.stringify(this.PKtoJSON(filmsubjectsPK));
	}
	
	static toJSON = (filmsubjects) => {
		var jsonobj = {
			"PK": this.PKtoJSON(filmsubjects.PK),
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Filmsubjectspk => {
		let filmsubjectsPK = new Filmsubjectspk();
		if(jsonobj!=null) {
			let subjectproperties = {
				"cat1": jsonobj.cat1,
				"cat2": jsonobj.cat2,
				"id": jsonobj.subject,
			}
			let subjectPK = SubjectJson.PKfromJSON(subjectproperties);
			filmsubjectsPK.subjectPK = subjectPK;
			let filmproperties = {
				"id": jsonobj.film,
			}
			let filmPK = FilmJson.PKfromJSON(filmproperties);
			filmsubjectsPK.filmPK = filmPK;
		}
		return filmsubjectsPK;
	}
	static fromJSON = (jsonobj): Filmsubjects => {
		let model = new Filmsubjects();
		model.PK = this.PKfromJSON(jsonobj.PK);
		return model;
	}
}

export default FilmsubjectsJsonsuper;
