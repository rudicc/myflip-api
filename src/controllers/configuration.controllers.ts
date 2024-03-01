import { Request, Response } from "express";
	import { connect } from "../dbconfig/mydbcommand";
	import { CONFIGURATION } from "../models/configuration.model";
		 
	export async function get_configuration_all(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM configuration";
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
		 
	export async function get_configuration_byid(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM configuration where configuration_id=" + req.params.id;
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
		 
	export async function port_configuration(req: Request<{},any , CONFIGURATION>, res: Response) {	 
	    try {        	 
	        const conn = await connect();     	 
	        const item: CONFIGURATION = req.body;	 
	         	 
                  var sql =  `INSERT INTO configuration
                            (
                                 configuration_title
                                ,configuration_key
                                ,configuration_value
                                ,configuration_description
                                ,configuration_group_id
                                ,sort_order
                                ,last_modified
                                ,date_added
                                ,use_function
                                ,set_function
                            ) VALUES (`;
                          
                                sql +=  item.configuration_title
                                sql += ",'" + item.configuration_key + "'"
                                sql += ",'" + item.configuration_value + "'"
                                sql += ",'" + item.configuration_description + "'"
                                sql += "," + item.configuration_group_id
                                sql += "," + item.sort_order
                                sql += ",now()"
                                sql += ",now()"
                                sql += ",'" + item.use_function + "'"
                                sql += ",'" + item.set_function + "'"
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
		 
	export async function put_configuration(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        const item: CONFIGURATION = req.body; 	 
	        var sql = `UPDATE configuration  set 
                                   configuration_id = '${item.configuration_id}'
                                  ,configuration_title = '${item.configuration_title}'
                                  ,configuration_key = '${item.configuration_key}'
                                  ,configuration_value = '${item.configuration_value}'
                                  ,configuration_description = '${item.configuration_description}'
                                  ,configuration_group_id = '${item.configuration_group_id}'
                                  ,sort_order = '${item.sort_order}'
                                  ,last_modified = '${item.last_modified}'
                                  ,date_added = '${item.date_added}'
                                  ,use_function = '${item.use_function}'
                                  ,set_function = '${item.set_function}'
	            WHERE  configuration_id = ${item.configuration_id}`;

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
		 
	export async function delete_configuration(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        var sql = "DELETE FROM configuration where configuration_id =" + req.params.configuration_id;
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