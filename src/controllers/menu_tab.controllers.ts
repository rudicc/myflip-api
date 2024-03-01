import { Request, Response } from "express";
	import { connect } from "../dbconfig/mydbcommand";
	import { MENU_TAB } from "../models/menu_tab.model";
		 
	export async function get_menu_tab_all(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM menu_tab";
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
		 
	export async function get_menu_tab_byid(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM menu_tab where menu_id=" + req.params.id;
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
		 
	export async function port_menu_tab(req: Request<{},any , MENU_TAB>, res: Response) {	 
	    try {        	 
	        const conn = await connect();     	 
	        const item: MENU_TAB = req.body;	 
	         	 
                  var sql =  `INSERT INTO menu_tab
                            (
                                 menu_col_code
                                ,menu_col_name_en
                                ,menu_col_name_th
                                ,menu_group_id
                                ,menu_sort
                                ,menu_active
                                ,menu_auth
                            ) VALUES (`;
                          
                                sql +=  item.menu_col_code
                                sql += ",'" + item.menu_col_name_en + "'"
                                sql += ",'" + item.menu_col_name_th + "'"
                                sql += "," + item.menu_group_id
                                sql += "," + item.menu_sort
                                sql += "," + item.menu_active
                                sql += "," + item.menu_auth
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
		 
	export async function put_menu_tab(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        const item: MENU_TAB = req.body; 	 
	        var sql = `UPDATE menu_tab  set 
                                   menu_id = '${item.menu_id}'
                                  ,menu_col_code = '${item.menu_col_code}'
                                  ,menu_col_name_en = '${item.menu_col_name_en}'
                                  ,menu_col_name_th = '${item.menu_col_name_th}'
                                  ,menu_group_id = '${item.menu_group_id}'
                                  ,menu_sort = '${item.menu_sort}'
                                  ,menu_active = '${item.menu_active}'
                                  ,menu_auth = '${item.menu_auth}'
	            WHERE  menu_id = ${item.menu_id}`;

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
		 
	export async function delete_menu_tab(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        var sql = "DELETE FROM menu_tab where menu_id =" + req.params.menu_id;
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