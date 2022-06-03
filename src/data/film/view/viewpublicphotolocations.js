//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in viewpublicphotolocationsbase.ts
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 4.1.2021 12:8
    Author     : Franky Laseure
*/

import Viewpublicphotolocationssuper from './super/viewpublicphotolocationssuper.js';

class Viewpublicphotolocations extends Viewpublicphotolocationssuper {

	getlocationkey = () => {
		return this.location.lat + "_" + this.location.lng;
	}

}

export default Viewpublicphotolocations;
