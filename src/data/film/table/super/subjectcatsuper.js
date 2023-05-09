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

export class Subjectcatpk {
    cat: string = '';
    getCat = () => {
        return this.cat;
    }
	init = () => {
		this.cat = "";
	}
}

class Subjectcatsuper {
	constructor() { }
	tablename: string = 'subjectcat';
	PK: Subjectcatpk = new Subjectcatpk();
	cat = () => {
		if(this.PK===null) return '';
		else return this.PK.cat;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getCat();
		}
		return result;
	}
	catno: number = 0;
	description = '';
}

export class Subjectcatsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.cat);
		this.addFieldsearcher(this.catno);
		this.addFieldsearcher(this.description);
        this.addKeysearcher(this.subjectCat1searcher);
        this.addKeysearcher(this.subjectCat2searcher);
	}

    filtermodel: null;
    cat: Stringsearcher = new Stringsearcher("subjectcat.cat");
    catno: Numbersearcher = new Numbersearcher("subjectcat.catno");
    description: Stringsearcher = new Stringsearcher("subjectcat.description");
    subjectCat1searcher: Primarykeysearcher = new Primarykeysearcher();
    subjectCat2searcher: Primarykeysearcher = new Primarykeysearcher();

    addcats = (values) => {
    	this.cat.values = this.cat.values.concat(values);
    }
    addcatnos = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.catno.values = this.catno.values.concat(numvalues);
    	this.catno.operators = this.catno.operators.concat(operators);
    }    
    adddescriptions = (values) => {
    	this.description.values = this.description.values.concat(values);
    }
    setsubjectCat1 = (subjectsearch) => {
        this.subjectCat1searcher.setTablesearch(subjectsearch);
    }
    setsubjectCat2 = (subjectsearch) => {
        this.subjectCat2searcher.setTablesearch(subjectsearch);
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
                "subjectCat1searcher": null,
                "subjectCat2searcher": null,
            }; 
            if(this.subjectCat1searcher!=null && this.subjectCat1searcher.used()) {
                kss.subjectCat1searcher = this.subjectCat1searcher.toJSON();
            }
            if(this.subjectCat2searcher!=null && this.subjectCat2searcher.used()) {
                kss.subjectCat2searcher = this.subjectCat2searcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Subjectcatsuper;
