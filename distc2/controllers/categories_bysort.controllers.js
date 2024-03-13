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
exports.get_categories_topbook = exports.get_categories_sort_order = void 0;
const mydbcommand_1 = require("../dbconfig/mydbcommand");
function get_categories_sort_order(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = " SELECT * FROM categories where parent_id=0 and sort_order>0 order by sort_order";
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
exports.get_categories_sort_order = get_categories_sort_order;
function get_categories_topbook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = "SELECT a.*,b.* FROM categories_parent as a inner join categories as b on(a.parent_id=b.parent_id) where a.parent_id = " + req.params.id;
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
exports.get_categories_topbook = get_categories_topbook;
