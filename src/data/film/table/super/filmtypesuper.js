//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 23.8.2022 14:35
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

export class Filmtypepk {
    type: string = '';
    getType = () => {
        return this.type;
    }
	init = () => {
		this.type = "";
	}
}

class Filmtypesuper {
	constructor() { }
	tablename: string = 'filmtype';
	PK: Filmtypepk = new Filmtypepk();
	type = () => {
		if(this.PK===null) return '';
		else return this.PK.type;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getType();
		}
		return result;
	}
	description = '';
}

export class Filmtypesearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.type);
		this.addFieldsearcher(this.description);
	}

    filtermodel: null;
    type: Stringsearcher = new Stringsearcher("filmtype.type");
    description: Stringsearcher = new Stringsearcher("filmtype.description");

    addtypes = (values) => {
    	this.type.values = this.type.values.concat(values);
    }
    adddescriptions = (values) => {
    	this.description.values = this.description.values.concat(values);
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

export default Filmtypesuper;
