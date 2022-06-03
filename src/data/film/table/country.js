//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in countrybase.ts
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 4.1.2021 12:8
    Author     : Franky Laseure
*/

import Countrysuper, {Countrypk} from './super/countrysuper'

class Country extends Countrysuper {
	constructor() { 
		super();
	}
	auth: string = null;

	tostring = () => {
		let result = super.tostring();
		return result;
	}
}

export default Country;
