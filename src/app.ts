import express, { Application } from "express";
import morgan from 'morgan'; 
import app from "./imports";
import hbs from 'hbs'

import cors from 'cors';
import path from "path";
//App
export class App {
    app: Application;

    constructor(private port?: number | string)
    {
        this.app  = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 5000);
    }

    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(cors()); //open api
    }

    private routes() {
        this.app.use(app); 
        this.app.use("/locales", express.static("locales"));
        this.app.use('/img/' , express.static(path.join(__dirname,'./uploads/img')));
        this.app.use('/product/' , express.static(path.join(__dirname,'./uploads/img/product')));
        this.app.use('/receipts/' , express.static(path.join(__dirname,'./uploads/img/receipts')));
        this.app.use('/files/' , express.static(path.join(__dirname,'./uploads/files')));     
        this.app.use('/pdf/' , express.static(path.join(__dirname,'./uploads/pdf')));   
        this.app.use('/productfile/' , express.static(path.join(__dirname,'./uploads/pdf/productfile'))); 
                 
    }

    async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
}