//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in rstree7subjectsuper.js
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 4.1.2021 12:8
    Author     : Franky Laseure
*/

import Rstree7subjectsuper from './super/rstree7subjectsuper.js';
import Tree7subjectJson from './conversion/tree7subjectjson.js';
import PhotoJson from './conversion/photojson.js';

class Rstree7subject extends Rstree7subjectsuper {
  static SELECT_STEP1 = 5;
  static SELECT_CHILDREN4PARENT = 6;
  static SELECT_SEARCHTEXT = 7;
	static SELECT_PHOTOPK = 8;

  static getStep1 = async (): Tree7subject[] => {
    const postdata = {
      operation: this.SELECT_STEP1
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static getChildren = async (tree7subjectpk): Tree7subject[] => {
    const postdata = {
      operation: this.SELECT_CHILDREN4PARENT,
      "tree7subjectpk": Tree7subjectJson.PKtoJSON(tree7subjectpk)
    }
    return this.extractArrayWithParents(await super.post(this.restserviceselect, postdata));
  }

  static getSearchtext = async (searchtext): Tree7subject[] => {
    const postdata = {
      operation: this.SELECT_SEARCHTEXT,
      "searchtext": searchtext
    }
    return this.extractArrayWithParents(await super.post(this.restserviceselect, postdata));
  }

  static extractArrayWithParents(jsonarray) {
    let tree7subjects: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      const jsonobject = jsonarray[i];
      const tree7subject = Tree7subjectJson.fromJSON(jsonobject);
      if(jsonobject.parents!=null) {
        for(var p = 0; p < jsonobject.parents.length; p++) {
          const parent = jsonobject.parents[p];
          tree7subject.parents.push(Tree7subjectJson.fromJSON(parent));
        }
      }
      tree7subjects.push(tree7subject);
    }
    return tree7subjects;
  }

  static loadTree7subject4photo = async (photopk: Photopk): Tree7subject[] => {
    const postdata = {
      operation: this.SELECT_PHOTOPK,
      "photopk": PhotoJson.PKtoJSON(photopk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rstree7subject;

