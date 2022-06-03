//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import { Arealevel3pk } from '../../../../../../data/film/table/super/arealevel3super.js';
import Arealevel3 from '../../../../../../data/film/table/arealevel3.js';
import { Arealevel2pk } from '../../../../../../data/film/table/super/arealevel2super.js';
import Arealevel2Json from '../arealevel2json.js';
import Moment from 'moment';
import Arealevel3Json from '../arealevel3json.js';

class Arealevel3Jsonsuper {
	static PKtoJSON = (arealevel3PK) => {
		let jsonobj = {
			"al3code": null,
			"countrycode": arealevel3PK.arealevel2PK==null ? null : arealevel3PK.arealevel2PK.getCountrycode(),
			"al1code": arealevel3PK.arealevel2PK==null ? null : arealevel3PK.arealevel2PK.getAl1code(),
			"al2code": arealevel3PK.arealevel2PK==null ? null : arealevel3PK.arealevel2PK.getAl2code(),

		};
		if(arealevel3PK!=null) {
			jsonobj.al3code = arealevel3PK.al3code;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (arealevel3PK) => {
		return JSON.stringify(this.PKtoJSON(arealevel3PK));
	}
	
	static toJSON = (arealevel3) => {
		var jsonobj = {
			"PK": this.PKtoJSON(arealevel3.PK),
			"name": arealevel3.name,
			"location": arealevel3.location,
			"bounds": arealevel3.bounds,
			"viewport": arealevel3.viewport,
			"approximate": arealevel3.approximate,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Arealevel3pk => {
		let arealevel3PK = new Arealevel3pk();
		if(jsonobj!=null) {
			let arealevel2properties = {
				"countrycode": jsonobj.countrycode,
				"al1code": jsonobj.al1code,
				"al2code": jsonobj.al2code,
			}
			let arealevel2PK = Arealevel2Json.PKfromJSON(arealevel2properties);
			arealevel3PK.arealevel2PK = arealevel2PK;
			arealevel3PK.al3code = jsonobj.al3code;
		}
		return arealevel3PK;
	}
	static fromJSON = (jsonobj): Arealevel3 => {
		let model = new Arealevel3();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.name = jsonobj.name;
		model.location = jsonobj.location;
		model.bounds = jsonobj.bounds;
		model.viewport = jsonobj.viewport;
		model.approximate = jsonobj.approximate;
		return model;
	}
}

export default Arealevel3Jsonsuper;
