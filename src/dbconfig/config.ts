import dotenv from 'dotenv';

dotenv.config();

const MYSQL_HOST = process.env.DATABASE_HOST || 'localhost';
const MYSQL_DATABASE = process.env.DATABASE_NAME || 'supercooldb';
const MYSQL_USER = process.env.DATABASE_USER || 'superuser';
const MYSQL_PASS = process.env.DATABASE_PASSWORD || 'roseville';

const MYSQL = {
    host: MYSQL_HOST,
    database: MYSQL_DATABASE,
    user: MYSQL_USER,
    pass: MYSQL_PASS
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 5000;

const jwt_secret = process.env.JWT_SECRET;
const jwt_expires_in = process.env.JWT_EXPIRES_IN;
const jwt_cookie_expires =  process.env.JWT_COOKIE_EXPIRES;


const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
    token: {
        jwt_secret: jwt_secret,
        jwt_expires_in: jwt_expires_in,
        jwt_cookie_expires: jwt_cookie_expires
    }
};



const config = {
    mysql: MYSQL,
    server: SERVER
};



export default config;