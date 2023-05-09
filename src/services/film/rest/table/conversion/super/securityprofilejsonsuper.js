//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import { Securityprofilepk } from '../../../../../../data/film/table/super/securityprofilesuper.js';
import Securityprofile from '../../../../../../data/film/table/securityprofile.js';
import Moment from 'moment';
import SecurityprofileJson from '../securityprofilejson.js';

class SecurityprofileJsonsuper {
	static PKtoJSON = (securityprofilePK) => {
		let jsonobj = {
			"userprofile": null,
		};
		if(securityprofilePK!=null) {
			jsonobj.userprofile = securityprofilePK.userprofile;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (securityprofilePK) => {
		return JSON.stringify(this.PKtoJSON(securityprofilePK));
	}
	
	static toJSON = (securityprofile) => {
		var jsonobj = {
			"PK": this.PKtoJSON(securityprofile.PK),
			"privateaccess": securityprofile.privateaccess,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Securityprofilepk => {
		let securityprofilePK = new Securityprofilepk();
		if(jsonobj!=null) {
			securityprofilePK.userprofile = jsonobj.userprofile;
		}
		return securityprofilePK;
	}
	static fromJSON = (jsonobj): Securityprofile => {
		let model = new Securityprofile();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.privateaccess = jsonobj.privateaccess;
		return model;
	}
}

export default SecurityprofileJsonsuper;
