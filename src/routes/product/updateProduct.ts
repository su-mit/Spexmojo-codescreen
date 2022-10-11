import { RequestHandler, Request, Response } from "express";

const product = require("../../database/schema/product");

const createProduct: RequestHandler = async (req: Request, res: Response) => {
    const productDeatils = req.body?.productDeatils;

    try {
        const updatedProduct = await product.replaceOne(
            { _id: productDeatils._id },
            productDeatils
        );
        console.log(updatedProduct);
        res.status(200).json(updatedProduct);
    } catch (error: any) {
        console.log(error);
    }
};

export default createProduct;
