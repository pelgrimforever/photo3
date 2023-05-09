//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import { Phototagspk } from '../../../../../../data/film/table/super/phototagssuper.js';
import Phototags from '../../../../../../data/film/table/phototags.js';
import { Photopk } from '../../../../../../data/film/table/super/photosuper.js';
import PhotoJson from '../photojson.js';
import Moment from 'moment';
import PhototagsJson from '../phototagsjson.js';

class PhototagsJsonsuper {
	static PKtoJSON = (phototagsPK) => {
		let jsonobj = {
			"tag": null,
			"film": phototagsPK.photoPK==null ? null : phototagsPK.photoPK.getFilm(),
			"id": phototagsPK.photoPK==null ? null : phototagsPK.photoPK.getId(),

		};
		if(phototagsPK!=null) {
			jsonobj.tag = phototagsPK.tag;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (phototagsPK) => {
		return JSON.stringify(this.PKtoJSON(phototagsPK));
	}
	
	static toJSON = (phototags) => {
		var jsonobj = {
			"PK": this.PKtoJSON(phototags.PK),
			"tagformat": phototags.tagformat,
			"tagvalue": phototags.tagvalue,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Phototagspk => {
		let phototagsPK = new Phototagspk();
		if(jsonobj!=null) {
			let photoproperties = {
				"film": jsonobj.film,
				"id": jsonobj.id,
			}
			let photoPK = PhotoJson.PKfromJSON(photoproperties);
			phototagsPK.photoPK = photoPK;
			phototagsPK.tag = jsonobj.tag;
		}
		return phototagsPK;
	}
	static fromJSON = (jsonobj): Phototags => {
		let model = new Phototags();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.tagformat = jsonobj.tagformat;
		model.tagvalue = jsonobj.tagvalue;
		return model;
	}
}

export default PhototagsJsonsuper;
