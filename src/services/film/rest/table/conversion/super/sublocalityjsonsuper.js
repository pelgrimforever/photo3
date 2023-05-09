//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import { Sublocalitypk } from '../../../../../../data/film/table/super/sublocalitysuper.js';
import Sublocality from '../../../../../../data/film/table/sublocality.js';
import { Localitypk } from '../../../../../../data/film/table/super/localitysuper.js';
import LocalityJson from '../localityjson.js';
import Moment from 'moment';
import SublocalityJson from '../sublocalityjson.js';

class SublocalityJsonsuper {
	static PKtoJSON = (sublocalityPK) => {
		let jsonobj = {
			"sublocality": null,
			"countrycode": sublocalityPK.localityPK==null ? null : sublocalityPK.localityPK.getCountrycode(),
			"postalcode": sublocalityPK.localityPK==null ? null : sublocalityPK.localityPK.getPostalcode(),
			"locality": sublocalityPK.localityPK==null ? null : sublocalityPK.localityPK.getLocality(),

		};
		if(sublocalityPK!=null) {
			jsonobj.sublocality = sublocalityPK.sublocality;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (sublocalityPK) => {
		return JSON.stringify(this.PKtoJSON(sublocalityPK));
	}
	
	static toJSON = (sublocality) => {
		var jsonobj = {
			"PK": this.PKtoJSON(sublocality.PK),
			"location": sublocality.location,
			"bounds": sublocality.bounds,
			"viewport": sublocality.viewport,
			"approximate": sublocality.approximate,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Sublocalitypk => {
		let sublocalityPK = new Sublocalitypk();
		if(jsonobj!=null) {
			let localityproperties = {
				"countrycode": jsonobj.countrycode,
				"postalcode": jsonobj.postalcode,
				"locality": jsonobj.locality,
			}
			let localityPK = LocalityJson.PKfromJSON(localityproperties);
			sublocalityPK.localityPK = localityPK;
			sublocalityPK.sublocality = jsonobj.sublocality;
		}
		return sublocalityPK;
	}
	static fromJSON = (jsonobj): Sublocality => {
		let model = new Sublocality();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.location = jsonobj.location;
		model.bounds = jsonobj.bounds;
		model.viewport = jsonobj.viewport;
		model.approximate = jsonobj.approximate;
		return model;
	}
}

export default SublocalityJsonsuper;
