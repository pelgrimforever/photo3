//Auto generated code
//don't change things here, it will be overwritten
//change in tree7subject-json.js
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import { Tree7subjectpk } from '../../../../../../data/film/table/super/tree7subjectsuper.js';
import Tree7subject from '../../../../../../data/film/table/tree7subject.js';
import Moment from 'moment';
import Tree7subjectJson from '../tree7subjectjson.js';

class Tree7subjectJsonsuper {
	static PKtoJSON = (tree7subjectPK) => {
		let jsonobj = {
			"subjectid": null,
		};
		if(tree7subjectPK!=null) {
			jsonobj.subjectid = "" + tree7subjectPK.subjectid;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (tree7subjectPK) => {
		return JSON.stringify(this.PKtoJSON(tree7subjectPK));
	}
	
	static toJSON = (tree7subject) => {
		var jsonobj = {
			"PK": this.PKtoJSON(tree7subject.PK),
			"tree7subjectParentsubjectidPK": null,
			"tree7id": tree7subject.tree7id,
			"subject": tree7subject.subject,
			"treestep": tree7subject.treestep,
		};
		if(tree7subject.tree7subjectParentsubjectidPK!=null) {
			jsonobj.tree7subjectParentsubjectidPK = Tree7subjectJson.PKtoJSON(tree7subject.tree7subjectParentsubjectidPK);
		}
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Tree7subjectpk => {
		let tree7subjectPK = new Tree7subjectpk();
		if(jsonobj!=null) {
			tree7subjectPK.subjectid = jsonobj.subjectid;
		}
		return tree7subjectPK;
	}
	static fromJSON = (jsonobj): Tree7subject => {
		let model = new Tree7subject();
		model.PK = this.PKfromJSON(jsonobj.PK);
		let tree7subjectParentsubjectidPK = Tree7subjectJson.PKfromJSON(jsonobj.tree7subjectParentsubjectidPK);
		model.tree7subjectParentsubjectidPK = tree7subjectParentsubjectidPK;
		model.tree7id = jsonobj.tree7id;
		model.subject = jsonobj.subject;
		model.treestep = jsonobj.treestep;
		return model;
	}
}

export default Tree7subjectJsonsuper;
