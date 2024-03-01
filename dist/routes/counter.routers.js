"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const counter_controllers_1 = require("../controllers/counter.controllers");
const router = (0, express_1.Router)();
router.route('/counter/getall/').get(counter_controllers_1.get_counter_all);
router.route('/counter/:id').get(counter_controllers_1.get_counter_byid);
router.route('/counter/create/').post(counter_controllers_1.port_counter);
router.route('/counter/put/').put(counter_controllers_1.put_counter);
router.route('/counter/del/').delete(counter_controllers_1.delete_counter);
exports.default = router;
