"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uploadfiles_multer_controllers_1 = __importDefault(require("../controllers/uploadfiles_multer.controllers"));
const uploaded_files_controllers_1 = require("../controllers/uploaded_files.controllers");
const multer_1 = __importDefault(require("multer"));
const router = (0, express_1.default)();
const uploads = (0, multer_1.default)();
router.post('/uploadFile', uploads.single('file'), uploadfiles_multer_controllers_1.default.uploadFile);
router.post('/uploadFilepdf', uploads.single('file'), uploadfiles_multer_controllers_1.default.uploadFilePdf);
router.post('/uploadFileReceipts', uploads.single('file'), uploadfiles_multer_controllers_1.default.uploadFileReceipts);
//uploadFilePlungeFilpBook
router.post('/uploadFileFilpTemp', uploads.single('file'), uploadfiles_multer_controllers_1.default.uploadFilePlungeFilpBook);
//uploadFileScript
router.post('/uploadFileScript', uploads.single('file'), uploadfiles_multer_controllers_1.default.uploadFileScript);
// fs
router.post('/uploadFilepdf-chkfs', uploadfiles_multer_controllers_1.default.chkFs);
//cut file pdf
router.post('/uploadFilepdf-chkpath', uploadfiles_multer_controllers_1.default.chkchkpdfFs);
//pdf   //img
router.route('/uploaded_file/getall').get(uploaded_files_controllers_1.get_uploaded_files_all);
router.route('/uploaded_file/:fpath').get(uploaded_files_controllers_1.get_uploaded_files_byfile_path);
router.route('/uploaded_file/:id').get(uploaded_files_controllers_1.get_uploaded_files_byid);
router.route('/uploaded_file/put/').put(uploaded_files_controllers_1.put_uploaded_files);
router.route('/uploaded_file/del/:id').delete(uploaded_files_controllers_1.delete_uploaded_files);
//chk fs
//uploadFile(req: { file: Express.Multer.File }, res: express.Response)
// router.post('/uploadFile', uploads.single('file'), (req: Request, res: Response) =>{
//     console.log(req.file)
//     return res.json({ success: true})
// });
exports.default = router;
