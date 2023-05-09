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
import {Menupk} from './menusuper.js';

export class Menuitempk {
	menuPK: Menupk = null;
	mainmenu = () => {
		if(this.menuPK===null) return '';
		else return this.menuPK.getMainmenu();
	}
	getMainmenu = () => {
		if(this.menuPK===null) return '';
		else return this.menuPK.getMainmenu();
	}
	menu = () => {
		if(this.menuPK===null) return '';
		else return this.menuPK.getMenu();
	}
	getMenu = () => {
		if(this.menuPK===null) return '';
		else return this.menuPK.getMenu();
	}
    menuitem: string = '';
    getMenuitem = () => {
        return this.menuitem;
    }
	init = () => {
		this.menuPK = new Menupk();
		this.menuitem = "";
	}
}

class Menuitemsuper {
	constructor() { }
	tablename: string = 'menuitem';
	PK: Menuitempk = new Menuitempk();
	mainmenu = () => {
		if(this.PK===null) return '';
		else return this.PK.mainmenu;
	}
	menu = () => {
		if(this.PK===null) return '';
		else return this.PK.menu;
	}
	menuitem = () => {
		if(this.PK===null) return '';
		else return this.PK.menuitem;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getMainmenu() + " " + this.PK.getMenu() + " " + this.PK.getMenuitem();
		}
		return result;
	}
	tabpanel = '';
	editpanel = '';
	servlet = '';
}

export class Menuitemsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.menuitem);
		this.addFieldsearcher(this.tabpanel);
		this.addFieldsearcher(this.editpanel);
		this.addFieldsearcher(this.servlet);
        this.addKeysearcher(this.menusearcher);
	}

    filtermodel: null;
    menuitem: Stringsearcher = new Stringsearcher("menuitem.menuitem");
    tabpanel: Stringsearcher = new Stringsearcher("menuitem.tabpanel");
    editpanel: Stringsearcher = new Stringsearcher("menuitem.editpanel");
    servlet: Stringsearcher = new Stringsearcher("menuitem.servlet");
    menusearcher: Foreignkeysearcher = new Foreignkeysearcher();

    addmenuitems = (values) => {
    	this.menuitem.values = this.menuitem.values.concat(values);
    }
    addtabpanels = (values) => {
    	this.tabpanel.values = this.tabpanel.values.concat(values);
    }
    addeditpanels = (values) => {
    	this.editpanel.values = this.editpanel.values.concat(values);
    }
    addservlets = (values) => {
    	this.servlet.values = this.servlet.values.concat(values);
    }
    setmenu = (menusearch) => {
        this.menusearcher.setTablesearch(menusearch);
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
                "menusearcher": null,
            }; 
            if(this.menusearcher!=null && this.menusearcher.used()) {
                kss.menusearcher = this.menusearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Menuitemsuper;
