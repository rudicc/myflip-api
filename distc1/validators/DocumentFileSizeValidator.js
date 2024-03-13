"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DocumentFileSizeValidator {
    constructor(fileSize) {
        this.maxFileSizeInBytes = 20971520;
        this.fileSizeInBytes = fileSize;
    }
    validateFileSize() {
        return this.fileSizeInBytes <= this.maxFileSizeInBytes;
    }
    getErrorMessage() {
        return 'Maximum file size accepted is 20MB.';
    }
}
exports.default = DocumentFileSizeValidator;
