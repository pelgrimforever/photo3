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
import {Sublocalitypk} from './sublocalitysuper.js';

export class Routepk {
	sublocalityPK: Sublocalitypk = null;
	countrycode = () => {
		if(this.sublocalityPK===null) return '';
		else return this.sublocalityPK.getCountrycode();
	}
	getCountrycode = () => {
		if(this.sublocalityPK===null) return '';
		else return this.sublocalityPK.getCountrycode();
	}
	postalcode = () => {
		if(this.sublocalityPK===null) return '';
		else return this.sublocalityPK.getPostalcode();
	}
	getPostalcode = () => {
		if(this.sublocalityPK===null) return '';
		else return this.sublocalityPK.getPostalcode();
	}
	locality = () => {
		if(this.sublocalityPK===null) return '';
		else return this.sublocalityPK.getLocality();
	}
	getLocality = () => {
		if(this.sublocalityPK===null) return '';
		else return this.sublocalityPK.getLocality();
	}
	sublocality = () => {
		if(this.sublocalityPK===null) return '';
		else return this.sublocalityPK.getSublocality();
	}
	getSublocality = () => {
		if(this.sublocalityPK===null) return '';
		else return this.sublocalityPK.getSublocality();
	}
    routecode: string = '';
    getRoutecode = () => {
        return this.routecode;
    }
	init = () => {
		this.sublocalityPK = new Sublocalitypk();
		this.routecode = "";
	}
}

class Routesuper {
	constructor() { }
	tablename: string = 'route';
	PK: Routepk = new Routepk();
	countrycode = () => {
		if(this.PK===null) return '';
		else return this.PK.countrycode;
	}
	postalcode = () => {
		if(this.PK===null) return '';
		else return this.PK.postalcode;
	}
	locality = () => {
		if(this.PK===null) return '';
		else return this.PK.locality;
	}
	sublocality = () => {
		if(this.PK===null) return '';
		else return this.PK.sublocality;
	}
	routecode = () => {
		if(this.PK===null) return '';
		else return this.PK.routecode;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getCountrycode() + " " + this.PK.getPostalcode() + " " + this.PK.getLocality() + " " + this.PK.getSublocality() + " " + this.PK.getRoutecode();
		}
		return result;
	}
	name = '';
	location = null;
	bounds = null;
	viewport = null;
	approximate: boolean = false;
}

export class Routesearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.routecode);
		this.addFieldsearcher(this.name);
		this.addFieldsearcher(this.location);
		this.addFieldsearcher(this.bounds);
		this.addFieldsearcher(this.viewport);
		this.addFieldsearcher(this.approximate);
        this.addKeysearcher(this.sublocalitysearcher);
	}

    filtermodel: null;
    routecode: Stringsearcher = new Stringsearcher("route.routecode");
    name: Stringsearcher = new Stringsearcher("route.name");
    location: Stringsearcher = new Stringsearcher("route.location");
    bounds: Stringsearcher = new Stringsearcher("route.bounds");
    viewport: Stringsearcher = new Stringsearcher("route.viewport");
    approximate: Booleansearcher = new Booleansearcher("route.approximate");
    sublocalitysearcher: Foreignkeysearcher = new Foreignkeysearcher();

    addroutecodes = (values) => {
    	this.routecode.values = this.routecode.values.concat(values);
    }
    addnames = (values) => {
    	this.name.values = this.name.values.concat(values);
    }
    addapproximate = (value) => {
    	this.approximate.values = [value];
    }
    setsublocality = (sublocalitysearch) => {
        this.sublocalitysearcher.setTablesearch(sublocalitysearch);
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
                "sublocalitysearcher": null,
            }; 
            if(this.sublocalitysearcher!=null && this.sublocalitysearcher.used()) {
                kss.sublocalitysearcher = this.sublocalitysearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Routesuper;
