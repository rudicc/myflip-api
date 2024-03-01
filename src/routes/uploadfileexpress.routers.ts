import express,{ NextFunction, Request , Response} from 'express'	
	import { 	
	      uploadFile  	   	
	} from '../controllers/uploadfiles.controllers';	
    import fileUpload from 'express-fileupload'
    import path, { join } from 'path'
    import { promises as fs } from 'fs'
    import parseFileName from "../functions/parseFileName";

	const router = express();	
		
	router.post('/upload/categories/',fileUpload({ createParentPath: true }), (req: Request, res: Response) =>{
        try{
            let file = req.files;
            console.log(file)
            if(!req.files || Object.keys(req.files).length ===0){
                res.status(400).send("No files were upload.");
                return
            }

            Object.keys(req.files).forEach((key) =>{
                 console.log(key)
               
            })
            return res.json({ status: "success" , message: "msg"})
        }catch(error){
            console.log(error)

        }
    })
 	 			
export default router;