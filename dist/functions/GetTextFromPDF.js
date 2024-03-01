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
//import pdfjsLib from 'pdfjs-dist'
// const GetTextFromPDF = async (path:string) =>{
//     try {
//         let pdf = await pdfjsLib.getDocument(path).promise;
//         let page1 = await doc.getPage(1);
//         let content = await page1.getTextContent();
//         let text = content.items.map((s)=>s.str).join("");
//         console.log(text);
//         let pages = pdf.numPages;
//       } catch (err) {
//             console.error(err);
//         return false
//       }
//       return strings;
// }
const extractText = (path, pass) => __awaiter(void 0, void 0, void 0, function* () {
    let pdf;
    return "";
});
exports.default = extractText;
