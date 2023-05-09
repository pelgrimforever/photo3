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

export class Mainmenupk {
    mainmenu: string = '';
    getMainmenu = () => {
        return this.mainmenu;
    }
	init = () => {
		this.mainmenu = "";
	}
}

class Mainmenusuper {
	constructor() { }
	tablename: string = 'mainmenu';
	PK: Mainmenupk = new Mainmenupk();
	mainmenu = () => {
		if(this.PK===null) return '';
		else return this.PK.mainmenu;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getMainmenu();
		}
		return result;
	}
	popuplabel = '';
	icon = '';
}

export class Mainmenusearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.mainmenu);
		this.addFieldsearcher(this.popuplabel);
		this.addFieldsearcher(this.icon);
        this.addKeysearcher(this.menusearcher);
	}

    filtermodel: null;
    mainmenu: Stringsearcher = new Stringsearcher("mainmenu.mainmenu");
    popuplabel: Stringsearcher = new Stringsearcher("mainmenu.popuplabel");
    icon: Stringsearcher = new Stringsearcher("mainmenu.icon");
    menusearcher: Primarykeysearcher = new Primarykeysearcher();

    addmainmenus = (values) => {
    	this.mainmenu.values = this.mainmenu.values.concat(values);
    }
    addpopuplabels = (values) => {
    	this.popuplabel.values = this.popuplabel.values.concat(values);
    }
    addicons = (values) => {
    	this.icon.values = this.icon.values.concat(values);
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

export default Mainmenusuper;
