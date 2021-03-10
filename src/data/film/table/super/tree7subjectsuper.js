//Auto generated code
//don't change things here, it will be overwritten
//extend classes in tree7subject.ts for table class definitions
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

export class Tree7subjectpk {
    subjectid: string = '';
    getSubjectid = () => {
        return this.subjectid;
    }
	init = () => {
		this.subjectid = '';
	}
}

class Tree7subjectsuper {
	constructor() { }
	tablename: string = 'tree7subject';
	PK: Tree7subjectpk = new Tree7subjectpk();
	subjectid = () => {
		if(this.PK===null) return '';
		else return this.PK.subjectid;
	}
	tree7subjectParentsubjectidPK: Tree7subjectparentsubjectidpk = null;
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getSubjectid();
		}
		return result;
	}
	tree7id = '';
	subject = '';
	treestep: number = 0;
}

export class Tree7subjectsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.tree7id);
		this.addFieldsearcher(this.subjectid);
		this.addFieldsearcher(this.subject);
		this.addFieldsearcher(this.treestep);
        this.addKeysearcher(this.tree7subjectParentsubjectidsearcher);
        this.addKeysearcher(this.phototree7subjectsearcher);
        this.addKeysearcher(this.photosearcher);
	}

    filtermodel: null;
    tree7id: Stringsearcher = new Stringsearcher("tree7subject.tree7id");
    subjectid: Numbersearcher = new Numbersearcher("tree7subject.subjectid");
    subject: Stringsearcher = new Stringsearcher("tree7subject.subject");
    treestep: Numbersearcher = new Numbersearcher("tree7subject.treestep");
    tree7subjectParentsubjectidsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    phototree7subjectsearcher: Primarykeysearcher = new Primarykeysearcher();
    photosearcher: Relationalkeysearcher = new Relationalkeysearcher();

    addtree7ids = (values) => {
    	this.tree7id.values = this.tree7id.values.concat(values);
    }
    addsubjectids = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.subjectid.values = this.subjectid.values.concat(numvalues);
    	this.subjectid.operators = this.subjectid.operators.concat(operators);
    }
    addsubjects = (values) => {
    	this.subject.values = this.subject.values.concat(values);
    }
    addtreesteps = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.treestep.values = this.treestep.values.concat(numvalues);
    	this.treestep.operators = this.treestep.operators.concat(operators);
    }    
    settree7subjectParentsubjectid = (tree7subjectsearch) => {
        this.tree7subjectParentsubjectidsearcher.setTablesearch(tree7subjectsearch);
    }
    setphototree7subject = (phototree7subjectsearch) => {
        this.phototree7subjectsearcher.setTablesearch(phototree7subjectsearch);
    }
    setphoto = (photosearch) => {
        this.photosearcher.setTablesearch(photosearch);
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
                "tree7subjectParentsubjectidsearcher": null,
                "phototree7subjectsearcher": null,
                "photosearcher": null,
            }; 
            if(this.tree7subjectParentsubjectidsearcher!=null && this.tree7subjectParentsubjectidsearcher.used()) {
                kss.tree7subjectParentsubjectidsearcher = this.tree7subjectParentsubjectidsearcher.toJSON();
            }
            if(this.phototree7subjectsearcher!=null && this.phototree7subjectsearcher.used()) {
                kss.phototree7subjectsearcher = this.phototree7subjectsearcher.toJSON();
            }
            if(this.photosearcher!=null && this.photosearcher.used()) {
                kss.photosearcher = this.photosearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Tree7subjectsuper;
