//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import { Menupk } from '../../../../../../data/film/table/super/menusuper.js';
import Menu from '../../../../../../data/film/table/menu.js';
import { Mainmenupk } from '../../../../../../data/film/table/super/mainmenusuper.js';
import MainmenuJson from '../mainmenujson.js';
import Moment from 'moment';
import MenuJson from '../menujson.js';

class MenuJsonsuper {
	static PKtoJSON = (menuPK) => {
		let jsonobj = {
			"menu": null,
			"mainmenu": menuPK.mainmenuPK==null ? null : menuPK.mainmenuPK.getMainmenu(),

		};
		if(menuPK!=null) {
			jsonobj.menu = menuPK.menu;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (menuPK) => {
		return JSON.stringify(this.PKtoJSON(menuPK));
	}
	
	static toJSON = (menu) => {
		var jsonobj = {
			"PK": this.PKtoJSON(menu.PK),
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Menupk => {
		let menuPK = new Menupk();
		if(jsonobj!=null) {
			let mainmenuproperties = {
				"mainmenu": jsonobj.mainmenu,
			}
			let mainmenuPK = MainmenuJson.PKfromJSON(mainmenuproperties);
			menuPK.mainmenuPK = mainmenuPK;
			menuPK.menu = jsonobj.menu;
		}
		return menuPK;
	}
	static fromJSON = (jsonobj): Menu => {
		let model = new Menu();
		model.PK = this.PKfromJSON(jsonobj.PK);
		return model;
	}
}

export default MenuJsonsuper;
