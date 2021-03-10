//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Viewbackupstatus from '../../../../../data/film/view/viewbackupstatus.js';
import Moment from 'moment';

class ViewbackupstatusJson {
	static toJSON = (viewbackupstatus) => {
		var jsonobj = {
			"id": viewbackupstatus.id,
			"photocount": "" + viewbackupstatus.photocount,
			"backupcount": "" + viewbackupstatus.backupcount,
			"imagebackupcount": "" + viewbackupstatus.imagebackupcount,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewbackupstatus => {
		let model = new Viewbackupstatus();
		model.id = jsonobj.id;
		model.photocount = "" + jsonobj.photocount;
		model.backupcount = "" + jsonobj.backupcount;
		model.imagebackupcount = "" + jsonobj.imagebackupcount;
		return model;
	}
}

export default ViewbackupstatusJson;
