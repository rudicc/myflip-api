import { Request, Response } from "express";
	import { connect } from "../dbconfig/mydbcommand";
	import { ORDERS_BASKET} from "../models/orders.model";
		 
	export async function get_orders_basket_all(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM orders_basket";
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
		 
	export async function get_orders_basket_byid(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM orders_basket where orders_id=" + req.params.id;
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
	export async function get_orders_bassket_byordersid_cutomerid(req: Request<{},any,ORDERS_PRODUCTS_CUSTOMERS>, res: Response) {	 
	    try {	 
	        const conn = await connect();     
			const item: ORDERS_PRODUCTS_CUSTOMERS = req.body;	 
	        var sql = ""; 
	            sql += "SELECT a.*,b.*  FROM orders_basket as a inner join orders_products as b on(a.orders_id=b.orders_id)";
				
                if(item.orders_id >0 && item.customers_id >0){
                    sql += " where a.orders_id="+ item.orders_id +" and customers_id=" + item.customers_id
                } else  if(item.orders_id ==0 && item.customers_id > 0){
                    sql += " where a.customers_id=" + item.customers_id
                } else if(item.orders_id >0 && item.customers_id == 0){
                    sql += " where a.orders_id="+ item.orders_id    
                }else 
                {  sql += " where a.customers_id="+ item.customers_id  }
                                                 			            
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

	export async function port_orders_basket(req: Request<{},any , ORDERS_BASKET>, res: Response) {	 
	    try {        	 
	        const conn = await connect();     	 
	        const item: ORDERS_BASKET = req.body;	 
	         	 
                  var sql =  `INSERT INTO orders_basket
                            (
                                 
                                 customers_id
                                ,customers_name
                                ,customers_email_address
                                ,billing_img_receipt
                                ,orders_status
                                ,orders_date_added
                                ,orders_date_finished
                                ,last_modified
                                ,date_purchased
                                ,update_user
                            ) VALUES (`;
                          
                                sql +=  item.customers_id
                                sql += ",'" + item.customers_name + "'"
                                sql += ",'" + item.customers_email_address + "'"
                                sql += ",'" + item.billing_img_receipt + "'"
                                sql += ","  + item.orders_status 
                                sql += ",now()"
                                sql += ",'" + item.orders_date_finished + "'"
                                sql += ",now()"  //+ item.last_modified + "'"
                                sql += ",now()"  //+ item.date_purchased + "'"
                                sql += ",'" + item.update_user + "'"                               
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

    interface UPDATE_RECEIPTS {
        orders_id:number;
        customers_id:number;
        billing_img_receipt: string;
        update_user:string;
    }
	export async function put_orders_basket_billing_img_receipt(req: Request<{},any , UPDATE_RECEIPTS>, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        const item: UPDATE_RECEIPTS = req.body; 	 
	        var sql = `UPDATE orders_basket  set 
                                      billing_img_receipt = '${item.billing_img_receipt}'
                                    , update_user   = '${item.update_user}'
                                    , last_modified = now()
	            WHERE  orders_id = ${item.orders_id} and customers_id = ${item.customers_id}`;

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
		 
	export async function delete_orders_basket(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        var sql = "DELETE FROM orders_basket where orders_id =" + req.params.orders_id;
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