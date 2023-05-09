//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 23.8.2022 15:18
    Author     : Franky Laseure
*/

import Viewdummy from '../../../../../data/sitesecurity/view/viewdummy.js';
import Moment from 'moment';

class ViewdummyJson {
	static toJSON = (viewdummy) => {
		var jsonobj = {
			"bool": viewdummy.bool,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewdummy => {
		let model = new Viewdummy();
		model.bool = jsonobj.bool;
		return model;
	}
}

export default ViewdummyJson;
