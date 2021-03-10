//ProjectGenerator: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in photo-json-base.js
/* 
    Created on : Nov 19, 2018, 17:23:01 PM
    Generated on 1.1.2016 17:37
    Author     : Franky Laseure
*/

import PhotoJsonsuper from './super/photojsonsuper';
import Photo from '../../../../../data/film/table/photo.js';

class PhotoJson extends PhotoJsonsuper {

	static fromJSON = (jsonobj): Photo => {
		let model = super.fromJSON(jsonobj);
		model.image = jsonobj.imagebase64;
		return model;
	}

}

export default PhotoJson;

