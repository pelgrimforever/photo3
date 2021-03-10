//Auto generated code
//don't change things here, it will be overwritten
//change in subject-json.js
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import { Subjectpk } from '../../../../../../data/film/table/super/subjectsuper.js';
import Subject from '../../../../../../data/film/table/subject.js';
import { Subjectcatpk } from '../../../../../../data/film/table/super/subjectcatsuper.js';
import SubjectcatJson from '../subjectcatjson.js';
import { Tree7subjectpk } from '../../../../../../data/film/table/super/tree7subjectsuper.js';
import Tree7subjectJson from '../tree7subjectjson.js';
import Moment from 'moment';
import SubjectJson from '../subjectjson.js';

class SubjectJsonsuper {
	static PKtoJSON = (subjectPK) => {
		let jsonobj = {
			"id": null,
			"cat1": subjectPK.subjectcatCat1PK==null ? null : subjectPK.subjectcatCat1PK.getCat(),

			"cat2": subjectPK.subjectcatCat2PK==null ? null : subjectPK.subjectcatCat2PK.getCat(),

		};
		if(subjectPK!=null) {
			jsonobj.id = subjectPK.id;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (subjectPK) => {
		return JSON.stringify(this.PKtoJSON(subjectPK));
	}
	
	static toJSON = (subject) => {
		var jsonobj = {
			"PK": this.PKtoJSON(subject.PK),
			"tree7subjectPK": null,
			"subject": subject.subject,
			"description": subject.description,
		};
		if(subject.tree7subjectPK!=null) {
			jsonobj.tree7subjectPK = Tree7subjectJson.PKtoJSON(subject.tree7subjectPK);
		}
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Subjectpk => {
		let subjectPK = new Subjectpk();
		if(jsonobj!=null) {
			let subjectcatCat1properties = {
				"cat": jsonobj.cat1,
			}
			let subjectcatCat1PK = SubjectcatJson.PKfromJSON(subjectcatCat1properties);
			subjectPK.subjectcatCat1PK = subjectcatCat1PK;
			let subjectcatCat2properties = {
				"cat": jsonobj.cat2,
			}
			let subjectcatCat2PK = SubjectcatJson.PKfromJSON(subjectcatCat2properties);
			subjectPK.subjectcatCat2PK = subjectcatCat2PK;
			subjectPK.id = jsonobj.id;
		}
		return subjectPK;
	}
	static fromJSON = (jsonobj): Subject => {
		let model = new Subject();
		model.PK = this.PKfromJSON(jsonobj.PK);
		let tree7subjectPK = Tree7subjectJson.PKfromJSON(jsonobj.tree7subjectPK);
		model.tree7subjectPK = tree7subjectPK;
		model.subject = jsonobj.subject;
		model.description = jsonobj.description;
		return model;
	}
}

export default SubjectJsonsuper;
