import { Request, Response, NextFunction  } from "express";
import config from "../dbconfig/config";
import jwt from "jsonwebtoken";

const VerifyJWT = (req: Request, res: Response, next: NextFunction) => {
     
    const jwt_secret:string = config.server.token.jwt_secret as string;
    let token = req.headers.authorization?.split(' ')[1];
    console.log(token)
    if (token) {
        jwt.verify(token, jwt_secret, (error, decoded) => {
            if (error) {
                return res.status(404).json({
                    message: error,
                    error
                });
            } else {
                res.locals.jwt = decoded;
                next();
            }
        });
    } else {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }
};

export default VerifyJWT;