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
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const imports_1 = __importDefault(require("./imports"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
//App
class App {
    constructor(port) {
        this.port = port;
        this.app = (0, express_1.default)();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings() {
        this.app.set('port', this.port || process.env.PORT || 5000);
    }
    middlewares() {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)()); //open api
    }
    routes() {
        this.app.use(imports_1.default);
        this.app.use("/locales", express_1.default.static("locales"));
        this.app.use('/img/', express_1.default.static(path_1.default.join(__dirname, './uploads/img')));
        this.app.use('/product/', express_1.default.static(path_1.default.join(__dirname, './uploads/img/product')));
        this.app.use('/receipts/', express_1.default.static(path_1.default.join(__dirname, './uploads/img/receipts')));
        this.app.use('/files/', express_1.default.static(path_1.default.join(__dirname, './uploads/files')));
        this.app.use('/pdf/', express_1.default.static(path_1.default.join(__dirname, './uploads/pdf')));
        this.app.use('/productfile/', express_1.default.static(path_1.default.join(__dirname, './uploads/pdf/productfile')));
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get('port'));
            console.log('Server on port', this.app.get('port'));
        });
    }
}
exports.App = App;
