import { Request, Response } from "express";
	import { connect } from "../dbconfig/mydbcommand";
	import { BANNERS } from "../models/banners.model";
		 
	export async function get_banners_all(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM banners";
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
		 
	export async function get_banners_byid(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM banners where banners_id=" + req.params.id;
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
		 
	export async function port_banners(req: Request<{},any , BANNERS>, res: Response) {	 
	    try {        	 
	        const conn = await connect();     	 
	        const item: BANNERS = req.body;	 
	         	 
                  var sql =  `INSERT INTO banners
                            (
                                 banners_title
                                ,banners_url
                                ,banners_image
                                ,banners_group
                                ,banners_html_text
                                ,expires_impressions
                                ,expires_date
                                ,date_scheduled
                                ,date_added
                                ,date_status_change
                                ,status
                            ) VALUES (`;
                          
                                sql +=  item.banners_title
                                sql += ",'" + item.banners_url + "'"
                                sql += ",'" + item.banners_image + "'"
                                sql += ",'" + item.banners_group + "'"
                                sql += ",'" + item.banners_html_text + "'"
                                sql += "," + item.expires_impressions
                                sql += ",now()"
                                sql += ",now()"
                                sql += ",now()"
                                sql += ",now()"
                                sql += "," + item.status
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
		 
	export async function put_banners(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        const item: BANNERS = req.body; 	 
	        var sql = `UPDATE banners  set 
                                   banners_id = '${item.banners_id}'
                                  ,banners_title = '${item.banners_title}'
                                  ,banners_url = '${item.banners_url}'
                                  ,banners_image = '${item.banners_image}'
                                  ,banners_group = '${item.banners_group}'
                                  ,banners_html_text = '${item.banners_html_text}'
                                  ,expires_impressions = '${item.expires_impressions}'
                                  ,expires_date = '${item.expires_date}'
                                  ,date_scheduled = '${item.date_scheduled}'
                                  ,date_added = '${item.date_added}'
                                  ,date_status_change = '${item.date_status_change}'
                                  ,status = '${item.status}'
	            WHERE  banners_id = ${item.banners_id}`;

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
		 
	export async function delete_banners(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        var sql = "DELETE FROM banners where banners_id =" + req.params.banners_id;
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