import { Request, Response } from "express";
import { connect } from "../dbconfig/mydbcommand";
import fileUpload from 'express-fileupload'
import path, { join } from 'path'
import { promises as fs } from 'fs'
 
export async function uploadFile(req: Request, res: Response) {	 
 
    try {	 
        const conn = await connect();   

        let files = req.files;
                            
        // var sql = " SELECT * FROM tax_rates";
        // conn.query(sql,(error, data) => {	 
        //     if (error) {	 
        //         console.log(error);	 
        //         res.status(401).render('data', {	 
        //             data: error,                    	 
        //         });	 
        //     } else { 	 
        //         console.log(data) ;                                    	 
        //         var da = JSON.parse(JSON.stringify(data)); res.send(da) ;                 	 
        //     }	 
        // });	 
        return res.json({ status: 'success', message:  '' }) 
    } catch (e) {	 
        console.log(e);      	 
    }	
    
}	