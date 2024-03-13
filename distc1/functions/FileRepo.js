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
Object.defineProperty(exports, "__esModule", { value: true });
const mydbcommand_1 = require("../dbconfig/mydbcommand");
let instance = null;
class FileRepo {
    static getInstance() {
        if (instance === null) {
            instance = new FileRepo();
            return instance;
        }
        return instance;
    }
    createFileRecord(file) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, mydbcommand_1.connect)();
                return yield new Promise((resolve, reject) => {
                    var sql = `INSERT INTO uploaded_files
                                (
                                    file_name
                                    ,unique_file_name
                                    ,file_size
                                    ,file_extension
                                ) VALUES ?`;
                    var sqlv = [[
                            file.file_name,
                            file.file_extension,
                            file.file_size,
                            file.file_extension
                        ]];
                    conn.query(sql, [sqlv], (error, data, fields) => {
                        if (error) {
                            console.log(error.message);
                            reject(0);
                        }
                        resolve(data.insertId);
                    });
                });
            }
            catch (e) {
                console.log(e);
                return 0;
            }
        });
    }
}
exports.default = FileRepo.getInstance();
