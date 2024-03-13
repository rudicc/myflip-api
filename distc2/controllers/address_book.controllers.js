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
exports.delete_address_book = exports.put_address_book = exports.port_address_book = exports.get_address_book_bycustomerId = exports.get_address_book_byid = exports.get_address_book_all = void 0;
const mydbcommand_1 = require("../dbconfig/mydbcommand");
function get_address_book_all(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = " SELECT * FROM address_book";
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
exports.get_address_book_all = get_address_book_all;
function get_address_book_byid(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = " SELECT * FROM address_book where address_book_id=" + req.params.id;
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
exports.get_address_book_byid = get_address_book_byid;
function get_address_book_bycustomerId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = " SELECT * FROM address_book where customers_id=" + req.params.id;
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
exports.get_address_book_bycustomerId = get_address_book_bycustomerId;
function port_address_book(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            var sql = `INSERT INTO address_book
                            (
                                 customers_id
                                ,entry_gender
                                ,entry_company
                                ,entry_firstname
                                ,entry_lastname
                                ,entry_street_address
                                ,entry_suburb
                                ,entry_postcode
                                ,entry_city
                                ,entry_state
                                ,entry_country_id
                                ,entry_zone_id
                            ) VALUES (`;
            sql += item.customers_id;
            sql += ",'" + item.entry_gender + "'";
            sql += ",'" + item.entry_company + "'";
            sql += ",'" + item.entry_firstname + "'";
            sql += ",'" + item.entry_lastname + "'";
            sql += ",'" + item.entry_street_address + "'";
            sql += ",'" + item.entry_suburb + "'";
            sql += ",'" + item.entry_postcode + "'";
            sql += ",'" + item.entry_city + "'";
            sql += ",'" + item.entry_state + "'";
            sql += "," + item.entry_country_id;
            sql += "," + item.entry_zone_id;
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
exports.port_address_book = port_address_book;
function put_address_book(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            //address_book_id = '${item.address_book_id}' ,customers_id = '${item.customers_id}'
            var sql = `UPDATE address_book  set 
                                  
                                 
                                   entry_gender = ${item.entry_gender}
                                  ,entry_company = '${item.entry_company}'
                                  ,entry_firstname = '${item.entry_firstname}'
                                  ,entry_lastname = '${item.entry_lastname}'
                                  ,entry_street_address = '${item.entry_street_address}'
                                  ,entry_suburb = '${item.entry_suburb}'
                                  ,entry_postcode = '${item.entry_postcode}'
                                  ,entry_city = '${item.entry_city}'
                                  ,entry_state = '${item.entry_state}'
                                  ,entry_country_id = ${item.entry_country_id}
                                  ,entry_zone_id = ${item.entry_zone_id}
	            WHERE  address_book_id = ${item.address_book_id}  and  customers_id = ${item.customers_id} `;
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
exports.put_address_book = put_address_book;
function delete_address_book(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = "DELETE FROM address_book where address_book_id =" + req.params.address_book_id;
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
exports.delete_address_book = delete_address_book;
