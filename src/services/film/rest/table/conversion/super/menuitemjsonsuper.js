//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import { Menuitempk } from '../../../../../../data/film/table/super/menuitemsuper.js';
import Menuitem from '../../../../../../data/film/table/menuitem.js';
import { Menupk } from '../../../../../../data/film/table/super/menusuper.js';
import MenuJson from '../menujson.js';
import Moment from 'moment';
import MenuitemJson from '../menuitemjson.js';

class MenuitemJsonsuper {
	static PKtoJSON = (menuitemPK) => {
		let jsonobj = {
			"menuitem": null,
			"mainmenu": menuitemPK.menuPK==null ? null : menuitemPK.menuPK.getMainmenu(),
			"menu": menuitemPK.menuPK==null ? null : menuitemPK.menuPK.getMenu(),

		};
		if(menuitemPK!=null) {
			jsonobj.menuitem = menuitemPK.menuitem;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (menuitemPK) => {
		return JSON.stringify(this.PKtoJSON(menuitemPK));
	}
	
	static toJSON = (menuitem) => {
		var jsonobj = {
			"PK": this.PKtoJSON(menuitem.PK),
			"tabpanel": menuitem.tabpanel,
			"editpanel": menuitem.editpanel,
			"servlet": menuitem.servlet,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Menuitempk => {
		let menuitemPK = new Menuitempk();
		if(jsonobj!=null) {
			let menuproperties = {
				"mainmenu": jsonobj.mainmenu,
				"menu": jsonobj.menu,
			}
			let menuPK = MenuJson.PKfromJSON(menuproperties);
			menuitemPK.menuPK = menuPK;
			menuitemPK.menuitem = jsonobj.menuitem;
		}
		return menuitemPK;
	}
	static fromJSON = (jsonobj): Menuitem => {
		let model = new Menuitem();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.tabpanel = jsonobj.tabpanel;
		model.editpanel = jsonobj.editpanel;
		model.servlet = jsonobj.servlet;
		return model;
	}
}

export default MenuitemJsonsuper;
