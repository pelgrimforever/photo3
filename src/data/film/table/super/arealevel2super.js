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
import {Arealevel1pk} from './arealevel1super.js';

export class Arealevel2pk {
	arealevel1PK: Arealevel1pk = null;
	countrycode = () => {
		if(this.arealevel1PK===null) return '';
		else return this.arealevel1PK.getCountrycode();
	}
	getCountrycode = () => {
		if(this.arealevel1PK===null) return '';
		else return this.arealevel1PK.getCountrycode();
	}
	al1code = () => {
		if(this.arealevel1PK===null) return '';
		else return this.arealevel1PK.getAl1code();
	}
	getAl1code = () => {
		if(this.arealevel1PK===null) return '';
		else return this.arealevel1PK.getAl1code();
	}
    al2code: string = '';
    getAl2code = () => {
        return this.al2code;
    }
	init = () => {
		this.arealevel1PK = new Arealevel1pk();
		this.al2code = "";
	}
}

class Arealevel2super {
	constructor() { }
	tablename: string = 'arealevel2';
	PK: Arealevel2pk = new Arealevel2pk();
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
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getCountrycode() + " " + this.PK.getAl1code() + " " + this.PK.getAl2code();
		}
		return result;
	}
	name = '';
	location = null;
	bounds = null;
	viewport = null;
	approximate: boolean = false;
}

export class Arealevel2searcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.al2code);
		this.addFieldsearcher(this.name);
		this.addFieldsearcher(this.location);
		this.addFieldsearcher(this.bounds);
		this.addFieldsearcher(this.viewport);
		this.addFieldsearcher(this.approximate);
        this.addKeysearcher(this.arealevel1searcher);
        this.addKeysearcher(this.arealevel3searcher);
	}

    filtermodel: null;
    al2code: Stringsearcher = new Stringsearcher("arealevel2.al2code");
    name: Stringsearcher = new Stringsearcher("arealevel2.name");
    location: Stringsearcher = new Stringsearcher("arealevel2.location");
    bounds: Stringsearcher = new Stringsearcher("arealevel2.bounds");
    viewport: Stringsearcher = new Stringsearcher("arealevel2.viewport");
    approximate: Booleansearcher = new Booleansearcher("arealevel2.approximate");
    arealevel1searcher: Foreignkeysearcher = new Foreignkeysearcher();
    arealevel3searcher: Primarykeysearcher = new Primarykeysearcher();

    addal2codes = (values) => {
    	this.al2code.values = this.al2code.values.concat(values);
    }
    addnames = (values) => {
    	this.name.values = this.name.values.concat(values);
    }
    addapproximate = (value) => {
    	this.approximate.values = [value];
    }
    setarealevel1 = (arealevel1search) => {
        this.arealevel1searcher.setTablesearch(arealevel1search);
    }
    setarealevel3 = (arealevel3search) => {
        this.arealevel3searcher.setTablesearch(arealevel3search);
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
                "arealevel3searcher": null,
            }; 
            if(this.arealevel1searcher!=null && this.arealevel1searcher.used()) {
                kss.arealevel1searcher = this.arealevel1searcher.toJSON();
            }
            if(this.arealevel3searcher!=null && this.arealevel3searcher.used()) {
                kss.arealevel3searcher = this.arealevel3searcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Arealevel2super;
