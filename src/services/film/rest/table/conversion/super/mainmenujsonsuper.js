//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import { Mainmenupk } from '../../../../../../data/film/table/super/mainmenusuper.js';
import Mainmenu from '../../../../../../data/film/table/mainmenu.js';
import Moment from 'moment';
import MainmenuJson from '../mainmenujson.js';

class MainmenuJsonsuper {
	static PKtoJSON = (mainmenuPK) => {
		let jsonobj = {
			"mainmenu": null,
		};
		if(mainmenuPK!=null) {
			jsonobj.mainmenu = mainmenuPK.mainmenu;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (mainmenuPK) => {
		return JSON.stringify(this.PKtoJSON(mainmenuPK));
	}
	
	static toJSON = (mainmenu) => {
		var jsonobj = {
			"PK": this.PKtoJSON(mainmenu.PK),
			"popuplabel": mainmenu.popuplabel,
			"icon": mainmenu.icon,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Mainmenupk => {
		let mainmenuPK = new Mainmenupk();
		if(jsonobj!=null) {
			mainmenuPK.mainmenu = jsonobj.mainmenu;
		}
		return mainmenuPK;
	}
	static fromJSON = (jsonobj): Mainmenu => {
		let model = new Mainmenu();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.popuplabel = jsonobj.popuplabel;
		model.icon = jsonobj.icon;
		return model;
	}
}

export default MainmenuJsonsuper;
