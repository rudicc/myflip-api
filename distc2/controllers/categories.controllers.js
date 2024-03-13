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
exports.get_categories_selection = exports.delete_categories = exports.put_categories = exports.port_categories = exports.get_categories_byid = exports.get_categories_all = void 0;
const mydbcommand_1 = require("../dbconfig/mydbcommand");
function get_categories_all(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = " SELECT * FROM categories";
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
        }
    });
}
exports.get_categories_all = get_categories_all;
function get_categories_byid(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = " SELECT * FROM categories where categories_id=" + req.params.id;
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
        }
    });
}
exports.get_categories_byid = get_categories_byid;
function port_categories(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            var sql = `INSERT INTO categories
                            (
                                 categories_image
                                ,parent_id
                                ,sort_order
                                ,date_added
                                ,last_modified
                                ,categories_detail
                            ) VALUES ?`;
            var sqlv = [[
                    item.categories_image,
                    item.parent_id,
                    item.sort_order,
                    item.date_added,
                    item.last_modified,
                    item.categories_detail
                ]];
            conn.query(sql, [sqlv], (error, data, fields) => {
                if (error) {
                    console.log(error);
                    res.status(401).render('data', {
                        data: error,
                    });
                }
                else {
                    console.log(data);
                    res.send('Save Ok!');
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.port_categories = port_categories;
function put_categories(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            var sql = `UPDATE a  set 
                                   categories_id = '${item.categories_id}'
                                  ,categories_image = '${item.categories_image}'
                                  ,parent_id = '${item.parent_id}'
                                  ,sort_order = '${item.sort_order}'
                                  ,date_added = '${item.date_added}'
                                  ,last_modified = '${item.last_modified}'
                                  ,categories_detail = '${item.categories_detail}'
	            WHERE  id = ${item.categories_id}`;
            conn.query(sql, (error, data, fields) => {
                if (error) {
                    console.log(error);
                    res.status(401).render("data", {
                        data: error,
                    });
                }
                else {
                    console.log("Put Ok!");
                    res.send("Put Ok!");
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.put_categories = put_categories;
function delete_categories(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = "DELETE FROM categories where categories_id =" + req.params.categories_id;
            conn.query(sql, (error, data, fields) => {
                if (error) {
                    console.log(error);
                    res.status(401).render("data", {
                        data: error,
                    });
                }
                else {
                    console.log("Del Ok!");
                    res.send("Del Ok!");
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.delete_categories = delete_categories;
//SELECT * FROM `categories_selection`;
function get_categories_selection(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = " SELECT * FROM categories_selection";
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
        }
    });
}
exports.get_categories_selection = get_categories_selection;
