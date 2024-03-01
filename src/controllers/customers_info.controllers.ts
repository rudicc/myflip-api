import { Request, Response } from "express";
	import { connect } from "../dbconfig/mydbcommand";
	import { CUSTOMERS_INFO } from "../models/customers_info.model";
		 
	export async function get_customers_info_all(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM customers_info";
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
		 
	export async function get_customers_info_byid(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM customers_info where customers_info_id=" + req.params.id;
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
		 
	export async function port_customers_info(req: Request<{},any , CUSTOMERS_INFO>, res: Response) {	 
	    try {        	 
	        const conn = await connect();     	 
	        const item: CUSTOMERS_INFO = req.body;	 
	         	 
                  var sql =  `INSERT INTO customers_info
                            (
                                 customers_info_id
                                ,customers_info_date_of_last_logon
                                ,customers_info_number_of_logons
                                ,customers_info_date_account_created
                                ,customers_info_date_account_last_modified
                                ,global_product_notifications
                            ) VALUES (`;
                          
                                sql +=  item.customers_info_id
                                sql += ",now()"
                                sql += "," + item.customers_info_number_of_logons
                                sql += ",now()"
                                sql += ",now()"
                                sql += "," + item.global_product_notifications
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
		 
	export async function put_customers_info(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        const item: CUSTOMERS_INFO = req.body; 	 
	        var sql = `UPDATE customers_info  set 
                                   customers_info_id = '${item.customers_info_id}'
                                  ,customers_info_date_of_last_logon = '${item.customers_info_date_of_last_logon}'
                                  ,customers_info_number_of_logons = '${item.customers_info_number_of_logons}'
                                  ,customers_info_date_account_created = '${item.customers_info_date_account_created}'
                                  ,customers_info_date_account_last_modified = '${item.customers_info_date_account_last_modified}'
                                  ,global_product_notifications = '${item.global_product_notifications}'
	            WHERE  customers_info_id = ${item.customers_info_id}`;

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
		 
	export async function delete_customers_info(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        var sql = "DELETE FROM customers_info where customers_info_id =" + req.params.customers_info_id;
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