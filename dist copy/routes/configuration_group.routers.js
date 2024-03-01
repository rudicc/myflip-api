"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const configuration_group_controllers_1 = require("../controllers/configuration_group.controllers");
const router = (0, express_1.Router)();
router.route('/configuration_group/getall/').get(configuration_group_controllers_1.get_configuration_group_all);
router.route('/configuration_group/:id').get(configuration_group_controllers_1.get_configuration_group_byid);
router.route('/configuration_group/create/').post(configuration_group_controllers_1.port_configuration_group);
router.route('/configuration_group/put/').put(configuration_group_controllers_1.put_configuration_group);
router.route('/configuration_group/del/').delete(configuration_group_controllers_1.delete_configuration_group);
exports.default = router;