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
exports.delete_orders_basket = exports.put_orders_basket_billing_img_receipt = exports.port_orders_basket = exports.get_orders_bassket_byordersid_cutomerid = exports.get_orders_basket_byid = exports.get_orders_basket_all = void 0;
const mydbcommand_1 = require("../dbconfig/mydbcommand");
function get_orders_basket_all(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = " SELECT * FROM orders_basket";
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
exports.get_orders_basket_all = get_orders_basket_all;
function get_orders_basket_byid(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = " SELECT * FROM orders_basket where orders_id=" + req.params.id;
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
exports.get_orders_basket_byid = get_orders_basket_byid;
function get_orders_bassket_byordersid_cutomerid(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            var sql = "";
            sql += "SELECT a.*,b.*  FROM orders_basket as a inner join orders_products as b on(a.orders_id=b.orders_id)";
            if (item.orders_id > 0 && item.customers_id > 0) {
                sql += " where a.orders_id=" + item.orders_id + " and customers_id=" + item.customers_id;
            }
            else if (item.orders_id == 0 && item.customers_id > 0) {
                sql += " where a.customers_id=" + item.customers_id;
            }
            else if (item.orders_id > 0 && item.customers_id == 0) {
                sql += " where a.orders_id=" + item.orders_id;
            }
            else {
                sql += " where a.customers_id=" + item.customers_id;
            }
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
exports.get_orders_bassket_byordersid_cutomerid = get_orders_bassket_byordersid_cutomerid;
function port_orders_basket(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            var sql = `INSERT INTO orders_basket
                            (
                                 
                                 customers_id
                                ,customers_name
                                ,customers_email_address
                                ,billing_img_receipt
                                ,orders_status
                                ,orders_date_added
                                ,orders_date_finished
                                ,last_modified
                                ,date_purchased
                                ,update_user
                            ) VALUES (`;
            sql += item.customers_id;
            sql += ",'" + item.customers_name + "'";
            sql += ",'" + item.customers_email_address + "'";
            sql += ",'" + item.billing_img_receipt + "'";
            sql += "," + item.orders_status;
            sql += ",'" + item.orders_date_added + "'";
            sql += ",'" + item.orders_date_finished + "'";
            sql += ",now()"; //+ item.last_modified + "'"
            sql += ",now()"; //+ item.date_purchased + "'"
            sql += ",'" + item.update_user + "'";
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
exports.port_orders_basket = port_orders_basket;
function put_orders_basket_billing_img_receipt(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            var sql = `UPDATE orders_basket  set 
                                      billing_img_receipt = '${item.billing_img_receipt}'
                                    , update_user   = '${item.update_user}'
                                    , last_modified = now()
	            WHERE  orders_id = ${item.orders_id} and customers_id = ${item.customers_id}`;
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
exports.put_orders_basket_billing_img_receipt = put_orders_basket_billing_img_receipt;
function delete_orders_basket(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = "DELETE FROM orders_basket where orders_id =" + req.params.orders_id;
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
exports.delete_orders_basket = delete_orders_basket;
