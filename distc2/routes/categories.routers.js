"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categories_controllers_1 = require("../controllers/categories.controllers");
const categories_bysort_controllers_1 = require("../controllers/categories_bysort.controllers");
const router = (0, express_1.Router)();
router.route('/categories/getsort/').get(categories_bysort_controllers_1.get_categories_sort_order);
router.route('/categories/gettopbook/:id').get(categories_bysort_controllers_1.get_categories_topbook);
//
router.route('/categories/getselection/').get(categories_controllers_1.get_categories_selection);
router.route('/categories/getall/').get(categories_controllers_1.get_categories_all);
router.route('/categories/:id').get(categories_controllers_1.get_categories_byid);
router.route('/categories/create/').post(categories_controllers_1.port_categories);
router.route('/categories/put/').put(categories_controllers_1.put_categories);
router.route('/categories/del/').delete(categories_controllers_1.delete_categories);
exports.default = router;
