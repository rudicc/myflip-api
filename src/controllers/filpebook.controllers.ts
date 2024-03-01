import { Request, Response } from "express";
	import { connect } from "../dbconfig/mydbcommand";
	import { PRODUCTS } from "../models/products.model";

export async function get_filpebook_bypid(req: Request, res: Response) {
    try{
        try {	 
	        const conn = await connect();    
 
			var sql = `SELECT products.*, products_to_categories.categories_id,categories_description.categories_name, products_description.products_name, products_description.products_description,products_description.products_url
					FROM products
						INNER JOIN products_description ON(products.products_id=products_description.products_id)
						INNER JOIN products_to_categories ON(products.products_id=products_to_categories.products_id)
						INNER JOIN categories ON(products_to_categories.categories_id=categories.categories_id)
						INNER JOIN categories_description ON(products_to_categories.categories_id=categories_description.categories_id)
					WHERE products_description.language_id=1`;
			sql += " and products.products_id=" + req.params.id;

	        conn.query(sql,(error, data) => {	 
	            if (error) {	 
	                console.log(error);	 
	                res.status(401).render('data', {	 
	                    data: error,                    	 
	                });	 
	            } else { 	 
	                //console.log(data) ;                                    	 
	                //var da = JSON.parse(JSON.stringify(data)); res.send(da) ;  
                    const _folder = `${__dirname}/../uploads/pdf/productfile/${data[0].products_pdf.replace('.pdf','')}/${data[0].products_pdf.replace('.pdf','.html')}`;
                    console.log(_folder) ;  
                    res.sendFile(_folder, function (err){
                        console.log('sendfile err : ' + err)
                    });
	            }	 
	        });	 
	      	 
	    } catch (e) {	 
	        console.log(e);      	 
	    }	


    }catch(err){
        console.log(err);
    }
}	