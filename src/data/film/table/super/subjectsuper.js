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
import {Subjectcatpk} from './subjectcatsuper.js';
import {Tree7subjectpk} from './tree7subjectsuper.js';

export class Subjectpk {
	subjectcatCat1PK: Subjectcatpk = null;
	subjectcatCat2PK: Subjectcatpk = null;
	cat1 = () => {
		if(this.subjectcatCat1PK===null) return '';
		else return this.subjectcatCat1PK.getCat();
	}
	getCat1 = () => {
		if(this.subjectcatCat1PK===null) return '';
		else return this.subjectcatCat1PK.getCat();
	}
	cat2 = () => {
		if(this.subjectcatCat2PK===null) return '';
		else return this.subjectcatCat2PK.getCat();
	}
	getCat2 = () => {
		if(this.subjectcatCat2PK===null) return '';
		else return this.subjectcatCat2PK.getCat();
	}
	id: number = 0;
    getId = () => {
        return this.id;
    }
	init = () => {
		this.subjectcatCat1PK = new Subjectcatpk();
		this.subjectcatCat2PK = new Subjectcatpk();
		this.id = 0;
	}
}

class Subjectsuper {
	constructor() { }
	tablename: string = 'subject';
	PK: Subjectpk = new Subjectpk();
	cat1 = () => {
		if(this.PK===null) return '';
		else return this.PK.cat1;
	}
	cat2 = () => {
		if(this.PK===null) return '';
		else return this.PK.cat2;
	}
	id = () => {
		if(this.PK===null) return 0;
		else return this.PK.id;
	}
	tree7subjectPK: Tree7subjectpk = null;
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getCat1() + " " + this.PK.getCat2() + " " + this.PK.getId();
		}
		return result;
	}
	subject = '';
	description = '';
}

export class Subjectsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.id);
		this.addFieldsearcher(this.subject);
		this.addFieldsearcher(this.description);
        this.addKeysearcher(this.subjectcatCat1searcher);
        this.addKeysearcher(this.tree7subjectsearcher);
        this.addKeysearcher(this.subjectcatCat2searcher);
        this.addKeysearcher(this.filmsubjectssearcher);
        this.addKeysearcher(this.filmsearcher);
        this.addKeysearcher(this.photosubjectssearcher);
        this.addKeysearcher(this.photosearcher);
	}

    filtermodel: null;
    id: Numbersearcher = new Numbersearcher("subject.id");
    subject: Stringsearcher = new Stringsearcher("subject.subject");
    description: Stringsearcher = new Stringsearcher("subject.description");
    subjectcatCat1searcher: Foreignkeysearcher = new Foreignkeysearcher();
    tree7subjectsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    subjectcatCat2searcher: Foreignkeysearcher = new Foreignkeysearcher();
    filmsubjectssearcher: Primarykeysearcher = new Primarykeysearcher();
    filmsearcher: Relationalkeysearcher = new Relationalkeysearcher();
    photosubjectssearcher: Primarykeysearcher = new Primarykeysearcher();
    photosearcher: Relationalkeysearcher = new Relationalkeysearcher();

    addids = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.id.values = this.id.values.concat(numvalues);
    	this.id.operators = this.id.operators.concat(operators);
    }    
    addsubjects = (values) => {
    	this.subject.values = this.subject.values.concat(values);
    }
    adddescriptions = (values) => {
    	this.description.values = this.description.values.concat(values);
    }
    setsubjectcatCat1 = (subjectcatsearch) => {
        this.subjectcatCat1searcher.setTablesearch(subjectcatsearch);
    }
    settree7subject = (tree7subjectsearch) => {
        this.tree7subjectsearcher.setTablesearch(tree7subjectsearch);
    }
    setsubjectcatCat2 = (subjectcatsearch) => {
        this.subjectcatCat2searcher.setTablesearch(subjectcatsearch);
    }
    setfilmsubjects = (filmsubjectssearch) => {
        this.filmsubjectssearcher.setTablesearch(filmsubjectssearch);
    }
    setfilm = (filmsearch) => {
        this.filmsearcher.setTablesearch(filmsearch);
    }
    setphotosubjects = (photosubjectssearch) => {
        this.photosubjectssearcher.setTablesearch(photosubjectssearch);
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
                "subjectcatCat1searcher": null,
                "tree7subjectsearcher": null,
                "subjectcatCat2searcher": null,
                "filmsubjectssearcher": null,
                "filmsearcher": null,
                "photosubjectssearcher": null,
                "photosearcher": null,
            }; 
            if(this.subjectcatCat1searcher!=null && this.subjectcatCat1searcher.used()) {
                kss.subjectcatCat1searcher = this.subjectcatCat1searcher.toJSON();
            }
            if(this.tree7subjectsearcher!=null && this.tree7subjectsearcher.used()) {
                kss.tree7subjectsearcher = this.tree7subjectsearcher.toJSON();
            }
            if(this.subjectcatCat2searcher!=null && this.subjectcatCat2searcher.used()) {
                kss.subjectcatCat2searcher = this.subjectcatCat2searcher.toJSON();
            }
            if(this.filmsubjectssearcher!=null && this.filmsubjectssearcher.used()) {
                kss.filmsubjectssearcher = this.filmsubjectssearcher.toJSON();
            }
            if(this.filmsearcher!=null && this.filmsearcher.used()) {
                kss.filmsearcher = this.filmsearcher.toJSON();
            }
            if(this.photosubjectssearcher!=null && this.photosubjectssearcher.used()) {
                kss.photosubjectssearcher = this.photosubjectssearcher.toJSON();
            }
            if(this.photosearcher!=null && this.photosearcher.used()) {
                kss.photosearcher = this.photosearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Subjectsuper;
