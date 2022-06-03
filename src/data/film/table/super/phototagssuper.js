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

export class Phototagspk {
	photoPK: Photopk = null;
	film = () => {
		if(this.photoPK===null) return '';
		else return this.photoPK.getFilm();
	}
	getFilm = () => {
		if(this.photoPK===null) return '';
		else return this.photoPK.getFilm();
	}
	id = () => {
		if(this.photoPK===null) return 0;
		else return this.photoPK.getId();
	}
	getId = () => {
		if(this.photoPK===null) return 0;
		else return this.photoPK.getId();
	}
    tag: string = '';
    getTag = () => {
        return this.tag;
    }
	init = () => {
		this.photoPK = new Photopk();
		this.tag = "";
	}
}

class Phototagssuper {
	constructor() { }
	tablename: string = 'phototags';
	PK: Phototagspk = new Phototagspk();
	film = () => {
		if(this.PK===null) return '';
		else return this.PK.film;
	}
	id = () => {
		if(this.PK===null) return 0;
		else return this.PK.id;
	}
	tag = () => {
		if(this.PK===null) return '';
		else return this.PK.tag;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getFilm() + " " + this.PK.getId() + " " + this.PK.getTag();
		}
		return result;
	}
	tagformat = '';
	tagvalue = '';
}

export class Phototagssearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.tag);
		this.addFieldsearcher(this.tagformat);
		this.addFieldsearcher(this.tagvalue);
        this.addKeysearcher(this.photosearcher);
	}

    filtermodel: null;
    tag: Stringsearcher = new Stringsearcher("phototags.tag");
    tagformat: Stringsearcher = new Stringsearcher("phototags.tagformat");
    tagvalue: Stringsearcher = new Stringsearcher("phototags.tagvalue");
    photosearcher: Foreignkeysearcher = new Foreignkeysearcher();

    addtags = (values) => {
    	this.tag.values = this.tag.values.concat(values);
    }
    addtagformats = (values) => {
    	this.tagformat.values = this.tagformat.values.concat(values);
    }
    addtagvalues = (values) => {
    	this.tagvalue.values = this.tagvalue.values.concat(values);
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
                "photosearcher": null,
            }; 
            if(this.photosearcher!=null && this.photosearcher.used()) {
                kss.photosearcher = this.photosearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Phototagssuper;
