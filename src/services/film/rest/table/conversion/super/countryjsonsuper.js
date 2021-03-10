//Auto generated code
//don't change things here, it will be overwritten
//change in country-json.js
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import { Countrypk } from '../../../../../../data/film/table/super/countrysuper.js';
import Country from '../../../../../../data/film/table/country.js';
import Moment from 'moment';
import CountryJson from '../countryjson.js';

class CountryJsonsuper {
	static PKtoJSON = (countryPK) => {
		let jsonobj = {
			"code": null,
		};
		if(countryPK!=null) {
			jsonobj.code = countryPK.code;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (countryPK) => {
		return JSON.stringify(this.PKtoJSON(countryPK));
	}
	
	static toJSON = (country) => {
		var jsonobj = {
			"PK": this.PKtoJSON(country.PK),
			"name": country.name,
			"location": country.location,
			"bounds": country.bounds,
			"viewport": country.viewport,
			"approximate": country.approximate,
			"hasarealevel1": country.hasarealevel1,
			"hasarealevel2": country.hasarealevel2,
			"hasarealevel3": country.hasarealevel3,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Countrypk => {
		let countryPK = new Countrypk();
		if(jsonobj!=null) {
			countryPK.code = jsonobj.code;
		}
		return countryPK;
	}
	static fromJSON = (jsonobj): Country => {
		let model = new Country();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.name = jsonobj.name;
		model.location = jsonobj.location;
		model.bounds = jsonobj.bounds;
		model.viewport = jsonobj.viewport;
		model.approximate = jsonobj.approximate;
		model.hasarealevel1 = jsonobj.hasarealevel1;
		model.hasarealevel2 = jsonobj.hasarealevel2;
		model.hasarealevel3 = jsonobj.hasarealevel3;
		return model;
	}
}

export default CountryJsonsuper;
