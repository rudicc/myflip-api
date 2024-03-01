import { Request, Response } from "express";
	import { connect } from "../dbconfig/mydbcommand";
	import { PRODUCTS_OPTIONS_VALUES } from "../models/products_options_values.model";
		 
	export async function get_products_options_values_all(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM products_options_values";
	        conn.query(sql,(error, data) => {	 
	            if (error) {	 
	                console.log(error);	 
	                return res.status(401).json({                	 
	                  success: false,                	 
	                  message:  'Error : ' + error.message                	 
	                }) 
	            } else { 	 
	                console.log(data) ;                                    	 
	                var da = JSON.parse(JSON.stringify(data)); res.send(da) ;                 	 
	            }	 
	        });	 
	      	 
	    } catch (e) {	 
	        console.log(e);      	 
	                return res.status(401).json({                	 
	                  success: false,                	 
	                  message:  'Error : ' + e               	 
	                }) 
	    }	 
	}	 
		 
	export async function get_products_options_values_byid(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM products_options_values where products_options_values_id=" + req.params.id;
	        conn.query(sql,(error, data) => {	 
	            if (error) {	 
	                console.log(error);	 
	                return res.status(401).json({                	 
	                  success: false,                	 
	                  message:  'Error : ' + error.message                	 
	                }) 
	            } else { 	 
	                console.log(data) ;                                    	 
	                var da = JSON.parse(JSON.stringify(data)); res.send(da) ;                	 
	            }	 
	        });	 
	      	 
	    } catch (e) {	 
	        console.log(e);      	 
	                return res.status(401).json({                	 
	                  success: false,                	 
	                  message:  'Error : ' + e               	 
	                }) 
	    }	 
	}	 
		 
	export async function port_products_options_values(req: Request<{},any , PRODUCTS_OPTIONS_VALUES>, res: Response) {	 
	    try {        	 
	        const conn = await connect();     	 
	        const item: PRODUCTS_OPTIONS_VALUES = req.body;	 
	         	 
                  var sql =  `INSERT INTO products_options_values
                            (
                                 products_options_values_id
                                ,language_id
                                ,products_options_values_name
                            ) VALUES (`;
                          
                                sql +=  item.products_options_values_id
                                sql += "," + item.language_id
                                sql += ",'" + item.products_options_values_name + "'"
                                sql += ")";
	 	 
	        conn.query(sql,(error, data ,fields) => {	 
	            if (error) {	 
	                console.log(error);	 
	                return res.status(401).json({                	 
	                  success: false,                	 
	                  message:  'Error : ' + error.message                	 
	                })                 	 
	            } else { 	 
	                console.log(data) ;                                    	 
	                res.json({                	 
	                  success: true,                	 
	                  message:  'post Success!',                	 
	                   fileId: data.insertId                	 
	                })                 	 
	            }	 
	        });             	 
	    } catch (e) {	 
	        console.log(e);      	 
	                return res.status(401).json({                	 
	                  success: false,                	 
	                  message:  'Error : ' + e               	 
	                }) 
	    }	 
	}	 
		 
	export async function put_products_options_values(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        const item: PRODUCTS_OPTIONS_VALUES = req.body; 	 
	        var sql = `UPDATE products_options_values  set 
                                   products_options_values_id = '${item.products_options_values_id}'
                                  ,language_id = '${item.language_id}'
                                  ,products_options_values_name = '${item.products_options_values_name}'
	            WHERE  products_options_values_id = ${item.products_options_values_id}`;

	        conn.query(sql,(error, data , fields) => {	 
	            if (error) {	 
	                console.log(error);	 
	                return res.status(401).json({                	 
	                  success: false,                	 
	                  message:  'Error : ' + error.message                	 
	                }) 
	            } else { 	 
	                console.log("Put Ok!"); 
	                res.json({                	 
	                  success: true,                	 
	                  message: 'Put Success!'               	 
	                })                 	 
	            }	 
	        });	 
	      	 
	    } catch (e) {	 
	        console.log(e);      	 
	                return res.status(401).json({                	 
	                  success: false,                	 
	                  message:  'Error : ' + e               	 
	                }) 
	    }	 
	}	 
		 
	export async function delete_products_options_values(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        var sql = "DELETE FROM products_options_values where products_options_values_id =" + req.params.products_options_values_id;
	        conn.query(sql,(error, data , fields) => {	 
	            if (error) {	 
	                console.log(error);	 
	                return res.status(401).json({                	 
	                  success: false,                	 
	                  message:  'Error : ' + error.message                	 
	                }) 
	            } else { 	 
	                console.log("Del Ok!") ;                                    	 
	                res.json({                	 
	                  success: true,                	 
	                  message: 'Del Success!'               	 
	                })                 	 
	            }	 
	        });	 
	      	 
	    } catch (e) {	 
	        console.log(e);      	 
	                return res.status(401).json({                	 
	                  success: false,                	 
	                  message:  'Error : ' + e               	 
	                }) 
	    }	 
	}