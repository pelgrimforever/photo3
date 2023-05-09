//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Geographycolumns from '../../../../../data/film/view/geographycolumns.js';
import Moment from 'moment';

class GeographycolumnsJson {
	static toJSON = (geographycolumns) => {
		var jsonobj = {
			"f_table_catalog": geographycolumns.f_table_catalog,
			"f_table_schema": geographycolumns.f_table_schema,
			"f_table_name": geographycolumns.f_table_name,
			"f_geography_column": geographycolumns.f_geography_column,
			"coord_dimension": geographycolumns.coord_dimension,
			"srid": geographycolumns.srid,
			"type": geographycolumns.type,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Geographycolumns => {
		let model = new Geographycolumns();
		model.f_table_catalog = jsonobj.f_table_catalog;
		model.f_table_schema = jsonobj.f_table_schema;
		model.f_table_name = jsonobj.f_table_name;
		model.f_geography_column = jsonobj.f_geography_column;
		model.coord_dimension = jsonobj.coord_dimension;
		model.srid = jsonobj.srid;
		model.type = jsonobj.type;
		return model;
	}
}

export default GeographycolumnsJson;
