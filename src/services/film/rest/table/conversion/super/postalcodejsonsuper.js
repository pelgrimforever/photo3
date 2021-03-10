//Auto generated code
//don't change things here, it will be overwritten
//change in postalcode-json.js
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import { Postalcodepk } from '../../../../../../data/film/table/super/postalcodesuper.js';
import Postalcode from '../../../../../../data/film/table/postalcode.js';
import { Arealevel3pk } from '../../../../../../data/film/table/super/arealevel3super.js';
import Arealevel3Json from '../arealevel3json.js';
import Moment from 'moment';
import PostalcodeJson from '../postalcodejson.js';

class PostalcodeJsonsuper {
	static PKtoJSON = (postalcodePK) => {
		let jsonobj = {
			"countrycode": null,
			"postalcode": null,
		};
		if(postalcodePK!=null) {
			jsonobj.countrycode = postalcodePK.countrycode;
			jsonobj.postalcode = postalcodePK.postalcode;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (postalcodePK) => {
		return JSON.stringify(this.PKtoJSON(postalcodePK));
	}
	
	static toJSON = (postalcode) => {
		var jsonobj = {
			"PK": this.PKtoJSON(postalcode.PK),
			"arealevel3PK": null,
			"location": postalcode.location,
			"bounds": postalcode.bounds,
			"viewport": postalcode.viewport,
			"approximate": postalcode.approximate,
		};
		if(postalcode.arealevel3PK!=null) {
			jsonobj.arealevel3PK = Arealevel3Json.PKtoJSON(postalcode.arealevel3PK);
		}
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Postalcodepk => {
		let postalcodePK = new Postalcodepk();
		if(jsonobj!=null) {
			postalcodePK.countrycode = jsonobj.countrycode;
			postalcodePK.postalcode = jsonobj.postalcode;
		}
		return postalcodePK;
	}
	static fromJSON = (jsonobj): Postalcode => {
		let model = new Postalcode();
		model.PK = this.PKfromJSON(jsonobj.PK);
		let arealevel3PK = Arealevel3Json.PKfromJSON(jsonobj.arealevel3PK);
		model.arealevel3PK = arealevel3PK;
		model.location = jsonobj.location;
		model.bounds = jsonobj.bounds;
		model.viewport = jsonobj.viewport;
		model.approximate = jsonobj.approximate;
		return model;
	}
}

export default PostalcodeJsonsuper;
