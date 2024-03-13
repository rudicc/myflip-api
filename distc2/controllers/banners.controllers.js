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
exports.delete_banners = exports.put_banners = exports.port_banners = exports.get_banners_byid = exports.get_banners_all = void 0;
const mydbcommand_1 = require("../dbconfig/mydbcommand");
function get_banners_all(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = " SELECT * FROM banners";
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
exports.get_banners_all = get_banners_all;
function get_banners_byid(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = " SELECT * FROM banners where banners_id=" + req.params.id;
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
exports.get_banners_byid = get_banners_byid;
function port_banners(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            var sql = `INSERT INTO banners
                            (
                                 banners_title
                                ,banners_url
                                ,banners_image
                                ,banners_group
                                ,banners_html_text
                                ,expires_impressions
                                ,expires_date
                                ,date_scheduled
                                ,date_added
                                ,date_status_change
                                ,status
                            ) VALUES (`;
            sql += item.banners_title;
            sql += ",'" + item.banners_url + "'";
            sql += ",'" + item.banners_image + "'";
            sql += ",'" + item.banners_group + "'";
            sql += ",'" + item.banners_html_text + "'";
            sql += "," + item.expires_impressions;
            sql += ",now()";
            sql += ",now()";
            sql += ",now()";
            sql += ",now()";
            sql += "," + item.status;
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
exports.port_banners = port_banners;
function put_banners(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            var sql = `UPDATE banners  set 
                                   banners_id = '${item.banners_id}'
                                  ,banners_title = '${item.banners_title}'
                                  ,banners_url = '${item.banners_url}'
                                  ,banners_image = '${item.banners_image}'
                                  ,banners_group = '${item.banners_group}'
                                  ,banners_html_text = '${item.banners_html_text}'
                                  ,expires_impressions = '${item.expires_impressions}'
                                  ,expires_date = '${item.expires_date}'
                                  ,date_scheduled = '${item.date_scheduled}'
                                  ,date_added = '${item.date_added}'
                                  ,date_status_change = '${item.date_status_change}'
                                  ,status = '${item.status}'
	            WHERE  banners_id = ${item.banners_id}`;
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
exports.put_banners = put_banners;
function delete_banners(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = "DELETE FROM banners where banners_id =" + req.params.banners_id;
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
exports.delete_banners = delete_banners;
