//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 1.5.2022 20:24
    Author     : Franky Laseure
*/

import Rastercolumns from '../../../../../data/film/view/rastercolumns.js';
import Moment from 'moment';

class RastercolumnsJson {
	static toJSON = (rastercolumns) => {
		var jsonobj = {
			"r_table_catalog": rastercolumns.r_table_catalog,
			"r_table_schema": rastercolumns.r_table_schema,
			"r_table_name": rastercolumns.r_table_name,
			"r_raster_column": rastercolumns.r_raster_column,
			"srid": rastercolumns.srid,
			"scale_x": "" + rastercolumns.scale_x,
			"scale_y": "" + rastercolumns.scale_y,
			"blocksize_x": rastercolumns.blocksize_x,
			"blocksize_y": rastercolumns.blocksize_y,
			"same_alignment": rastercolumns.same_alignment,
			"regular_blocking": rastercolumns.regular_blocking,
			"num_bands": rastercolumns.num_bands,
			"pixel_types": rastercolumns.pixel_types,
			"nodata_values": rastercolumns.nodata_values,
			"out_db": rastercolumns.out_db,
			"extent": rastercolumns.extent,
			"spatial_index": rastercolumns.spatial_index,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Rastercolumns => {
		let model = new Rastercolumns();
		model.r_table_catalog = jsonobj.r_table_catalog;
		model.r_table_schema = jsonobj.r_table_schema;
		model.r_table_name = jsonobj.r_table_name;
		model.r_raster_column = jsonobj.r_raster_column;
		model.srid = jsonobj.srid;
		model.scale_x = parseFloat(jsonobj.scale_x);
		model.scale_y = parseFloat(jsonobj.scale_y);
		model.blocksize_x = jsonobj.blocksize_x;
		model.blocksize_y = jsonobj.blocksize_y;
		model.same_alignment = jsonobj.same_alignment;
		model.regular_blocking = jsonobj.regular_blocking;
		model.num_bands = jsonobj.num_bands;
		model.pixel_types = jsonobj.pixel_types;
		model.nodata_values = jsonobj.nodata_values;
		model.out_db = jsonobj.out_db;
		model.extent = jsonobj.extent;
		model.spatial_index = jsonobj.spatial_index;
		return model;
	}
}

export default RastercolumnsJson;
