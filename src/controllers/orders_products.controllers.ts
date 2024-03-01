import { Request, Response } from "express";
	import { connect } from "../dbconfig/mydbcommand";
	import { ORDERS_PRODUCTS } from "../models/orders_products.model";
		 
	export async function get_orders_products_all(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM orders_products";
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
	interface ORDERS_PRODUCTS_CUSTOMERS {
		orders_id:number;
		customers_id:number;
	}
	export async function get_orders_products_byordersid_cutomerid(req: Request<{},any,ORDERS_PRODUCTS_CUSTOMERS>, res: Response) {	 
	    try {	 
	        const conn = await connect();     
			const item: ORDERS_PRODUCTS_CUSTOMERS = req.body;	 
	        var sql = ""; 
	            sql += "SELECT a.*,b.*  FROM orders_basket as a inner join orders_products as b on(a.orders_id=b.orders_id)";
				sql += " where a.orders_id="+ item.orders_id +" and customers_id=" + item.customers_id
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
		
	
	export async function get_orders_products_byid(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM orders_products where orders_products_id=" + req.params.id;
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
		 
	export async function port_orders_products(req: Request<{},any , ORDERS_PRODUCTS>, res: Response) {	 
	    try {        	 
	        const conn = await connect();     	 
	        const item: ORDERS_PRODUCTS = req.body;	 
	         	 
                  var sql =  `INSERT INTO orders_products
                            (
                                 orders_id
                                ,products_id
                                ,products_model
                                ,products_name
                                ,products_price
                                ,final_price
                                ,products_tax
                                ,products_quantity
                            ) VALUES (`;
                          
                                sql +=  item.orders_id
                                sql += "," + item.products_id
                                sql += ",'" + item.products_model + "'"
                                sql += ",'" + item.products_name + "'"
                                sql += "," + item.products_price
                                sql += "," + item.final_price
                                sql += "," + item.products_tax
                                sql += "," + item.products_quantity
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
		 
	export async function put_orders_products(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        const item: ORDERS_PRODUCTS = req.body; 	 
	        var sql = `UPDATE orders_products  set 
                                   orders_products_id = '${item.orders_products_id}'
                                  ,orders_id = '${item.orders_id}'
                                  ,products_id = '${item.products_id}'
                                  ,products_model = '${item.products_model}'
                                  ,products_name = '${item.products_name}'
                                  ,products_price = '${item.products_price}'
                                  ,final_price = '${item.final_price}'
                                  ,products_tax = '${item.products_tax}'
                                  ,products_quantity = '${item.products_quantity}'
	            WHERE  orders_products_id = ${item.orders_products_id}`;

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
		 
	export async function delete_orders_products(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        var sql = "DELETE FROM orders_products where orders_products_id =" + req.params.orders_products_id;
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