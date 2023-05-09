//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 23.8.2022 14:35
    Author     : Franky Laseure
*/

import Rasteroverviews from '../../../../../data/film/view/rasteroverviews.js';
import Moment from 'moment';

class RasteroverviewsJson {
	static toJSON = (rasteroverviews) => {
		var jsonobj = {
			"o_table_catalog": rasteroverviews.o_table_catalog,
			"o_table_schema": rasteroverviews.o_table_schema,
			"o_table_name": rasteroverviews.o_table_name,
			"o_raster_column": rasteroverviews.o_raster_column,
			"r_table_catalog": rasteroverviews.r_table_catalog,
			"r_table_schema": rasteroverviews.r_table_schema,
			"r_table_name": rasteroverviews.r_table_name,
			"r_raster_column": rasteroverviews.r_raster_column,
			"overview_factor": rasteroverviews.overview_factor,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Rasteroverviews => {
		let model = new Rasteroverviews();
		model.o_table_catalog = jsonobj.o_table_catalog;
		model.o_table_schema = jsonobj.o_table_schema;
		model.o_table_name = jsonobj.o_table_name;
		model.o_raster_column = jsonobj.o_raster_column;
		model.r_table_catalog = jsonobj.r_table_catalog;
		model.r_table_schema = jsonobj.r_table_schema;
		model.r_table_name = jsonobj.r_table_name;
		model.r_raster_column = jsonobj.r_raster_column;
		model.overview_factor = jsonobj.overview_factor;
		return model;
	}
}

export default RasteroverviewsJson;
