//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import { Securityuserprofilepk } from '../../../../../../data/film/table/super/securityuserprofilesuper.js';
import Securityuserprofile from '../../../../../../data/film/table/securityuserprofile.js';
import { Securityprofilepk } from '../../../../../../data/film/table/super/securityprofilesuper.js';
import SecurityprofileJson from '../securityprofilejson.js';
import Moment from 'moment';
import SecurityuserprofileJson from '../securityuserprofilejson.js';

class SecurityuserprofileJsonsuper {
	static PKtoJSON = (securityuserprofilePK) => {
		let jsonobj = {
			"siteusername": null,
			"userprofile": securityuserprofilePK.securityprofilePK==null ? null : securityuserprofilePK.securityprofilePK.getUserprofile(),

		};
		if(securityuserprofilePK!=null) {
			jsonobj.siteusername = securityuserprofilePK.siteusername;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (securityuserprofilePK) => {
		return JSON.stringify(this.PKtoJSON(securityuserprofilePK));
	}
	
	static toJSON = (securityuserprofile) => {
		var jsonobj = {
			"PK": this.PKtoJSON(securityuserprofile.PK),
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Securityuserprofilepk => {
		let securityuserprofilePK = new Securityuserprofilepk();
		if(jsonobj!=null) {
			let securityprofileproperties = {
				"userprofile": jsonobj.userprofile,
			}
			let securityprofilePK = SecurityprofileJson.PKfromJSON(securityprofileproperties);
			securityuserprofilePK.securityprofilePK = securityprofilePK;
			securityuserprofilePK.siteusername = jsonobj.siteusername;
		}
		return securityuserprofilePK;
	}
	static fromJSON = (jsonobj): Securityuserprofile => {
		let model = new Securityuserprofile();
		model.PK = this.PKfromJSON(jsonobj.PK);
		return model;
	}
}

export default SecurityuserprofileJsonsuper;
