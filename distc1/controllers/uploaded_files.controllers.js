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
exports.delete_uploaded_files = exports.put_uploaded_files = exports.port_uploaded_files = exports.get_uploaded_files_byid = exports.get_uploaded_files_byfile_path = exports.get_uploaded_files_all = void 0;
const mydbcommand_1 = require("../dbconfig/mydbcommand");
function get_uploaded_files_all(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = " SELECT * FROM uploaded_files order by file_id,file_path";
            conn.query(sql, (error, data) => {
                if (error) {
                    console.log(error);
                    res.status(401).render('data', {
                        data: error,
                    });
                }
                else {
                    console.log(data);
                    var da = JSON.parse(JSON.stringify(data));
                    res.send(da);
                }
            });
        }
        catch (e) {
            console.log(e);
            return res.status(401).json({
                success: false,
                message: 'Error : ' + e
            });
        }
    });
}
exports.get_uploaded_files_all = get_uploaded_files_all;
function get_uploaded_files_byfile_path(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = " SELECT * FROM uploaded_files where file_path='" + req.params.fpath + "'";
            conn.query(sql, (error, data) => {
                if (error) {
                    console.log(error);
                    res.status(401).render('data', {
                        data: error,
                    });
                }
                else {
                    console.log(data);
                    var da = JSON.parse(JSON.stringify(data));
                    res.send(da);
                }
            });
        }
        catch (e) {
            console.log(e);
            return res.status(401).json({
                success: false,
                message: 'Error : ' + e
            });
        }
    });
}
exports.get_uploaded_files_byfile_path = get_uploaded_files_byfile_path;
function get_uploaded_files_byid(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = " SELECT * FROM uploaded_files where file_id=" + req.params.id;
            conn.query(sql, (error, data) => {
                if (error) {
                    console.log(error);
                    return res.status(401).json({
                        success: false,
                        message: 'Error : ' + error.message
                    });
                }
                else {
                    console.log(data);
                    var da = JSON.parse(JSON.stringify(data));
                    res.send(da);
                }
            });
        }
        catch (e) {
            console.log(e);
            return res.status(401).json({
                success: false,
                message: 'Error : ' + e
            });
        }
    });
}
exports.get_uploaded_files_byid = get_uploaded_files_byid;
function port_uploaded_files(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            var sql = `INSERT INTO uploaded_files
                            (
                                 file_name
                                ,unique_file_name
                                ,file_size
                                ,file_extension
                                ,file_path
                                ,file_addate
                                ,file_active
                            ) VALUES (`;
            sql += item.file_name;
            sql += ",'" + item.unique_file_name + "'";
            sql += "," + item.file_size;
            sql += ",'" + item.file_extension + "'";
            sql += ",'" + item.file_path + "'";
            sql += ",'" + item.file_addate + "'";
            sql += "," + item.file_active;
            sql += ")";
            conn.query(sql, (error, data, fields) => {
                if (error) {
                    console.log(error);
                    return res.status(401).json({
                        success: false,
                        message: 'Error : ' + error.message
                    });
                }
                else {
                    console.log(data);
                    res.json({
                        success: true,
                        message: 'post Success!',
                        fileId: data.insertId
                    });
                }
            });
        }
        catch (e) {
            console.log(e);
            return res.status(401).json({
                success: false,
                message: 'Error : ' + e
            });
        }
    });
}
exports.port_uploaded_files = port_uploaded_files;
function put_uploaded_files(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
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
            conn.query(sql, (error, data, fields) => {
                if (error) {
                    console.log(error);
                    return res.status(401).json({
                        success: false,
                        message: 'Error : ' + error.message
                    });
                }
                else {
                    console.log("Put Ok!");
                    res.json({
                        success: true,
                        message: 'Put Success!'
                    });
                }
            });
        }
        catch (e) {
            console.log(e);
            return res.status(401).json({
                success: false,
                message: 'Error : ' + e
            });
        }
    });
}
exports.put_uploaded_files = put_uploaded_files;
function delete_uploaded_files(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = "DELETE FROM uploaded_files where file_id =" + req.params.file_id;
            conn.query(sql, (error, data, fields) => {
                if (error) {
                    console.log(error);
                    return res.status(401).json({
                        success: false,
                        message: 'Error : ' + error.message
                    });
                }
                else {
                    console.log("Del Ok!");
                    res.json({
                        success: true,
                        message: 'Del Success!'
                    });
                }
            });
        }
        catch (e) {
            console.log(e);
            return res.status(401).json({
                success: false,
                message: 'Error : ' + e
            });
        }
    });
}
exports.delete_uploaded_files = delete_uploaded_files;
