//Auto generated code
//don't change things here, it will be overwritten
//extend classes in uploadsession.ts for table class definitions
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

export class Uploadsessionpk {
    filename: string = '';
    getFilename = () => {
        return this.filename;
    }
	init = () => {
		this.filename = "";
	}
}

class Uploadsessionsuper {
	constructor() { }
	tablename: string = 'uploadsession';
	PK: Uploadsessionpk = new Uploadsessionpk();
	filename = () => {
		if(this.PK===null) return '';
		else return this.PK.filename;
	}
	creatorPK: Creatorpk = null;
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getFilename();
		}
		return result;
	}
	upload: boolean = false;
	rotation: number = 0;
	filmgroupid = '';
	photosubjects = '';
	description = '';
}

export class Uploadsessionsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.filename);
		this.addFieldsearcher(this.upload);
		this.addFieldsearcher(this.rotation);
		this.addFieldsearcher(this.filmgroupid);
		this.addFieldsearcher(this.photosubjects);
		this.addFieldsearcher(this.description);
        this.addKeysearcher(this.creatorsearcher);
	}

    filtermodel: null;
    filename: Stringsearcher = new Stringsearcher("uploadsession.filename");
    upload: Booleansearcher = new Booleansearcher("uploadsession.upload");
    rotation: Numbersearcher = new Numbersearcher("uploadsession.rotation");
    filmgroupid: Stringsearcher = new Stringsearcher("uploadsession.filmgroupid");
    photosubjects: Stringsearcher = new Stringsearcher("uploadsession.photosubjects");
    description: Stringsearcher = new Stringsearcher("uploadsession.description");
    creatorsearcher: Foreignkeysearcher = new Foreignkeysearcher();

    addfilenames = (values) => {
    	this.filename.values = this.filename.values.concat(values);
    }
    addupload = (value) => {
    	this.upload.values = [value];
    }
    addrotations = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.rotation.values = this.rotation.values.concat(numvalues);
    	this.rotation.operators = this.rotation.operators.concat(operators);
    }
    addfilmgroupids = (values) => {
    	this.filmgroupid.values = this.filmgroupid.values.concat(values);
    }
    addphotosubjectss = (values) => {
    	this.photosubjects.values = this.photosubjects.values.concat(values);
    }
    adddescriptions = (values) => {
    	this.description.values = this.description.values.concat(values);
    }
    setcreator = (creatorsearch) => {
        this.creatorsearcher.setTablesearch(creatorsearch);
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
                "creatorsearcher": null,
            }; 
            if(this.creatorsearcher!=null && this.creatorsearcher.used()) {
                kss.creatorsearcher = this.creatorsearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Uploadsessionsuper;
