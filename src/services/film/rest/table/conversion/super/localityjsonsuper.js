//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import { Localitypk } from '../../../../../../data/film/table/super/localitysuper.js';
import Locality from '../../../../../../data/film/table/locality.js';
import { Postalcodepk } from '../../../../../../data/film/table/super/postalcodesuper.js';
import PostalcodeJson from '../postalcodejson.js';
import Moment from 'moment';
import LocalityJson from '../localityjson.js';

class LocalityJsonsuper {
	static PKtoJSON = (localityPK) => {
		let jsonobj = {
			"locality": null,
			"countrycode": localityPK.postalcodePK==null ? null : localityPK.postalcodePK.getCountrycode(),
			"postalcode": localityPK.postalcodePK==null ? null : localityPK.postalcodePK.getPostalcode(),

		};
		if(localityPK!=null) {
			jsonobj.locality = localityPK.locality;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (localityPK) => {
		return JSON.stringify(this.PKtoJSON(localityPK));
	}
	
	static toJSON = (locality) => {
		var jsonobj = {
			"PK": this.PKtoJSON(locality.PK),
			"location": locality.location,
			"bounds": locality.bounds,
			"viewport": locality.viewport,
			"approximate": locality.approximate,
			"hassublocality": locality.hassublocality,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Localitypk => {
		let localityPK = new Localitypk();
		if(jsonobj!=null) {
			let postalcodeproperties = {
				"countrycode": jsonobj.countrycode,
				"postalcode": jsonobj.postalcode,
			}
			let postalcodePK = PostalcodeJson.PKfromJSON(postalcodeproperties);
			localityPK.postalcodePK = postalcodePK;
			localityPK.locality = jsonobj.locality;
		}
		return localityPK;
	}
	static fromJSON = (jsonobj): Locality => {
		let model = new Locality();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.location = jsonobj.location;
		model.bounds = jsonobj.bounds;
		model.viewport = jsonobj.viewport;
		model.approximate = jsonobj.approximate;
		model.hassublocality = jsonobj.hassublocality;
		return model;
	}
}

export default LocalityJsonsuper;
