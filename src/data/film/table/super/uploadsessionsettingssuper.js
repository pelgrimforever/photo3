//Auto generated code
//don't change things here, it will be overwritten
//extend classes in uploadsessionsettings.ts for table class definitions
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

export class Uploadsessionsettingspk {
    directory: string = '';
    getDirectory = () => {
        return this.directory;
    }
	init = () => {
		this.directory = "";
	}
}

class Uploadsessionsettingssuper {
	constructor() { }
	tablename: string = 'uploadsessionsettings';
	PK: Uploadsessionsettingspk = new Uploadsessionsettingspk();
	directory = () => {
		if(this.PK===null) return '';
		else return this.PK.directory;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getDirectory();
		}
		return result;
	}
	uploadtype = '';
	filmgroups = '';
	lastposition: number = 0;
	copymode = '';
	uploadingposition: number = 0;
}

export class Uploadsessionsettingssearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.directory);
		this.addFieldsearcher(this.uploadtype);
		this.addFieldsearcher(this.filmgroups);
		this.addFieldsearcher(this.lastposition);
		this.addFieldsearcher(this.copymode);
		this.addFieldsearcher(this.uploadingposition);
	}

    filtermodel: null;
    directory: Stringsearcher = new Stringsearcher("uploadsessionsettings.directory");
    uploadtype: Stringsearcher = new Stringsearcher("uploadsessionsettings.uploadtype");
    filmgroups: Stringsearcher = new Stringsearcher("uploadsessionsettings.filmgroups");
    lastposition: Numbersearcher = new Numbersearcher("uploadsessionsettings.lastposition");
    copymode: Stringsearcher = new Stringsearcher("uploadsessionsettings.copymode");
    uploadingposition: Numbersearcher = new Numbersearcher("uploadsessionsettings.uploadingposition");

    adddirectorys = (values) => {
    	this.directory.values = this.directory.values.concat(values);
    }
    adduploadtypes = (values) => {
    	this.uploadtype.values = this.uploadtype.values.concat(values);
    }
    addfilmgroupss = (values) => {
    	this.filmgroups.values = this.filmgroups.values.concat(values);
    }
    addlastpositions = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.lastposition.values = this.lastposition.values.concat(numvalues);
    	this.lastposition.operators = this.lastposition.operators.concat(operators);
    }    
    addcopymodes = (values) => {
    	this.copymode.values = this.copymode.values.concat(values);
    }
    adduploadingpositions = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.uploadingposition.values = this.uploadingposition.values.concat(numvalues);
    	this.uploadingposition.operators = this.uploadingposition.operators.concat(operators);
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

export default Uploadsessionsettingssuper;
