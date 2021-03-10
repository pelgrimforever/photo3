//Auto generated code
//don't change things here, it will be overwritten
//change in film-json.js
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import { Filmpk } from '../../../../../../data/film/table/super/filmsuper.js';
import Film from '../../../../../../data/film/table/film.js';
import { Filmtypepk } from '../../../../../../data/film/table/super/filmtypesuper.js';
import FilmtypeJson from '../filmtypejson.js';
import Moment from 'moment';
import FilmJson from '../filmjson.js';

class FilmJsonsuper {
	static PKtoJSON = (filmPK) => {
		let jsonobj = {
			"id": null,
		};
		if(filmPK!=null) {
			jsonobj.id = filmPK.id;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (filmPK) => {
		return JSON.stringify(this.PKtoJSON(filmPK));
	}
	
	static toJSON = (film) => {
		var jsonobj = {
			"PK": this.PKtoJSON(film.PK),
			"filmtypePK": null,
			"iso": film.iso,
			"startdate": "" + film.startdate,
			"enddate": "" + film.enddate,
			"owner": film.owner,
			"cd": film.cd,
			"public": film.public,
			"backup": film.backup,
		};
		if(film.filmtypePK!=null) {
			jsonobj.filmtypePK = FilmtypeJson.PKtoJSON(film.filmtypePK);
		}
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Filmpk => {
		let filmPK = new Filmpk();
		if(jsonobj!=null) {
			filmPK.id = jsonobj.id;
		}
		return filmPK;
	}
	static fromJSON = (jsonobj): Film => {
		let model = new Film();
		model.PK = this.PKfromJSON(jsonobj.PK);
		let filmtypePK = FilmtypeJson.PKfromJSON(jsonobj.filmtypePK);
		model.filmtypePK = filmtypePK;
		model.iso = jsonobj.iso;
		model.startdate = jsonobj.startdate;
		if(model.startdate) {
			model.startdateUI = Moment(new Date(jsonobj.startdate)).format("YYYY MM DD");
		} else {
			model.startdate = "";
		}
		model.enddate = jsonobj.enddate;
		if(model.enddate) {
			model.enddateUI = Moment(new Date(jsonobj.enddate)).format("YYYY MM DD");
		} else {
			model.enddate = "";
		}
		model.owner = jsonobj.owner;
		model.cd = jsonobj.cd;
		model.public = jsonobj.public;
		model.backup = jsonobj.backup;
		return model;
	}
}

export default FilmJsonsuper;
