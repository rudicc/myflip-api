"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_controllers_1 = require("../controllers/products.controllers");
const products_home_controllers_1 = require("../controllers/products_home.controllers");
const filpebook_controllers_1 = require("../controllers/filpebook.controllers");
const router = (0, express_1.Router)();
//get home  get_products_home_bylikemodel
router.route('/products/getlikemodel/:model').get(products_home_controllers_1.get_products_home_bylikemodel);
router.route('/products/getshp/').get(products_home_controllers_1.get_products_home_all);
router.route('/products/homeproducts').get(products_home_controllers_1.get_products_home_all);
//
router.route('/products/getall/').get(products_controllers_1.get_products_all);
router.route('/products/:id').get(products_controllers_1.get_products_byid);
router.route('/products/manufacturers_id/:id').get(products_controllers_1.get_products_by_manufacturers_id);
router.route('/products/create/').post(products_controllers_1.port_products);
router.route('/products/put/').put(products_controllers_1.put_products);
router.route('/products/putproductsstatus/').put(products_controllers_1.update_products_status);
router.route('/products/del/:id').delete(products_controllers_1.delete_products);
//pdf
//put_products_pdf
router.route('/productspdf/put/').put(products_controllers_1.put_products_pdf);
//css
router.route('/productscss/put/').put(products_controllers_1.put_products_css);
router.route('/productscss/putunzip/').put(products_controllers_1.put_products_css_unzip); //zip
//html	 	
router.route('/productshtml/put/').put(products_controllers_1.put_products_html);
//filpebook
router.route('/filpebooks/pid/:id').get(filpebook_controllers_1.get_filpebook_bypid);
exports.default = router;
