//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import { Uploadsessionpk } from '../../../../../../data/film/table/super/uploadsessionsuper.js';
import Uploadsession from '../../../../../../data/film/table/uploadsession.js';
import { Creatorpk } from '../../../../../../data/film/table/super/creatorsuper.js';
import CreatorJson from '../creatorjson.js';
import Moment from 'moment';
import UploadsessionJson from '../uploadsessionjson.js';

class UploadsessionJsonsuper {
	static PKtoJSON = (uploadsessionPK) => {
		let jsonobj = {
			"filename": null,
		};
		if(uploadsessionPK!=null) {
			jsonobj.filename = uploadsessionPK.filename;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (uploadsessionPK) => {
		return JSON.stringify(this.PKtoJSON(uploadsessionPK));
	}
	
	static toJSON = (uploadsession) => {
		var jsonobj = {
			"PK": this.PKtoJSON(uploadsession.PK),
			"creatorPK": null,
			"upload": uploadsession.upload,
			"rotation": "" + uploadsession.rotation,
			"filmgroupid": uploadsession.filmgroupid,
			"photosubjects": uploadsession.photosubjects,
			"description": uploadsession.description,
		};
		if(uploadsession.creatorPK!=null) {
			jsonobj.creatorPK = CreatorJson.PKtoJSON(uploadsession.creatorPK);
		}
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Uploadsessionpk => {
		let uploadsessionPK = new Uploadsessionpk();
		if(jsonobj!=null) {
			uploadsessionPK.filename = jsonobj.filename;
		}
		return uploadsessionPK;
	}
	static fromJSON = (jsonobj): Uploadsession => {
		let model = new Uploadsession();
		model.PK = this.PKfromJSON(jsonobj.PK);
		let creatorPK = CreatorJson.PKfromJSON(jsonobj.creatorPK);
		model.creatorPK = creatorPK;
		model.upload = jsonobj.upload;
		model.rotation = parseFloat(jsonobj.rotation);
		model.filmgroupid = jsonobj.filmgroupid;
		model.photosubjects = jsonobj.photosubjects;
		model.description = jsonobj.description;
		return model;
	}
}

export default UploadsessionJsonsuper;
