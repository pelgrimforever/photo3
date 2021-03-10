//Auto generated code
//don't change things here, it will be overwritten
//extend classes in menu.ts for table class definitions
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

export class Menupk {
	mainmenuPK: Mainmenupk = null;
	mainmenu = () => {
		if(this.mainmenuPK===null) return '';
		else return this.mainmenuPK.getMainmenu();
	}
	getMainmenu = () => {
		if(this.mainmenuPK===null) return '';
		else return this.mainmenuPK.getMainmenu();
	}
    menu: string = '';
    getMenu = () => {
        return this.menu;
    }
	init = () => {
		this.mainmenuPK = new Mainmenupk();
		this.menu = "";
	}
}

class Menusuper {
	constructor() { }
	tablename: string = 'menu';
	PK: Menupk = new Menupk();
	mainmenu = () => {
		if(this.PK===null) return '';
		else return this.PK.mainmenu;
	}
	menu = () => {
		if(this.PK===null) return '';
		else return this.PK.menu;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getMainmenu() + " " + this.PK.getMenu();
		}
		return result;
	}
}

export class Menusearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.menu);
        this.addKeysearcher(this.mainmenusearcher);
        this.addKeysearcher(this.menuitemsearcher);
	}

    filtermodel: null;
    menu: Stringsearcher = new Stringsearcher("menu.menu");
    mainmenusearcher: Foreignkeysearcher = new Foreignkeysearcher();
    menuitemsearcher: Primarykeysearcher = new Primarykeysearcher();

    addmenus = (values) => {
    	this.menu.values = this.menu.values.concat(values);
    }
    setmainmenu = (mainmenusearch) => {
        this.mainmenusearcher.setTablesearch(mainmenusearch);
    }
    setmenuitem = (menuitemsearch) => {
        this.menuitemsearcher.setTablesearch(menuitemsearch);
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
                "mainmenusearcher": null,
                "menuitemsearcher": null,
            }; 
            if(this.mainmenusearcher!=null && this.mainmenusearcher.used()) {
                kss.mainmenusearcher = this.mainmenusearcher.toJSON();
            }
            if(this.menuitemsearcher!=null && this.menuitemsearcher.used()) {
                kss.menuitemsearcher = this.menuitemsearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Menusuper;
