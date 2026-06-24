import type { Request, Response } from "express";
import authService from "../service/auth.service";
import { sendResponse } from "../../utilis/sendResponse";
import { signToken } from "../../utilis/jwt";
// import { send } from "node:process";

export const signup = async (req: Request, res: Response)=> {
    const user = await authService.createUser(req.body)
    // console.log(req.body);
    if(!user){
        sendResponse(res, {message: "Failed to create user"}, 400)
        return
    }
    sendResponse(res, {message: "User created successfully", data : user} , 201)
}
export const login = async (req: Request, res: Response)=> {
    // console.log(req.body);
    // 
    //user er email password check 
    //user validate , signtoken
    const {email,password} = req.body
    // const user = await authService.createUser(req.body)
    const user = await authService.validateUser(email,password)
    if(!user){
        sendResponse(res, {message: "Invalid email or password"}, 401)
        return
    }
    //if this is true user is in our database
    const {accessToken, refreshToken} = signToken(user)
    const result = {
        user: user,
        accessToken, refreshToken
    }
    return sendResponse(res, {message: "User login successful", data: result})
}