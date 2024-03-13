"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const router = (0, express_1.default)();
router.post('/upload/categories/', (0, express_fileupload_1.default)({ createParentPath: true }), (req, res) => {
    try {
        let file = req.files;
        console.log(file);
        if (!req.files || Object.keys(req.files).length === 0) {
            res.status(400).send("No files were upload.");
            return;
        }
        Object.keys(req.files).forEach((key) => {
            console.log(key);
        });
        return res.json({ status: "success", message: "msg" });
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = router;
