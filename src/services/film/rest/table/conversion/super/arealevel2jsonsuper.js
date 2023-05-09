//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import { Arealevel2pk } from '../../../../../../data/film/table/super/arealevel2super.js';
import Arealevel2 from '../../../../../../data/film/table/arealevel2.js';
import { Arealevel1pk } from '../../../../../../data/film/table/super/arealevel1super.js';
import Arealevel1Json from '../arealevel1json.js';
import Moment from 'moment';
import Arealevel2Json from '../arealevel2json.js';

class Arealevel2Jsonsuper {
	static PKtoJSON = (arealevel2PK) => {
		let jsonobj = {
			"al2code": null,
			"countrycode": arealevel2PK.arealevel1PK==null ? null : arealevel2PK.arealevel1PK.getCountrycode(),
			"al1code": arealevel2PK.arealevel1PK==null ? null : arealevel2PK.arealevel1PK.getAl1code(),

		};
		if(arealevel2PK!=null) {
			jsonobj.al2code = arealevel2PK.al2code;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (arealevel2PK) => {
		return JSON.stringify(this.PKtoJSON(arealevel2PK));
	}
	
	static toJSON = (arealevel2) => {
		var jsonobj = {
			"PK": this.PKtoJSON(arealevel2.PK),
			"name": arealevel2.name,
			"location": arealevel2.location,
			"bounds": arealevel2.bounds,
			"viewport": arealevel2.viewport,
			"approximate": arealevel2.approximate,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Arealevel2pk => {
		let arealevel2PK = new Arealevel2pk();
		if(jsonobj!=null) {
			let arealevel1properties = {
				"countrycode": jsonobj.countrycode,
				"al1code": jsonobj.al1code,
			}
			let arealevel1PK = Arealevel1Json.PKfromJSON(arealevel1properties);
			arealevel2PK.arealevel1PK = arealevel1PK;
			arealevel2PK.al2code = jsonobj.al2code;
		}
		return arealevel2PK;
	}
	static fromJSON = (jsonobj): Arealevel2 => {
		let model = new Arealevel2();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.name = jsonobj.name;
		model.location = jsonobj.location;
		model.bounds = jsonobj.bounds;
		model.viewport = jsonobj.viewport;
		model.approximate = jsonobj.approximate;
		return model;
	}
}

export default Arealevel2Jsonsuper;
