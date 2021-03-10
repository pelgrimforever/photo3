//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in route.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2021 11:47
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Routepk } from '../../../../../data/film/table/super/routesuper.js';
import Route from '../../../../../data/film/table/route.js';
import RouteJson from '../conversion/routejson.js';
import { Sublocalitypk } from '../../../../../data/film/table/super/sublocalitysuper.js';
import SublocalityJson from '../conversion/sublocalityjson.js';


class Rsroutesuper extends Filmservice {	

	static restservice = 'rsroute';

	//SELECT OPERATIONS
	static SELECT_ROUTE = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Sublocality = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_ROUTE = 10;

	//INSERT OPERATIONS
	static INSERT_ROUTE = 20;

	//DELETE OPERATIONS
	static DELETE_Sublocality = 100 + 1;
	static DELETE_ROUTE = 30;

	static extractDataArray = (jsonarray): Route[] => {
		let routes: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			routes.push(RouteJson.fromJSON(jsonarray[i]));
		}
   	return routes;
	}

	static extractDataObject = (jsonobject): Route => {
    return RouteJson.fromJSON(jsonobject);
	}

	static getcount = async () => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_COUNT }
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

  static getall = async () => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static getOne = async (routepk: Routepk): Route => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_ROUTE },
      "routepk": RouteJson.PKtoJSON(routepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadRoutes4sublocality = async (sublocalitypk: Sublocalitypk): Route[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Sublocality },
     	"sublocalitypk": SublocalityJson.PKtoJSON(sublocalitypk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (routesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": routesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (routesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": routesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (route: Route) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_ROUTE },
     	"route": RouteJson.toJSON(route)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (route: Route) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_ROUTE },
     	"route": RouteJson.toJSON(route)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (route: Route) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_ROUTE },
     	"route": RouteJson.toJSON(route)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION START

	static sec_getcount = async (user) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: super.SELECT_COUNT }
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

  static sec_getall = async (user) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_getOne = async (user, routepk: Routepk): Route => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_ROUTE },
      "routepk": RouteJson.PKtoJSON(routepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadRoutes4sublocality = async (user, sublocalitypk: Routepk): Route[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Sublocality },
     	"sublocalitypk": SublocalityJson.PKtoJSON(sublocalitypk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, routesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": routesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, routesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": routesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, route: Route) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_ROUTE },
     	"route": RouteJson.toJSON(route)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, route: Route) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_ROUTE },
     	"route": RouteJson.toJSON(route)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, route: Route) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_ROUTE },
     	"route": RouteJson.toJSON(route)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsroutesuper;
