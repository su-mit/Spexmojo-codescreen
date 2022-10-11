import { RequestHandler, Request, Response } from "express";

const user = require("../../database/schema/user");

const createUser: RequestHandler = async (req: Request, res: Response) => {
    const userDeatils = req.body?.userDeatils;

    try {
        const newUser = await user.create(userDeatils);
        console.log(newUser);
        res.status(200).send(newUser);
    } catch (error: any) {
        console.log(error);
    }
};

export default createUser;
