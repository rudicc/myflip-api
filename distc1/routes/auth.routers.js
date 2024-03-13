"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controllers_1 = require("../controllers/auth.controllers");
const verify_jwt_1 = __importDefault(require("../functions/verify.jwt"));
const router = (0, express_1.Router)();
// router.route('/a/getall/').get(get_a_all);	
// router.route('/a/:id').get(get_a_byid);	
// router.route('/a/create/').post(port_a);	
// router.route('/a/put/').put(put_a);	
// router.route('/a/del/').delete(delete_a);	
router.route('/auth/getuser/').get(auth_controllers_1.get_user);
router.route('/auth/register/').post(auth_controllers_1.registers);
router.route('/auth/signin/').post(auth_controllers_1.signin);
router.get('/auth/validate/', verify_jwt_1.default, auth_controllers_1.validateToken);
//	
router.route('/auth/signin-plunge/').post(auth_controllers_1.signinPlunge);
//	
router.route('/auth/signin-ad/').post(auth_controllers_1.signinAddmin);
//filp book
router.route('/auth/filpebook/').post(auth_controllers_1.signinUserFilpbook);
exports.default = router;
