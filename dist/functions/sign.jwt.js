"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../dbconfig/config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SingInJWT = (user, callback) => {
    var _t = new Date().getTime();
    var exp_t = _t;
    const jwt_secret = config_1.default.server.token.jwt_secret;
    try {
        jsonwebtoken_1.default.sign({
            id: user.id + ' ' + (user === null || user === void 0 ? void 0 : user.email)
        }, jwt_secret, {
            expiresIn: config_1.default.server.token.jwt_expires_in
        }, (error, token) => {
            if (error) {
                callback(error, null);
            }
            else if (token) {
                callback(null, token);
            }
        });
    }
    catch (err) {
        console.log(err);
        //error: Error
        callback(null, null);
    }
};
exports.default = SingInJWT;
