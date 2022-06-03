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
import {Localitypk} from './localitysuper.js';

export class Sublocalitypk {
	localityPK: Localitypk = null;
	countrycode = () => {
		if(this.localityPK===null) return '';
		else return this.localityPK.getCountrycode();
	}
	getCountrycode = () => {
		if(this.localityPK===null) return '';
		else return this.localityPK.getCountrycode();
	}
	postalcode = () => {
		if(this.localityPK===null) return '';
		else return this.localityPK.getPostalcode();
	}
	getPostalcode = () => {
		if(this.localityPK===null) return '';
		else return this.localityPK.getPostalcode();
	}
	locality = () => {
		if(this.localityPK===null) return '';
		else return this.localityPK.getLocality();
	}
	getLocality = () => {
		if(this.localityPK===null) return '';
		else return this.localityPK.getLocality();
	}
    sublocality: string = '';
    getSublocality = () => {
        return this.sublocality;
    }
	init = () => {
		this.localityPK = new Localitypk();
		this.sublocality = "";
	}
}

class Sublocalitysuper {
	constructor() { }
	tablename: string = 'sublocality';
	PK: Sublocalitypk = new Sublocalitypk();
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
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getCountrycode() + " " + this.PK.getPostalcode() + " " + this.PK.getLocality() + " " + this.PK.getSublocality();
		}
		return result;
	}
	location = null;
	bounds = null;
	viewport = null;
	approximate: boolean = false;
}

export class Sublocalitysearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.sublocality);
		this.addFieldsearcher(this.location);
		this.addFieldsearcher(this.bounds);
		this.addFieldsearcher(this.viewport);
		this.addFieldsearcher(this.approximate);
        this.addKeysearcher(this.localitysearcher);
        this.addKeysearcher(this.routesearcher);
	}

    filtermodel: null;
    sublocality: Stringsearcher = new Stringsearcher("sublocality.sublocality");
    location: Stringsearcher = new Stringsearcher("sublocality.location");
    bounds: Stringsearcher = new Stringsearcher("sublocality.bounds");
    viewport: Stringsearcher = new Stringsearcher("sublocality.viewport");
    approximate: Booleansearcher = new Booleansearcher("sublocality.approximate");
    localitysearcher: Foreignkeysearcher = new Foreignkeysearcher();
    routesearcher: Primarykeysearcher = new Primarykeysearcher();

    addsublocalitys = (values) => {
    	this.sublocality.values = this.sublocality.values.concat(values);
    }
    addapproximate = (value) => {
    	this.approximate.values = [value];
    }
    setlocality = (localitysearch) => {
        this.localitysearcher.setTablesearch(localitysearch);
    }
    setroute = (routesearch) => {
        this.routesearcher.setTablesearch(routesearch);
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
                "localitysearcher": null,
                "routesearcher": null,
            }; 
            if(this.localitysearcher!=null && this.localitysearcher.used()) {
                kss.localitysearcher = this.localitysearcher.toJSON();
            }
            if(this.routesearcher!=null && this.routesearcher.used()) {
                kss.routesearcher = this.routesearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Sublocalitysuper;
