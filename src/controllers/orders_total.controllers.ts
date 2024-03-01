import { Request, Response } from "express";
	import { connect } from "../dbconfig/mydbcommand";
	import { ORDERS_TOTAL } from "../models/orders_total.model";
		 
	export async function get_orders_total_all(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM orders_total";
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
		 
	export async function get_orders_total_byid(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM orders_total where orders_total_id=" + req.params.id;
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
		 
	export async function port_orders_total(req: Request<{},any , ORDERS_TOTAL>, res: Response) {	 
	    try {        	 
	        const conn = await connect();     	 
	        const item: ORDERS_TOTAL = req.body;	 
	         	 
                  var sql =  `INSERT INTO orders_total
                            (
                                 orders_id
                                ,title
                                ,text
                                ,value
                                ,class
                                ,sort_order
                            ) VALUES (`;
                          
                                sql +=  item.orders_id
                                sql += ",'" + item.title + "'"
                                sql += ",'" + item.text + "'"
                                sql += "," + item.value
                                sql += ",'" + item.class + "'"
                                sql += "," + item.sort_order
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
		 
	export async function put_orders_total(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        const item: ORDERS_TOTAL = req.body; 	 
	        var sql = `UPDATE orders_total  set 
                                   orders_total_id = '${item.orders_total_id}'
                                  ,orders_id = '${item.orders_id}'
                                  ,title = '${item.title}'
                                  ,text = '${item.text}'
                                  ,value = '${item.value}'
                                  ,class = '${item.class}'
                                  ,sort_order = '${item.sort_order}'
	            WHERE  orders_total_id = ${item.orders_total_id}`;

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
		 
	export async function delete_orders_total(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        var sql = "DELETE FROM orders_total where orders_total_id =" + req.params.orders_total_id;
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