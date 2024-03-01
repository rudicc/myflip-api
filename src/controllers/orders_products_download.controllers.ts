import { Request, Response } from "express";
	import { connect } from "../dbconfig/mydbcommand";
	import { ORDERS_PRODUCTS_DOWNLOAD } from "../models/orders_products_download.model";
		 
	export async function get_orders_products_download_all(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM orders_products_download";
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
		 
	export async function get_orders_products_download_byid(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM orders_products_download where orders_products_download_id=" + req.params.id;
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
		 
	export async function port_orders_products_download(req: Request<{},any , ORDERS_PRODUCTS_DOWNLOAD>, res: Response) {	 
	    try {        	 
	        const conn = await connect();     	 
	        const item: ORDERS_PRODUCTS_DOWNLOAD = req.body;	 
	         	 
                  var sql =  `INSERT INTO orders_products_download
                            (
                                 orders_id
                                ,orders_products_id
                                ,orders_products_filename
                                ,download_maxdays
                                ,download_count
                            ) VALUES (`;
                          
                                sql +=  item.orders_id
                                sql += "," + item.orders_products_id
                                sql += ",'" + item.orders_products_filename + "'"
                                sql += "," + item.download_maxdays
                                sql += "," + item.download_count
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
		 
	export async function put_orders_products_download(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        const item: ORDERS_PRODUCTS_DOWNLOAD = req.body; 	 
	        var sql = `UPDATE orders_products_download  set 
                                   orders_products_download_id = '${item.orders_products_download_id}'
                                  ,orders_id = '${item.orders_id}'
                                  ,orders_products_id = '${item.orders_products_id}'
                                  ,orders_products_filename = '${item.orders_products_filename}'
                                  ,download_maxdays = '${item.download_maxdays}'
                                  ,download_count = '${item.download_count}'
	            WHERE  orders_products_download_id = ${item.orders_products_download_id}`;

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
		 
	export async function delete_orders_products_download(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        var sql = "DELETE FROM orders_products_download where orders_products_download_id =" + req.params.orders_products_download_id;
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