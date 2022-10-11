import { RequestHandler, Request, Response } from "express";

const product = require("../../database/schema/product");

const createProduct: RequestHandler = async (req: Request, res: Response) => {
    const productDeatils = req.body?.productDeatils;

    try {
        const newProduct = await product.create(productDeatils);
        console.log(newProduct);
        res.status(201).send(newProduct);
    } catch (error: any) {
        console.log(error);
    }
};

export default createProduct;
