//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import { Filmtypepk } from '../../../../../../data/film/table/super/filmtypesuper.js';
import Filmtype from '../../../../../../data/film/table/filmtype.js';
import Moment from 'moment';
import FilmtypeJson from '../filmtypejson.js';

class FilmtypeJsonsuper {
	static PKtoJSON = (filmtypePK) => {
		let jsonobj = {
			"type": null,
		};
		if(filmtypePK!=null) {
			jsonobj.type = filmtypePK.type;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (filmtypePK) => {
		return JSON.stringify(this.PKtoJSON(filmtypePK));
	}
	
	static toJSON = (filmtype) => {
		var jsonobj = {
			"PK": this.PKtoJSON(filmtype.PK),
			"description": filmtype.description,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Filmtypepk => {
		let filmtypePK = new Filmtypepk();
		if(jsonobj!=null) {
			filmtypePK.type = jsonobj.type;
		}
		return filmtypePK;
	}
	static fromJSON = (jsonobj): Filmtype => {
		let model = new Filmtype();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.description = jsonobj.description;
		return model;
	}
}

export default FilmtypeJsonsuper;
