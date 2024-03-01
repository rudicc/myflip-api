import { Request, Response } from "express";
	import { connect } from "../dbconfig/mydbcommand";
	import { UPLOADED_FILES } from "../models/uploaded_files.model";
		 
	export async function get_uploaded_files_all(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM uploaded_files order by file_id,file_path"			 
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
			return res.status(401).json({                	 
				success: false,                	 
				message:  'Error : ' + e               	 
			  })   	 
	    }	 
	}	 
	
	export async function get_uploaded_files_byfile_path(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM uploaded_files where file_path='" + req.params.fpath + "'"			 
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
			return res.status(401).json({                	 
				success: false,                	 
				message:  'Error : ' + e               	 
			  })  	 
	    }	 
	} 
		 
	export async function get_uploaded_files_byid(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();     	 
	        var sql = " SELECT * FROM uploaded_files where file_id=" + req.params.id;
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
		 
	export async function port_uploaded_files(req: Request<{},any , UPLOADED_FILES>, res: Response) {	 
	    try {        	 
	        const conn = await connect();     	 
	        const item: UPLOADED_FILES = req.body;	 
	         	 
                  var sql =  `INSERT INTO uploaded_files
                            (
                                 file_name
                                ,unique_file_name
                                ,file_size
                                ,file_extension
                                ,file_path
                                ,file_addate
                                ,file_active
                            ) VALUES (`;
                          
                                sql +=  item.file_name
                                sql += ",'" + item.unique_file_name + "'"
                                sql += "," + item.file_size
                                sql += ",'" + item.file_extension + "'"
                                sql += ",'" + item.file_path + "'"
                                sql += ",'" + item.file_addate + "'"
                                sql += "," + item.file_active
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
		 
	export async function put_uploaded_files(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        const item: UPLOADED_FILES = req.body; 	 
	        var sql = `UPDATE uploaded_files  set 
                                   file_id = '${item.file_id}'
                                  ,file_name = '${item.file_name}'
                                  ,unique_file_name = '${item.unique_file_name}'
                                  ,file_size = '${item.file_size}'
                                  ,file_extension = '${item.file_extension}'
                                  ,file_path = '${item.file_path}'
                                  ,file_addate = '${item.file_addate}'
                                  ,file_active = '${item.file_active}'
	            WHERE  file_id = ${item.file_id}`;

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
		 
	export async function delete_uploaded_files(req: Request, res: Response) {	 
	    try {	 
	        const conn = await connect();    	 
	        var sql = "DELETE FROM uploaded_files where file_id =" + req.params.file_id;
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