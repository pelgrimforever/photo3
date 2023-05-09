//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import { Phototree7subjectpk } from '../../../../../../data/film/table/super/phototree7subjectsuper.js';
import Phototree7subject from '../../../../../../data/film/table/phototree7subject.js';
import { Tree7subjectpk } from '../../../../../../data/film/table/super/tree7subjectsuper.js';
import Tree7subjectJson from '../tree7subjectjson.js';
import { Photopk } from '../../../../../../data/film/table/super/photosuper.js';
import PhotoJson from '../photojson.js';
import Moment from 'moment';
import Phototree7subjectJson from '../phototree7subjectjson.js';

class Phototree7subjectJsonsuper {
	static PKtoJSON = (phototree7subjectPK) => {
		let jsonobj = {
			"subjectid": phototree7subjectPK.tree7subjectPK==null ? null : "" + phototree7subjectPK.tree7subjectPK.getSubjectid(),

			"film": phototree7subjectPK.photoPK==null ? null : phototree7subjectPK.photoPK.getFilm(),
			"id": phototree7subjectPK.photoPK==null ? null : phototree7subjectPK.photoPK.getId(),

		};
		if(phototree7subjectPK!=null) {
		}
		return jsonobj;
	}

	static PKtoJSONstring = (phototree7subjectPK) => {
		return JSON.stringify(this.PKtoJSON(phototree7subjectPK));
	}
	
	static toJSON = (phototree7subject) => {
		var jsonobj = {
			"PK": this.PKtoJSON(phototree7subject.PK),
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Phototree7subjectpk => {
		let phototree7subjectPK = new Phototree7subjectpk();
		if(jsonobj!=null) {
			let tree7subjectproperties = {
				"subjectid": "" + jsonobj.subjectid,
			}
			let tree7subjectPK = Tree7subjectJson.PKfromJSON(tree7subjectproperties);
			phototree7subjectPK.tree7subjectPK = tree7subjectPK;
			let photoproperties = {
				"film": jsonobj.film,
				"id": jsonobj.id,
			}
			let photoPK = PhotoJson.PKfromJSON(photoproperties);
			phototree7subjectPK.photoPK = photoPK;
		}
		return phototree7subjectPK;
	}
	static fromJSON = (jsonobj): Phototree7subject => {
		let model = new Phototree7subject();
		model.PK = this.PKfromJSON(jsonobj.PK);
		return model;
	}
}

export default Phototree7subjectJsonsuper;
