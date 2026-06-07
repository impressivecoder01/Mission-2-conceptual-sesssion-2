// import { platform } from "node:os";
import { sign } from "node:crypto";
import config from "../config";
import type { RUser } from "../types";
import jwt from "jsonwebtoken"

export const signToken = (payload: RUser) =>  {
    //access token=> data access
    // refresh token=> access token abr generate korbe
    const accessToken = jwt.sign(payload, config.jwt_secret,{
        expiresIn: "2d"
    })
    const refreshToken = jwt.sign(payload, config.refresh_secret,{
        expiresIn: "2d"
    })
    return {accessToken, refreshToken}
}
// console.log(signToken({age: 33, email: 'jwt@gmail.com', name: 'test', role: "admin"}));