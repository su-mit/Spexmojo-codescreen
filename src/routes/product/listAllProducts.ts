import { RequestHandler, Request, Response } from "express";

const product = require("../../database/schema/product");

const createProduct: RequestHandler = async (req: Request, res: Response) => {
    try {
        const listOfProducts = await product.find();
        res.status(200).send(listOfProducts);
        console.log(listOfProducts);
    } catch (error: any) {
        console.log(error);
    }
};

export default createProduct;
