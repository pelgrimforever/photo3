//ProjectGenerator: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in filmsubjectsbase.ts
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 4.1.2021 12:8
    Author     : Franky Laseure
*/

import Filmsubjectssuper, {Filmsubjectspk} from './super/filmsubjectssuper'

class Filmsubjects extends Filmsubjectssuper {
	constructor() { 
		super();
	}
	auth: string = null;

	tostring = () => {
		let result = super.tostring();
		return result;
	}
}

export default Filmsubjects;
