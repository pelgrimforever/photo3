//ProjectGenerator: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in siteusergroupbase.ts
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 2.1.2021 14:16
    Author     : Franky Laseure
*/

import Siteusergroupsuper, {Siteusergrouppk} from './super/siteusergroupsuper'

class Siteusergroup extends Siteusergroupsuper {
	constructor() { 
		super();
	}
	auth: string = null;

	tostring = () => {
		let result = super.tostring();
		return result;
	}
}

export default Siteusergroup;
