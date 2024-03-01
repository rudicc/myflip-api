import { Request, Response } from "express";
	import { connect } from "../dbconfig/mydbcommand";
	import { ORDERS } from "../models/orders.model";
		 
	export async function get_orders_all(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM orders";
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
		 
	export async function get_orders_byid(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM orders where orders_id=" + req.params.id;
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
		 
	export async function port_orders(req: Request<{},any , ORDERS>, res: Response) {	 
	    try {        	 
	        const conn = await connect();     	 
	        const item: ORDERS = req.body;	 
	         	 
                  var sql =  `INSERT INTO orders
                            (
                                 customers_id
                                ,customers_name
                                ,customers_company
                                ,customers_street_address
                                ,customers_suburb
                                ,customers_city
                                ,customers_postcode
                                ,customers_state
                                ,customers_country
                                ,customers_telephone
                                ,customers_email_address
                                ,customers_address_format_id
                                ,delivery_name
                                ,delivery_company
                                ,delivery_street_address
                                ,delivery_suburb
                                ,delivery_city
                                ,delivery_postcode
                                ,delivery_state
                                ,delivery_country
                                ,delivery_address_format_id
                                ,billing_name
                                ,billing_company
                                ,billing_street_address
                                ,billing_suburb
                                ,billing_city
                                ,billing_postcode
                                ,billing_state
                                ,billing_country
                                ,billing_address_format_id
                                ,payment_method
                                ,cc_type
                                ,cc_owner
                                ,cc_number
                                ,cc_expires
                                ,last_modified
                                ,date_purchased
                                ,orders_status
                                ,orders_date_finished
                                ,currency
                                ,currency_value
                            ) VALUES (`;
                          
                                sql +=  item.customers_id
                                sql += ",'" + item.customers_name + "'"
                                sql += ",'" + item.customers_company + "'"
                                sql += ",'" + item.customers_street_address + "'"
                                sql += ",'" + item.customers_suburb + "'"
                                sql += ",'" + item.customers_city + "'"
                                sql += ",'" + item.customers_postcode + "'"
                                sql += ",'" + item.customers_state + "'"
                                sql += ",'" + item.customers_country + "'"
                                sql += ",'" + item.customers_telephone + "'"
                                sql += ",'" + item.customers_email_address + "'"
                                sql += "," + item.customers_address_format_id
                                sql += ",'" + item.delivery_name + "'"
                                sql += ",'" + item.delivery_company + "'"
                                sql += ",'" + item.delivery_street_address + "'"
                                sql += ",'" + item.delivery_suburb + "'"
                                sql += ",'" + item.delivery_city + "'"
                                sql += ",'" + item.delivery_postcode + "'"
                                sql += ",'" + item.delivery_state + "'"
                                sql += ",'" + item.delivery_country + "'"
                                sql += "," + item.delivery_address_format_id
                                sql += ",'" + item.billing_name + "'"
                                sql += ",'" + item.billing_company + "'"
                                sql += ",'" + item.billing_street_address + "'"
                                sql += ",'" + item.billing_suburb + "'"
                                sql += ",'" + item.billing_city + "'"
                                sql += ",'" + item.billing_postcode + "'"
                                sql += ",'" + item.billing_state + "'"
                                sql += ",'" + item.billing_country + "'"
                                sql += "," + item.billing_address_format_id
                                sql += ",'" + item.payment_method + "'"
                                sql += ",'" + item.cc_type + "'"
                                sql += ",'" + item.cc_owner + "'"
                                sql += ",'" + item.cc_number + "'"
                                sql += ",'" + item.cc_expires + "'"
                                sql += ",now()"
                                sql += ",now()"
                                sql += "," + item.orders_status
                                sql += ",now()"
                                sql += ",'" + item.currency + "'"
                                sql += "," + item.currency_value
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
		 
	export async function put_orders(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        const item: ORDERS = req.body; 	 
	        var sql = `UPDATE orders  set 
                                   orders_id = '${item.orders_id}'
                                  ,customers_id = '${item.customers_id}'
                                  ,customers_name = '${item.customers_name}'
                                  ,customers_company = '${item.customers_company}'
                                  ,customers_street_address = '${item.customers_street_address}'
                                  ,customers_suburb = '${item.customers_suburb}'
                                  ,customers_city = '${item.customers_city}'
                                  ,customers_postcode = '${item.customers_postcode}'
                                  ,customers_state = '${item.customers_state}'
                                  ,customers_country = '${item.customers_country}'
                                  ,customers_telephone = '${item.customers_telephone}'
                                  ,customers_email_address = '${item.customers_email_address}'
                                  ,customers_address_format_id = '${item.customers_address_format_id}'
                                  ,delivery_name = '${item.delivery_name}'
                                  ,delivery_company = '${item.delivery_company}'
                                  ,delivery_street_address = '${item.delivery_street_address}'
                                  ,delivery_suburb = '${item.delivery_suburb}'
                                  ,delivery_city = '${item.delivery_city}'
                                  ,delivery_postcode = '${item.delivery_postcode}'
                                  ,delivery_state = '${item.delivery_state}'
                                  ,delivery_country = '${item.delivery_country}'
                                  ,delivery_address_format_id = '${item.delivery_address_format_id}'
                                  ,billing_name = '${item.billing_name}'
                                  ,billing_company = '${item.billing_company}'
                                  ,billing_street_address = '${item.billing_street_address}'
                                  ,billing_suburb = '${item.billing_suburb}'
                                  ,billing_city = '${item.billing_city}'
                                  ,billing_postcode = '${item.billing_postcode}'
                                  ,billing_state = '${item.billing_state}'
                                  ,billing_country = '${item.billing_country}'
                                  ,billing_address_format_id = '${item.billing_address_format_id}'
                                  ,payment_method = '${item.payment_method}'
                                  ,cc_type = '${item.cc_type}'
                                  ,cc_owner = '${item.cc_owner}'
                                  ,cc_number = '${item.cc_number}'
                                  ,cc_expires = '${item.cc_expires}'
                                  ,last_modified = '${item.last_modified}'
                                  ,date_purchased = '${item.date_purchased}'
                                  ,orders_status = '${item.orders_status}'
                                  ,orders_date_finished = '${item.orders_date_finished}'
                                  ,currency = '${item.currency}'
                                  ,currency_value = '${item.currency_value}'
	            WHERE  orders_id = ${item.orders_id}`;

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
		 
	export async function delete_orders(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        var sql = "DELETE FROM orders where orders_id =" + req.params.orders_id;
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