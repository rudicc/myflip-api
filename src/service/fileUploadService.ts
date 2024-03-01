import { v4 as uuidv4 } from 'uuid'
import path from 'path'
import fs from 'fs'
import fileRepo from '../functions/FileRepo'

class FileUploadService
{
    private file: Express.Multer.File

    constructor(file: Express.Multer.File) {
        this.file = file
    }

    public getFileExtension(): string {
        return path.extname(this.file.originalname)
    }

    async createFileUpload(): Promise<number> {
        const uniqueFileName = this.createUniqueFileName()
        const fileId = await this.createFileRecord(uniqueFileName)
        
        this.writeToFileStream(uniqueFileName)

        return fileId
    }

    private createUniqueFileName(): string {
        const timeStamp = new Date().toISOString().replace(/[-:.TZ]/g, "")
        return `${uuidv4()}_${timeStamp}${this.getFileExtension()}`
    }

    private async createFileRecord(unique_file_name: string): Promise<number> {
        return await fileRepo.createFileRecord({
            file_id: 0,
            file_name: this.file.originalname,
            unique_file_name,
            file_size: this.file.size,
            file_extension: this.getFileExtension(), 
            file_path : '' , 
            file_addate: '', 
            file_active: 0,
        })
    }

    private writeToFileStream(uniqueFileName: string) {
        const fileStream = fs.createWriteStream(`${__dirname}/../img/${uniqueFileName}`)
        console.log(`${__dirname}/../img/${uniqueFileName}`)
        fileStream.write(this.file.buffer, 'base64')

        fileStream.on('error', () => {
            console.log('error occurred while writing to stream')
        })
        
        fileStream.end()
    }
}

export default FileUploadService