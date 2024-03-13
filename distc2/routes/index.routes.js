"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('Chop E-Book a Signin');
});
router.get('/hi', (req, res) => {
    res.send('hi');
});
exports.default = router;
