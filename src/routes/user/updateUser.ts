import { RequestHandler, Request, Response } from "express";

const user = require("../../database/schema/user");

const updateUser: RequestHandler = async (req: Request, res: Response) => {
    const userDeatils = req.body?.userDeatils;

    try {
        const updatedUser = await user.replaceOne(
            { _id: userDeatils._id },
            userDeatils
        );
        console.log(updatedUser);
        res.status(200).json({ message: "Updated user successfully" });
    } catch (error: any) {
        console.log(error);
    }
};
export default updateUser;
