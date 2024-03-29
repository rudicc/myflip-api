"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customers_basket_controllers_1 = require("../controllers/customers_basket.controllers");
const router = (0, express_1.Router)();
router.route('/customers_basket/getall/').get(customers_basket_controllers_1.get_customers_basket_all);
router.route('/customers_basket/:id').get(customers_basket_controllers_1.get_customers_basket_byid);
router.route('/customers_basket/create/').post(customers_basket_controllers_1.port_customers_basket);
router.route('/customers_basket/put/').put(customers_basket_controllers_1.put_customers_basket);
router.route('/customers_basket/del/').delete(customers_basket_controllers_1.delete_customers_basket);
exports.default = router;
