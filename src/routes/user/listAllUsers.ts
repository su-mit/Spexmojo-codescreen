import { RequestHandler, Request, Response } from "express";

const user = require("../../database/schema/user");

const listUsers: RequestHandler = async (req: Request, res: Response) => {
    try {
        const listOfUsers = await user.find();
        console.log(listOfUsers);
    } catch (error: any) {
        console.log(error);
    }
};

export default listUsers;
