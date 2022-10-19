import { RequestHandler, Request, Response } from "express";
import { findProduct } from "./product";

const findProductWithId: RequestHandler = async (
	req: Request,
	res: Response
) => {
	const productId = req.body.id;

	return res.send(await findProduct(productId));
};

export default findProductWithId;
