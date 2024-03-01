import { Request, Response } from "express";
	import { connect } from "../dbconfig/mydbcommand";
	import { LNGS } from "../models/lngs.model";

    export async function get_lang(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();   
          
	        var sql = " SELECT * FROM  lngs  where lng='" + req.params.id + "'";
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