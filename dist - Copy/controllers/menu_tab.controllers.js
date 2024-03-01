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
exports.delete_menu_tab = exports.put_menu_tab = exports.port_menu_tab = exports.get_menu_tab_byid = exports.get_menu_tab_all = void 0;
const mydbcommand_1 = require("../dbconfig/mydbcommand");
function get_menu_tab_all(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = " SELECT * FROM menu_tab";
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
exports.get_menu_tab_all = get_menu_tab_all;
function get_menu_tab_byid(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = " SELECT * FROM menu_tab where menu_id=" + req.params.id;
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
exports.get_menu_tab_byid = get_menu_tab_byid;
function port_menu_tab(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            var sql = `INSERT INTO menu_tab
                            (
                                 menu_col_code
                                ,menu_col_name_en
                                ,menu_col_name_th
                                ,menu_group_id
                                ,menu_sort
                                ,menu_active
                                ,menu_auth
                            ) VALUES (`;
            sql += item.menu_col_code;
            sql += ",'" + item.menu_col_name_en + "'";
            sql += ",'" + item.menu_col_name_th + "'";
            sql += "," + item.menu_group_id;
            sql += "," + item.menu_sort;
            sql += "," + item.menu_active;
            sql += "," + item.menu_auth;
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
exports.port_menu_tab = port_menu_tab;
function put_menu_tab(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            var sql = `UPDATE menu_tab  set 
                                   menu_id = '${item.menu_id}'
                                  ,menu_col_code = '${item.menu_col_code}'
                                  ,menu_col_name_en = '${item.menu_col_name_en}'
                                  ,menu_col_name_th = '${item.menu_col_name_th}'
                                  ,menu_group_id = '${item.menu_group_id}'
                                  ,menu_sort = '${item.menu_sort}'
                                  ,menu_active = '${item.menu_active}'
                                  ,menu_auth = '${item.menu_auth}'
	            WHERE  menu_id = ${item.menu_id}`;
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
exports.put_menu_tab = put_menu_tab;
function delete_menu_tab(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = "DELETE FROM menu_tab where menu_id =" + req.params.menu_id;
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
exports.delete_menu_tab = delete_menu_tab;
