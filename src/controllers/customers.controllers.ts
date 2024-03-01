import { Request, Response } from "express";
	import { connect } from "../dbconfig/mydbcommand";
	import { CUSTOMERS } from "../models/customers.model";
import { CUSTOMERS_ISMEMBER } from "../models/customers_ismember.model";
		 
	export async function get_customers_all(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM customers";
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
		 
	export async function get_customers_byid(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM customers where customers_id=" + req.params.id;
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
	
	export async function get_customers_Addressbook_byid(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = ""; //" SELECT * FROM customers where customers_id=" + req.params.id;
			sql += " SELECT customers.*, address_book.*, countries.countries_name, zones.zone_name  ";
			sql += " FROM ((address_book RIGHT JOIN customers ON address_book.customers_id = customers.customers_id)  ";
			sql += "   LEFT JOIN zones ON address_book.entry_zone_id = zones.zone_id)  ";
			sql += "   LEFT JOIN countries ON address_book.entry_country_id = countries.countries_id  ";
			sql += " WHERE (  ";
			sql += "      ((customers.customers_id)="+ req.params.id +")  ";
			//sql += "  and ((customers.customers_id)=5)  ";
			sql += " )  ";

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
	


	export async function port_customers(req: Request<{},any , CUSTOMERS>, res: Response) {	 
	    try {        	 
	        const conn = await connect();     	 
	        const item: CUSTOMERS = req.body;	 
	         	 
                  var sql =  `INSERT INTO customers
                            (
                                 customers_gender
                                ,customers_firstname
                                ,customers_lastname
                                ,customers_dob
                                ,customers_email_address
                                ,customers_default_address_id
                                ,customers_telephone
                                ,customers_fax
                                ,customers_password
                                ,customers_newsletter
                            ) VALUES (`;
                          
                                sql +=  item.customers_gender
                                sql += ",'" + item.customers_firstname + "'"
                                sql += ",'" + item.customers_lastname + "'"
                                sql += ",now()"
                                sql += ",'" + item.customers_email_address + "'"
                                sql += "," + item.customers_default_address_id
                                sql += ",'" + item.customers_telephone + "'"
                                sql += ",'" + item.customers_fax + "'"
                                sql += ",'" + item.customers_password + "'"
                                sql += ",'" + item.customers_newsletter + "'"
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
		 
	export async function put_customers(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        const item: CUSTOMERS = req.body; 	  //customers_id = '${item.customers_id}'   ,customers_password = '${item.customers_password}'
	        var sql = `UPDATE customers  set                                   
                                   customers_gender = ${item.customers_gender}
                                  ,customers_firstname = '${item.customers_firstname}'
                                  ,customers_lastname = '${item.customers_lastname}'
                                  ,customers_dob = '${item.customers_dob}'
                                  ,customers_email_address = '${item.customers_email_address}'
                                  ,customers_default_address_id = '${item.customers_default_address_id}'
                                  ,customers_telephone = '${item.customers_telephone}'
                                  ,customers_fax = '${item.customers_fax}'                               
                                  ,customers_newsletter = '${item.customers_newsletter}'
	            WHERE  customers_id = ${item.customers_id}`;

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
		 
	export async function delete_customers(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        var sql = "DELETE FROM customers where customers_id =" + req.params.customers_id;
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



	//member
	export async function get_customers_ismember_all(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM customers_ismember";
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

	export async function get_customers_ismember_byId(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM customers_ismember customers_id=" + req.params.cusid ;
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

	export async function port_customers_ismember(req: Request<{},any , CUSTOMERS_ISMEMBER>, res: Response) {	 
	    try {        	 
	        const conn = await connect();     	 
	        const item: CUSTOMERS_ISMEMBER = req.body;	 
	         	 
                  var sql =  `INSERT INTO customers
                            (
								 mem_year
                                ,mem_date_added
                                ,mem_date_exp                            
                                ,mem_status_exp
                                ,customers_id               
                            ) VALUES (`;
                          
                                sql +=  item.mem_year
								sql += ",now()"                           
                                sql += ",'" + item.mem_date_exp + "'"
								sql += ",'" + item.mem_status_exp + "'"
                                sql += "," + item.customers_id 
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
		 
	export async function put_customers_ismember(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        const item: CUSTOMERS_ISMEMBER = req.body;
	        var sql = `UPDATE customers_ismember  set                                   
									mem_date_exp    = '${item.mem_date_exp}'
                                  , mem_status_exp  =  ${item.mem_status_exp}
	            WHERE  mem_id = ${item.mem_id} and customers_id = ${item.customers_id} and mem_year = ${item.mem_year}` ;

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
		 
	export async function delete_customers_ismember(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        var sql = "DELETE FROM customers_ismember where mem_id =" + req.params.id; 
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
