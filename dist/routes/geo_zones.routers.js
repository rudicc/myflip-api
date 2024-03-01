"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const geo_zones_controllers_1 = require("../controllers/geo_zones.controllers");
const router = (0, express_1.Router)();
router.route('/geo_zones/getall/').get(geo_zones_controllers_1.get_geo_zones_all);
router.route('/geo_zones/:id').get(geo_zones_controllers_1.get_geo_zones_byid);
router.route('/geo_zones/create/').post(geo_zones_controllers_1.port_geo_zones);
router.route('/geo_zones/put/').put(geo_zones_controllers_1.put_geo_zones);
router.route('/geo_zones/del/').delete(geo_zones_controllers_1.delete_geo_zones);
exports.default = router;
