//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import { Routepk } from '../../../../../../data/film/table/super/routesuper.js';
import Route from '../../../../../../data/film/table/route.js';
import { Sublocalitypk } from '../../../../../../data/film/table/super/sublocalitysuper.js';
import SublocalityJson from '../sublocalityjson.js';
import Moment from 'moment';
import RouteJson from '../routejson.js';

class RouteJsonsuper {
	static PKtoJSON = (routePK) => {
		let jsonobj = {
			"routecode": null,
			"countrycode": routePK.sublocalityPK==null ? null : routePK.sublocalityPK.getCountrycode(),
			"postalcode": routePK.sublocalityPK==null ? null : routePK.sublocalityPK.getPostalcode(),
			"locality": routePK.sublocalityPK==null ? null : routePK.sublocalityPK.getLocality(),
			"sublocality": routePK.sublocalityPK==null ? null : routePK.sublocalityPK.getSublocality(),

		};
		if(routePK!=null) {
			jsonobj.routecode = routePK.routecode;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (routePK) => {
		return JSON.stringify(this.PKtoJSON(routePK));
	}
	
	static toJSON = (route) => {
		var jsonobj = {
			"PK": this.PKtoJSON(route.PK),
			"name": route.name,
			"location": route.location,
			"bounds": route.bounds,
			"viewport": route.viewport,
			"approximate": route.approximate,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Routepk => {
		let routePK = new Routepk();
		if(jsonobj!=null) {
			let sublocalityproperties = {
				"countrycode": jsonobj.countrycode,
				"postalcode": jsonobj.postalcode,
				"locality": jsonobj.locality,
				"sublocality": jsonobj.sublocality,
			}
			let sublocalityPK = SublocalityJson.PKfromJSON(sublocalityproperties);
			routePK.sublocalityPK = sublocalityPK;
			routePK.routecode = jsonobj.routecode;
		}
		return routePK;
	}
	static fromJSON = (jsonobj): Route => {
		let model = new Route();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.name = jsonobj.name;
		model.location = jsonobj.location;
		model.bounds = jsonobj.bounds;
		model.viewport = jsonobj.viewport;
		model.approximate = jsonobj.approximate;
		return model;
	}
}

export default RouteJsonsuper;
