//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in tree7subjectbase.ts
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 4.1.2021 12:8
    Author     : Franky Laseure
*/

import Tree7subjectsuper, {Tree7subjectpk} from './super/tree7subjectsuper'

class Tree7subject extends Tree7subjectsuper {
	constructor() { 
		super();
	}
	auth: string = null;
	parents: [] = [];

	tostring = () => {
		let result = super.tostring();
		return result;
	}

}

export default Tree7subject;
