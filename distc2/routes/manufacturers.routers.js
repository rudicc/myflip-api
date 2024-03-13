"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const manufacturers_controllers_1 = require("../controllers/manufacturers.controllers");
const router = (0, express_1.Router)();
router.route('/manufacturers/getall/').get(manufacturers_controllers_1.get_manufacturers_all);
router.route('/manufacturers/:id').get(manufacturers_controllers_1.get_manufacturers_byid);
router.route('/manufacturers/create/').post(manufacturers_controllers_1.port_manufacturers);
router.route('/manufacturers/put/').put(manufacturers_controllers_1.put_manufacturers);
router.route('/manufacturers/del/').delete(manufacturers_controllers_1.delete_manufacturers);
exports.default = router;