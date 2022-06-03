//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import { Routepk } from '../../../../../data/film/table/super/routesuper.js';
import Route from '../../../../../data/film/table/route.js';
import RouteJson from '../conversion/routejson.js';
import { Sublocalitypk } from '../../../../../data/film/table/super/sublocalitysuper.js';
import SublocalityJson from '../conversion/sublocalityjson.js';


class Rsroutesuper extends Filmservice {	

  static restserviceselect = 'rsroute_select';
  static restserviceinsert = 'rsroute_insert';
  static restserviceupdate = 'rsroute_update';
  static restservicedelete = 'rsroute_delete';

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

  static getcount = async (user) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: super.SELECT_COUNT
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static getall = async (user) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static getOne = async (user, routepk: Routepk): Route => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_ROUTE,
      "routepk": RouteJson.PKtoJSON(routepk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadRoutes4sublocality = async (user, sublocalitypk: Routepk): Route[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Sublocality,
      "sublocalitypk": SublocalityJson.PKtoJSON(sublocalitypk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, routesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": routesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, routesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": routesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, route: Route) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_ROUTE,
      "route": RouteJson.toJSON(route)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, route: Route) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_ROUTE,
      "route": RouteJson.toJSON(route)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, route: Route) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_ROUTE,
      "route": RouteJson.toJSON(route)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsroutesuper;
