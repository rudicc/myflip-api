import { Request, Response } from "express";
	import { connect } from "../dbconfig/mydbcommand";
	import { PRODUCTS } from "../models/products.model";
	import  decompress from "decompress";
import { CopyfileTodirectory, DelfileFolder, ReadfileReplaceHTMLTodirectory, RenamefileTodirectory } from "../functions/CreactFolder";
	
	export async function get_products_all(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = ""; // " SELECT products.*, products_to_categories.categories_id   FROM products INNER JOIN products_to_categories ON(products.products_id=products_to_categories.products_id) WHERE 1=1 ";
			sql = `SELECT products.*, products_to_categories.categories_id,categories_description.categories_name, products_description.products_name, products_description.products_description,products_description.products_url
					FROM products
						INNER JOIN products_description ON(products.products_id=products_description.products_id)
						INNER JOIN products_to_categories ON(products.products_id=products_to_categories.products_id)
						INNER JOIN categories ON(products_to_categories.categories_id=categories.categories_id)
						INNER JOIN categories_description ON(products_to_categories.categories_id=categories_description.categories_id)
					WHERE products_description.language_id=1
					order by categories.categories_id ,products.products_id `;


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
		
	//by id
	export async function get_products_byid(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    
			var sql = ""; //" SELECT products.*, products_to_categories.categories_id   FROM products INNER JOIN products_to_categories ON(products.products_id=products_to_categories.products_id) WHERE 1=1 " 	 
	            
			sql = `SELECT products.*, products_to_categories.categories_id,categories_description.categories_name, products_description.products_name, products_description.products_description,products_description.products_url
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
	                console.log(data) ;                                    	 
	                var da = JSON.parse(JSON.stringify(data)); res.send(da) ;                	 
	            }	 
	        });	 
	      	 
	    } catch (e) {	 
	        console.log(e);      	 
	    }	 
	}	 
	
	//by manufacturers_id
	export async function get_products_by_manufacturers_id(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM products where manufacturers_id=" + req.params.id;
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
	

	export async function port_products(req: Request<{},any , PRODUCTS>, res: Response) {	 
	    try {        	 
	        const conn = await connect();     	 
	        const item: PRODUCTS = req.body;	 
			      item.products_date_added = "now()"
				  item.products_last_modified = "now()"
				  item.products_date_available = "now()"
				  var d =  `now()`
				  var p:number = item.products_price

                  var sql =  `INSERT INTO products
                            (
                                 products_quantity
                                ,products_model
                                ,products_image
                                ,products_price
                                ,products_date_added
                                ,products_last_modified
                                ,products_date_available
                                ,products_weight
                                ,products_status
                                ,products_tax_class_id
                                ,manufacturers_id
                                ,products_ordered
                            ) VALUES (`;

							sql  +=        item.products_quantity
							sql  +=  ",'" + item.products_model + "'"
							sql  +=  ",'" + item.products_image + "'"
							sql  +=  "," + item.products_price
							sql  +=  ",now()"
							sql  +=  ",now()"
							sql  +=  ",now()"
							sql  +=  "," + item.products_weight
							sql  +=  "," + item.products_status
							sql  +=  "," + item.products_tax_class_id
							sql  +=  "," + item.manufacturers_id
							sql  +=  "," + item.products_ordered 

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
		 
	export async function put_products(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        const item: PRODUCTS = req.body; 	 
			//   ,products_date_added = '${item.products_date_added}'
			//'${item.products_last_modified}'
			//'${item.products_date_available}'
	        var sql = `UPDATE products  set 
                                   
                                   products_quantity = '${item.products_quantity}'
                                  ,products_model = '${item.products_model}'
                                  ,products_image = '${item.products_image}'
                                  ,products_price = '${item.products_price}'
                               
                                  ,products_last_modified = now()
                                  ,products_date_available = now()
                                  ,products_weight = ${item.products_weight}
                                  ,products_status = ${item.products_status}
                                  ,products_tax_class_id = ${item.products_tax_class_id}
                                  ,manufacturers_id = ${item.manufacturers_id}
                                  ,products_ordered = ${item.products_ordered}
	            WHERE  products_id = ${item.products_id}`;

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
	
	//pdf put
	interface PRODUCTS_PDF {
		products_id: number;
		products_pdf_id:number;
		products_pdf:string;
	}
	export async function put_products_pdf(req: Request<{},any,PRODUCTS_PDF>, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        const item: PRODUCTS_PDF = req.body; 	 
 
	        var sql = `UPDATE products  set                                    
                                   products_pdf =   '${item.products_pdf}'
                                  ,products_pdf_id = ${item.products_pdf_id}                                  
	            WHERE  products_id = ${item.products_id}`;

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
	//

	//css 
	interface PRODUCTS_CSS {
		products_id: number;
		products_pdf_id:number;
		products_pdf:string;
		products_css_id:number;
		products_css:string;
	}
	export async function put_products_css(req: Request<{},any,PRODUCTS_CSS>, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        const item: PRODUCTS_CSS = req.body; 	 
 
	        var sql = `UPDATE products  set                                    
                                   products_css =   '${item.products_css}'
                                  ,products_css_id = ${item.products_css_id}                                  
	            WHERE  products_id = ${item.products_id}`;

	        conn.query(sql,(error, data , fields) => {	 
	            if (error) {	 
	                console.log(error);	 
	                return res.status(401).json({                	 
	                  success: false,                	 
	                  message:  'Error : ' + error.message                	 
	                }) 
	            } else { 	 
	                console.log("Put Ok!"); 
 
					const _folder1 = `${__dirname}/../uploads/pdf/productfile/temp/${item.products_css}`;
					const _folder2 = `${__dirname}/../uploads/pdf/productfile/${item.products_pdf.replace('.pdf','')}/${item.products_pdf.replace('.pdf','.css')}`;
					const _folder3 = `${__dirname}/../uploads/pdf/productfile/${item.products_pdf.replace('.pdf','')}/dataset.css`;
					DelfileFolder(_folder2)
					DelfileFolder(_folder3)
					
					if(CopyfileTodirectory(_folder1,_folder2)){
						RenamefileTodirectory(_folder2,_folder3)
						DelfileFolder(_folder1)
						res.json({                	 
							success: true,                	 
							message: 'Put Success!'             	 
						  }) 
					}else{
						res.json({                	 
							success: true,                	 
							message: 'Put Success. But Update File Not found! '             	 
						  }) 
					}                	 
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

	export async function put_products_css_unzip(req: Request<{},any,PRODUCTS_CSS>, res: Response) {	 
	    try {	
			 
	        const conn = await connect();    	 
	        const item: PRODUCTS_CSS = req.body; 	 
 
	        var sql = `UPDATE products  set                                    
                                   products_css =   '${item.products_css}'
                                  ,products_css_id = ${item.products_css_id}                                  
	            WHERE  products_id = ${item.products_id}`;

	        conn.query(sql,(error, data , fields) => {	 
	            if (error) {	 
	                console.log(error);	 
	                return res.status(401).json({                	 
	                  success: false,                	 
	                  message:  'Error : ' + error.message                	 
	                }) 
	            } else { 	 
	                console.log("Put Ok!"); 
 
					const _folder1 = `${__dirname}/../uploads/pdf/productfile/temp/${item.products_css}`;
					const _folder2 = `${__dirname}/../uploads/pdf/productfile/${item.products_pdf.replace('.pdf','')}`;
 
					//DelfileFolder(_folder2)
		           console.log(_folder1  + ' to. '  + _folder2)
					try{
						decompress(_folder1, _folder2,)
						//DelfileFolder(_folder1)
						res.json({                	 
							success: true,                	 
							message: 'Put Success!'             	 
						  }) 

					}catch(err){
						console.log(err)
						res.json({                	 
							success: true,                	 
							message: 'Put Success. But Update File Not found! ' + err,           	 
						  }) 
					}               	 
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

    //html

	interface PRODUCTS_HTML {
		products_id: number;
		products_pdf_id:number;
		products_pdf:string;
		products_html_id:number;
		products_html:string;
	}

	export async function put_products_html(req: Request<{},any,PRODUCTS_HTML>, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        const item: PRODUCTS_HTML = req.body; 	            
	        var sql = `UPDATE products  set                                    
                                   products_html =   '${item.products_html}'
                                  ,products_html_id = ${item.products_html_id}                                  
	            WHERE  products_id = ${item.products_id}`;

	        conn.query(sql,(error, data , fields) => {	 
	            if (error) {	 
	                console.log(error);	 
	                return res.status(401).json({                	 
	                  success: false,                	 
	                  message:  'Error : ' + error.message                	 
	                }) 
	            } else { 	 
	                console.log("Put Ok!"); 
									 		  
			 
					const _folder1 = `${__dirname}/../uploads/pdf/productfile/temp/${item.products_html}`;
					const _folder2 = `${__dirname}/../uploads/pdf/productfile/${item.products_pdf.replace('.pdf','')}/${item.products_pdf.replace('.pdf','.html')}`;
					console.log('f1: ' + _folder1)
					console.log('f2: ' + _folder2)
					DelfileFolder(_folder2)
					
					if(CopyfileTodirectory(_folder1,_folder2)){
						DelfileFolder(_folder1)
						res.json({                	 
							success: true,                	 
							message: 'Put Success!'             	 
						  }) 
					}else{
						res.json({                	 
							success: true,                	 
							message: 'Put Success. But Update File Not found! '             	 
						  }) 
					}
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


	export async function delete_products(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
			var sql = "DELETE FROM products where products_id =" + req.params.id;
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

	interface UpdateStatus {
		products_id: number;
		products_status:number;
	}
	export async function update_products_status(req: Request<{},any , UpdateStatus>, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
			const item: UpdateStatus = req.body; 	 
	        var sql = "UPDATE products SET products_status=" + item.products_status +  " where products_id =" + item.products_id
	        conn.query(sql,(error, data , fields) => {	 
	            if (error) {	 
	                console.log(error);	 
	                return res.status(401).json({                	 
	                  success: false,                	 
	                  message:  'Error : ' + error.message                	 
	                }) 
	            } else { 	 
	                console.log("Put Ok!") ;                                    	 
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

// OkPacket {
//     fieldCount: 0,
//     affectedRows: 1,
//     insertId: 2,
//     serverStatus: 2,
//     warningCount: 0,
//     message: '',
//     protocol41: true,
//     changedRows: 0
//   }