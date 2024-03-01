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
exports.get_filpebook_bypid = void 0;
const mydbcommand_1 = require("../dbconfig/mydbcommand");
function get_filpebook_bypid(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            try {
                const conn = yield (0, mydbcommand_1.connect)();
                var sql = `SELECT products.*, products_to_categories.categories_id,categories_description.categories_name, products_description.products_name, products_description.products_description,products_description.products_url
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
                        //console.log(data) ;                                    	 
                        //var da = JSON.parse(JSON.stringify(data)); res.send(da) ;  
                        const _folder = `${__dirname}/../uploads/pdf/productfile/${data[0].products_pdf.replace('.pdf', '')}/${data[0].products_pdf.replace('.pdf', '.html')}`;
                        console.log(_folder);
                        res.sendFile(_folder, function (err) {
                            console.log('sendfile err : ' + err);
                        });
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.get_filpebook_bypid = get_filpebook_bypid;
