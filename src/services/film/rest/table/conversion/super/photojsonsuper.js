//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import { Photopk } from '../../../../../../data/film/table/super/photosuper.js';
import Photo from '../../../../../../data/film/table/photo.js';
import { Routepk } from '../../../../../../data/film/table/super/routesuper.js';
import RouteJson from '../routejson.js';
import { Creatorpk } from '../../../../../../data/film/table/super/creatorsuper.js';
import CreatorJson from '../creatorjson.js';
import { Filmpk } from '../../../../../../data/film/table/super/filmsuper.js';
import FilmJson from '../filmjson.js';
import Moment from 'moment';
import PhotoJson from '../photojson.js';

class PhotoJsonsuper {
	static PKtoJSON = (photoPK) => {
		let jsonobj = {
			"id": null,
			"film": photoPK.filmPK==null ? null : photoPK.filmPK.getId(),

		};
		if(photoPK!=null) {
			jsonobj.id = photoPK.id;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (photoPK) => {
		return JSON.stringify(this.PKtoJSON(photoPK));
	}
	
	static toJSON = (photo) => {
		var jsonobj = {
			"PK": this.PKtoJSON(photo.PK),
			"routePK": null,
			"creatorPK": null,
			"format": photo.format,
			"description": photo.description,
			"photodate": "" + photo.photodate,
			"phototime": "" + photo.phototime,
			"public": photo.public,
			"composition": photo.composition,
			"rotation": "" + photo.rotation,
			"backup": photo.backup,
			"imagebackup": photo.imagebackup,
			"location": photo.location,
			"exactlocation": photo.exactlocation,
			"locationradius": "" + photo.locationradius,
			"reversegeocode": photo.reversegeocode,
			"streetnumber": photo.streetnumber,
			"formattedaddress": photo.formattedaddress,
		};
		if(photo.routePK!=null) {
			jsonobj.routePK = RouteJson.PKtoJSON(photo.routePK);
		}
		if(photo.creatorPK!=null) {
			jsonobj.creatorPK = CreatorJson.PKtoJSON(photo.creatorPK);
		}
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Photopk => {
		let photoPK = new Photopk();
		if(jsonobj!=null) {
			let filmproperties = {
				"id": jsonobj.film,
			}
			let filmPK = FilmJson.PKfromJSON(filmproperties);
			photoPK.filmPK = filmPK;
			photoPK.id = jsonobj.id;
		}
		return photoPK;
	}
	static fromJSON = (jsonobj): Photo => {
		let model = new Photo();
		model.PK = this.PKfromJSON(jsonobj.PK);
		let routePK = RouteJson.PKfromJSON(jsonobj.routePK);
		model.routePK = routePK;
		let creatorPK = CreatorJson.PKfromJSON(jsonobj.creatorPK);
		model.creatorPK = creatorPK;
		model.format = jsonobj.format;
		model.description = jsonobj.description;
		model.photodate = jsonobj.photodate;
		if(model.photodate) {
			model.photodateUI = Moment(new Date(jsonobj.photodate)).format("YYYY MM DD");
		} else {
			model.photodate = "";
		}
		model.phototime = jsonobj.phototime;
		if(model.phototime) {
			model.phototimeUI = Moment(new Date(jsonobj.phototime)).format("hh:mm:ss");
		} else {
			model.phototime = "";
		}
		model.public = jsonobj.public;
		model.composition = jsonobj.composition;
		model.rotation = parseFloat(jsonobj.rotation);
		model.backup = jsonobj.backup;
		model.imagebackup = jsonobj.imagebackup;
		model.location = jsonobj.location;
		model.exactlocation = jsonobj.exactlocation;
		model.locationradius = parseFloat(jsonobj.locationradius);
		model.reversegeocode = jsonobj.reversegeocode;
		model.streetnumber = jsonobj.streetnumber;
		model.formattedaddress = jsonobj.formattedaddress;
		return model;
	}
}

export default PhotoJsonsuper;
