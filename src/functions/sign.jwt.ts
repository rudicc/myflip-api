
import config from "../dbconfig/config";
import { USERS } from '../models/users.model'
import jwt from "jsonwebtoken";

const SingInJWT = (user: USERS, callback: (error: Error | null, token: string | null) => void): void =>{
 var _t = new Date().getTime();
 var exp_t = _t ;
 const jwt_secret:string = config.server.token.jwt_secret as string;
        try{
                jwt.sign(
                    {
                        id: [user.id] + ' ' + [user.email]
                    }, 
                        jwt_secret,
                    {
                        expiresIn: config.server.token.jwt_expires_in
                    },
                    (error,token) =>{
                        if(error){
                            callback(error , null);
                        }else if (token){
                            callback(null , token);
                        }
                    }
                );
        } catch (err) {
            console.log(err);
            //error: Error
            callback(null , null);
        }
};
export default SingInJWT
