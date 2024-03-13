import express from "express"
import path from 'path'
import { validateFileSize, validateFileType } from "../service/fileValidatorService";
import FileUploadService from "../service/fileUploadService";
import { Multer } from "multer";
 
 
import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'
import { UPLOADED_FILES } from "../models/uploaded_files.model";
import { connect } from "../dbconfig/mydbcommand";
import CreactFolder, { CopyfileTodirectory, DelfileFolder } from "../functions/CreactFolder";
import extractText from "../functions/GetTextFromPDF";


let instance: null | FileController = null
interface fileS{
    originalname: string;
    size: number;
    buffer: Buffer
}
interface extactpdf{
    url:string;
    pass:string;
}

interface TempFile {
    id:number;
    utemp_filename:string;
    unew_filename:string;
}
class FileController
{ 
    //private mfile: Express.Multer.File

    static getInstance(): FileController {
  
        if( instance === null ){
            instance = new FileController()
            return instance
        }
        return instance
    }
    // async getFileExtension(file: Express.Multer.File) {
    //     this.mfile = file
    //     return path.extname(file.originalname)
    // }

    //uploadFile(req: express.Request<{ file: Express.Multer.File }>, res: express.Response){
    async uploadFile(req: express.Request<{}, any ,Express.Multer.File>, res: express.Response){
        try{
            const conn = await connect();  
                
            const { file } = req 
            console.log(file)    
    
            console.log(file?.originalname)  
            console.log(file?.size)  
            console.log(file?.buffer)  
            
            const _f  = `${file?.originalname}` 
            
                  
            const _s = (file?.size)

            //file name 
            const timeStamp = new Date().toISOString().replace(/[-:.TZ]/g, "")
            const uniqueFileName = `${uuidv4()}_${timeStamp}${file?.originalname}`

            console.log(`${__dirname}/../uploads/img/product/${uniqueFileName}`)

            const fileStream = fs.createWriteStream(`${__dirname}/../uploads/img/product/${uniqueFileName}`)

            fileStream.write(file?.buffer, 'base64')
    
            fileStream.on('error', () => {
                console.log('error occurred while writing to stream')
            })
            
            fileStream.end()

            //Add Database        
            // const fileId = 0; await this.createFileRecord(0,`${file?.originalname}`,uniqueFileName,Number(file?.size),`${file?.originalname}`)

            var sql =  `INSERT INTO uploaded_files
            (
                 file_name
                ,unique_file_name
                ,file_size
                ,file_extension
                ,file_path
                ,file_addate
                ,file_active
            ) VALUES ?`;
            var sqlv =  [[
                        `${file?.originalname}`,
                                uniqueFileName, 
                                Number(file?.size),
                                `${file?.originalname}`,
                                `imgproduct`,
                                `${timeStamp}`,
                                `1`
                        ]];
            console.log(sql + ' : ' + sqlv);

            conn.query(sql,[sqlv],(error, data ,fields) => {	 
                if (error) {	 
                    console.log(error.message);	 
                    return res.status(500).json({
                        success: false,
                        message: 'Error uploading file' + error.message
                    });

                }else{
                    console.log('img ans: ' + data.insertId);	 
                    const fileId = data.insertId;
                    res.json({
                        success: true,
                        fileId: fileId,
                        file_name: uniqueFileName,
                    }) 
                }  
                    
            });  

          
 

            //const validFileType = await validateFileType(path.dirname(_f))
        
            //const validFileSize = await validateFileSize(_s)
            
            // if (!validFileType.isValid || !validFileSize.isValid) {
            //     return res.status(400).json({
            //         success: false,
            //         message: 'Invalid Request'
            //     })
            // }
            
            // const fileUploadService = new FileUploadService(file)
            // const fileId = await fileUploadService.createFileUpload() 

            // if (fileId === 0) {
            //     return res.status(500).json({
            //         success: false,
            //         message: 'Error uploading file'
            //     })
            // }



        }catch (error) {
            res.json({
                success: false,
                message: 'Error uploading file : ' + error
            })
        }
    }
  
