//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Geometrycolumns from '../../../../../data/film/view/geometrycolumns.js';
import Moment from 'moment';

class GeometrycolumnsJson {
	static toJSON = (geometrycolumns) => {
		var jsonobj = {
			"f_table_catalog": geometrycolumns.f_table_catalog,
			"f_table_schema": geometrycolumns.f_table_schema,
			"f_table_name": geometrycolumns.f_table_name,
			"f_geometry_column": geometrycolumns.f_geometry_column,
			"coord_dimension": geometrycolumns.coord_dimension,
			"srid": geometrycolumns.srid,
			"type": geometrycolumns.type,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Geometrycolumns => {
		let model = new Geometrycolumns();
		model.f_table_catalog = jsonobj.f_table_catalog;
		model.f_table_schema = jsonobj.f_table_schema;
		model.f_table_name = jsonobj.f_table_name;
		model.f_geometry_column = jsonobj.f_geometry_column;
		model.coord_dimension = jsonobj.coord_dimension;
		model.srid = jsonobj.srid;
		model.type = jsonobj.type;
		return model;
	}
}

export default GeometrycolumnsJson;
