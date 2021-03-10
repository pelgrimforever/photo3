//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Viewphotofirstlastdate from '../../../../../data/film/view/viewphotofirstlastdate.js';
import Moment from 'moment';

class ViewphotofirstlastdateJson {
	static toJSON = (viewphotofirstlastdate) => {
		var jsonobj = {
			"minphotodate": "" + viewphotofirstlastdate.minphotodate,
			"maxphotodate": "" + viewphotofirstlastdate.maxphotodate,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewphotofirstlastdate => {
		let model = new Viewphotofirstlastdate();
		model.minphotodate = jsonobj.minphotodate;
		if(model.minphotodate) {
			model.minphotodateUI = Moment(new Date(jsonobj.minphotodate)).format("YYYY MM DD");
		} else {
			model.minphotodate = "";
		}
		model.maxphotodate = jsonobj.maxphotodate;
		if(model.maxphotodate) {
			model.maxphotodateUI = Moment(new Date(jsonobj.maxphotodate)).format("YYYY MM DD");
		} else {
			model.maxphotodate = "";
		}
		return model;
	}
}

export default ViewphotofirstlastdateJson;
