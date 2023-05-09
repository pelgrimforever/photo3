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

export class Countrypk {
    code: string = '';
    getCode = () => {
        return this.code;
    }
	init = () => {
		this.code = "";
	}
}

class Countrysuper {
	constructor() { }
	tablename: string = 'country';
	PK: Countrypk = new Countrypk();
	code = () => {
		if(this.PK===null) return '';
		else return this.PK.code;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getCode();
		}
		return result;
	}
	name = '';
	location = null;
	bounds = null;
	viewport = null;
	approximate: boolean = false;
	hasarealevel1: boolean = false;
	hasarealevel2: boolean = false;
	hasarealevel3: boolean = false;
}

export class Countrysearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.code);
		this.addFieldsearcher(this.name);
		this.addFieldsearcher(this.location);
		this.addFieldsearcher(this.bounds);
		this.addFieldsearcher(this.viewport);
		this.addFieldsearcher(this.approximate);
		this.addFieldsearcher(this.hasarealevel1);
		this.addFieldsearcher(this.hasarealevel2);
		this.addFieldsearcher(this.hasarealevel3);
        this.addKeysearcher(this.arealevel1searcher);
	}

    filtermodel: null;
    code: Stringsearcher = new Stringsearcher("country.code");
    name: Stringsearcher = new Stringsearcher("country.name");
    location: Stringsearcher = new Stringsearcher("country.location");
    bounds: Stringsearcher = new Stringsearcher("country.bounds");
    viewport: Stringsearcher = new Stringsearcher("country.viewport");
    approximate: Booleansearcher = new Booleansearcher("country.approximate");
    hasarealevel1: Booleansearcher = new Booleansearcher("country.hasarealevel1");
    hasarealevel2: Booleansearcher = new Booleansearcher("country.hasarealevel2");
    hasarealevel3: Booleansearcher = new Booleansearcher("country.hasarealevel3");
    arealevel1searcher: Primarykeysearcher = new Primarykeysearcher();

    addcodes = (values) => {
    	this.code.values = this.code.values.concat(values);
    }
    addnames = (values) => {
    	this.name.values = this.name.values.concat(values);
    }
    addapproximate = (value) => {
    	this.approximate.values = [value];
    }
    addhasarealevel1 = (value) => {
    	this.hasarealevel1.values = [value];
    }
    addhasarealevel2 = (value) => {
    	this.hasarealevel2.values = [value];
    }
    addhasarealevel3 = (value) => {
    	this.hasarealevel3.values = [value];
    }
    setarealevel1 = (arealevel1search) => {
        this.arealevel1searcher.setTablesearch(arealevel1search);
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
                "arealevel1searcher": null,
            }; 
            if(this.arealevel1searcher!=null && this.arealevel1searcher.used()) {
                kss.arealevel1searcher = this.arealevel1searcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Countrysuper;
