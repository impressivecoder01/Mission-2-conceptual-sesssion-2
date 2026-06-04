import type { Request, Response } from "express";
import authService from "../service/auth.service";
import { sendResponse } from "../../utilis/sendResponse";

export const signup = async (req: Request, res: Response)=> {
    const user = await authService.createUser(req.body)
    // console.log(req.body);
    if(!user){
        sendResponse(res, {message: "Failed to create user"}, 400)
        return
    }
    sendResponse(res, {message: "User created successfully", data : user} , 201)
}