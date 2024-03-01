import { Request, Response } from "express";
	import { connect } from "../dbconfig/mydbcommand";
	import { CATEGORIES } from "../models/categories.model";
		 
	export async function get_categories_all(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM categories";
	        conn.query(sql,(error, data) => {	 
	            if (error) {	 
	                console.log(error);	 
	                res.status(401).render('data', {	 
	                    data: error,                    	 
	                });	 
	            } else { 	 
	                console.log(data) ;                                    	 
	                var da = JSON.parse(JSON.stringify(data)); res.send(da) ;                 	 
	            }	 
	        });	 
	      	 
	    } catch (e) {	 
	        console.log(e);      	 
	    }	 
	}	 
		 
	export async function get_categories_byid(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM categories where categories_id=" + req.params.id;
	        conn.query(sql,(error, data) => {	 
	            if (error) {	 
	                console.log(error);	 
	                res.status(401).render('data', {	 
	                    data: error,                    	 
	                });	 
	            } else { 	 
	                console.log(data) ;                                    	 
	                var da = JSON.parse(JSON.stringify(data)); res.send(da) ;                	 
	            }	 
	        });	 
	      	 
	    } catch (e) {	 
	        console.log(e);      	 
	    }	 
	}	 
		 
	export async function port_categories(req: Request<{},any , CATEGORIES>, res: Response) {	 
	    try {        	 
	        const conn = await connect();     	 
	        const item: CATEGORIES = req.body;	 
	         	 
                  var sql =  `INSERT INTO categories
                            (
                                 categories_image
                                ,parent_id
                                ,sort_order
                                ,date_added
                                ,last_modified
                                ,categories_detail
                            ) VALUES ?`;
                  var sqlv =  [[
                                 item.categories_image
                                ,item.parent_id
                                ,item.sort_order
                                ,item.date_added
                                ,item.last_modified
                                ,item.categories_detail
                            ]];
	 	 
	        conn.query(sql,[sqlv],(error, data ,fields) => {	 
	            if (error) {	 
	                console.log(error);	 
	                res.status(401).render('data', {	 
	                    data: error,                    	 
	                });	 
	            } else { 	 
	                console.log(data) ;                                    	 
	                res.send('Save Ok!') ;                	 
	            }	 
	        });             	 
	    } catch (e) {	 
	        console.log(e);      	 
	    }	 
	}	 
		 
	export async function put_categories(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        const item: CATEGORIES = req.body; 	 
	        var sql = `UPDATE a  set 
                                   categories_id = '${item.categories_id}'
                                  ,categories_image = '${item.categories_image}'
                                  ,parent_id = '${item.parent_id}'
                                  ,sort_order = '${item.sort_order}'
                                  ,date_added = '${item.date_added}'
                                  ,last_modified = '${item.last_modified}'
                                  ,categories_detail = '${item.categories_detail}'
	            WHERE  id = ${item.categories_id}`;

	        conn.query(sql,(error, data , fields) => {	 
	            if (error) {	 
	                console.log(error);	 
	                res.status(401).render("data", {	 
	                    data: error,                    	 
	                });	 
	            } else { 	 
	                console.log("Put Ok!"); 
	                res.send("Put Ok!"); 
	            }	 
	        });	 
	      	 
	    } catch (e) {	 
	        console.log(e);      	 
	    }	 
	}	 
		 
	export async function delete_categories(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        var sql = "DELETE FROM categories where categories_id =" + req.params.categories_id;
	        conn.query(sql,(error, data , fields) => {	 
	            if (error) {	 
	                console.log(error);	 
	                res.status(401).render("data", {	 
	                    data: error,                    	 
	                });	 
	            } else { 	 
	                console.log("Del Ok!") ;                                    	 
	                res.send("Del Ok!");                	 
	            }	 
	        });	 
	      	 
	    } catch (e) {	 
	        console.log(e);      	 
	    }	 
	}

	//SELECT * FROM `categories_selection`;
	export async function get_categories_selection(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM categories_selection";
	        conn.query(sql,(error, data) => {	 
	            if (error) {	 
	                console.log(error);	 
	                res.status(401).render('data', {	 
	                    data: error,                    	 
	                });	 
	            } else { 	 
	                console.log(data) ;                                    	 
	                var da = JSON.parse(JSON.stringify(data)); res.send(da) ;                 	 
	            }	 
	        });	 
	      	 
	    } catch (e) {	 
	        console.log(e);      	 
	    }	 
	}	