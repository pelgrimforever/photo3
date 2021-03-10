//Auto generated code
//don't change things here, it will be overwritten
//extend classes in filmsubjects.ts for table class definitions
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

export class Filmsubjectspk {
	subjectPK: Subjectpk = null;
	filmPK: Filmpk = null;
	film = () => {
		if(this.filmPK===null) return '';
		else return this.filmPK.getId();
	}
	getFilm = () => {
		if(this.filmPK===null) return '';
		else return this.filmPK.getId();
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
		this.subjectPK = new Subjectpk();
		this.filmPK = new Filmpk();
	}
}

class Filmsubjectssuper {
	constructor() { }
	tablename: string = 'filmsubjects';
	PK: Filmsubjectspk = new Filmsubjectspk();
	film = () => {
		if(this.PK===null) return '';
		else return this.PK.film;
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
			result += this.PK.getFilm() + " " + this.PK.getCat1() + " " + this.PK.getCat2() + " " + this.PK.getSubject();
		}
		return result;
	}
}

export class Filmsubjectssearcher extends Tablesearch {
	constructor() { 
		super(); 
        this.addKeysearcher(this.subjectsearcher);
        this.addKeysearcher(this.filmsearcher);
	}

    filtermodel: null;
    subjectsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    filmsearcher: Foreignkeysearcher = new Foreignkeysearcher();

    setsubject = (subjectsearch) => {
        this.subjectsearcher.setTablesearch(subjectsearch);
    }
    setfilm = (filmsearch) => {
        this.filmsearcher.setTablesearch(filmsearch);
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
                "subjectsearcher": null,
                "filmsearcher": null,
            }; 
            if(this.subjectsearcher!=null && this.subjectsearcher.used()) {
                kss.subjectsearcher = this.subjectsearcher.toJSON();
            }
            if(this.filmsearcher!=null && this.filmsearcher.used()) {
                kss.filmsearcher = this.filmsearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Filmsubjectssuper;
