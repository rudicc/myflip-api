 import fs  from 'fs'

export const CreactFolder =(folderName:string) =>{
    try {
        if (!fs.existsSync(folderName)) {
          fs.mkdirSync(folderName);
        }
        return true
      } catch (err) {
        console.error(err);
        return false
      }
}

export const DelfileFolder =(folderName:string) =>{
  try {
      if (!fs.existsSync(folderName)) {
        return false
      }else{
        fs.unlinkSync(folderName)        
      }
      return true
    } catch (err) {
      console.error(err);
      return false
    }
}

export const CopyfileTodirectory =(folderfileName1:string , folderfileName2:string) =>{
  try {
      if (!fs.existsSync(folderfileName1)) {
         return false
      }else{
        fs.copyFileSync(folderfileName1, folderfileName2); 
      }
      return true
    } catch (err) {
      console.error(err);
      return false
    }
}

export const RenamefileTodirectory =(folderOldfileName1:string , folderNewfileName2:string) =>{
  try {
      if (!fs.existsSync(folderOldfileName1)) {
         return false
      }else{
        fs.renameSync(folderOldfileName1, folderNewfileName2); 
      }
      return true
    } catch (err) {
      console.error(err);
      return false
    }
}


export const ReadfileReplaceHTMLTodirectory =(fileName:string, folderfileName1:string , folderfileName2:string) =>{
  try {
      if (!fs.existsSync(folderfileName1)) {
        console.log('Not exit ' + folderfileName1)
         return false
      }else{

        fs.readFile(folderfileName1, function (err,data)
        {
          if(err){
            console.error('readFile;' + err);
            return false
          }else{
            let html = data.toString().replace("(#)",fileName);

            console.log(html)

            fs.writeFile(folderfileName2, html , function (err){
              if(err){
                console.error('writeFile;' + err);
                return false
              }
            }); 
          }
        })


    



      }
      return true
    } catch (err) {
      console.error(err);
      return false
    }
}

export default CreactFolder
