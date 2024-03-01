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
exports.get_products_home_bylikemodel = exports.get_products_home_byid = exports.get_products_home_all = void 0;
const mydbcommand_1 = require("../dbconfig/mydbcommand");
//import { PRODUCTS_HOME } from "../models/products_home.model";
function get_products_home_all(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = " SELECT * FROM products_home";
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
exports.get_products_home_all = get_products_home_all;
function get_products_home_byid(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = " SELECT * FROM products_home where id=" + req.params.id;
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
exports.get_products_home_byid = get_products_home_byid;
function get_products_home_bylikemodel(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = " SELECT * FROM products_home where model like '%" + req.params.model + "%'";
            sql += " order by model";
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
exports.get_products_home_bylikemodel = get_products_home_bylikemodel;
// export async function port_products_home(req: Request<{},any , PRODUCTS_HOME>, res: Response) {	 
//     try {        	 
//         const conn = await connect();     	 
//         const item: PRODUCTS_HOME = req.body;	 
//               var sql =  `INSERT INTO products_home
//                         (
//                              id
//                             ,cover
//                             ,category
//                             ,title
//                             ,model
//                             ,price
//                             ,qty
//                             ,author
//                             ,desc
//                             ,pview
//                             ,lang
//                         ) VALUES (`;
//                             sql +=  item.id
//                             sql += ",'" + item.cover + "'"
//                             sql += ",'" + item.category + "'"
//                             sql += ",'" + item.title + "'"
//                             sql += ",'" + item.model + "'"
//                             sql += "," + item.price
//                             sql += "," + item.qty
//                             sql += ",'" + item.author + "'"
//                             sql += ",'" + item.desc + "'"
//                             sql += "," + item.pview
//                             sql += "," + item.lang
//                             sql += ")";
//         conn.query(sql,(error, data ,fields) => {	 
//             if (error) {	 
//                 console.log(error);	 
//                 return res.status(401).json({                	 
//                   success: false,                	 
//                   message:  'Error : ' + error.message                	 
//                 })                 	 
//             } else { 	 
//                 console.log(data) ;                                    	 
//                 res.json({                	 
//                   success: true,                	 
//                   message:  'post Success!',                	 
//                    fileId: data.insertId                	 
//                 })                 	 
//             }	 
//         });             	 
//     } catch (e) {	 
//         console.log(e);      	 
//                 return res.status(401).json({                	 
//                   success: false,                	 
//                   message:  'Error : ' + e               	 
//                 }) 
//     }	 
// }	 
// export async function put_products_home(req: Request, res: Response) {	 
//     try {	 
//         const conn = await connect();    	 
//         const item: PRODUCTS_HOME = req.body; 	 
//         var sql = `UPDATE products_home  set 
//                                id = '${item.id}'
//                               ,cover = '${item.cover}'
//                               ,category = '${item.category}'
//                               ,title = '${item.title}'
//                               ,model = '${item.model}'
//                               ,price = '${item.price}'
//                               ,qty = '${item.qty}'
//                               ,author = '${item.author}'
//                               ,desc = '${item.desc}'
//                               ,pview = '${item.pview}'
//                               ,lang = '${item.lang}'
//             WHERE  id = ${item.id}`;
//         conn.query(sql,(error, data , fields) => {	 
//             if (error) {	 
//                 console.log(error);	 
//                 return res.status(401).json({                	 
//                   success: false,                	 
//                   message:  'Error : ' + error.message                	 
//                 }) 
//             } else { 	 
//                 console.log("Put Ok!"); 
//                 res.json({                	 
//                   success: true,                	 
//                   message: 'Put Success!'               	 
//                 })                 	 
//             }	 
//         });	 
//     } catch (e) {	 
//         console.log(e);      	 
//                 return res.status(401).json({                	 
//                   success: false,                	 
//                   message:  'Error : ' + e               	 
//                 }) 
//     }	 
// }	 
// export async function delete_products_home(req: Request, res: Response) {	 
//     try {	 
//         const conn = await connect();    	 
//         var sql = "DELETE FROM products_home where id =" + req.params.id;
//         conn.query(sql,(error, data , fields) => {	 
//             if (error) {	 
//                 console.log(error);	 
//                 return res.status(401).json({                	 
//                   success: false,                	 
//                   message:  'Error : ' + error.message                	 
//                 }) 
//             } else { 	 
//                 console.log("Del Ok!") ;                                    	 
//                 res.json({                	 
//                   success: true,                	 
//                   message: 'Del Success!'               	 
//                 })                 	 
//             }	 
//         });	 
//     } catch (e) {	 
//         console.log(e);      	 
//                 return res.status(401).json({                	 
//                   success: false,                	 
//                   message:  'Error : ' + e               	 
//                 }) 
//     }	 
// }
