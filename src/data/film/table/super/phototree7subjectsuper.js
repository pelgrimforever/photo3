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
import {Tree7subjectpk} from './tree7subjectsuper.js';
import {Photopk} from './photosuper.js';

export class Phototree7subjectpk {
	tree7subjectPK: Tree7subjectpk = null;
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
	subjectid = () => {
		if(this.tree7subjectPK===null) return '';
		else return this.tree7subjectPK.getSubjectid();
	}
	getSubjectid = () => {
		if(this.tree7subjectPK===null) return '';
		else return this.tree7subjectPK.getSubjectid();
	}
	init = () => {
		this.tree7subjectPK = new Tree7subjectpk();
		this.photoPK = new Photopk();
	}
}

class Phototree7subjectsuper {
	constructor() { }
	tablename: string = 'phototree7subject';
	PK: Phototree7subjectpk = new Phototree7subjectpk();
	film = () => {
		if(this.PK===null) return '';
		else return this.PK.film;
	}
	id = () => {
		if(this.PK===null) return 0;
		else return this.PK.id;
	}
	subjectid = () => {
		if(this.PK===null) return '';
		else return this.PK.subjectid;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getFilm() + " " + this.PK.getId() + " " + this.PK.getSubjectid();
		}
		return result;
	}
}

export class Phototree7subjectsearcher extends Tablesearch {
	constructor() { 
		super(); 
        this.addKeysearcher(this.tree7subjectsearcher);
        this.addKeysearcher(this.photosearcher);
	}

    filtermodel: null;
    tree7subjectsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    photosearcher: Foreignkeysearcher = new Foreignkeysearcher();

    settree7subject = (tree7subjectsearch) => {
        this.tree7subjectsearcher.setTablesearch(tree7subjectsearch);
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
                "tree7subjectsearcher": null,
                "photosearcher": null,
            }; 
            if(this.tree7subjectsearcher!=null && this.tree7subjectsearcher.used()) {
                kss.tree7subjectsearcher = this.tree7subjectsearcher.toJSON();
            }
            if(this.photosearcher!=null && this.photosearcher.used()) {
                kss.photosearcher = this.photosearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Phototree7subjectsuper;