    async uploadFileReceipts(req: express.Request<{}, any ,Express.Multer.File>, res: express.Response){
        try{
            const conn = await connect();  
                
            const { file } = req 
            console.log(file)    
    
            console.log(file?.originalname)  
            console.log(file?.size)  
            console.log(file?.buffer)  
            
            const _f  = `${file?.originalname}` 
            
                  
            const _s = (file?.size)

            //file name 
            const timeStamp = new Date().toISOString().replace(/[-:.TZ]/g, "")
            const uniqueFileName = `${uuidv4()}_${timeStamp}${file?.originalname}`

            console.log(`${__dirname}/../uploads/img/receipts/${uniqueFileName}`)

            const fileStream = fs.createWriteStream(`${__dirname}/../uploads/img/receipts/${uniqueFileName}`)

            fileStream.write(file?.buffer, 'base64')
    
            fileStream.on('error', () => {
                console.log('error occurred while writing to stream')
            })
            
            fileStream.end()

            //Add Database        
            // const fileId = 0; await this.createFileRecord(0,`${file?.originalname}`,uniqueFileName,Number(file?.size),`${file?.originalname}`)

            var sql =  `INSERT INTO uploaded_files
            (
                 file_name
                ,unique_file_name
                ,file_size
                ,file_extension
                ,file_path
                ,file_addate
                ,file_active
            ) VALUES ?`;
            var sqlv =  [[
                        `${file?.originalname}`,
                                uniqueFileName, 
                                Number(file?.size),
                                `${file?.originalname}`,
                                `imgproduct`,
                                `${timeStamp}`,
                                `1`
                        ]];
            console.log(sql + ' : ' + sqlv);

            conn.query(sql,[sqlv],(error, data ,fields) => {	 
                if (error) {	 
                    console.log(error.message);	 
                    return res.status(500).json({
                        success: false,
                        message: 'Error uploading file' + error.message
                    });

                }else{
                    console.log('img ans: ' + data.insertId);	 
                    const fileId = data.insertId;
                    res.json({
                        success: true,
                        fileId: fileId,
                        file_name: uniqueFileName,
                    }) 
                }  
                    
            });  

          
 

            //const validFileType = await validateFileType(path.dirname(_f))
        
            //const validFileSize = await validateFileSize(_s)
            
            // if (!validFileType.isValid || !validFileSize.isValid) {
            //     return res.status(400).json({
            //         success: false,
            //         message: 'Invalid Request'
            //     })
            // }
            
            // const fileUploadService = new FileUploadService(file)
            // const fileId = await fileUploadService.createFileUpload() 

            // if (fileId === 0) {
            //     return res.status(500).json({
            //         success: false,
            //         message: 'Error uploading file'
            //     })
            // }



        }catch (error) {
            res.json({
                success: false,
                message: 'Error uploading file : ' + error
            })
        }
    }

