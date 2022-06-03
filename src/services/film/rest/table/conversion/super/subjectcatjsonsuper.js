//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import { Subjectcatpk } from '../../../../../../data/film/table/super/subjectcatsuper.js';
import Subjectcat from '../../../../../../data/film/table/subjectcat.js';
import Moment from 'moment';
import SubjectcatJson from '../subjectcatjson.js';

class SubjectcatJsonsuper {
	static PKtoJSON = (subjectcatPK) => {
		let jsonobj = {
			"cat": null,
		};
		if(subjectcatPK!=null) {
			jsonobj.cat = subjectcatPK.cat;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (subjectcatPK) => {
		return JSON.stringify(this.PKtoJSON(subjectcatPK));
	}
	
	static toJSON = (subjectcat) => {
		var jsonobj = {
			"PK": this.PKtoJSON(subjectcat.PK),
			"catno": subjectcat.catno,
			"description": subjectcat.description,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Subjectcatpk => {
		let subjectcatPK = new Subjectcatpk();
		if(jsonobj!=null) {
			subjectcatPK.cat = jsonobj.cat;
		}
		return subjectcatPK;
	}
	static fromJSON = (jsonobj): Subjectcat => {
		let model = new Subjectcat();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.catno = jsonobj.catno;
		model.description = jsonobj.description;
		return model;
	}
}

export default SubjectcatJsonsuper;
