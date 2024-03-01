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
exports.AdminExcuData = exports.delete_administrators = exports.put_administrators = exports.port_administrators = exports.get_administrators_byid = exports.get_administrators_all = void 0;
const mydbcommand_1 = require("../dbconfig/mydbcommand");
function get_administrators_all(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = " SELECT * FROM administrators";
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
exports.get_administrators_all = get_administrators_all;
function get_administrators_byid(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = " SELECT * FROM administrators where id=" + req.params.id;
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
exports.get_administrators_byid = get_administrators_byid;
function port_administrators(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            var sql = `INSERT INTO administrators
                            (
                                 user_name
                                ,user_password
                                ,email_server
                                ,email_pass
                                ,users_type_no
                            ) VALUES (`;
            sql += item.user_name;
            sql += ",'" + item.user_password + "'";
            sql += ",'" + item.email_server + "'";
            sql += ",'" + item.email_pass + "'";
            sql += "," + item.users_type_no;
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
exports.port_administrators = port_administrators;
function put_administrators(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            var sql = `UPDATE administrators  set 
                                   id = '${item.id}'
                                  ,user_name = '${item.user_name}'
                                  ,user_password = '${item.user_password}'
                                  ,email_server = '${item.email_server}'
                                  ,email_pass = '${item.email_pass}'
                                  ,users_type_no = '${item.users_type_no}'
	            WHERE  id = ${item.id}`;
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
exports.put_administrators = put_administrators;
function delete_administrators(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = "DELETE FROM administrators where id =" + req.params.id;
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
exports.delete_administrators = delete_administrators;
function AdminExcuData(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = req.body;
            conn.query(sql.QSQL, (error, data, fields) => {
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
exports.AdminExcuData = AdminExcuData;
