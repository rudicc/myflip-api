"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orders_status_controllers_1 = require("../controllers/orders_status.controllers");
const router = (0, express_1.Router)();
router.route('/orders_status/getall/').get(orders_status_controllers_1.get_orders_status_all);
router.route('/orders_status/:id').get(orders_status_controllers_1.get_orders_status_byid);
router.route('/orders_status/create/').post(orders_status_controllers_1.port_orders_status);
router.route('/orders_status/put/').put(orders_status_controllers_1.put_orders_status);
router.route('/orders_status/del/').delete(orders_status_controllers_1.delete_orders_status);
exports.default = router;
