"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
exports.default = (fullname) => {
    return {
        base: path_1.default.basename(fullname, path_1.default.extname(fullname)),
        ext: path_1.default.extname(fullname)
    };
};
