"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../dbconfig/config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const VerifyJWT = (req, res, next) => {
    var _a;
    const jwt_secret = config_1.default.server.token.jwt_secret;
    let token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    console.log(token);
    if (token) {
        jsonwebtoken_1.default.verify(token, jwt_secret, (error, decoded) => {
            if (error) {
                return res.status(404).json({
                    message: error,
                    error
                });
            }
            else {
                res.locals.jwt = decoded;
                next();
            }
        });
    }
    else {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }
};
exports.default = VerifyJWT;
