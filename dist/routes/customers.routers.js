"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customers_controllers_1 = require("../controllers/customers.controllers");
const router = (0, express_1.Router)();
router.route('/customers/getall/').get(customers_controllers_1.get_customers_all);
router.route('/customers/:id').get(customers_controllers_1.get_customers_byid);
router.route('/customers/cusaddr/:id').get(customers_controllers_1.get_customers_Addressbook_byid);
router.route('/customers/create/').post(customers_controllers_1.port_customers);
router.route('/customers/put/').put(customers_controllers_1.put_customers);
router.route('/customers/del/').delete(customers_controllers_1.delete_customers);
//member
router.route('/cusmember/getall/').get(customers_controllers_1.get_customers_ismember_all);
router.route('/cusmember/:cusid').get(customers_controllers_1.get_customers_ismember_byId);
router.route('/cusmember/create/').post(customers_controllers_1.port_customers_ismember);
router.route('/cusmember/put/').put(customers_controllers_1.put_customers_ismember);
router.route('/cusmember/del/').delete(customers_controllers_1.delete_customers_ismember);
exports.default = router;
