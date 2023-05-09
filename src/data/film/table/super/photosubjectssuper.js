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
import {Photopk} from './photosuper.js';
import {Subjectpk} from './subjectsuper.js';

export class Photosubjectspk {
	photoPK: Photopk = null;
	subjectPK: Subjectpk = null;
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
	cat1 = () => {
		if(this.subjectPK===null) return '';
		else return this.subjectPK.getCat1();
	}
	getCat1 = () => {
		if(this.subjectPK===null) return '';
		else return this.subjectPK.getCat1();
	}
	cat2 = () => {
		if(this.subjectPK===null) return '';
		else return this.subjectPK.getCat2();
	}
	getCat2 = () => {
		if(this.subjectPK===null) return '';
		else return this.subjectPK.getCat2();
	}
	subject = () => {
		if(this.subjectPK===null) return 0;
		else return this.subjectPK.getId();
	}
	getSubject = () => {
		if(this.subjectPK===null) return 0;
		else return this.subjectPK.getId();
	}
	init = () => {
		this.photoPK = new Photopk();
		this.subjectPK = new Subjectpk();
	}
}

class Photosubjectssuper {
	constructor() { }
	tablename: string = 'photosubjects';
	PK: Photosubjectspk = new Photosubjectspk();
	film = () => {
		if(this.PK===null) return '';
		else return this.PK.film;
	}
	id = () => {
		if(this.PK===null) return 0;
		else return this.PK.id;
	}
	cat1 = () => {
		if(this.PK===null) return '';
		else return this.PK.cat1;
	}
	cat2 = () => {
		if(this.PK===null) return '';
		else return this.PK.cat2;
	}
	subject = () => {
		if(this.PK===null) return 0;
		else return this.PK.subject;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getFilm() + " " + this.PK.getId() + " " + this.PK.getCat1() + " " + this.PK.getCat2() + " " + this.PK.getSubject();
		}
		return result;
	}
}

export class Photosubjectssearcher extends Tablesearch {
	constructor() { 
		super(); 
        this.addKeysearcher(this.photosearcher);
        this.addKeysearcher(this.subjectsearcher);
	}

    filtermodel: null;
    photosearcher: Foreignkeysearcher = new Foreignkeysearcher();
    subjectsearcher: Foreignkeysearcher = new Foreignkeysearcher();

    setphoto = (photosearch) => {
        this.photosearcher.setTablesearch(photosearch);
    }
    setsubject = (subjectsearch) => {
        this.subjectsearcher.setTablesearch(subjectsearch);
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
                "subjectsearcher": null,
            }; 
            if(this.photosearcher!=null && this.photosearcher.used()) {
                kss.photosearcher = this.photosearcher.toJSON();
            }
            if(this.subjectsearcher!=null && this.subjectsearcher.used()) {
                kss.subjectsearcher = this.subjectsearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Photosubjectssuper;
