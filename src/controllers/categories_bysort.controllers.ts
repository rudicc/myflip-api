import { Request, Response } from "express";
import { connect } from "../dbconfig/mydbcommand";

    export async function get_categories_sort_order(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM categories where parent_id=0 and sort_order>0 order by sort_order";
	        conn.query(sql,(error, data) => {	 
	            if (error) {	 
	                console.log(error);	 
	                res.status(401).render('data', {	 
	                    data: error,                    	 
	                });	 
	            } else { 	 
	                console.log(data) ; 						                                    	 
	                var da = JSON.parse(JSON.stringify(data)); res.send(da)              	 
	            }	 
	        });	 
	      	 
	    } catch (e) {	 
	        console.log(e);      	 
	    }	 
	}


	export async function get_categories_topbook(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = "SELECT a.*,b.* FROM categories_parent as a inner join categories as b on(a.parent_id=b.parent_id) where a.parent_id = " + req.params.id;
	        conn.query(sql,(error, data) => {	 
	            if (error) {	 
	                console.log(error);	 
	                res.status(401).render('data', {	 
	                    data: error,                    	 
	                });	 
	            } else { 	 
	                console.log(data) ; 						                                    	 
	                var da = JSON.parse(JSON.stringify(data)); res.send(da)              	 
	            }	 
	        });	 
	      	 
	    } catch (e) {	 
	        console.log(e);      	 
	    }	 
	}
