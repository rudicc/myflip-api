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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update_products_status = exports.delete_products = exports.put_products_html = exports.put_products_css_unzip = exports.put_products_css = exports.put_products_pdf = exports.put_products = exports.port_products = exports.get_products_by_manufacturers_id = exports.get_products_byid = exports.get_products_all = void 0;
const mydbcommand_1 = require("../dbconfig/mydbcommand");
const decompress_1 = __importDefault(require("decompress"));
const CreactFolder_1 = require("../functions/CreactFolder");
function get_products_all(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = ""; // " SELECT products.*, products_to_categories.categories_id   FROM products INNER JOIN products_to_categories ON(products.products_id=products_to_categories.products_id) WHERE 1=1 ";
            sql = `SELECT products.*, products_to_categories.categories_id,categories_description.categories_name, products_description.products_name, products_description.products_description,products_description.products_url
					FROM products
						INNER JOIN products_description ON(products.products_id=products_description.products_id)
						INNER JOIN products_to_categories ON(products.products_id=products_to_categories.products_id)
						INNER JOIN categories ON(products_to_categories.categories_id=categories.categories_id)
						INNER JOIN categories_description ON(products_to_categories.categories_id=categories_description.categories_id)
					WHERE products_description.language_id=1
					order by categories.categories_id ,products.products_id `;
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
exports.get_products_all = get_products_all;
//by id
function get_products_byid(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = ""; //" SELECT products.*, products_to_categories.categories_id   FROM products INNER JOIN products_to_categories ON(products.products_id=products_to_categories.products_id) WHERE 1=1 " 	 
            sql = `SELECT products.*, products_to_categories.categories_id,categories_description.categories_name, products_description.products_name, products_description.products_description,products_description.products_url
					FROM products
						INNER JOIN products_description ON(products.products_id=products_description.products_id)
						INNER JOIN products_to_categories ON(products.products_id=products_to_categories.products_id)
						INNER JOIN categories ON(products_to_categories.categories_id=categories.categories_id)
						INNER JOIN categories_description ON(products_to_categories.categories_id=categories_description.categories_id)
					WHERE products_description.language_id=1`;
            sql += " and products.products_id=" + req.params.id;
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
exports.get_products_byid = get_products_byid;
//by manufacturers_id
function get_products_by_manufacturers_id(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = " SELECT * FROM products where manufacturers_id=" + req.params.id;
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
exports.get_products_by_manufacturers_id = get_products_by_manufacturers_id;
function port_products(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            item.products_date_added = "now()";
            item.products_last_modified = "now()";
            item.products_date_available = "now()";
            var d = `now()`;
            var p = item.products_price;
            var sql = `INSERT INTO products
                            (
                                 products_quantity
                                ,products_model
                                ,products_image
                                ,products_price
                                ,products_date_added
                                ,products_last_modified
                                ,products_date_available
                                ,products_weight
                                ,products_status
                                ,products_tax_class_id
                                ,manufacturers_id
                                ,products_ordered
                            ) VALUES (`;
            sql += item.products_quantity;
            sql += ",'" + item.products_model + "'";
            sql += ",'" + item.products_image + "'";
            sql += "," + item.products_price;
            sql += ",now()";
            sql += ",now()";
            sql += ",now()";
            sql += "," + item.products_weight;
            sql += "," + item.products_status;
            sql += "," + item.products_tax_class_id;
            sql += "," + item.manufacturers_id;
            sql += "," + item.products_ordered;
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
exports.port_products = port_products;
function put_products(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            //   ,products_date_added = '${item.products_date_added}'
            //'${item.products_last_modified}'
            //'${item.products_date_available}'
            var sql = `UPDATE products  set 
                                   
                                   products_quantity = '${item.products_quantity}'
                                  ,products_model = '${item.products_model}'
                                  ,products_image = '${item.products_image}'
                                  ,products_price = '${item.products_price}'
                               
                                  ,products_last_modified = now()
                                  ,products_date_available = now()
                                  ,products_weight = ${item.products_weight}
                                  ,products_status = ${item.products_status}
                                  ,products_tax_class_id = ${item.products_tax_class_id}
                                  ,manufacturers_id = ${item.manufacturers_id}
                                  ,products_ordered = ${item.products_ordered}
	            WHERE  products_id = ${item.products_id}`;
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
exports.put_products = put_products;
function put_products_pdf(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            var sql = `UPDATE products  set                                    
                                   products_pdf =   '${item.products_pdf}'
                                  ,products_pdf_id = ${item.products_pdf_id}                                  
	            WHERE  products_id = ${item.products_id}`;
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
exports.put_products_pdf = put_products_pdf;
function put_products_css(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            var sql = `UPDATE products  set                                    
                                   products_css =   '${item.products_css}'
                                  ,products_css_id = ${item.products_css_id}                                  
	            WHERE  products_id = ${item.products_id}`;
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
                    const _folder1 = `${__dirname}/../uploads/pdf/productfile/temp/${item.products_css}`;
                    const _folder2 = `${__dirname}/../uploads/pdf/productfile/${item.products_pdf.replace('.pdf', '')}/${item.products_pdf.replace('.pdf', '.css')}`;
                    const _folder3 = `${__dirname}/../uploads/pdf/productfile/${item.products_pdf.replace('.pdf', '')}/dataset.css`;
                    (0, CreactFolder_1.DelfileFolder)(_folder2);
                    (0, CreactFolder_1.DelfileFolder)(_folder3);
                    if ((0, CreactFolder_1.CopyfileTodirectory)(_folder1, _folder2)) {
                        (0, CreactFolder_1.RenamefileTodirectory)(_folder2, _folder3);
                        (0, CreactFolder_1.DelfileFolder)(_folder1);
                        res.json({
                            success: true,
                            message: 'Put Success!'
                        });
                    }
                    else {
                        res.json({
                            success: true,
                            message: 'Put Success. But Update File Not found! '
                        });
                    }
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
exports.put_products_css = put_products_css;
function put_products_css_unzip(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            var sql = `UPDATE products  set                                    
                                   products_css =   '${item.products_css}'
                                  ,products_css_id = ${item.products_css_id}                                  
	            WHERE  products_id = ${item.products_id}`;
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
                    const _folder1 = `${__dirname}/../uploads/pdf/productfile/temp/${item.products_css}`;
                    const _folder2 = `${__dirname}/../uploads/pdf/productfile/${item.products_pdf.replace('.pdf', '')}`;
                    //DelfileFolder(_folder2)
                    console.log(_folder1 + ' to. ' + _folder2);
                    try {
                        (0, decompress_1.default)(_folder1, _folder2);
                        //DelfileFolder(_folder1)
                        res.json({
                            success: true,
                            message: 'Put Success!'
                        });
                    }
                    catch (err) {
                        console.log(err);
                        res.json({
                            success: true,
                            message: 'Put Success. But Update File Not found! ' + err,
                        });
                    }
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
exports.put_products_css_unzip = put_products_css_unzip;
function put_products_html(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            var sql = `UPDATE products  set                                    
                                   products_html =   '${item.products_html}'
                                  ,products_html_id = ${item.products_html_id}                                  
	            WHERE  products_id = ${item.products_id}`;
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
                    const _folder1 = `${__dirname}/../uploads/pdf/productfile/temp/${item.products_html}`;
                    const _folder2 = `${__dirname}/../uploads/pdf/productfile/${item.products_pdf.replace('.pdf', '')}/${item.products_pdf.replace('.pdf', '.html')}`;
                    console.log('f1: ' + _folder1);
                    console.log('f2: ' + _folder2);
                    (0, CreactFolder_1.DelfileFolder)(_folder2);
                    if ((0, CreactFolder_1.CopyfileTodirectory)(_folder1, _folder2)) {
                        (0, CreactFolder_1.DelfileFolder)(_folder1);
                        res.json({
                            success: true,
                            message: 'Put Success!'
                        });
                    }
                    else {
                        res.json({
                            success: true,
                            message: 'Put Success. But Update File Not found! '
                        });
                    }
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
exports.put_products_html = put_products_html;
function delete_products(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = "DELETE FROM products where products_id =" + req.params.id;
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
exports.delete_products = delete_products;
function update_products_status(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            var sql = "UPDATE products SET products_status=" + item.products_status + " where products_id =" + item.products_id;
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
exports.update_products_status = update_products_status;
// OkPacket {
//     fieldCount: 0,
//     affectedRows: 1,
//     insertId: 2,
//     serverStatus: 2,
//     warningCount: 0,
//     message: '',
//     protocol41: true,
//     changedRows: 0
//   }
