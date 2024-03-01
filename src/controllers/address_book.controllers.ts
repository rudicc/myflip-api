import { Request, Response } from "express";
	import { connect } from "../dbconfig/mydbcommand";
	import { ADDRESS_BOOK } from "../models/address_book.model";
		 
	export async function get_address_book_all(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM address_book";
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
		 
	export async function get_address_book_byid(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM address_book where address_book_id=" + req.params.id;
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
	
	export async function get_address_book_bycustomerId(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM address_book where customers_id=" + req.params.id;
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

	export async function port_address_book(req: Request<{},any , ADDRESS_BOOK>, res: Response) {	 
	    try {        	 
	        const conn = await connect();     	 
	        const item: ADDRESS_BOOK = req.body;	 
	         	 
                  var sql =  `INSERT INTO address_book
                            (
                                 customers_id
                                ,entry_gender
                                ,entry_company
                                ,entry_firstname
                                ,entry_lastname
                                ,entry_street_address
                                ,entry_suburb
                                ,entry_postcode
                                ,entry_city
                                ,entry_state
                                ,entry_country_id
                                ,entry_zone_id
                            ) VALUES (`;
                          
                                sql +=  item.customers_id
                                sql += ",'" + item.entry_gender + "'"
                                sql += ",'" + item.entry_company + "'"
                                sql += ",'" + item.entry_firstname + "'"
                                sql += ",'" + item.entry_lastname + "'"
                                sql += ",'" + item.entry_street_address + "'"
                                sql += ",'" + item.entry_suburb + "'"
                                sql += ",'" + item.entry_postcode + "'"
                                sql += ",'" + item.entry_city + "'"
                                sql += ",'" + item.entry_state + "'"
                                sql += "," + item.entry_country_id
                                sql += "," + item.entry_zone_id
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
		 
	export async function put_address_book(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        const item: ADDRESS_BOOK = req.body; 
				  //address_book_id = '${item.address_book_id}' ,customers_id = '${item.customers_id}'
	        var sql = `UPDATE address_book  set 
                                  
                                 
                                   entry_gender = ${item.entry_gender}
                                  ,entry_company = '${item.entry_company}'
                                  ,entry_firstname = '${item.entry_firstname}'
                                  ,entry_lastname = '${item.entry_lastname}'
                                  ,entry_street_address = '${item.entry_street_address}'
                                  ,entry_suburb = '${item.entry_suburb}'
                                  ,entry_postcode = '${item.entry_postcode}'
                                  ,entry_city = '${item.entry_city}'
                                  ,entry_state = '${item.entry_state}'
                                  ,entry_country_id = ${item.entry_country_id}
                                  ,entry_zone_id = ${item.entry_zone_id}
	            WHERE  address_book_id = ${item.address_book_id}  and  customers_id = ${item.customers_id} `;

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
		 
	export async function delete_address_book(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        var sql = "DELETE FROM address_book where address_book_id =" + req.params.address_book_id;
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