import { Request, Response } from "express";
	import { connect } from "../dbconfig/mydbcommand";
	import { WHOS_ONLINE } from "../models/whos_online.model";
		 
	export async function get_whos_online_all(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM whos_online";
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
		 
	export async function get_whos_online_byid(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM whos_online where customer_id=" + req.params.id;
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
		 
	export async function port_whos_online(req: Request<{},any , WHOS_ONLINE>, res: Response) {	 
	    try {        	 
	        const conn = await connect();     	 
	        const item: WHOS_ONLINE = req.body;	 
	         	 
                  var sql =  `INSERT INTO whos_online
                            (
                                 customer_id
                                ,full_name
                                ,session_id
                                ,ip_address
                                ,time_entry
                                ,time_last_click
                                ,last_page_url
                            ) VALUES (`;
                          
                                sql +=  item.customer_id
                                sql += ",'" + item.full_name + "'"
                                sql += ",'" + item.session_id + "'"
                                sql += ",'" + item.ip_address + "'"
                                sql += ",'" + item.time_entry + "'"
                                sql += ",'" + item.time_last_click + "'"
                                sql += ",'" + item.last_page_url + "'"
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
		 
	export async function put_whos_online(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        const item: WHOS_ONLINE = req.body; 	 
	        var sql = `UPDATE whos_online  set 
                                   customer_id = '${item.customer_id}'
                                  ,full_name = '${item.full_name}'
                                  ,session_id = '${item.session_id}'
                                  ,ip_address = '${item.ip_address}'
                                  ,time_entry = '${item.time_entry}'
                                  ,time_last_click = '${item.time_last_click}'
                                  ,last_page_url = '${item.last_page_url}'
	            WHERE  customer_id = ${item.customer_id}`;

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
		 
	export async function delete_whos_online(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        var sql = "DELETE FROM whos_online where customer_id =" + req.params.customer_id;
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