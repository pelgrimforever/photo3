//Auto generated code
//don't change things here, it will be overwritten
//extend classes in artacademy.ts for table class definitions
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Tablesearch from '../../../search/tablesearch.js';
import Datesearcher from '../../../search/datesearcher.js';
import Timesearcher from '../../../search/timesearcher.js';
import Numbersearcher from '../../../search/numbersearcher.js';
import Booleansearcher from '../../../search/booleansearcher.js';
import Stringsearcher from '../../../search/stringsearcher.js';
import Foreignkeysearcher from '../../../search/foreignkeysearcher.js';
import Primarykeysearcher from '../../../search/primarykeysearcher.js';
import Relationalkeysearcher from '../../../search/relationalkeysearcher.js';

export class Artacademypk {
    academyid: string = '';
    getAcademyid = () => {
        return this.academyid;
    }
	init = () => {
		this.academyid = '';
	}
}

class Artacademysuper {
	constructor() { }
	tablename: string = 'artacademy';
	PK: Artacademypk = new Artacademypk();
	academyid = () => {
		if(this.PK===null) return '';
		else return this.PK.academyid;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getAcademyid();
		}
		return result;
	}
	academy = '';
	academylocation = '';
}

export class Artacademysearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.academyid);
		this.addFieldsearcher(this.academy);
		this.addFieldsearcher(this.academylocation);
	}

    filtermodel: null;
    academyid: Numbersearcher = new Numbersearcher("artacademy.academyid");
    academy: Stringsearcher = new Stringsearcher("artacademy.academy");
    academylocation: Stringsearcher = new Stringsearcher("artacademy.academylocation");

    addacademyids = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.academyid.values = this.academyid.values.concat(numvalues);
    	this.academyid.operators = this.academyid.operators.concat(operators);
    }
    addacademys = (values) => {
    	this.academy.values = this.academy.values.concat(values);
    }
    addacademylocations = (values) => {
    	this.academylocation.values = this.academylocation.values.concat(values);
    }

    toJSON = () => {
        let jsonobj = {
        	"andor": this.andoroperator,
        	"maxresults": this.maxresults,
        	"docount": this.docount,
        	"primarykeys": [],
        	"fields": {},
        	"keysearch": {}
        }; 
        if(this.used()) {
            //primarykeys not implemented yet
            jsonobj.primarykeys = [];
            let i=0;
            for(i=0; i<this.fieldsearchers.length; i++) {
                var fieldsearcher = this.fieldsearchers[i];
                if(fieldsearcher.used()) {
                    jsonobj.fields[fieldsearcher.getshortname()] = fieldsearcher.toJSON();
                }
            }
            var kss = {
            }; 
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Artacademysuper;