    async uploadFilePdf(req: express.Request<{}, any ,Express.Multer.File>, res: express.Response){
        try{
            const conn = await connect();  
                
            const { file } = req 
            console.log(file)    
    
            console.log(file?.originalname)  
            console.log(file?.size)  
            console.log(file?.buffer)  
            
            const _f  = `${file?.originalname}` 
            
                  
            const _s = (file?.size)

            //file name 
            const timeStamp = new Date().toISOString().replace(/[-:.TZ]/g, "")
            const uniqueFileName = `${uuidv4()}_${timeStamp}${file?.originalname}`
            //if(CreactFolder(`${__dirname}/../uploads/pdf/productfile/${uniqueFileName}`)
            console.log(`${__dirname}/../uploads/pdf/productfile/${uniqueFileName}`)


            //creact file 
            if(CreactFolder(`${__dirname}/../uploads/pdf/productfile/${uniqueFileName.replace('.pdf','')}`)){
                //ok
                
                const fileStream = fs.createWriteStream(`${__dirname}/../uploads/pdf/productfile/${uniqueFileName}`)

                fileStream.write(file?.buffer, 'base64')
        
                fileStream.on('error', () => {
                    console.log('error occurred while writing to stream')
                })
                
                fileStream.end()

                //Add Database        
                const fileId = 0; 

                var sql =  `INSERT INTO uploaded_files
                (
                    file_name
                    ,unique_file_name
                    ,file_size
                    ,file_extension
                    ,file_path
                    ,file_addate
                    ,file_active
                ) VALUES ?`;
                var sqlv =  [[
                            `${file?.originalname}`,
                                    uniqueFileName, 
                                    Number(file?.size),
                                    `${file?.originalname}`,
                                    `pdfproductfile`,
                                    `${timeStamp}`,
                                    `1`
                            ]];
                console.log(sql + ' : ' + sqlv);

                conn.query(sql,[sqlv],(error, data ,fields) => {	 
                    if (error) {	 
                        console.log(error.message);	 
                        return res.status(500).json({
                            success: false,
                            message: 'Error uploading file' + error.message
                        });

                    }else{
                        console.log('pdf ans: ' + data.insertId);	 
                        const fileId = data.insertId;
                        res.json({
                            success: true,
                            fileId: fileId,
                            file_name: uniqueFileName,
                        }) 

                        //copy file filp book
                        CopyfileTodirectory(`${__dirname}/../uploads/pdf/productfile/test/test.css`,`${__dirname}/../uploads/pdf/productfile/${uniqueFileName.replace('.pdf','')}/${uniqueFileName.replace('.pdf','.css')}`);
                        CopyfileTodirectory(`${__dirname}/../uploads/pdf/productfile/test/test.html`,`${__dirname}/../uploads/pdf/productfile/${uniqueFileName.replace('.pdf','')}/${uniqueFileName.replace('.pdf','.html')}`);
                    }  
                        
                });  

            }else{
                //no
                return res.status(500).json({
                    success: false,
                    message: 'Error Creact Dirctory uploading file :',
                });
            } 
        }catch (error) {
            res.json({
                success: false,
                message: 'Error uploading file :' + error
            })
        }
    }

    //Plunge
 

    async uploadFilePlungeFilpBook(req: express.Request<{}, any ,Express.Multer.File>, res: express.Response){
        try{
            const conn = await connect();  
                
            const { file } = req 
            console.log(file)    
    
            console.log(file?.originalname)  
            console.log(file?.size)  
            console.log(file?.buffer)  
            
            const _f  = `${file?.originalname}` 
            
                  
            const _s = (file?.size)

            //file name 
            const timeStamp = new Date().toISOString().replace(/[-:.TZ]/g, "")
            const uniqueFileName = `${uuidv4()}_${timeStamp}${file?.originalname}`
            //if(CreactFolder(`${__dirname}/../uploads/pdf/productfile/${uniqueFileName}`)
            console.log(`${__dirname}/../uploads/pdf/productfile/temp/${uniqueFileName}`)


            //creact file 
            const FolderFileName1 = uniqueFileName.replace('.css','').replace('.html','')

            // if(CreactFolder(`${__dirname}/../uploads/pdf/productfile/temp/${FolderFileName1}`)){
            //     //ok
                
                const fileStream = fs.createWriteStream(`${__dirname}/../uploads/pdf/productfile/temp/${uniqueFileName}`)

                fileStream.write(file?.buffer, 'base64')
        
                fileStream.on('error', () => {
                    console.log('error occurred while writing to stream')
                })
                
                fileStream.end()

                //Add Database        
                const fileId = 0; 

                var sql =  `INSERT INTO uploaded_files
                (
                    file_name
                    ,unique_file_name
                    ,file_size
                    ,file_extension
                    ,file_path
                    ,file_addate
                    ,file_active
                ) VALUES ?`;
                var sqlv =  [[
                            `${file?.originalname}`,
                                    uniqueFileName, 
                                    Number(file?.size),
                                    `${file?.originalname}`,
                                    `filetemp`,
                                    `${timeStamp}`,
                                    `1`
                            ]];
                console.log(sql + ' : ' + sqlv);

                conn.query(sql,[sqlv],(error, data ,fields) => {	 
                    if (error) {	 
                        console.log(error.message);	 
                        return res.status(500).json({
                            success: false,
                            message: 'Error uploading file' + error.message
                        });

                    }else{
                        console.log('pdf ans: ' + data.insertId);	 
                        const fileId = data.insertId;
                        res.json({
                            success: true,
                            fileId: fileId,
                            file_name: uniqueFileName,
                        }) 

                        //copy file filp book
                        //CopyfileTodirectory(`${__dirname}/../uploads/pdf/productfile/test/test.css`,`${__dirname}/../uploads/pdf/productfile/${uniqueFileName.replace('.pdf','')}/${uniqueFileName.replace('.pdf','.css')}`);
                        //CopyfileTodirectory(`${__dirname}/../uploads/pdf/productfile/test/test.html`,`${__dirname}/../uploads/pdf/productfile/${uniqueFileName.replace('.pdf','')}/${uniqueFileName.replace('.pdf','.html')}`);
                    }  
                        
                });  

            // }else{
            //     //no
            //     return res.status(500).json({
            //         success: false,
            //         message: 'Error Creact Dirctory uploading file :',
            //     });
            // } 
        }catch (error) {
            res.json({
                success: false,
                message: 'Error uploading file :' + error
            })
        }
    }

