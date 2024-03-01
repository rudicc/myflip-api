import { Request, Response } from "express";
	import { connect } from "../dbconfig/mydbcommand";
	import { CUSTOMERS_BASKET_ATTRIBUTES } from "../models/customers_basket_attributes.model";
		 
	export async function get_customers_basket_attributes_all(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM customers_basket_attributes";
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
		 
	export async function get_customers_basket_attributes_byid(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM customers_basket_attributes where customers_basket_attributes_id=" + req.params.id;
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
		 
	export async function port_customers_basket_attributes(req: Request<{},any , CUSTOMERS_BASKET_ATTRIBUTES>, res: Response) {	 
	    try {        	 
	        const conn = await connect();     	 
	        const item: CUSTOMERS_BASKET_ATTRIBUTES = req.body;	 
	         	 
                  var sql =  `INSERT INTO customers_basket_attributes
                            (
                                 customers_id
                                ,products_id
                                ,products_options_id
                                ,products_options_value_id
                            ) VALUES (`;
                          
                                sql +=  item.customers_id
                                sql += ",'" + item.products_id + "'"
                                sql += "," + item.products_options_id
                                sql += "," + item.products_options_value_id
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
		 
	export async function put_customers_basket_attributes(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        const item: CUSTOMERS_BASKET_ATTRIBUTES = req.body; 	 
	        var sql = `UPDATE customers_basket_attributes  set 
                                   customers_basket_attributes_id = '${item.customers_basket_attributes_id}'
                                  ,customers_id = '${item.customers_id}'
                                  ,products_id = '${item.products_id}'
                                  ,products_options_id = '${item.products_options_id}'
                                  ,products_options_value_id = '${item.products_options_value_id}'
	            WHERE  customers_basket_attributes_id = ${item.customers_basket_attributes_id}`;

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
		 
	export async function delete_customers_basket_attributes(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        var sql = "DELETE FROM customers_basket_attributes where customers_basket_attributes_id =" + req.params.customers_basket_attributes_id;
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