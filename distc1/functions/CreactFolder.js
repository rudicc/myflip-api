"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadfileReplaceHTMLTodirectory = exports.RenamefileTodirectory = exports.CopyfileTodirectory = exports.DelfileFolder = exports.CreactFolder = void 0;
const fs_1 = __importDefault(require("fs"));
const CreactFolder = (folderName) => {
    try {
        if (!fs_1.default.existsSync(folderName)) {
            fs_1.default.mkdirSync(folderName);
        }
        return true;
    }
    catch (err) {
        console.error(err);
        return false;
    }
};
exports.CreactFolder = CreactFolder;
const DelfileFolder = (folderName) => {
    try {
        if (!fs_1.default.existsSync(folderName)) {
            return false;
        }
        else {
            fs_1.default.unlinkSync(folderName);
        }
        return true;
    }
    catch (err) {
        console.error(err);
        return false;
    }
};
exports.DelfileFolder = DelfileFolder;
const CopyfileTodirectory = (folderfileName1, folderfileName2) => {
    try {
        if (!fs_1.default.existsSync(folderfileName1)) {
            return false;
        }
        else {
            fs_1.default.copyFileSync(folderfileName1, folderfileName2);
        }
        return true;
    }
    catch (err) {
        console.error(err);
        return false;
    }
};
exports.CopyfileTodirectory = CopyfileTodirectory;
const RenamefileTodirectory = (folderOldfileName1, folderNewfileName2) => {
    try {
        if (!fs_1.default.existsSync(folderOldfileName1)) {
            return false;
        }
        else {
            fs_1.default.renameSync(folderOldfileName1, folderNewfileName2);
        }
        return true;
    }
    catch (err) {
        console.error(err);
        return false;
    }
};
exports.RenamefileTodirectory = RenamefileTodirectory;
const ReadfileReplaceHTMLTodirectory = (fileName, folderfileName1, folderfileName2) => {
    try {
        if (!fs_1.default.existsSync(folderfileName1)) {
            console.log('Not exit ' + folderfileName1);
            return false;
        }
        else {
            fs_1.default.readFile(folderfileName1, function (err, data) {
                if (err) {
                    console.error('readFile;' + err);
                    return false;
                }
                else {
                    let html = data.toString().replace("(#)", fileName);
                    console.log(html);
                    fs_1.default.writeFile(folderfileName2, html, function (err) {
                        if (err) {
                            console.error('writeFile;' + err);
                            return false;
                        }
                    });
                }
            });
        }
        return true;
    }
    catch (err) {
        console.error(err);
        return false;
    }
};
exports.ReadfileReplaceHTMLTodirectory = ReadfileReplaceHTMLTodirectory;
exports.default = exports.CreactFolder;
