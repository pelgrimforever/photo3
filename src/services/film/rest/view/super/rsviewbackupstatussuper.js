//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Filmservice from '../../../../filmservice.js';
import Viewbackupstatus from '../../../../../data/film/view/viewbackupstatus.js';
import ViewbackupstatusJson from '../conversion/viewbackupstatusjson.js';

class Rsviewbackupstatussuper extends Filmservice {

	static restserviceselect = 'rsview_backupstatus_select';
	static restservice = 'rsview_backupstatus';

	static extractDataArray = (jsonarray): Viewbackupstatus[] => {
		let viewbackupstatuss: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewbackupstatuss.push(ViewbackupstatusJson.fromJSON(jsonarray[i]));
		}
   	return viewbackupstatuss;
	}

	static extractDataObject = (jsonobject): Viewbackupstatus => {
    return ViewbackupstatusJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewbackupstatussuper;
