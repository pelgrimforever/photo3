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
import {Filmtypepk} from './filmtypesuper.js';

export class Filmpk {
    id: string = '';
    getId = () => {
        return this.id;
    }
	init = () => {
		this.id = "";
	}
}

class Filmsuper {
	constructor() { }
	tablename: string = 'film';
	PK: Filmpk = new Filmpk();
	id = () => {
		if(this.PK===null) return '';
		else return this.PK.id;
	}
	filmtypePK: Filmtypepk = null;
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getId();
		}
		return result;
	}
	iso = '';
	startdate: string = '';
	startdateUI: string = '';
	enddate: string = '';
	enddateUI: string = '';
	owner = '';
	cd = '';
	public: boolean = false;
	backup: boolean = false;
}

export class Filmsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.id);
		this.addFieldsearcher(this.iso);
		this.addFieldsearcher(this.startdate);
		this.addFieldsearcher(this.enddate);
		this.addFieldsearcher(this.owner);
		this.addFieldsearcher(this.cd);
		this.addFieldsearcher(this.publicf_);
		this.addFieldsearcher(this.backup);
        this.addKeysearcher(this.filmtypesearcher);
        this.addKeysearcher(this.filmsubjectssearcher);
        this.addKeysearcher(this.subjectsearcher);
        this.addKeysearcher(this.photosearcher);
	}

    filtermodel: null;
    id: Stringsearcher = new Stringsearcher("film.id");
    iso: Stringsearcher = new Stringsearcher("film.iso");
    startdate: Datesearcher = new Datesearcher("film.startdate");
    enddate: Datesearcher = new Datesearcher("film.enddate");
    owner: Stringsearcher = new Stringsearcher("film.owner");
    cd: Stringsearcher = new Stringsearcher("film.cd");
    publicf_: Booleansearcher = new Booleansearcher("film.public");
    backup: Booleansearcher = new Booleansearcher("film.backup");
    filmtypesearcher: Foreignkeysearcher = new Foreignkeysearcher();
    filmsubjectssearcher: Primarykeysearcher = new Primarykeysearcher();
    subjectsearcher: Relationalkeysearcher = new Relationalkeysearcher();
    photosearcher: Primarykeysearcher = new Primarykeysearcher();

    addids = (values) => {
    	this.id.values = this.id.values.concat(values);
    }
    addisos = (values) => {
    	this.iso.values = this.iso.values.concat(values);
    }
    addstartdates = (values, operators) => {
    	this.startdate.values = this.startdate.values.concat(values);
    	this.startdate.operators = this.startdate.operators.concat(operators);
    }
    addenddates = (values, operators) => {
    	this.enddate.values = this.enddate.values.concat(values);
    	this.enddate.operators = this.enddate.operators.concat(operators);
    }
    addowners = (values) => {
    	this.owner.values = this.owner.values.concat(values);
    }
    addcds = (values) => {
    	this.cd.values = this.cd.values.concat(values);
    }
    addpublic = (value) => {
    	this.publicf_.values = [value];
    }
    addbackup = (value) => {
    	this.backup.values = [value];
    }
    setfilmtype = (filmtypesearch) => {
        this.filmtypesearcher.setTablesearch(filmtypesearch);
    }
    setfilmsubjects = (filmsubjectssearch) => {
        this.filmsubjectssearcher.setTablesearch(filmsubjectssearch);
    }
    setsubject = (subjectsearch) => {
        this.subjectsearcher.setTablesearch(subjectsearch);
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
                "filmtypesearcher": null,
                "filmsubjectssearcher": null,
                "subjectsearcher": null,
                "photosearcher": null,
            }; 
            if(this.filmtypesearcher!=null && this.filmtypesearcher.used()) {
                kss.filmtypesearcher = this.filmtypesearcher.toJSON();
            }
            if(this.filmsubjectssearcher!=null && this.filmsubjectssearcher.used()) {
                kss.filmsubjectssearcher = this.filmsubjectssearcher.toJSON();
            }
            if(this.subjectsearcher!=null && this.subjectsearcher.used()) {
                kss.subjectsearcher = this.subjectsearcher.toJSON();
            }
            if(this.photosearcher!=null && this.photosearcher.used()) {
                kss.photosearcher = this.photosearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Filmsuper;
