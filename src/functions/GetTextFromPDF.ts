import fs  from 'fs'
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

 const extractText = async (path:string, pass:string) =>{
    let pdf;

 
    return ""; 
}


export default extractText