//ProjectGenerator: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in sitegroupbase.ts
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 2.1.2021 14:16
    Author     : Franky Laseure
*/

import Sitegroupsuper, {Sitegrouppk} from './super/sitegroupsuper'

class Sitegroup extends Sitegroupsuper {
	constructor() { 
		super();
	}
	auth: string = null;

	tostring = () => {
		let result = super.tostring();
		return result;
	}
}

export default Sitegroup;
