//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import Viewphotolocations from '../../../../../data/film/view/viewphotolocations.js';
import Moment from 'moment';

class ViewphotolocationsJson {
	static toJSON = (viewphotolocations) => {
		var jsonobj = {
			"location": viewphotolocations.location,
			"exactlocation": viewphotolocations.exactlocation,
			"locationradius": "" + viewphotolocations.locationradius,
			"countrycode": viewphotolocations.countrycode,
			"postalcode": viewphotolocations.postalcode,
			"locality": viewphotolocations.locality,
			"sublocality": viewphotolocations.sublocality,
			"routecode": viewphotolocations.routecode,
			"streetnumber": viewphotolocations.streetnumber,
			"locationcount": "" + viewphotolocations.locationcount,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewphotolocations => {
		let model = new Viewphotolocations();
		model.location = jsonobj.location;
		model.exactlocation = jsonobj.exactlocation;
		model.locationradius = parseFloat(jsonobj.locationradius);
		model.countrycode = jsonobj.countrycode;
		model.postalcode = jsonobj.postalcode;
		model.locality = jsonobj.locality;
		model.sublocality = jsonobj.sublocality;
		model.routecode = jsonobj.routecode;
		model.streetnumber = jsonobj.streetnumber;
		model.locationcount = "" + jsonobj.locationcount;
		return model;
	}
}

export default ViewphotolocationsJson;
