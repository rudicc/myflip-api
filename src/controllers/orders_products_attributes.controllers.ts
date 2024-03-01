import { Request, Response } from "express";
	import { connect } from "../dbconfig/mydbcommand";
	import { ORDERS_PRODUCTS_ATTRIBUTES } from "../models/orders_products_attributes.model";
		 
	export async function get_orders_products_attributes_all(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM orders_products_attributes";
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
		 
	export async function get_orders_products_attributes_byid(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM orders_products_attributes where orders_products_attributes_id=" + req.params.id;
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
		 
	export async function port_orders_products_attributes(req: Request<{},any , ORDERS_PRODUCTS_ATTRIBUTES>, res: Response) {	 
	    try {        	 
	        const conn = await connect();     	 
	        const item: ORDERS_PRODUCTS_ATTRIBUTES = req.body;	 
	         	 
                  var sql =  `INSERT INTO orders_products_attributes
                            (
                                 orders_id
                                ,orders_products_id
                                ,products_options
                                ,products_options_values
                                ,options_values_price
                                ,price_prefix
                            ) VALUES (`;
                          
                                sql +=  item.orders_id
                                sql += "," + item.orders_products_id
                                sql += ",'" + item.products_options + "'"
                                sql += ",'" + item.products_options_values + "'"
                                sql += "," + item.options_values_price
                                sql += ",'" + item.price_prefix + "'"
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
		 
	export async function put_orders_products_attributes(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        const item: ORDERS_PRODUCTS_ATTRIBUTES = req.body; 	 
	        var sql = `UPDATE orders_products_attributes  set 
                                   orders_products_attributes_id = '${item.orders_products_attributes_id}'
                                  ,orders_id = '${item.orders_id}'
                                  ,orders_products_id = '${item.orders_products_id}'
                                  ,products_options = '${item.products_options}'
                                  ,products_options_values = '${item.products_options_values}'
                                  ,options_values_price = '${item.options_values_price}'
                                  ,price_prefix = '${item.price_prefix}'
	            WHERE  orders_products_attributes_id = ${item.orders_products_attributes_id}`;

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
		 
	export async function delete_orders_products_attributes(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        var sql = "DELETE FROM orders_products_attributes where orders_products_attributes_id =" + req.params.orders_products_attributes_id;
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