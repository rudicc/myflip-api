import express,{ NextFunction, Request , Response} from 'express'	
import 	
        FileController 	       	
    from '../controllers/uploadfiles_multer.controllers';	

import {  delete_uploaded_files
        , get_uploaded_files_all 
        , get_uploaded_files_byid
        , put_uploaded_files 
        , get_uploaded_files_byfile_path
    } from '../controllers/uploaded_files.controllers';    
    
import multer from 'multer'

    const router = express();	
 	 
    const uploads = multer();
    router.post('/uploadFile', uploads.single('file'), FileController.uploadFile);

    router.post('/uploadFilepdf', uploads.single('file'), FileController.uploadFilePdf);

    router.post('/uploadFileReceipts', uploads.single('file'), FileController.uploadFileReceipts);
    
    //uploadFilePlungeFilpBook
    router.post('/uploadFileFilpTemp', uploads.single('file'), FileController.uploadFilePlungeFilpBook);

   // fs
    router.post('/uploadFilepdf-chkfs', FileController.chkFs);
  //cut file pdf

  router.post('/uploadFilepdf-chkpath', FileController.chkchkpdfFs);
 
  


    //pdf   //img
    router.route('/uploaded_file/getall').get(get_uploaded_files_all);
	router.route('/uploaded_file/:fpath').get(get_uploaded_files_byfile_path);	
	router.route('/uploaded_file/:id').get(get_uploaded_files_byid);	
	router.route('/uploaded_file/put/').put(put_uploaded_files);	
	router.route('/uploaded_file/del/:id').delete(delete_uploaded_files);	
   

    //chk fs


 

    //uploadFile(req: { file: Express.Multer.File }, res: express.Response)
    
    // router.post('/uploadFile', uploads.single('file'), (req: Request, res: Response) =>{
    //     console.log(req.file)
    //     return res.json({ success: true})
    // });

    
    
export default router;