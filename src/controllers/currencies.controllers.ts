import { Request, Response } from "express";
	import { connect } from "../dbconfig/mydbcommand";
	import { CURRENCIES } from "../models/currencies.model";
		 
	export async function get_currencies_all(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM currencies";
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
		 
	export async function get_currencies_byid(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM currencies where currencies_id=" + req.params.id;
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
		 
	export async function port_currencies(req: Request<{},any , CURRENCIES>, res: Response) {	 
	    try {        	 
	        const conn = await connect();     	 
	        const item: CURRENCIES = req.body;	 
	         	 
                  var sql =  `INSERT INTO currencies
                            (
                                 title
                                ,code
                                ,symbol_left
                                ,symbol_right
                                ,decimal_point
                                ,thousands_point
                                ,decimal_places
                                ,value
                                ,last_updated
                            ) VALUES (`;
                          
                                sql +=  item.title
                                sql += ",'" + item.code + "'"
                                sql += ",'" + item.symbol_left + "'"
                                sql += ",'" + item.symbol_right + "'"
                                sql += ",'" + item.decimal_point + "'"
                                sql += ",'" + item.thousands_point + "'"
                                sql += ",'" + item.decimal_places + "'"
                                sql += ",'" + item.value + "'"
                                sql += ",now()"
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
		 
	export async function put_currencies(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        const item: CURRENCIES = req.body; 	 
	        var sql = `UPDATE currencies  set 
                                   currencies_id = '${item.currencies_id}'
                                  ,title = '${item.title}'
                                  ,code = '${item.code}'
                                  ,symbol_left = '${item.symbol_left}'
                                  ,symbol_right = '${item.symbol_right}'
                                  ,decimal_point = '${item.decimal_point}'
                                  ,thousands_point = '${item.thousands_point}'
                                  ,decimal_places = '${item.decimal_places}'
                                  ,value = '${item.value}'
                                  ,last_updated = '${item.last_updated}'
	            WHERE  currencies_id = ${item.currencies_id}`;

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
		 
	export async function delete_currencies(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        var sql = "DELETE FROM currencies where currencies_id =" + req.params.currencies_id;
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