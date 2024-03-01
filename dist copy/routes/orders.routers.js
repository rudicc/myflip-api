"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orders_controllers_1 = require("../controllers/orders.controllers");
const orders_basket_controllers_1 = require("../controllers/orders_basket.controllers");
const router = (0, express_1.Router)();
router.route('/orders/getall/').get(orders_controllers_1.get_orders_all);
router.route('/orders/:id').get(orders_controllers_1.get_orders_byid);
router.route('/orders/create/').post(orders_controllers_1.port_orders);
router.route('/orders/put/').put(orders_controllers_1.put_orders);
router.route('/orders/del/').delete(orders_controllers_1.delete_orders);
//orders basket
router.route('/orders_basket/getall/').get(orders_basket_controllers_1.get_orders_basket_all);
router.route('/orders_basket/:id').get(orders_basket_controllers_1.get_orders_basket_byid);
router.route('/orders_basket/create/').post(orders_basket_controllers_1.port_orders_basket);
router.route('/orders_basket_img/put/').put(orders_basket_controllers_1.put_orders_basket_billing_img_receipt);
router.route('/orders_basket/del/').delete(orders_basket_controllers_1.delete_orders_basket);
//get_orders_bassket_byordersid_cutomerid
router.route('/orders_basket/getordcus/').post(orders_basket_controllers_1.get_orders_bassket_byordersid_cutomerid);
exports.default = router;
