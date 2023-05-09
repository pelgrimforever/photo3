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
import {Artgrouppk} from './artgroupsuper.js';

export class Artsubgrouppk {
	subgroupid: number = 0;
    getSubgroupid = () => {
        return this.subgroupid;
    }
	init = () => {
		this.subgroupid = 0;
	}
}

class Artsubgroupsuper {
	constructor() { }
	tablename: string = 'artsubgroup';
	PK: Artsubgrouppk = new Artsubgrouppk();
	subgroupid = () => {
		if(this.PK===null) return 0;
		else return this.PK.subgroupid;
	}
	artgroupPK: Artgrouppk = null;
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getSubgroupid();
		}
		return result;
	}
	subgroupname = '';
	lastseqno: number = 0;
}

export class Artsubgroupsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.subgroupid);
		this.addFieldsearcher(this.subgroupname);
		this.addFieldsearcher(this.lastseqno);
        this.addKeysearcher(this.artgroupsearcher);
	}

    filtermodel: null;
    subgroupid: Numbersearcher = new Numbersearcher("artsubgroup.subgroupid");
    subgroupname: Stringsearcher = new Stringsearcher("artsubgroup.subgroupname");
    lastseqno: Numbersearcher = new Numbersearcher("artsubgroup.lastseqno");
    artgroupsearcher: Foreignkeysearcher = new Foreignkeysearcher();

    addsubgroupids = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.subgroupid.values = this.subgroupid.values.concat(numvalues);
    	this.subgroupid.operators = this.subgroupid.operators.concat(operators);
    }    
    addsubgroupnames = (values) => {
    	this.subgroupname.values = this.subgroupname.values.concat(values);
    }
    addlastseqnos = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.lastseqno.values = this.lastseqno.values.concat(numvalues);
    	this.lastseqno.operators = this.lastseqno.operators.concat(operators);
    }    
    setartgroup = (artgroupsearch) => {
        this.artgroupsearcher.setTablesearch(artgroupsearch);
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
                "artgroupsearcher": null,
            }; 
            if(this.artgroupsearcher!=null && this.artgroupsearcher.used()) {
                kss.artgroupsearcher = this.artgroupsearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Artsubgroupsuper;
