"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lngs_controllers_1 = require("../controllers/lngs.controllers");
const router = (0, express_1.Router)();
router.route('/lng/:id').get(lngs_controllers_1.get_lang);
exports.default = router;
