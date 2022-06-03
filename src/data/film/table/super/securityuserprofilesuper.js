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
import {Securityprofilepk} from './securityprofilesuper.js';

export class Securityuserprofilepk {
	securityprofilePK: Securityprofilepk = null;
	userprofile = () => {
		if(this.securityprofilePK===null) return '';
		else return this.securityprofilePK.getUserprofile();
	}
	getUserprofile = () => {
		if(this.securityprofilePK===null) return '';
		else return this.securityprofilePK.getUserprofile();
	}
    siteusername: string = '';
    getSiteusername = () => {
        return this.siteusername;
    }
	init = () => {
		this.securityprofilePK = new Securityprofilepk();
		this.siteusername = "";
	}
}

class Securityuserprofilesuper {
	constructor() { }
	tablename: string = 'securityuserprofile';
	PK: Securityuserprofilepk = new Securityuserprofilepk();
	siteusername = () => {
		if(this.PK===null) return '';
		else return this.PK.siteusername;
	}
	userprofile = () => {
		if(this.PK===null) return '';
		else return this.PK.userprofile;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getSiteusername() + " " + this.PK.getUserprofile();
		}
		return result;
	}
}

export class Securityuserprofilesearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.siteusername);
        this.addKeysearcher(this.securityprofilesearcher);
	}

    filtermodel: null;
    siteusername: Stringsearcher = new Stringsearcher("securityuserprofile.siteusername");
    securityprofilesearcher: Foreignkeysearcher = new Foreignkeysearcher();

    addsiteusernames = (values) => {
    	this.siteusername.values = this.siteusername.values.concat(values);
    }
    setsecurityprofile = (securityprofilesearch) => {
        this.securityprofilesearcher.setTablesearch(securityprofilesearch);
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
                "securityprofilesearcher": null,
            }; 
            if(this.securityprofilesearcher!=null && this.securityprofilesearcher.used()) {
                kss.securityprofilesearcher = this.securityprofilesearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Securityuserprofilesuper;
