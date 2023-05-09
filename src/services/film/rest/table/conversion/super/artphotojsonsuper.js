//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import { Artphotopk } from '../../../../../../data/film/table/super/artphotosuper.js';
import Artphoto from '../../../../../../data/film/table/artphoto.js';
import { Photopk } from '../../../../../../data/film/table/super/photosuper.js';
import PhotoJson from '../photojson.js';
import { Artsubgrouppk } from '../../../../../../data/film/table/super/artsubgroupsuper.js';
import ArtsubgroupJson from '../artsubgroupjson.js';
import { Artacademypk } from '../../../../../../data/film/table/super/artacademysuper.js';
import ArtacademyJson from '../artacademyjson.js';
import { Artgrouppk } from '../../../../../../data/film/table/super/artgroupsuper.js';
import ArtgroupJson from '../artgroupjson.js';
import Moment from 'moment';
import ArtphotoJson from '../artphotojson.js';

class ArtphotoJsonsuper {
	static PKtoJSON = (artphotoPK) => {
		let jsonobj = {
			"film": artphotoPK.photoPK==null ? null : artphotoPK.photoPK.getFilm(),
			"photo": artphotoPK.photoPK==null ? null : artphotoPK.photoPK.getId(),

		};
		if(artphotoPK!=null) {
		}
		return jsonobj;
	}

	static PKtoJSONstring = (artphotoPK) => {
		return JSON.stringify(this.PKtoJSON(artphotoPK));
	}
	
	static toJSON = (artphoto) => {
		var jsonobj = {
			"PK": this.PKtoJSON(artphoto.PK),
			"artsubgroupPK": null,
			"artacademyPK": null,
			"artgroupPK": null,
			"selection": artphoto.selection,
			"width": artphoto.width,
			"height": artphoto.height,
			"comment": artphoto.comment,
			"seqno": artphoto.seqno,
			"archive": artphoto.archive,
			"surround": artphoto.surround,
			"surrounddir": artphoto.surrounddir,
		};
		if(artphoto.artsubgroupPK!=null) {
			jsonobj.artsubgroupPK = ArtsubgroupJson.PKtoJSON(artphoto.artsubgroupPK);
		}
		if(artphoto.artacademyPK!=null) {
			jsonobj.artacademyPK = ArtacademyJson.PKtoJSON(artphoto.artacademyPK);
		}
		if(artphoto.artgroupPK!=null) {
			jsonobj.artgroupPK = ArtgroupJson.PKtoJSON(artphoto.artgroupPK);
		}
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Artphotopk => {
		let artphotoPK = new Artphotopk();
		if(jsonobj!=null) {
			let photoproperties = {
				"film": jsonobj.film,
				"id": jsonobj.photo,
			}
			let photoPK = PhotoJson.PKfromJSON(photoproperties);
			artphotoPK.photoPK = photoPK;
		}
		return artphotoPK;
	}
	static fromJSON = (jsonobj): Artphoto => {
		let model = new Artphoto();
		model.PK = this.PKfromJSON(jsonobj.PK);
		let artsubgroupPK = ArtsubgroupJson.PKfromJSON(jsonobj.artsubgroupPK);
		model.artsubgroupPK = artsubgroupPK;
		let artacademyPK = ArtacademyJson.PKfromJSON(jsonobj.artacademyPK);
		model.artacademyPK = artacademyPK;
		let artgroupPK = ArtgroupJson.PKfromJSON(jsonobj.artgroupPK);
		model.artgroupPK = artgroupPK;
		model.selection = jsonobj.selection;
		model.width = jsonobj.width;
		model.height = jsonobj.height;
		model.comment = jsonobj.comment;
		model.seqno = jsonobj.seqno;
		model.archive = jsonobj.archive;
		model.surround = jsonobj.surround;
		model.surrounddir = jsonobj.surrounddir;
		return model;
	}
}

export default ArtphotoJsonsuper;
