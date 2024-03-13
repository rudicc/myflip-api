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
exports.connect = void 0;
const mysql_1 = __importDefault(require("mysql"));
const config_1 = __importDefault(require("./config"));
const mysqlconfig = {
    user: config_1.default.mysql.user,
    password: config_1.default.mysql.pass,
    host: config_1.default.mysql.host,
    database: config_1.default.mysql.database
};
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        const dbconnection = mysql_1.default.createConnection(mysqlconfig);
        const h = process.env.DATABASE_HOST;
        dbconnection.connect((err) => {
            if (err) {
                throw err;
            }
            else {
                console.log("Connected Mysql: " + h);
            }
        });
        return dbconnection;
    });
}
exports.connect = connect;
// export async function connect(): Promise<mysql.Connection>{
//     const connection = await mysql.createConnection(mysqlconfig);
//     console.log("Mysql Connec: " + connection.state);
//     connection.connect((error) => {
//         if (error) {
//             //reject(error);
//             return;
//         }
//         console.log('Mysql Connected! ' + connection.state);
//         //resolve(connection);
//     });
//     return connection;
// }
