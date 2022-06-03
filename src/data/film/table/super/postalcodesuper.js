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
import {Arealevel3pk} from './arealevel3super.js';

export class Postalcodepk {
    countrycode: string = '';
    getCountrycode = () => {
        return this.countrycode;
    }
    postalcode: string = '';
    getPostalcode = () => {
        return this.postalcode;
    }
	init = () => {
		this.countrycode = "";
		this.postalcode = "";
	}
}

class Postalcodesuper {
	constructor() { }
	tablename: string = 'postalcode';
	PK: Postalcodepk = new Postalcodepk();
	countrycode = () => {
		if(this.PK===null) return '';
		else return this.PK.countrycode;
	}
	postalcode = () => {
		if(this.PK===null) return '';
		else return this.PK.postalcode;
	}
	arealevel3PK: Arealevel3pk = null;
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getCountrycode() + " " + this.PK.getPostalcode();
		}
		return result;
	}
	location = null;
	bounds = null;
	viewport = null;
	approximate: boolean = false;
}

export class Postalcodesearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.postalcode);
		this.addFieldsearcher(this.location);
		this.addFieldsearcher(this.bounds);
		this.addFieldsearcher(this.viewport);
		this.addFieldsearcher(this.approximate);
        this.addKeysearcher(this.arealevel3searcher);
        this.addKeysearcher(this.localitysearcher);
	}

    filtermodel: null;
    postalcode: Stringsearcher = new Stringsearcher("postalcode.postalcode");
    location: Stringsearcher = new Stringsearcher("postalcode.location");
    bounds: Stringsearcher = new Stringsearcher("postalcode.bounds");
    viewport: Stringsearcher = new Stringsearcher("postalcode.viewport");
    approximate: Booleansearcher = new Booleansearcher("postalcode.approximate");
    arealevel3searcher: Foreignkeysearcher = new Foreignkeysearcher();
    localitysearcher: Primarykeysearcher = new Primarykeysearcher();

    addpostalcodes = (values) => {
    	this.postalcode.values = this.postalcode.values.concat(values);
    }
    addapproximate = (value) => {
    	this.approximate.values = [value];
    }
    setarealevel3 = (arealevel3search) => {
        this.arealevel3searcher.setTablesearch(arealevel3search);
    }
    setlocality = (localitysearch) => {
        this.localitysearcher.setTablesearch(localitysearch);
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
                "arealevel3searcher": null,
                "localitysearcher": null,
            }; 
            if(this.arealevel3searcher!=null && this.arealevel3searcher.used()) {
                kss.arealevel3searcher = this.arealevel3searcher.toJSON();
            }
            if(this.localitysearcher!=null && this.localitysearcher.used()) {
                kss.localitysearcher = this.localitysearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Postalcodesuper;
