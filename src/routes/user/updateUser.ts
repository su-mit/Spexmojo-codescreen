import { RequestHandler, Request, Response } from "express";

const user = require("../../database/schema/user");

const updateUser: RequestHandler = async (req: Request, res: Response) => {
    const userDeatils = req.body?.userDeatils;

    try {
        const updatedUser = await user.replaceOne(
            { id: userDeatils.id },
            userDeatils
        );
        console.log(updatedUser);
    } catch (error: any) {
        console.log(error);
    }
};

export default updateUser;
