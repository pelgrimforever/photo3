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
import {Routepk} from './routesuper.js';
import {Creatorpk} from './creatorsuper.js';
import {Filmpk} from './filmsuper.js';

export class Photopk {
	filmPK: Filmpk = null;
	film = () => {
		if(this.filmPK===null) return '';
		else return this.filmPK.getId();
	}
	getFilm = () => {
		if(this.filmPK===null) return '';
		else return this.filmPK.getId();
	}
	id: number = 0;
    getId = () => {
        return this.id;
    }
	init = () => {
		this.filmPK = new Filmpk();
		this.id = 0;
	}
}

class Photosuper {
	constructor() { }
	tablename: string = 'photo';
	PK: Photopk = new Photopk();
	film = () => {
		if(this.PK===null) return '';
		else return this.PK.film;
	}
	id = () => {
		if(this.PK===null) return 0;
		else return this.PK.id;
	}
	routePK: Routepk = null;
	creatorPK: Creatorpk = null;
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getFilm() + " " + this.PK.getId();
		}
		return result;
	}
	format = '';
	description = '';
	photodate: string = '';
	photodateUI: string = '';
	phototime: string = '';
	phototimeUI: string = '';
	public: boolean = false;
	composition: boolean = false;
	rotation: number = 0;
	backup: boolean = false;
	imagebackup: boolean = false;
	location = null;
	exactlocation: boolean = false;
	locationradius: number = 0;
	reversegeocode = '';
	streetnumber = '';
	formattedaddress = '';
}

