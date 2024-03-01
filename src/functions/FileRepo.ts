import { connect } from "../dbconfig/mydbcommand";
import { UPLOADED_FILES } from '../models/uploaded_files.model'


let instance: null | FileRepo = null

class FileRepo {
    static getInstance(): FileRepo {
        if (instance === null) {
            instance = new FileRepo()
            return instance
        }

        return instance
    }

    async createFileRecord(file: UPLOADED_FILES): Promise<number> {        
        try { 	        
            const conn = await connect();  

            return await new Promise((resolve, reject) => {
                    
                    var sql =  `INSERT INTO uploaded_files
                                (
                                    file_name
                                    ,unique_file_name
                                    ,file_size
                                    ,file_extension
                                ) VALUES ?`;
                    var sqlv =  [[
                                    file.file_name,
                                    file.file_extension,
                                    file.file_size,
                                    file.file_extension
                                ]];
            
                conn.query(sql,[sqlv],(error, data ,fields) => {	 
                    if (error) {	 
                        console.log(error.message);	 
                        reject(0)
                    }  
                    resolve(data.insertId)	 
                });   
                
            })      	    	 	       	           	 
	    } catch (e) {	 
	        console.log(e) 
            return 0  	 
	    }	 

    }
}

export default FileRepo.getInstance()