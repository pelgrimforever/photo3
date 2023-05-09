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

export class Spatialrefsyspk {
	srid: number = 0;
    getSrid = () => {
        return this.srid;
    }
	init = () => {
		this.srid = 0;
	}
}

class Spatialrefsyssuper {
	constructor() { }
	tablename: string = 'spatialrefsys';
	PK: Spatialrefsyspk = new Spatialrefsyspk();
	srid = () => {
		if(this.PK===null) return 0;
		else return this.PK.srid;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getSrid();
		}
		return result;
	}
	auth_name = '';
	auth_srid: number = 0;
	srtext = '';
	proj4text = '';
}

export class Spatialrefsyssearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.srid);
		this.addFieldsearcher(this.auth_name);
		this.addFieldsearcher(this.auth_srid);
		this.addFieldsearcher(this.srtext);
		this.addFieldsearcher(this.proj4text);
	}

    filtermodel: null;
    srid: Numbersearcher = new Numbersearcher("spatialrefsys.srid");
    auth_name: Stringsearcher = new Stringsearcher("spatialrefsys.auth_name");
    auth_srid: Numbersearcher = new Numbersearcher("spatialrefsys.auth_srid");
    srtext: Stringsearcher = new Stringsearcher("spatialrefsys.srtext");
    proj4text: Stringsearcher = new Stringsearcher("spatialrefsys.proj4text");

    addsrids = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.srid.values = this.srid.values.concat(numvalues);
    	this.srid.operators = this.srid.operators.concat(operators);
    }    
    addauth_names = (values) => {
    	this.auth_name.values = this.auth_name.values.concat(values);
    }
    addauth_srids = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.auth_srid.values = this.auth_srid.values.concat(numvalues);
    	this.auth_srid.operators = this.auth_srid.operators.concat(operators);
    }    
    addsrtexts = (values) => {
    	this.srtext.values = this.srtext.values.concat(values);
    }
    addproj4texts = (values) => {
    	this.proj4text.values = this.proj4text.values.concat(values);
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

export default Spatialrefsyssuper;
