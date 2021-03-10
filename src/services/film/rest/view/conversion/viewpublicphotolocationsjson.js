//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Viewpublicphotolocations from '../../../../../data/film/view/viewpublicphotolocations.js';
import Moment from 'moment';

class ViewpublicphotolocationsJson {
	static toJSON = (viewpublicphotolocations) => {
		var jsonobj = {
			"location": viewpublicphotolocations.location,
			"exactlocation": viewpublicphotolocations.exactlocation,
			"locationradius": "" + viewpublicphotolocations.locationradius,
			"countrycode": viewpublicphotolocations.countrycode,
			"postalcode": viewpublicphotolocations.postalcode,
			"locality": viewpublicphotolocations.locality,
			"sublocality": viewpublicphotolocations.sublocality,
			"routecode": viewpublicphotolocations.routecode,
			"streetnumber": viewpublicphotolocations.streetnumber,
			"locationcount": "" + viewpublicphotolocations.locationcount,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewpublicphotolocations => {
		let model = new Viewpublicphotolocations();
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

export default ViewpublicphotolocationsJson;
