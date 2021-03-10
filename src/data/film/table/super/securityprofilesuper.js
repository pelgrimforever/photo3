//Auto generated code
//don't change things here, it will be overwritten
//extend classes in securityprofile.ts for table class definitions
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

export class Securityprofilepk {
    userprofile: string = '';
    getUserprofile = () => {
        return this.userprofile;
    }
	init = () => {
		this.userprofile = "";
	}
}

class Securityprofilesuper {
	constructor() { }
	tablename: string = 'securityprofile';
	PK: Securityprofilepk = new Securityprofilepk();
	userprofile = () => {
		if(this.PK===null) return '';
		else return this.PK.userprofile;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getUserprofile();
		}
		return result;
	}
	privateaccess: boolean = false;
}

export class Securityprofilesearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.userprofile);
		this.addFieldsearcher(this.privateaccess);
        this.addKeysearcher(this.securityuserprofilesearcher);
	}

    filtermodel: null;
    userprofile: Stringsearcher = new Stringsearcher("securityprofile.userprofile");
    privateaccess: Booleansearcher = new Booleansearcher("securityprofile.privateaccess");
    securityuserprofilesearcher: Primarykeysearcher = new Primarykeysearcher();

    adduserprofiles = (values) => {
    	this.userprofile.values = this.userprofile.values.concat(values);
    }
    addprivateaccess = (value) => {
    	this.privateaccess.values = [value];
    }
    setsecurityuserprofile = (securityuserprofilesearch) => {
        this.securityuserprofilesearcher.setTablesearch(securityuserprofilesearch);
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
                "securityuserprofilesearcher": null,
            }; 
            if(this.securityuserprofilesearcher!=null && this.securityuserprofilesearcher.used()) {
                kss.securityuserprofilesearcher = this.securityuserprofilesearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Securityprofilesuper;
