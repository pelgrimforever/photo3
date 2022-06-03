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
import {Countrypk} from './countrysuper.js';

export class Arealevel1pk {
	countryPK: Countrypk = null;
	countrycode = () => {
		if(this.countryPK===null) return '';
		else return this.countryPK.getCode();
	}
	getCountrycode = () => {
		if(this.countryPK===null) return '';
		else return this.countryPK.getCode();
	}
    al1code: string = '';
    getAl1code = () => {
        return this.al1code;
    }
	init = () => {
		this.countryPK = new Countrypk();
		this.al1code = "";
	}
}

class Arealevel1super {
	constructor() { }
	tablename: string = 'arealevel1';
	PK: Arealevel1pk = new Arealevel1pk();
	countrycode = () => {
		if(this.PK===null) return '';
		else return this.PK.countrycode;
	}
	al1code = () => {
		if(this.PK===null) return '';
		else return this.PK.al1code;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getCountrycode() + " " + this.PK.getAl1code();
		}
		return result;
	}
	name = '';
	location = null;
	bounds = null;
	viewport = null;
	approximate: boolean = false;
}

export class Arealevel1searcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.al1code);
		this.addFieldsearcher(this.name);
		this.addFieldsearcher(this.location);
		this.addFieldsearcher(this.bounds);
		this.addFieldsearcher(this.viewport);
		this.addFieldsearcher(this.approximate);
        this.addKeysearcher(this.countrysearcher);
        this.addKeysearcher(this.arealevel2searcher);
	}

    filtermodel: null;
    al1code: Stringsearcher = new Stringsearcher("arealevel1.al1code");
    name: Stringsearcher = new Stringsearcher("arealevel1.name");
    location: Stringsearcher = new Stringsearcher("arealevel1.location");
    bounds: Stringsearcher = new Stringsearcher("arealevel1.bounds");
    viewport: Stringsearcher = new Stringsearcher("arealevel1.viewport");
    approximate: Booleansearcher = new Booleansearcher("arealevel1.approximate");
    countrysearcher: Foreignkeysearcher = new Foreignkeysearcher();
    arealevel2searcher: Primarykeysearcher = new Primarykeysearcher();

    addal1codes = (values) => {
    	this.al1code.values = this.al1code.values.concat(values);
    }
    addnames = (values) => {
    	this.name.values = this.name.values.concat(values);
    }
    addapproximate = (value) => {
    	this.approximate.values = [value];
    }
    setcountry = (countrysearch) => {
        this.countrysearcher.setTablesearch(countrysearch);
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
                "countrysearcher": null,
                "arealevel2searcher": null,
            }; 
            if(this.countrysearcher!=null && this.countrysearcher.used()) {
                kss.countrysearcher = this.countrysearcher.toJSON();
            }
            if(this.arealevel2searcher!=null && this.arealevel2searcher.used()) {
                kss.arealevel2searcher = this.arealevel2searcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Arealevel1super;
