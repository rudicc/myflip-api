import { Request, Response } from "express";
	import { connect } from "../dbconfig/mydbcommand";
	//import { A } from "../models/a.model";
		 
	export async function get_menu_all(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM menu_tab";
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