//Auto generated code
//don't change things here, it will be overwritten
//change in spatialrefsys-json.js
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import { Spatialrefsyspk } from '../../../../../../data/film/table/super/spatialrefsyssuper.js';
import Spatialrefsys from '../../../../../../data/film/table/spatialrefsys.js';
import Moment from 'moment';
import SpatialrefsysJson from '../spatialrefsysjson.js';

class SpatialrefsysJsonsuper {
	static PKtoJSON = (spatialrefsysPK) => {
		let jsonobj = {
			"srid": null,
		};
		if(spatialrefsysPK!=null) {
			jsonobj.srid = spatialrefsysPK.srid;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (spatialrefsysPK) => {
		return JSON.stringify(this.PKtoJSON(spatialrefsysPK));
	}
	
	static toJSON = (spatialrefsys) => {
		var jsonobj = {
			"PK": this.PKtoJSON(spatialrefsys.PK),
			"auth_name": spatialrefsys.auth_name,
			"auth_srid": spatialrefsys.auth_srid,
			"srtext": spatialrefsys.srtext,
			"proj4text": spatialrefsys.proj4text,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Spatialrefsyspk => {
		let spatialrefsysPK = new Spatialrefsyspk();
		if(jsonobj!=null) {
			spatialrefsysPK.srid = jsonobj.srid;
		}
		return spatialrefsysPK;
	}
	static fromJSON = (jsonobj): Spatialrefsys => {
		let model = new Spatialrefsys();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.auth_name = jsonobj.auth_name;
		model.auth_srid = jsonobj.auth_srid;
		model.srtext = jsonobj.srtext;
		model.proj4text = jsonobj.proj4text;
		return model;
	}
}

export default SpatialrefsysJsonsuper;
