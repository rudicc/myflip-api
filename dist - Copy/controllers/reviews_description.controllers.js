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
exports.delete_reviews_description = exports.put_reviews_description = exports.port_reviews_description = exports.get_reviews_description_byid = exports.get_reviews_description_all = void 0;
const mydbcommand_1 = require("../dbconfig/mydbcommand");
function get_reviews_description_all(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = " SELECT * FROM reviews_description";
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
exports.get_reviews_description_all = get_reviews_description_all;
function get_reviews_description_byid(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = " SELECT * FROM reviews_description where reviews_id=" + req.params.id;
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
exports.get_reviews_description_byid = get_reviews_description_byid;
function port_reviews_description(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            var sql = `INSERT INTO reviews_description
                            (
                                 reviews_id
                                ,languages_id
                                ,reviews_text
                            ) VALUES (`;
            sql += item.reviews_id;
            sql += "," + item.languages_id;
            sql += ",'" + item.reviews_text + "'";
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
exports.port_reviews_description = port_reviews_description;
function put_reviews_description(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            var sql = `UPDATE reviews_description  set 
                                   reviews_id = '${item.reviews_id}'
                                  ,languages_id = '${item.languages_id}'
                                  ,reviews_text = '${item.reviews_text}'
	            WHERE  reviews_id = ${item.reviews_id}`;
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
exports.put_reviews_description = put_reviews_description;
function delete_reviews_description(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = "DELETE FROM reviews_description where reviews_id =" + req.params.reviews_id;
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
exports.delete_reviews_description = delete_reviews_description;
