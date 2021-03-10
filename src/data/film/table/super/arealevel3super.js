//Auto generated code
//don't change things here, it will be overwritten
//extend classes in arealevel3.ts for table class definitions
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

export class Arealevel3pk {
	arealevel2PK: Arealevel2pk = null;
	countrycode = () => {
		if(this.arealevel2PK===null) return '';
		else return this.arealevel2PK.getCountrycode();
	}
	getCountrycode = () => {
		if(this.arealevel2PK===null) return '';
		else return this.arealevel2PK.getCountrycode();
	}
	al1code = () => {
		if(this.arealevel2PK===null) return '';
		else return this.arealevel2PK.getAl1code();
	}
	getAl1code = () => {
		if(this.arealevel2PK===null) return '';
		else return this.arealevel2PK.getAl1code();
	}
	al2code = () => {
		if(this.arealevel2PK===null) return '';
		else return this.arealevel2PK.getAl2code();
	}
	getAl2code = () => {
		if(this.arealevel2PK===null) return '';
		else return this.arealevel2PK.getAl2code();
	}
    al3code: string = '';
    getAl3code = () => {
        return this.al3code;
    }
	init = () => {
		this.arealevel2PK = new Arealevel2pk();
		this.al3code = "";
	}
}

class Arealevel3super {
	constructor() { }
	tablename: string = 'arealevel3';
	PK: Arealevel3pk = new Arealevel3pk();
	countrycode = () => {
		if(this.PK===null) return '';
		else return this.PK.countrycode;
	}
	al1code = () => {
		if(this.PK===null) return '';
		else return this.PK.al1code;
	}
	al2code = () => {
		if(this.PK===null) return '';
		else return this.PK.al2code;
	}
	al3code = () => {
		if(this.PK===null) return '';
		else return this.PK.al3code;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getCountrycode() + " " + this.PK.getAl1code() + " " + this.PK.getAl2code() + " " + this.PK.getAl3code();
		}
		return result;
	}
	name = '';
	location = null;
	bounds = null;
	viewport = null;
	approximate: boolean = false;
}

export class Arealevel3searcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.al3code);
		this.addFieldsearcher(this.name);
		this.addFieldsearcher(this.location);
		this.addFieldsearcher(this.bounds);
		this.addFieldsearcher(this.viewport);
		this.addFieldsearcher(this.approximate);
        this.addKeysearcher(this.arealevel2searcher);
	}

    filtermodel: null;
    al3code: Stringsearcher = new Stringsearcher("arealevel3.al3code");
    name: Stringsearcher = new Stringsearcher("arealevel3.name");
    location: Stringsearcher = new Stringsearcher("arealevel3.location");
    bounds: Stringsearcher = new Stringsearcher("arealevel3.bounds");
    viewport: Stringsearcher = new Stringsearcher("arealevel3.viewport");
    approximate: Booleansearcher = new Booleansearcher("arealevel3.approximate");
    arealevel2searcher: Foreignkeysearcher = new Foreignkeysearcher();

    addal3codes = (values) => {
    	this.al3code.values = this.al3code.values.concat(values);
    }
    addnames = (values) => {
    	this.name.values = this.name.values.concat(values);
    }
    addapproximate = (value) => {
    	this.approximate.values = [value];
    }
    setarealevel2 = (arealevel2search) => {
        this.arealevel2searcher.setTablesearch(arealevel2search);
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
                "arealevel2searcher": null,
            }; 
            if(this.arealevel2searcher!=null && this.arealevel2searcher.used()) {
                kss.arealevel2searcher = this.arealevel2searcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Arealevel3super;
