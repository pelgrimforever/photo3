//Auto generated code
//don't change things here, it will be overwritten
//extend classes in locality.ts for table class definitions
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

export class Localitypk {
	postalcodePK: Postalcodepk = null;
	countrycode = () => {
		if(this.postalcodePK===null) return '';
		else return this.postalcodePK.getCountrycode();
	}
	getCountrycode = () => {
		if(this.postalcodePK===null) return '';
		else return this.postalcodePK.getCountrycode();
	}
	postalcode = () => {
		if(this.postalcodePK===null) return '';
		else return this.postalcodePK.getPostalcode();
	}
	getPostalcode = () => {
		if(this.postalcodePK===null) return '';
		else return this.postalcodePK.getPostalcode();
	}
    locality: string = '';
    getLocality = () => {
        return this.locality;
    }
	init = () => {
		this.postalcodePK = new Postalcodepk();
		this.locality = "";
	}
}

class Localitysuper {
	constructor() { }
	tablename: string = 'locality';
	PK: Localitypk = new Localitypk();
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
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getCountrycode() + " " + this.PK.getPostalcode() + " " + this.PK.getLocality();
		}
		return result;
	}
	location = null;
	bounds = null;
	viewport = null;
	approximate: boolean = false;
	hassublocality: boolean = false;
}

export class Localitysearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.locality);
		this.addFieldsearcher(this.location);
		this.addFieldsearcher(this.bounds);
		this.addFieldsearcher(this.viewport);
		this.addFieldsearcher(this.approximate);
		this.addFieldsearcher(this.hassublocality);
        this.addKeysearcher(this.postalcodesearcher);
        this.addKeysearcher(this.sublocalitysearcher);
	}

    filtermodel: null;
    locality: Stringsearcher = new Stringsearcher("locality.locality");
    location: Stringsearcher = new Stringsearcher("locality.location");
    bounds: Stringsearcher = new Stringsearcher("locality.bounds");
    viewport: Stringsearcher = new Stringsearcher("locality.viewport");
    approximate: Booleansearcher = new Booleansearcher("locality.approximate");
    hassublocality: Booleansearcher = new Booleansearcher("locality.hassublocality");
    postalcodesearcher: Foreignkeysearcher = new Foreignkeysearcher();
    sublocalitysearcher: Primarykeysearcher = new Primarykeysearcher();

    addlocalitys = (values) => {
    	this.locality.values = this.locality.values.concat(values);
    }
    addapproximate = (value) => {
    	this.approximate.values = [value];
    }
    addhassublocality = (value) => {
    	this.hassublocality.values = [value];
    }
    setpostalcode = (postalcodesearch) => {
        this.postalcodesearcher.setTablesearch(postalcodesearch);
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
                "postalcodesearcher": null,
                "sublocalitysearcher": null,
            }; 
            if(this.postalcodesearcher!=null && this.postalcodesearcher.used()) {
                kss.postalcodesearcher = this.postalcodesearcher.toJSON();
            }
            if(this.sublocalitysearcher!=null && this.sublocalitysearcher.used()) {
                kss.sublocalitysearcher = this.sublocalitysearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Localitysuper;
