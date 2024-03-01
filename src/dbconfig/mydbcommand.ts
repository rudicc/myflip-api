import mysql,{createPool, Pool} from 'mysql';
import config from './config';

const mysqlconfig = {
    user: config.mysql.user,
    password: config.mysql.pass,
    host: config.mysql.host,
    database: config.mysql.database
};



export async function connect(): Promise<mysql.Connection>{
    const dbconnection = mysql.createConnection(
        mysqlconfig
    )
    
    const h = process.env.DATABASE_HOST
    dbconnection.connect((err) =>{
        if(err){
            throw err
        }
        else{
            console.log("Connected Mysql: " + h);
        }
    })
    return dbconnection;
}

// export async function connect(): Promise<mysql.Connection>{
//     const connection = await mysql.createConnection(mysqlconfig);
    
//     console.log("Mysql Connec: " + connection.state);
//     connection.connect((error) => {
//         if (error) {
//             //reject(error);
//             return;
//         }
//         console.log('Mysql Connected! ' + connection.state);
//         //resolve(connection);
//     });

//     return connection;
// }