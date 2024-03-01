import { Request, Response } from "express";
	import { connect } from "../dbconfig/mydbcommand";
	//import { PRODUCTS_HOME } from "../models/products_home.model";
		 
	export async function get_products_home_all(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM products_home";
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
		 
	export async function get_products_home_byid(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM products_home where id=" + req.params.id;
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
		
	
	export async function get_products_home_bylikemodel(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM products_home where model like '%" + req.params.model + "%'";
			    sql += " order by model";
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


	// export async function port_products_home(req: Request<{},any , PRODUCTS_HOME>, res: Response) {	 
	//     try {        	 
	//         const conn = await connect();     	 
	//         const item: PRODUCTS_HOME = req.body;	 
	         	 
    //               var sql =  `INSERT INTO products_home
    //                         (
    //                              id
    //                             ,cover
    //                             ,category
    //                             ,title
    //                             ,model
    //                             ,price
    //                             ,qty
    //                             ,author
    //                             ,desc
    //                             ,pview
    //                             ,lang
    //                         ) VALUES (`;
                          
    //                             sql +=  item.id
    //                             sql += ",'" + item.cover + "'"
    //                             sql += ",'" + item.category + "'"
    //                             sql += ",'" + item.title + "'"
    //                             sql += ",'" + item.model + "'"
    //                             sql += "," + item.price
    //                             sql += "," + item.qty
    //                             sql += ",'" + item.author + "'"
    //                             sql += ",'" + item.desc + "'"
    //                             sql += "," + item.pview
    //                             sql += "," + item.lang
    //                             sql += ")";
	 	 
	//         conn.query(sql,(error, data ,fields) => {	 
	//             if (error) {	 
	//                 console.log(error);	 
	//                 return res.status(401).json({                	 
	//                   success: false,                	 
	//                   message:  'Error : ' + error.message                	 
	//                 })                 	 
	//             } else { 	 
	//                 console.log(data) ;                                    	 
	//                 res.json({                	 
	//                   success: true,                	 
	//                   message:  'post Success!',                	 
	//                    fileId: data.insertId                	 
	//                 })                 	 
	//             }	 
	//         });             	 
	//     } catch (e) {	 
	//         console.log(e);      	 
	//                 return res.status(401).json({                	 
	//                   success: false,                	 
	//                   message:  'Error : ' + e               	 
	//                 }) 
	//     }	 
	// }	 
		 
	// export async function put_products_home(req: Request, res: Response) {	 
	//     try {	 
	//         const conn = await connect();    	 
	//         const item: PRODUCTS_HOME = req.body; 	 
	//         var sql = `UPDATE products_home  set 
    //                                id = '${item.id}'
    //                               ,cover = '${item.cover}'
    //                               ,category = '${item.category}'
    //                               ,title = '${item.title}'
    //                               ,model = '${item.model}'
    //                               ,price = '${item.price}'
    //                               ,qty = '${item.qty}'
    //                               ,author = '${item.author}'
    //                               ,desc = '${item.desc}'
    //                               ,pview = '${item.pview}'
    //                               ,lang = '${item.lang}'
	//             WHERE  id = ${item.id}`;

	//         conn.query(sql,(error, data , fields) => {	 
	//             if (error) {	 
	//                 console.log(error);	 
	//                 return res.status(401).json({                	 
	//                   success: false,                	 
	//                   message:  'Error : ' + error.message                	 
	//                 }) 
	//             } else { 	 
	//                 console.log("Put Ok!"); 
	//                 res.json({                	 
	//                   success: true,                	 
	//                   message: 'Put Success!'               	 
	//                 })                 	 
	//             }	 
	//         });	 
	      	 
	//     } catch (e) {	 
	//         console.log(e);      	 
	//                 return res.status(401).json({                	 
	//                   success: false,                	 
	//                   message:  'Error : ' + e               	 
	//                 }) 
	//     }	 
	// }	 
		 
	// export async function delete_products_home(req: Request, res: Response) {	 
	//     try {	 
	//         const conn = await connect();    	 
	//         var sql = "DELETE FROM products_home where id =" + req.params.id;
	//         conn.query(sql,(error, data , fields) => {	 
	//             if (error) {	 
	//                 console.log(error);	 
	//                 return res.status(401).json({                	 
	//                   success: false,                	 
	//                   message:  'Error : ' + error.message                	 
	//                 }) 
	//             } else { 	 
	//                 console.log("Del Ok!") ;                                    	 
	//                 res.json({                	 
	//                   success: true,                	 
	//                   message: 'Del Success!'               	 
	//                 })                 	 
	//             }	 
	//         });	 
	      	 
	//     } catch (e) {	 
	//         console.log(e);      	 
	//                 return res.status(401).json({                	 
	//                   success: false,                	 
	//                   message:  'Error : ' + e               	 
	//                 }) 
	//     }	 
	// }