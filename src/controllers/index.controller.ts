import { Request, Response } from "express";
import { connect } from "../dbconfig/mydbcommand";


export async function Index(req: Request, res: Response) {
    try {
        const conn = await connect();     
        var sql = 'SELECT * FROM products';
        conn.query(sql,(error, data) => {
            if (error) {
                console.log(error);
                res.status(401).render("data", {
                    data: error,                    
                });
            } else { 
                console.log(data) ;                                    
                res.json({data});                
            }
        });
      
    } catch (e) {
        console.log(e);      
    }
}