"use strict";
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
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const FileRepo_1 = __importDefault(require("../functions/FileRepo"));
class FileUploadService {
    constructor(file) {
        this.file = file;
    }
    getFileExtension() {
        return path_1.default.extname(this.file.originalname);
    }
    createFileUpload() {
        return __awaiter(this, void 0, void 0, function* () {
            const uniqueFileName = this.createUniqueFileName();
            const fileId = yield this.createFileRecord(uniqueFileName);
            this.writeToFileStream(uniqueFileName);
            return fileId;
        });
    }
    createUniqueFileName() {
        const timeStamp = new Date().toISOString().replace(/[-:.TZ]/g, "");
        return `${(0, uuid_1.v4)()}_${timeStamp}${this.getFileExtension()}`;
    }
    createFileRecord(unique_file_name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield FileRepo_1.default.createFileRecord({
                file_id: 0,
                file_name: this.file.originalname,
                unique_file_name,
                file_size: this.file.size,
                file_extension: this.getFileExtension(),
                file_path: '',
                file_addate: '',
                file_active: 0,
            });
        });
    }
    writeToFileStream(uniqueFileName) {
        const fileStream = fs_1.default.createWriteStream(`${__dirname}/../img/${uniqueFileName}`);
        console.log(`${__dirname}/../img/${uniqueFileName}`);
        fileStream.write(this.file.buffer, 'base64');
        fileStream.on('error', () => {
            console.log('error occurred while writing to stream');
        });
        fileStream.end();
    }
}
exports.default = FileUploadService;
