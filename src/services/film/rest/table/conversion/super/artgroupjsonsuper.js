//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import { Artgrouppk } from '../../../../../../data/film/table/super/artgroupsuper.js';
import Artgroup from '../../../../../../data/film/table/artgroup.js';
import Moment from 'moment';
import ArtgroupJson from '../artgroupjson.js';

class ArtgroupJsonsuper {
	static PKtoJSON = (artgroupPK) => {
		let jsonobj = {
			"groupid": null,
		};
		if(artgroupPK!=null) {
			jsonobj.groupid = "" + artgroupPK.groupid;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (artgroupPK) => {
		return JSON.stringify(this.PKtoJSON(artgroupPK));
	}
	
	static toJSON = (artgroup) => {
		var jsonobj = {
			"PK": this.PKtoJSON(artgroup.PK),
			"groupname": artgroup.groupname,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Artgrouppk => {
		let artgroupPK = new Artgrouppk();
		if(jsonobj!=null) {
			artgroupPK.groupid = jsonobj.groupid;
		}
		return artgroupPK;
	}
	static fromJSON = (jsonobj): Artgroup => {
		let model = new Artgroup();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.groupname = jsonobj.groupname;
		return model;
	}
}

export default ArtgroupJsonsuper;
