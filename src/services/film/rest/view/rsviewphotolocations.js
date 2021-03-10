//ProjectGenerator: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in rsviewphotolocationssuper.js
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 4.1.2021 12:8
    Author     : Franky Laseure
*/

import Rsviewphotolocationssuper from './super/rsviewphotolocationssuper';

class Rsviewphotolocations extends Rsviewphotolocationssuper {
	static SECURESELECT_ALL = 2;

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SECURESELECT_ALL }
    }
    return super.extractDataArray(await super.post(super.restservice, postdata));
  }

}

export default Rsviewphotolocations;
