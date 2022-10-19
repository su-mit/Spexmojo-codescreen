import { RequestHandler, Request, Response } from "express";

const user = require("../../database/schema/user");

const updateUser: RequestHandler = async (req: Request, res: Response) => {
	const userDeatils = req.body?.userDeatils;

	try {
		const updatedUser = await user.updateOne(
			{ _id: userDeatils._id },
			{
				$set: userDeatils.payload,
			}
		);
		res.status(200).json({ message: "Updated user successfully" });
	} catch (error: any) {
		res.status(501).json({ message: "Nothing Updated !!!" });
		console.log(error);
	}
};
export default updateUser;
