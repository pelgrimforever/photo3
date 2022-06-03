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
import {Photopk} from './photosuper.js';
import {Artsubgrouppk} from './artsubgroupsuper.js';
import {Artacademypk} from './artacademysuper.js';
import {Artgrouppk} from './artgroupsuper.js';

export class Artphotopk {
	photoPK: Photopk = null;
	film = () => {
		if(this.photoPK===null) return '';
		else return this.photoPK.getFilm();
	}
	getFilm = () => {
		if(this.photoPK===null) return '';
		else return this.photoPK.getFilm();
	}
	photo = () => {
		if(this.photoPK===null) return 0;
		else return this.photoPK.getId();
	}
	getPhoto = () => {
		if(this.photoPK===null) return 0;
		else return this.photoPK.getId();
	}
	init = () => {
		this.photoPK = new Photopk();
	}
}

class Artphotosuper {
	constructor() { }
	tablename: string = 'artphoto';
	PK: Artphotopk = new Artphotopk();
	film = () => {
		if(this.PK===null) return '';
		else return this.PK.film;
	}
	photo = () => {
		if(this.PK===null) return 0;
		else return this.PK.photo;
	}
	artsubgroupPK: Artsubgrouppk = null;
	artacademyPK: Artacademypk = null;
	artgroupPK: Artgrouppk = null;
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getFilm() + " " + this.PK.getPhoto();
		}
		return result;
	}
	selection: boolean = false;
	width: number = 0;
	height: number = 0;
	comment = '';
	seqno: number = 0;
	archive: boolean = false;
	surround: boolean = false;
	surrounddir = '';
}

export class Artphotosearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.selection);
		this.addFieldsearcher(this.width);
		this.addFieldsearcher(this.height);
		this.addFieldsearcher(this.comment);
		this.addFieldsearcher(this.seqno);
		this.addFieldsearcher(this.archive);
		this.addFieldsearcher(this.surround);
		this.addFieldsearcher(this.surrounddir);
        this.addKeysearcher(this.photosearcher);
        this.addKeysearcher(this.artsubgroupsearcher);
        this.addKeysearcher(this.artacademysearcher);
        this.addKeysearcher(this.artgroupsearcher);
	}

    filtermodel: null;
    selection: Booleansearcher = new Booleansearcher("artphoto.selection");
    width: Numbersearcher = new Numbersearcher("artphoto.width");
    height: Numbersearcher = new Numbersearcher("artphoto.height");
    comment: Stringsearcher = new Stringsearcher("artphoto.comment");
    seqno: Numbersearcher = new Numbersearcher("artphoto.seqno");
    archive: Booleansearcher = new Booleansearcher("artphoto.archive");
    surround: Booleansearcher = new Booleansearcher("artphoto.surround");
    surrounddir: Stringsearcher = new Stringsearcher("artphoto.surrounddir");
    photosearcher: Foreignkeysearcher = new Foreignkeysearcher();
    artsubgroupsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    artacademysearcher: Foreignkeysearcher = new Foreignkeysearcher();
    artgroupsearcher: Foreignkeysearcher = new Foreignkeysearcher();

    addselection = (value) => {
    	this.selection.values = [value];
    }
    addwidths = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.width.values = this.width.values.concat(numvalues);
    	this.width.operators = this.width.operators.concat(operators);
    }    
    addheights = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.height.values = this.height.values.concat(numvalues);
    	this.height.operators = this.height.operators.concat(operators);
    }    
    addcomments = (values) => {
    	this.comment.values = this.comment.values.concat(values);
    }
    addseqnos = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.seqno.values = this.seqno.values.concat(numvalues);
    	this.seqno.operators = this.seqno.operators.concat(operators);
    }    
    addarchive = (value) => {
    	this.archive.values = [value];
    }
    addsurround = (value) => {
    	this.surround.values = [value];
    }
    addsurrounddirs = (values) => {
    	this.surrounddir.values = this.surrounddir.values.concat(values);
    }
    setphoto = (photosearch) => {
        this.photosearcher.setTablesearch(photosearch);
    }
    setartsubgroup = (artsubgroupsearch) => {
        this.artsubgroupsearcher.setTablesearch(artsubgroupsearch);
    }
    setartacademy = (artacademysearch) => {
        this.artacademysearcher.setTablesearch(artacademysearch);
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
                "photosearcher": null,
                "artsubgroupsearcher": null,
                "artacademysearcher": null,
                "artgroupsearcher": null,
            }; 
            if(this.photosearcher!=null && this.photosearcher.used()) {
                kss.photosearcher = this.photosearcher.toJSON();
            }
            if(this.artsubgroupsearcher!=null && this.artsubgroupsearcher.used()) {
                kss.artsubgroupsearcher = this.artsubgroupsearcher.toJSON();
            }
            if(this.artacademysearcher!=null && this.artacademysearcher.used()) {
                kss.artacademysearcher = this.artacademysearcher.toJSON();
            }
            if(this.artgroupsearcher!=null && this.artgroupsearcher.used()) {
                kss.artgroupsearcher = this.artgroupsearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Artphotosuper;
