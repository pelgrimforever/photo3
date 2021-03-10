//Auto generated code
//don't change things here, it will be overwritten
//change in artsubgroup-json.js
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import { Artsubgrouppk } from '../../../../../../data/film/table/super/artsubgroupsuper.js';
import Artsubgroup from '../../../../../../data/film/table/artsubgroup.js';
import { Artgrouppk } from '../../../../../../data/film/table/super/artgroupsuper.js';
import ArtgroupJson from '../artgroupjson.js';
import Moment from 'moment';
import ArtsubgroupJson from '../artsubgroupjson.js';

class ArtsubgroupJsonsuper {
	static PKtoJSON = (artsubgroupPK) => {
		let jsonobj = {
			"subgroupid": null,
		};
		if(artsubgroupPK!=null) {
			jsonobj.subgroupid = artsubgroupPK.subgroupid;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (artsubgroupPK) => {
		return JSON.stringify(this.PKtoJSON(artsubgroupPK));
	}
	
	static toJSON = (artsubgroup) => {
		var jsonobj = {
			"PK": this.PKtoJSON(artsubgroup.PK),
			"artgroupPK": null,
			"subgroupname": artsubgroup.subgroupname,
			"lastseqno": artsubgroup.lastseqno,
		};
		if(artsubgroup.artgroupPK!=null) {
			jsonobj.artgroupPK = ArtgroupJson.PKtoJSON(artsubgroup.artgroupPK);
		}
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Artsubgrouppk => {
		let artsubgroupPK = new Artsubgrouppk();
		if(jsonobj!=null) {
			artsubgroupPK.subgroupid = jsonobj.subgroupid;
		}
		return artsubgroupPK;
	}
	static fromJSON = (jsonobj): Artsubgroup => {
		let model = new Artsubgroup();
		model.PK = this.PKfromJSON(jsonobj.PK);
		let artgroupPK = ArtgroupJson.PKfromJSON(jsonobj.artgroupPK);
		model.artgroupPK = artgroupPK;
		model.subgroupname = jsonobj.subgroupname;
		model.lastseqno = jsonobj.lastseqno;
		return model;
	}
}

export default ArtsubgroupJsonsuper;
