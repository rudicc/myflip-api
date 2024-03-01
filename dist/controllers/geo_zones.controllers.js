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
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_geo_zones = exports.put_geo_zones = exports.port_geo_zones = exports.get_geo_zones_byid = exports.get_geo_zones_all = void 0;
const mydbcommand_1 = require("../dbconfig/mydbcommand");
function get_geo_zones_all(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = " SELECT * FROM geo_zones";
            conn.query(sql, (error, data) => {
                if (error) {
                    console.log(error);
                    return res.status(401).json({
                        success: false,
                        message: 'Error : ' + error.message
                    });
                }
                else {
                    console.log(data);
                    var da = JSON.parse(JSON.stringify(data));
                    res.send(da);
                }
            });
        }
        catch (e) {
            console.log(e);
            return res.status(401).json({
                success: false,
                message: 'Error : ' + e
            });
        }
    });
}
exports.get_geo_zones_all = get_geo_zones_all;
function get_geo_zones_byid(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = " SELECT * FROM geo_zones where geo_zone_id=" + req.params.id;
            conn.query(sql, (error, data) => {
                if (error) {
                    console.log(error);
                    return res.status(401).json({
                        success: false,
                        message: 'Error : ' + error.message
                    });
                }
                else {
                    console.log(data);
                    var da = JSON.parse(JSON.stringify(data));
                    res.send(da);
                }
            });
        }
        catch (e) {
            console.log(e);
            return res.status(401).json({
                success: false,
                message: 'Error : ' + e
            });
        }
    });
}
exports.get_geo_zones_byid = get_geo_zones_byid;
function port_geo_zones(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            var sql = `INSERT INTO geo_zones
                            (
                                 geo_zone_name
                                ,geo_zone_description
                                ,last_modified
                                ,date_added
                            ) VALUES (`;
            sql += item.geo_zone_name;
            sql += ",'" + item.geo_zone_description + "'";
            sql += ",now()";
            sql += ",now()";
            sql += ")";
            conn.query(sql, (error, data, fields) => {
                if (error) {
                    console.log(error);
                    return res.status(401).json({
                        success: false,
                        message: 'Error : ' + error.message
                    });
                }
                else {
                    console.log(data);
                    res.json({
                        success: true,
                        message: 'post Success!',
                        fileId: data.insertId
                    });
                }
            });
        }
        catch (e) {
            console.log(e);
            return res.status(401).json({
                success: false,
                message: 'Error : ' + e
            });
        }
    });
}
exports.port_geo_zones = port_geo_zones;
function put_geo_zones(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            const item = req.body;
            var sql = `UPDATE geo_zones  set 
                                   geo_zone_id = '${item.geo_zone_id}'
                                  ,geo_zone_name = '${item.geo_zone_name}'
                                  ,geo_zone_description = '${item.geo_zone_description}'
                                  ,last_modified = '${item.last_modified}'
                                  ,date_added = '${item.date_added}'
	            WHERE  geo_zone_id = ${item.geo_zone_id}`;
            conn.query(sql, (error, data, fields) => {
                if (error) {
                    console.log(error);
                    return res.status(401).json({
                        success: false,
                        message: 'Error : ' + error.message
                    });
                }
                else {
                    console.log("Put Ok!");
                    res.json({
                        success: true,
                        message: 'Put Success!'
                    });
                }
            });
        }
        catch (e) {
            console.log(e);
            return res.status(401).json({
                success: false,
                message: 'Error : ' + e
            });
        }
    });
}
exports.put_geo_zones = put_geo_zones;
function delete_geo_zones(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, mydbcommand_1.connect)();
            var sql = "DELETE FROM geo_zones where geo_zone_id =" + req.params.geo_zone_id;
            conn.query(sql, (error, data, fields) => {
                if (error) {
                    console.log(error);
                    return res.status(401).json({
                        success: false,
                        message: 'Error : ' + error.message
                    });
                }
                else {
                    console.log("Del Ok!");
                    res.json({
                        success: true,
                        message: 'Del Success!'
                    });
                }
            });
        }
        catch (e) {
            console.log(e);
            return res.status(401).json({
                success: false,
                message: 'Error : ' + e
            });
        }
    });
}
exports.delete_geo_zones = delete_geo_zones;
