import { Request, Response } from "express";
	import { connect } from "../dbconfig/mydbcommand";
	import { TAX_RATES } from "../models/tax_rates.model";
		 
	export async function get_tax_rates_all(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM tax_rates";
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
		 
	export async function get_tax_rates_byid(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM tax_rates where tax_rates_id=" + req.params.id;
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
		 
	export async function port_tax_rates(req: Request<{},any , TAX_RATES>, res: Response) {	 
	    try {        	 
	        const conn = await connect();     	 
	        const item: TAX_RATES = req.body;	 
	         	 
                  var sql =  `INSERT INTO tax_rates
                            (
                                 tax_zone_id
                                ,tax_class_id
                                ,tax_priority
                                ,tax_rate
                                ,tax_description
                                ,last_modified
                                ,date_added
                            ) VALUES (`;
                          
                                sql +=  item.tax_zone_id
                                sql += "," + item.tax_class_id
                                sql += "," + item.tax_priority
                                sql += "," + item.tax_rate
                                sql += ",'" + item.tax_description + "'"
                                sql += ",now()"
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
		 
	export async function put_tax_rates(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        const item: TAX_RATES = req.body; 	 
	        var sql = `UPDATE tax_rates  set 
                                   tax_rates_id = '${item.tax_rates_id}'
                                  ,tax_zone_id = '${item.tax_zone_id}'
                                  ,tax_class_id = '${item.tax_class_id}'
                                  ,tax_priority = '${item.tax_priority}'
                                  ,tax_rate = '${item.tax_rate}'
                                  ,tax_description = '${item.tax_description}'
                                  ,last_modified = '${item.last_modified}'
                                  ,date_added = '${item.date_added}'
	            WHERE  tax_rates_id = ${item.tax_rates_id}`;

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
		 
	export async function delete_tax_rates(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        var sql = "DELETE FROM tax_rates where tax_rates_id =" + req.params.tax_rates_id;
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