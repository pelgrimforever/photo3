//ProjectGenerator: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in routebase.ts
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 4.1.2021 12:8
    Author     : Franky Laseure
*/

import Routesuper, {Routepk} from './super/routesuper'

class Route extends Routesuper {
	constructor() { 
		super();
	}
	auth: string = null;

	tostring = () => {
		let result = super.tostring();
		return result;
	}
}

export default Route;
