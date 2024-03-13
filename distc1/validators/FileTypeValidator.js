"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FileTypeValidator {
    constructor(fileType, validTypes) {
        this.fileType = fileType;
        this.validTypes = validTypes;
    }
    validateFileType() {
        return this.validTypes.includes(this.fileType);
    }
    getErrorMessage() {
        return `${this.fileType} is not an accepted file type.`;
    }
}
exports.default = FileTypeValidator;
