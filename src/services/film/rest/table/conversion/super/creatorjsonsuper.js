//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import { Creatorpk } from '../../../../../../data/film/table/super/creatorsuper.js';
import Creator from '../../../../../../data/film/table/creator.js';
import Moment from 'moment';
import CreatorJson from '../creatorjson.js';

class CreatorJsonsuper {
	static PKtoJSON = (creatorPK) => {
		let jsonobj = {
			"creatorid": null,
		};
		if(creatorPK!=null) {
			jsonobj.creatorid = creatorPK.creatorid;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (creatorPK) => {
		return JSON.stringify(this.PKtoJSON(creatorPK));
	}
	
	static toJSON = (creator) => {
		var jsonobj = {
			"PK": this.PKtoJSON(creator.PK),
			"name": creator.name,
			"surname": creator.surname,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Creatorpk => {
		let creatorPK = new Creatorpk();
		if(jsonobj!=null) {
			creatorPK.creatorid = jsonobj.creatorid;
		}
		return creatorPK;
	}
	static fromJSON = (jsonobj): Creator => {
		let model = new Creator();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.name = jsonobj.name;
		model.surname = jsonobj.surname;
		return model;
	}
}

export default CreatorJsonsuper;
