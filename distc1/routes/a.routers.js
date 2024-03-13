"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const a_controllers_1 = require("../controllers/a.controllers");
const menu_controllers_1 = require("../controllers/menu.controllers");
const router = (0, express_1.Router)();
router.route('/a/getall/').get(a_controllers_1.get_a_all);
router.route('/a/:id').get(a_controllers_1.get_a_byid);
router.route('/a/create/').post(a_controllers_1.port_a);
router.route('/a/put/').put(a_controllers_1.put_a);
router.route('/a/del/:id').delete(a_controllers_1.delete_a);
//menu
router.route('/menutab/getall/').get(menu_controllers_1.get_menu_all);
exports.default = router;
