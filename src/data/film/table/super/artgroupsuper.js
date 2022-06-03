//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 1.5.2022 20:24
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

export class Artgrouppk {
    groupid: string = '';
    getGroupid = () => {
        return this.groupid;
    }
	init = () => {
		this.groupid = '';
	}
}

class Artgroupsuper {
	constructor() { }
	tablename: string = 'artgroup';
	PK: Artgrouppk = new Artgrouppk();
	groupid = () => {
		if(this.PK===null) return '';
		else return this.PK.groupid;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getGroupid();
		}
		return result;
	}
	groupname = '';
}

export class Artgroupsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.groupid);
		this.addFieldsearcher(this.groupname);
	}

    filtermodel: null;
    groupid: Numbersearcher = new Numbersearcher("artgroup.groupid");
    groupname: Stringsearcher = new Stringsearcher("artgroup.groupname");

    addgroupids = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.groupid.values = this.groupid.values.concat(numvalues);
    	this.groupid.operators = this.groupid.operators.concat(operators);
    }
    addgroupnames = (values) => {
    	this.groupname.values = this.groupname.values.concat(values);
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

export default Artgroupsuper;
