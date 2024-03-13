"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const fs_1 = __importDefault(require("fs"));
const mydbcommand_1 = require("../dbconfig/mydbcommand");
const CreactFolder_1 = __importStar(require("../functions/CreactFolder"));
let instance = null;
class FileController {
    //private mfile: Express.Multer.File
    static getInstance() {
        if (instance === null) {
            instance = new FileController();
            return instance;
        }
        return instance;
    }
    // async getFileExtension(file: Express.Multer.File) {
    //     this.mfile = file
    //     return path.extname(file.originalname)
    // }
    //uploadFile(req: express.Request<{ file: Express.Multer.File }>, res: express.Response){
    uploadFile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, mydbcommand_1.connect)();
                const { file } = req;
                console.log(file);
                console.log(file === null || file === void 0 ? void 0 : file.originalname);
                console.log(file === null || file === void 0 ? void 0 : file.size);
                console.log(file === null || file === void 0 ? void 0 : file.buffer);
                const _f = `${file === null || file === void 0 ? void 0 : file.originalname}`;
                const _s = (file === null || file === void 0 ? void 0 : file.size);
                //file name 
                const timeStamp = new Date().toISOString().replace(/[-:.TZ]/g, "");
                const uniqueFileName = `${(0, uuid_1.v4)()}_${timeStamp}${file === null || file === void 0 ? void 0 : file.originalname}`;
                console.log(`${__dirname}/../uploads/img/product/${uniqueFileName}`);
                const fileStream = fs_1.default.createWriteStream(`${__dirname}/../uploads/img/product/${uniqueFileName}`);
                fileStream.write(file === null || file === void 0 ? void 0 : file.buffer, 'base64');
                fileStream.on('error', () => {
                    console.log('error occurred while writing to stream');
                });
                fileStream.end();
                //Add Database        
                // const fileId = 0; await this.createFileRecord(0,`${file?.originalname}`,uniqueFileName,Number(file?.size),`${file?.originalname}`)
                var sql = `INSERT INTO uploaded_files
            (
                 file_name
                ,unique_file_name
                ,file_size
                ,file_extension
                ,file_path
                ,file_addate
                ,file_active
            ) VALUES ?`;
                var sqlv = [[
                        `${file === null || file === void 0 ? void 0 : file.originalname}`,
                        uniqueFileName,
                        Number(file === null || file === void 0 ? void 0 : file.size),
                        `${file === null || file === void 0 ? void 0 : file.originalname}`,
                        `imgproduct`,
                        `${timeStamp}`,
                        `1`
                    ]];
                console.log(sql + ' : ' + sqlv);
                conn.query(sql, [sqlv], (error, data, fields) => {
                    if (error) {
                        console.log(error.message);
                        return res.status(500).json({
                            success: false,
                            message: 'Error uploading file' + error.message
                        });
                    }
                    else {
                        console.log('img ans: ' + data.insertId);
                        const fileId = data.insertId;
                        res.json({
                            success: true,
                            fileId: fileId,
                            file_name: uniqueFileName,
                        });
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
            }
            catch (error) {
                res.json({
                    success: false,
                    message: 'Error uploading file : ' + error
                });
            }
        });
    }
    uploadFileReceipts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, mydbcommand_1.connect)();
                const { file } = req;
                console.log(file);
                console.log(file === null || file === void 0 ? void 0 : file.originalname);
                console.log(file === null || file === void 0 ? void 0 : file.size);
                console.log(file === null || file === void 0 ? void 0 : file.buffer);
                const _f = `${file === null || file === void 0 ? void 0 : file.originalname}`;
                const _s = (file === null || file === void 0 ? void 0 : file.size);
                //file name 
                const timeStamp = new Date().toISOString().replace(/[-:.TZ]/g, "");
                const uniqueFileName = `${(0, uuid_1.v4)()}_${timeStamp}${file === null || file === void 0 ? void 0 : file.originalname}`;
                console.log(`${__dirname}/../uploads/img/receipts/${uniqueFileName}`);
                const fileStream = fs_1.default.createWriteStream(`${__dirname}/../uploads/img/receipts/${uniqueFileName}`);
                fileStream.write(file === null || file === void 0 ? void 0 : file.buffer, 'base64');
                fileStream.on('error', () => {
                    console.log('error occurred while writing to stream');
                });
                fileStream.end();
                //Add Database        
                // const fileId = 0; await this.createFileRecord(0,`${file?.originalname}`,uniqueFileName,Number(file?.size),`${file?.originalname}`)
                var sql = `INSERT INTO uploaded_files
            (
                 file_name
                ,unique_file_name
                ,file_size
                ,file_extension
                ,file_path
                ,file_addate
                ,file_active
            ) VALUES ?`;
                var sqlv = [[
                        `${file === null || file === void 0 ? void 0 : file.originalname}`,
                        uniqueFileName,
                        Number(file === null || file === void 0 ? void 0 : file.size),
                        `${file === null || file === void 0 ? void 0 : file.originalname}`,
                        `imgproduct`,
                        `${timeStamp}`,
                        `1`
                    ]];
                console.log(sql + ' : ' + sqlv);
                conn.query(sql, [sqlv], (error, data, fields) => {
                    if (error) {
                        console.log(error.message);
                        return res.status(500).json({
                            success: false,
                            message: 'Error uploading file' + error.message
                        });
                    }
                    else {
                        console.log('img ans: ' + data.insertId);
                        const fileId = data.insertId;
                        res.json({
                            success: true,
                            fileId: fileId,
                            file_name: uniqueFileName,
                        });
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
            }
            catch (error) {
                res.json({
                    success: false,
                    message: 'Error uploading file : ' + error
                });
            }
        });
    }
    uploadFilePdf(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, mydbcommand_1.connect)();
                const { file } = req;
                console.log(file);
                console.log(file === null || file === void 0 ? void 0 : file.originalname);
                console.log(file === null || file === void 0 ? void 0 : file.size);
                console.log(file === null || file === void 0 ? void 0 : file.buffer);
                const _f = `${file === null || file === void 0 ? void 0 : file.originalname}`;
                const _s = (file === null || file === void 0 ? void 0 : file.size);
                //file name 
                const timeStamp = new Date().toISOString().replace(/[-:.TZ]/g, "");
                const uniqueFileName = `${(0, uuid_1.v4)()}_${timeStamp}${file === null || file === void 0 ? void 0 : file.originalname}`;
                //if(CreactFolder(`${__dirname}/../uploads/pdf/productfile/${uniqueFileName}`)
                console.log(`${__dirname}/../uploads/pdf/productfile/${uniqueFileName}`);
                //creact file 
                if ((0, CreactFolder_1.default)(`${__dirname}/../uploads/pdf/productfile/${uniqueFileName.replace('.pdf', '')}`)) {
                    //ok
                    const fileStream = fs_1.default.createWriteStream(`${__dirname}/../uploads/pdf/productfile/${uniqueFileName}`);
                    fileStream.write(file === null || file === void 0 ? void 0 : file.buffer, 'base64');
                    fileStream.on('error', () => {
                        console.log('error occurred while writing to stream');
                    });
                    fileStream.end();
                    //Add Database        
                    const fileId = 0;
                    var sql = `INSERT INTO uploaded_files
                (
                    file_name
                    ,unique_file_name
                    ,file_size
                    ,file_extension
                    ,file_path
                    ,file_addate
                    ,file_active
                ) VALUES ?`;
                    var sqlv = [[
                            `${file === null || file === void 0 ? void 0 : file.originalname}`,
                            uniqueFileName,
                            Number(file === null || file === void 0 ? void 0 : file.size),
                            `${file === null || file === void 0 ? void 0 : file.originalname}`,
                            `pdfproductfile`,
                            `${timeStamp}`,
                            `1`
                        ]];
                    console.log(sql + ' : ' + sqlv);
                    conn.query(sql, [sqlv], (error, data, fields) => {
                        if (error) {
                            console.log(error.message);
                            return res.status(500).json({
                                success: false,
                                message: 'Error uploading file' + error.message
                            });
                        }
                        else {
                            console.log('pdf ans: ' + data.insertId);
                            const fileId = data.insertId;
                            res.json({
                                success: true,
                                fileId: fileId,
                                file_name: uniqueFileName,
                            });
                            //copy file filp book
                            (0, CreactFolder_1.CopyfileTodirectory)(`${__dirname}/../uploads/pdf/productfile/test/test.css`, `${__dirname}/../uploads/pdf/productfile/${uniqueFileName.replace('.pdf', '')}/${uniqueFileName.replace('.pdf', '.css')}`);
                            (0, CreactFolder_1.CopyfileTodirectory)(`${__dirname}/../uploads/pdf/productfile/test/test.html`, `${__dirname}/../uploads/pdf/productfile/${uniqueFileName.replace('.pdf', '')}/${uniqueFileName.replace('.pdf', '.html')}`);
                        }
                    });
                }
                else {
                    //no
                    return res.status(500).json({
                        success: false,
                        message: 'Error Creact Dirctory uploading file :',
                    });
                }
            }
            catch (error) {
                res.json({
                    success: false,
                    message: 'Error uploading file :' + error
                });
            }
        });
    }
    //Plunge
    uploadFilePlungeFilpBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, mydbcommand_1.connect)();
                const { file } = req;
                console.log(file);
                console.log(file === null || file === void 0 ? void 0 : file.originalname);
                console.log(file === null || file === void 0 ? void 0 : file.size);
                console.log(file === null || file === void 0 ? void 0 : file.buffer);
                const _f = `${file === null || file === void 0 ? void 0 : file.originalname}`;
                const _s = (file === null || file === void 0 ? void 0 : file.size);
                //file name 
                const timeStamp = new Date().toISOString().replace(/[-:.TZ]/g, "");
                const uniqueFileName = `${(0, uuid_1.v4)()}_${timeStamp}${file === null || file === void 0 ? void 0 : file.originalname}`;
                //if(CreactFolder(`${__dirname}/../uploads/pdf/productfile/${uniqueFileName}`)
                console.log(`${__dirname}/../uploads/pdf/productfile/temp/${uniqueFileName}`);
                //creact file 
                const FolderFileName1 = uniqueFileName.replace('.css', '').replace('.html', '');
                // if(CreactFolder(`${__dirname}/../uploads/pdf/productfile/temp/${FolderFileName1}`)){
                //     //ok
                const fileStream = fs_1.default.createWriteStream(`${__dirname}/../uploads/pdf/productfile/temp/${uniqueFileName}`);
                fileStream.write(file === null || file === void 0 ? void 0 : file.buffer, 'base64');
                fileStream.on('error', () => {
                    console.log('error occurred while writing to stream');
                });
                fileStream.end();
                //Add Database        
                const fileId = 0;
                var sql = `INSERT INTO uploaded_files
                (
                    file_name
                    ,unique_file_name
                    ,file_size
                    ,file_extension
                    ,file_path
                    ,file_addate
                    ,file_active
                ) VALUES ?`;
                var sqlv = [[
                        `${file === null || file === void 0 ? void 0 : file.originalname}`,
                        uniqueFileName,
                        Number(file === null || file === void 0 ? void 0 : file.size),
                        `${file === null || file === void 0 ? void 0 : file.originalname}`,
                        `filetemp`,
                        `${timeStamp}`,
                        `1`
                    ]];
                console.log(sql + ' : ' + sqlv);
                conn.query(sql, [sqlv], (error, data, fields) => {
                    if (error) {
                        console.log(error.message);
                        return res.status(500).json({
                            success: false,
                            message: 'Error uploading file' + error.message
                        });
                    }
                    else {
                        console.log('pdf ans: ' + data.insertId);
                        const fileId = data.insertId;
                        res.json({
                            success: true,
                            fileId: fileId,
                            file_name: uniqueFileName,
                        });
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
            }
            catch (error) {
                res.json({
                    success: false,
                    message: 'Error uploading file :' + error
                });
            }
        });
    }
    uploadFileScript(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, mydbcommand_1.connect)();
                const { file } = req;
                console.log(file);
                console.log(file === null || file === void 0 ? void 0 : file.originalname);
                console.log(file === null || file === void 0 ? void 0 : file.size);
                console.log(file === null || file === void 0 ? void 0 : file.buffer);
                const _f = `${file === null || file === void 0 ? void 0 : file.originalname}`;
                const _s = (file === null || file === void 0 ? void 0 : file.size);
                //file name 
                const timeStamp = new Date().toISOString().replace(/[-:.TZ]/g, "");
                const uniqueFileName = `${file === null || file === void 0 ? void 0 : file.originalname}`;
                console.log(`${__dirname}/../uploads/pdf/productfile/${uniqueFileName}`);
                (0, CreactFolder_1.DelfileFolder)(`${__dirname}/../uploads/pdf/productfile/${uniqueFileName}`);
                const fileStream = fs_1.default.createWriteStream(`${__dirname}/../uploads/pdf/productfile/${uniqueFileName}`);
                fileStream.write(file === null || file === void 0 ? void 0 : file.buffer, 'base64');
                fileStream.on('error', () => {
                    console.log('error occurred while writing to stream');
                });
                fileStream.end();
                return res.status(200).json({
                    success: true,
                    message: 'Success!',
                });
            }
            catch (error) {
                res.json({
                    success: false,
                    message: 'Error uploading file : ' + error
                });
            }
        });
    }
    chkFs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const timeStamp = new Date().toISOString().replace(/[-:.TZ]/g, "");
                const uniqueFileName = `${(0, uuid_1.v4)()}_${timeStamp}`;
                if (!(0, CreactFolder_1.default)(`${__dirname}/../uploads/pdf/productfile/${uniqueFileName}`)) {
                    return res.json({ success: false, message: 'Error uploading file :' });
                }
                else {
                    return res.json({ success: true, message: 'Uploading file Ok.' });
                }
            }
            catch (ex) {
                console.log(ex);
                return res.json({ success: false, message: ex });
            }
        });
    }
    //chkpdf
    chkchkpdfFs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const item = req.body;
                // if(!extractText(`${__dirname}/../uploads/pdf/productfile/${item.url}`, `${item.pass}`)){
                //     return res.json({ success: false , message: 'Error cut file :'})
                // }else{
                //     return res.json({ success: true , message: 'Cut file Ok.'})
                // }
            }
            catch (ex) {
                console.log(ex);
                return res.json({ success: false, message: ex });
            }
        });
    }
}
exports.default = FileController.getInstance();
