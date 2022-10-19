import { RequestHandler, Request, Response } from "express";

const product = require("../../database/schema/product");

const createProduct: RequestHandler = async (req: Request, res: Response) => {
	const productDeatils = req.body?.productDeatils;

	try {
		const updatedProduct = await product.updateOne(
			{ _id: productDeatils._id },
			{ $set: productDeatils.payload }
		);

		res.status(200).json({ message: "Updated product successfully" });
	} catch (error: any) {
		res.status(501).json({ message: "Product not updated" });
		console.log(error);
	}
};

export default createProduct;
