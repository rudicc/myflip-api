"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinUserFilpbook = exports.signinAddmin = exports.signinPlunge = exports.validateToken = exports.signin = exports.registers = exports.get_user = void 0;
const mydbcommand_1 = require("../dbconfig/mydbcommand");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config_1 = __importDefault(require("../dbconfig/config"));
const sign_jwt_1 = __importDefault(require("../functions/sign.jwt"));
function get_user(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            var da = JSON.parse(JSON.stringify(item));
            res.send(da);
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.get_user = get_user;
function registers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            let hashedPassword = yield bcryptjs_1.default.hash(item.customers_password, 8);
            console.log('hashedPassword: ' + hashedPassword);
            var sql = "select customers_email_address from customers where customers_email_address = '" + [item.customers_email_address] + "'";
            conn.query(sql, (error, data) => __awaiter(this, void 0, void 0, function* () {
                if (error) {
                    console.log(error);
                    res.status(401).render('data', {
                        msg: "error! " + error,
                        msg_type: "error",
                    });
                }
                else {
                    if (data[0]) {
                        console.log(data[0]);
                        // res.status(500).render('data', {	  
                        //     msg: "Email id already Taken.",
                        //     msg_type: "error",                   	 
                        // });	 
                        return res.status(500).json({
                            msg: "Email id already Taken.",
                            msg_type: "error",
                        });
                    }
                    else {
                        console.log(data);
                        //var da = JSON.parse(JSON.stringify(data)); res.send(da) ; 
                        item.customers_gender = '0';
                        //item.customers_dob ="now()"
                        item.customers_default_address_id = 0;
                        item.customers_password = hashedPassword;
                        var sql = `INSERT INTO customers
                (
                     customers_gender
                    ,customers_firstname
                    ,customers_lastname                 
                    ,customers_email_address
                    ,customers_default_address_id
                    ,customers_telephone
                    ,customers_fax
                    ,customers_password
                    ,customers_newsletter
                ) VALUES ?`;
                        var sqlv = [[
                                item.customers_gender,
                                item.customers_firstname,
                                item.customers_lastname,
                                item.customers_email_address,
                                item.customers_default_address_id,
                                item.customers_telephone,
                                item.customers_fax,
                                item.customers_password,
                                item.customers_newsletter
                            ]];
                        conn.query(sql, [sqlv], (error, data, fields) => {
                            if (error) {
                                console.log(error);
                                res.status(401).render('data', {
                                    data: error,
                                    msg: "found error: " + error + "  pleass find agin!",
                                    msg_type: "error",
                                });
                            }
                            else {
                                console.log(data);
                                // SenderMailOTP(email);                                 	 
                                console.log(data);
                                res.json({
                                    success: true,
                                    message: 'post Success!',
                                    fileId: data.insertId
                                });
                            }
                        });
                    }
                }
            }));
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.registers = registers;
function signin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            console.log(item.email + ' - ' + item.password);
            if (!item.email || !item.password) {
                return res.status(400).json({
                    msg: "Please Enter Your Email and Password"
                });
            }
            var sql = "select * from customers where customers_email_address = '" + [item.email] + "'";
            conn.query(sql, (error, result) => __awaiter(this, void 0, void 0, function* () {
                if (error) {
                    console.log(error);
                    return res.status(401).json({
                        msg: 'Email not found.'
                    });
                }
                else {
                    console.log(result);
                    /*      if(result[0].customers_id==null){
                              return res.status(401).json({
                                  success: false,
                                  message:  'Data not found.',
                              });
                          }
                    */
                    //var da = JSON.parse(JSON.stringify(data)); res.send(da) ; 
                    console.log(result[0].customers_id);
                    if (!(yield bcryptjs_1.default.compare(item.password, result[0].customers_password))) {
                        console.log("Bcrypt not sucess ! Please Enter Your Email and Password");
                        return res.status(401).json({
                            msg: "Bcrypt not sucess ! Please Enter Your Email and Password"
                        });
                    }
                    else if (result) {
                        item.id = result[0].customers_id;
                        const jwt_secret = config_1.default.server.token.jwt_secret;
                        const token = jsonwebtoken_1.default.sign({ id: item.id }, jwt_secret, {
                            expiresIn: config_1.default.server.token.jwt_expires_in,
                        });
                        console.log(token);
                        if (token) {
                            return res.status(200).json({
                                msg: 'Auth Successful',
                                token,
                                user: result[0].customers_firstname,
                                uid: result[0].customers_id
                            });
                        }
                        else {
                            return res.status(401).json({
                                msg: 'Unable to Sign',
                                error: "Not token"
                            });
                        }
                        // SingInJWT(item,(_error , token) =>{
                        //     if(_error){
                        //         return res.status(401).json({
                        //             msg: 'Unable to Sign',
                        //             error: _error
                        //         })
                        //     } else if (token){
                        //         return res.status(200).json({
                        //             msg: 'Auth Successful',
                        //             token, 
                        //             user: result[0].customers_firstname,
                        //             uid: result[0].customers_id
                        //         })
                        //     } 
                        // })
                    }
                }
            }));
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.signin = signin;
function validateToken(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        return res.status(200).json({
            success: true,
            message: 'Token(s) validated' + res
        });
    });
}
exports.validateToken = validateToken;
function signinPlunge(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            console.log(item.email + ' - ' + item.password);
            if (!item.email || !item.password) {
                return res.status(400).json({
                    msg: "Please Enter Your Email and Password"
                });
            }
            var sql = "select * from customers where customers_email_address = '" + [item.email] + "'";
            conn.query(sql, (error, result) => __awaiter(this, void 0, void 0, function* () {
                if (error) {
                    console.log(error);
                    return res.status(401).json({
                        msg: 'Email not found.'
                    });
                }
                else {
                    console.log(result);
                    if (result[0] == null) {
                        return res.status(401).json({
                            success: false,
                            message: 'Data not found.',
                        });
                    }
                    //var da = JSON.parse(JSON.stringify(data)); res.send(da) ; 
                    if (!(yield bcryptjs_1.default.compare(item.password, result[0].customers_password))) {
                        console.log("Bcrypt not sucess ! Please Enter Your Email and Password");
                        return res.status(401).json({
                            msg: "Bcrypt not sucess ! Please Enter Your Email and Password"
                        });
                    }
                    else if (result) {
                        item.id = result[0].customers_id;
                        (0, sign_jwt_1.default)(item, (_error, token) => {
                            if (_error) {
                                return res.status(401).json({
                                    msg: 'Unable to Sign',
                                    error: _error
                                });
                            }
                            else if (token) {
                                return res.status(200).json({
                                    msg: 'Auth Successful',
                                    token,
                                    user: result[0].customers_firstname,
                                    uid: result[0].customers_id
                                });
                            }
                        });
                    }
                }
            }));
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.signinPlunge = signinPlunge;
//addmin
function signinAddmin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            console.log(item.email + ' - ' + item.password);
            if (!item.email || !item.password) {
                return res.status(400).json({
                    msg: "Please Enter Your Email and Password"
                });
            }
            var sql = " select a.*,b.id as bid ,b.users_type_no as utypeno from customers as a inner join administrators as b on(a.customers_email_address=b.email_server)";
            sql += " where customers_email_address = '" + [item.email] + "'";
            sql += " and  email_server = '" + [item.email] + "'";
            conn.query(sql, (error, result) => __awaiter(this, void 0, void 0, function* () {
                if (error) {
                    console.log(error);
                    return res.status(401).json({
                        msg: 'Email not found.'
                    });
                }
                else {
                    console.log(result);
                    if (result[0] == null) {
                        return res.status(401).json({
                            success: false,
                            message: 'Data not found.',
                        });
                    }
                    //var da = JSON.parse(JSON.stringify(data)); res.send(da) ; 
                    if (!(yield bcryptjs_1.default.compare(item.password, result[0].customers_password))) {
                        console.log("Bcrypt not sucess ! Please Enter Your Email and Password");
                        return res.status(401).json({
                            msg: "Bcrypt not sucess ! Please Enter Your Email and Password"
                        });
                    }
                    else if (result) {
                        item.id = result[0].customers_id;
                        (0, sign_jwt_1.default)(item, (_error, token) => {
                            if (_error) {
                                return res.status(401).json({
                                    msg: 'Unable to Sign',
                                    error: _error
                                });
                            }
                            else if (token) {
                                return res.status(200).json({
                                    msg: 'Auth Successful',
                                    token,
                                    user: result[0].customers_firstname,
                                    uid: result[0].customers_id
                                });
                            }
                        });
                    }
                }
            }));
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.signinAddmin = signinAddmin;
//check auth user read filp 
//USERS_RAED_FLIPBOOK
function signinUserFilpbook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            console.log(item.email + ' - ' + item.password + ' - ' + item.passkey);
            if (!item.email || !item.passkey || !item.password) {
                return res.status(400).json({
                    msg: "Please Enter Your Email and Password"
                });
            }
            var sql = "select * from customers where customers_email_address = '" + [item.email] + "'";
            conn.query(sql, (error, result) => __awaiter(this, void 0, void 0, function* () {
                if (error) {
                    console.log(error);
                    return res.status(401).json({
                        success: false,
                        message: 'Email not found. : ' + error.message
                    });
                }
                else {
                    console.log(result);
                    if (result[0] == null) {
                        return res.status(401).json({
                            success: false,
                            message: 'Data not found.',
                        });
                    }
                    //var da = JSON.parse(JSON.stringify(data)); res.send(da) ; 
                    if (!(yield bcryptjs_1.default.compare(item.password, result[0].customers_password))) {
                        console.log("Bcrypt not sucess ! Please Enter Your Email and Password");
                        return res.status(401).json({
                            success: false,
                            message: "Bcrypt not sucess ! Please Enter Your Email and Password"
                        });
                    }
                    else if (result) {
                        item.id = result[0].customers_id;
                        (0, sign_jwt_1.default)(item, (_error, token) => {
                            if (_error) {
                                return res.status(401).json({
                                    success: false,
                                    message: 'Error : ' + _error.message
                                });
                            }
                            else if (token) {
                                var sqls = "SELECT customers_id, customers_email_address, orders_id, products_id, pdfname, pathfile FROM odpid_key where odpid='" + item.passkey + "'";
                                conn.query(sqls, (error, data) => __awaiter(this, void 0, void 0, function* () {
                                    if (error) {
                                        console.log(error);
                                        return res.status(401).json({
                                            success: false,
                                            message: 'Error : ' + error.message
                                        });
                                    }
                                    else {
                                        //console.log(data) ;                                    	 
                                        //var da = JSON.parse(JSON.stringify(data));
                                        //res.send(da) ; 
                                        try {
                                            return res.json({
                                                success: true,
                                                message: 'Success',
                                                pdfname: data[0].pdfname,
                                                pathfile: data[0].pathfile
                                            });
                                        }
                                        catch (error) {
                                            return res.status(401).json({
                                                success: false,
                                                message: 'Error : ' + error
                                            });
                                        }
                                    }
                                }));
                            }
                        });
                    }
                }
            }));
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.signinUserFilpbook = signinUserFilpbook;