    async uploadFileScript(req: express.Request<{}, any ,Express.Multer.File>, res: express.Response){
        try{
            const conn = await connect();  
                
            const { file } = req 
            console.log(file)    
    
            console.log(file?.originalname)  
            console.log(file?.size)  
            console.log(file?.buffer)  
            
            const _f  = `${file?.originalname}` 
            
                  
            const _s = (file?.size)

            //file name 
            const timeStamp = new Date().toISOString().replace(/[-:.TZ]/g, "")
            const uniqueFileName = `${file?.originalname}`

            console.log(`${__dirname}/../uploads/pdf/productfile/${uniqueFileName}`)

            DelfileFolder(`${__dirname}/../uploads/pdf/productfile/${uniqueFileName}`)

            const fileStream = fs.createWriteStream(`${__dirname}/../uploads/pdf/productfile/${uniqueFileName}`)

            fileStream.write(file?.buffer, 'base64')
    
            fileStream.on('error', () => {
                console.log('error occurred while writing to stream')
            })
            
            fileStream.end()

            return res.status(200).json({
                success: true,
                message: 'Success!',
            });

        
        }catch (error) {
            res.json({
                success: false,
                message: 'Error uploading file : ' + error
            })
        }
    }


    async chkFs(req: express.Request, res: express.Response){
        try{
            const timeStamp = new Date().toISOString().replace(/[-:.TZ]/g, "")
            const uniqueFileName = `${uuidv4()}_${timeStamp}`
            if(!CreactFolder(`${__dirname}/../uploads/pdf/productfile/${uniqueFileName}`)){
                return res.json({ success: false , message: 'Error uploading file :'})
            }else{
                return res.json({ success: true , message: 'Uploading file Ok.'})
            }
        }catch(ex){
            console.log(ex)
            return res.json({ success: false , message:  ex})
        }
    }
    //chkpdf
    
    async chkchkpdfFs(req: express.Request<{},any,extactpdf>, res: express.Response){
        try{
            const item:extactpdf = req.body
       
            // if(!extractText(`${__dirname}/../uploads/pdf/productfile/${item.url}`, `${item.pass}`)){
            //     return res.json({ success: false , message: 'Error cut file :'})
            // }else{
            //     return res.json({ success: true , message: 'Cut file Ok.'})
            // }
         }catch(ex){
            console.log(ex)
            return res.json({ success: false , message:  ex})
        }
    }

    // async MoveFileTemp(req: express.Request<{},any,TempFile>, res: express.Response){
    //     try{
    //         const item:TempFile = req.body
       
 
    //         CopyfileTodirectory(`${__dirname}/../uploads/pdf/productfile/test/test.css`,`${__dirname}/../uploads/pdf/productfile/${uniqueFileName.replace('.pdf','')}/${uniqueFileName.replace('.pdf','.css')}`);

    //      }catch(ex){
    //         console.log(ex)
    //         return res.json({ success: false , message:  ex})
    //     }
    // }


}

export default FileController.getInstance()
