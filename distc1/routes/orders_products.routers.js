"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orders_products_controllers_1 = require("../controllers/orders_products.controllers");
const router = (0, express_1.Router)();
router.route('/orders_products/getall/').get(orders_products_controllers_1.get_orders_products_all);
router.route('/orders_products/:id').get(orders_products_controllers_1.get_orders_products_byid);
router.route('/orders_products/create/').post(orders_products_controllers_1.port_orders_products);
router.route('/orders_products/put/').put(orders_products_controllers_1.put_orders_products);
router.route('/orders_products/del/').delete(orders_products_controllers_1.delete_orders_products);
//get by ordersid customerid
//get_orders_products_byordersid_cutomerid
router.route('/ordersid_productsid/ordersproducts/').post(orders_products_controllers_1.get_orders_products_byordersid_cutomerid);
exports.default = router;
