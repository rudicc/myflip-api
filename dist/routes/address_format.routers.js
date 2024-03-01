"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const address_format_controllers_1 = require("../controllers/address_format.controllers");
const router = (0, express_1.Router)();
router.route('/address_format/getall/').get(address_format_controllers_1.get_address_format_all);
router.route('/address_format/:id').get(address_format_controllers_1.get_address_format_byid);
router.route('/address_format/create/').post(address_format_controllers_1.port_address_format);
router.route('/address_format/put/').put(address_format_controllers_1.put_address_format);
router.route('/address_format/del/').delete(address_format_controllers_1.delete_address_format);
exports.default = router;