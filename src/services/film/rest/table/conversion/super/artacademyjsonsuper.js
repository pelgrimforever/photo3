//Auto generated code
//don't change things here, it will be overwritten
//change in artacademy-json.js
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import { Artacademypk } from '../../../../../../data/film/table/super/artacademysuper.js';
import Artacademy from '../../../../../../data/film/table/artacademy.js';
import Moment from 'moment';
import ArtacademyJson from '../artacademyjson.js';

class ArtacademyJsonsuper {
	static PKtoJSON = (artacademyPK) => {
		let jsonobj = {
			"academyid": null,
		};
		if(artacademyPK!=null) {
			jsonobj.academyid = "" + artacademyPK.academyid;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (artacademyPK) => {
		return JSON.stringify(this.PKtoJSON(artacademyPK));
	}
	
	static toJSON = (artacademy) => {
		var jsonobj = {
			"PK": this.PKtoJSON(artacademy.PK),
			"academy": artacademy.academy,
			"academylocation": artacademy.academylocation,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Artacademypk => {
		let artacademyPK = new Artacademypk();
		if(jsonobj!=null) {
			artacademyPK.academyid = jsonobj.academyid;
		}
		return artacademyPK;
	}
	static fromJSON = (jsonobj): Artacademy => {
		let model = new Artacademy();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.academy = jsonobj.academy;
		model.academylocation = jsonobj.academylocation;
		return model;
	}
}

export default ArtacademyJsonsuper;
