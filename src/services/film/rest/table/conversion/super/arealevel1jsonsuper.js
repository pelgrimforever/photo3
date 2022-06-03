//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import { Arealevel1pk } from '../../../../../../data/film/table/super/arealevel1super.js';
import Arealevel1 from '../../../../../../data/film/table/arealevel1.js';
import { Countrypk } from '../../../../../../data/film/table/super/countrysuper.js';
import CountryJson from '../countryjson.js';
import Moment from 'moment';
import Arealevel1Json from '../arealevel1json.js';

class Arealevel1Jsonsuper {
	static PKtoJSON = (arealevel1PK) => {
		let jsonobj = {
			"al1code": null,
			"countrycode": arealevel1PK.countryPK==null ? null : arealevel1PK.countryPK.getCode(),

		};
		if(arealevel1PK!=null) {
			jsonobj.al1code = arealevel1PK.al1code;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (arealevel1PK) => {
		return JSON.stringify(this.PKtoJSON(arealevel1PK));
	}
	
	static toJSON = (arealevel1) => {
		var jsonobj = {
			"PK": this.PKtoJSON(arealevel1.PK),
			"name": arealevel1.name,
			"location": arealevel1.location,
			"bounds": arealevel1.bounds,
			"viewport": arealevel1.viewport,
			"approximate": arealevel1.approximate,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Arealevel1pk => {
		let arealevel1PK = new Arealevel1pk();
		if(jsonobj!=null) {
			let countryproperties = {
				"code": jsonobj.countrycode,
			}
			let countryPK = CountryJson.PKfromJSON(countryproperties);
			arealevel1PK.countryPK = countryPK;
			arealevel1PK.al1code = jsonobj.al1code;
		}
		return arealevel1PK;
	}
	static fromJSON = (jsonobj): Arealevel1 => {
		let model = new Arealevel1();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.name = jsonobj.name;
		model.location = jsonobj.location;
		model.bounds = jsonobj.bounds;
		model.viewport = jsonobj.viewport;
		model.approximate = jsonobj.approximate;
		return model;
	}
}

export default Arealevel1Jsonsuper;