export class Photosearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.id);
		this.addFieldsearcher(this.format);
		this.addFieldsearcher(this.description);
		this.addFieldsearcher(this.photodate);
		this.addFieldsearcher(this.phototime);
		this.addFieldsearcher(this.publicf_);
		this.addFieldsearcher(this.composition);
		this.addFieldsearcher(this.rotation);
		this.addFieldsearcher(this.backup);
		this.addFieldsearcher(this.imagebackup);
		this.addFieldsearcher(this.location);
		this.addFieldsearcher(this.exactlocation);
		this.addFieldsearcher(this.locationradius);
		this.addFieldsearcher(this.reversegeocode);
		this.addFieldsearcher(this.streetnumber);
		this.addFieldsearcher(this.formattedaddress);
        this.addKeysearcher(this.routesearcher);
        this.addKeysearcher(this.creatorsearcher);
        this.addKeysearcher(this.filmsearcher);
        this.addKeysearcher(this.phototree7subjectsearcher);
        this.addKeysearcher(this.tree7subjectsearcher);
        this.addKeysearcher(this.artphotosearcher);
        this.addKeysearcher(this.photosubjectssearcher);
        this.addKeysearcher(this.subjectsearcher);
        this.addKeysearcher(this.phototagssearcher);
	}

    filtermodel: null;
    id: Numbersearcher = new Numbersearcher("photo.id");
    format: Stringsearcher = new Stringsearcher("photo.format");
    description: Stringsearcher = new Stringsearcher("photo.description");
    photodate: Datesearcher = new Datesearcher("photo.photodate");
    phototime: Timesearcher = new Timesearcher("photo.phototime");
    publicf_: Booleansearcher = new Booleansearcher("photo.public");
    composition: Booleansearcher = new Booleansearcher("photo.composition");
    rotation: Numbersearcher = new Numbersearcher("photo.rotation");
    backup: Booleansearcher = new Booleansearcher("photo.backup");
    imagebackup: Booleansearcher = new Booleansearcher("photo.imagebackup");
    location: Stringsearcher = new Stringsearcher("photo.location");
    exactlocation: Booleansearcher = new Booleansearcher("photo.exactlocation");
    locationradius: Numbersearcher = new Numbersearcher("photo.locationradius");
    reversegeocode: Stringsearcher = new Stringsearcher("photo.reversegeocode");
    streetnumber: Stringsearcher = new Stringsearcher("photo.streetnumber");
    formattedaddress: Stringsearcher = new Stringsearcher("photo.formattedaddress");
    routesearcher: Foreignkeysearcher = new Foreignkeysearcher();
    creatorsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    filmsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    phototree7subjectsearcher: Primarykeysearcher = new Primarykeysearcher();
    tree7subjectsearcher: Relationalkeysearcher = new Relationalkeysearcher();
    artphotosearcher: Primarykeysearcher = new Primarykeysearcher();
    photosubjectssearcher: Primarykeysearcher = new Primarykeysearcher();
    subjectsearcher: Relationalkeysearcher = new Relationalkeysearcher();
    phototagssearcher: Primarykeysearcher = new Primarykeysearcher();

    addids = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.id.values = this.id.values.concat(numvalues);
    	this.id.operators = this.id.operators.concat(operators);
    }    
    addformats = (values) => {
    	this.format.values = this.format.values.concat(values);
    }
    adddescriptions = (values) => {
    	this.description.values = this.description.values.concat(values);
    }
    addphotodates = (values, operators) => {
    	this.photodate.values = this.photodate.values.concat(values);
    	this.photodate.operators = this.photodate.operators.concat(operators);
    }
    addphototimes = (values, operators) => {
    	this.phototime.values = this.phototime.values.concat(values);
    	this.phototime.operators = this.phototime.operators.concat(operators);
    }
    addpublic = (value) => {
    	this.publicf_.values = [value];
    }
    addcomposition = (value) => {
    	this.composition.values = [value];
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
    addbackup = (value) => {
    	this.backup.values = [value];
    }
    addimagebackup = (value) => {
    	this.imagebackup.values = [value];
    }
    addexactlocation = (value) => {
    	this.exactlocation.values = [value];
    }
    addlocationradiuss = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.locationradius.values = this.locationradius.values.concat(numvalues);
    	this.locationradius.operators = this.locationradius.operators.concat(operators);
    }
    addreversegeocodes = (values) => {
    	this.reversegeocode.values = this.reversegeocode.values.concat(values);
    }
    addstreetnumbers = (values) => {
    	this.streetnumber.values = this.streetnumber.values.concat(values);
    }
    addformattedaddresss = (values) => {
    	this.formattedaddress.values = this.formattedaddress.values.concat(values);
    }
    setroute = (routesearch) => {
        this.routesearcher.setTablesearch(routesearch);
    }
    setcreator = (creatorsearch) => {
        this.creatorsearcher.setTablesearch(creatorsearch);
    }
    setfilm = (filmsearch) => {
        this.filmsearcher.setTablesearch(filmsearch);
    }
    setphototree7subject = (phototree7subjectsearch) => {
        this.phototree7subjectsearcher.setTablesearch(phototree7subjectsearch);
    }
    settree7subject = (tree7subjectsearch) => {
        this.tree7subjectsearcher.setTablesearch(tree7subjectsearch);
    }
    setartphoto = (artphotosearch) => {
        this.artphotosearcher.setTablesearch(artphotosearch);
    }
    setphotosubjects = (photosubjectssearch) => {
        this.photosubjectssearcher.setTablesearch(photosubjectssearch);
    }
    setsubject = (subjectsearch) => {
        this.subjectsearcher.setTablesearch(subjectsearch);
    }
    setphototags = (phototagssearch) => {
        this.phototagssearcher.setTablesearch(phototagssearch);
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
                "routesearcher": null,
                "creatorsearcher": null,
                "filmsearcher": null,
                "phototree7subjectsearcher": null,
                "tree7subjectsearcher": null,
                "artphotosearcher": null,
                "photosubjectssearcher": null,
                "subjectsearcher": null,
                "phototagssearcher": null,
            }; 
            if(this.routesearcher!=null && this.routesearcher.used()) {
                kss.routesearcher = this.routesearcher.toJSON();
            }
            if(this.creatorsearcher!=null && this.creatorsearcher.used()) {
                kss.creatorsearcher = this.creatorsearcher.toJSON();
            }
            if(this.filmsearcher!=null && this.filmsearcher.used()) {
                kss.filmsearcher = this.filmsearcher.toJSON();
            }
            if(this.phototree7subjectsearcher!=null && this.phototree7subjectsearcher.used()) {
                kss.phototree7subjectsearcher = this.phototree7subjectsearcher.toJSON();
            }
            if(this.tree7subjectsearcher!=null && this.tree7subjectsearcher.used()) {
                kss.tree7subjectsearcher = this.tree7subjectsearcher.toJSON();
            }
            if(this.artphotosearcher!=null && this.artphotosearcher.used()) {
                kss.artphotosearcher = this.artphotosearcher.toJSON();
            }
            if(this.photosubjectssearcher!=null && this.photosubjectssearcher.used()) {
                kss.photosubjectssearcher = this.photosubjectssearcher.toJSON();
            }
            if(this.subjectsearcher!=null && this.subjectsearcher.used()) {
                kss.subjectsearcher = this.subjectsearcher.toJSON();
            }
            if(this.phototagssearcher!=null && this.phototagssearcher.used()) {
                kss.phototagssearcher = this.phototagssearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Photosuper;
