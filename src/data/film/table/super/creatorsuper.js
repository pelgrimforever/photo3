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

export class Creatorpk {
    creatorid: string = '';
    getCreatorid = () => {
        return this.creatorid;
    }
	init = () => {
		this.creatorid = "";
	}
}

class Creatorsuper {
	constructor() { }
	tablename: string = 'creator';
	PK: Creatorpk = new Creatorpk();
	creatorid = () => {
		if(this.PK===null) return '';
		else return this.PK.creatorid;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getCreatorid();
		}
		return result;
	}
	name = '';
	surname = '';
}

export class Creatorsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.creatorid);
		this.addFieldsearcher(this.name);
		this.addFieldsearcher(this.surname);
	}

    filtermodel: null;
    creatorid: Stringsearcher = new Stringsearcher("creator.creatorid");
    name: Stringsearcher = new Stringsearcher("creator.name");
    surname: Stringsearcher = new Stringsearcher("creator.surname");

    addcreatorids = (values) => {
    	this.creatorid.values = this.creatorid.values.concat(values);
    }
    addnames = (values) => {
    	this.name.values = this.name.values.concat(values);
    }
    addsurnames = (values) => {
    	this.surname.values = this.surname.values.concat(values);
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

export default Creatorsuper;
