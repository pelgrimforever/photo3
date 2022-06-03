//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import { Uploadsessionsettingspk } from '../../../../../../data/film/table/super/uploadsessionsettingssuper.js';
import Uploadsessionsettings from '../../../../../../data/film/table/uploadsessionsettings.js';
import Moment from 'moment';
import UploadsessionsettingsJson from '../uploadsessionsettingsjson.js';

class UploadsessionsettingsJsonsuper {
	static PKtoJSON = (uploadsessionsettingsPK) => {
		let jsonobj = {
			"directory": null,
		};
		if(uploadsessionsettingsPK!=null) {
			jsonobj.directory = uploadsessionsettingsPK.directory;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (uploadsessionsettingsPK) => {
		return JSON.stringify(this.PKtoJSON(uploadsessionsettingsPK));
	}
	
	static toJSON = (uploadsessionsettings) => {
		var jsonobj = {
			"PK": this.PKtoJSON(uploadsessionsettings.PK),
			"uploadtype": uploadsessionsettings.uploadtype,
			"filmgroups": uploadsessionsettings.filmgroups,
			"lastposition": uploadsessionsettings.lastposition,
			"copymode": uploadsessionsettings.copymode,
			"uploadingposition": uploadsessionsettings.uploadingposition,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Uploadsessionsettingspk => {
		let uploadsessionsettingsPK = new Uploadsessionsettingspk();
		if(jsonobj!=null) {
			uploadsessionsettingsPK.directory = jsonobj.directory;
		}
		return uploadsessionsettingsPK;
	}
	static fromJSON = (jsonobj): Uploadsessionsettings => {
		let model = new Uploadsessionsettings();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.uploadtype = jsonobj.uploadtype;
		model.filmgroups = jsonobj.filmgroups;
		model.lastposition = jsonobj.lastposition;
		model.copymode = jsonobj.copymode;
		model.uploadingposition = jsonobj.uploadingposition;
		return model;
	}
}

export default UploadsessionsettingsJsonsuper;
