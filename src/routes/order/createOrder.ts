import { RequestHandler, Request, Response } from "express";
import { isProductAvailable, updateProductQuanity } from "../product/product";

const order = require("../../database/schema/order");

const createOrder: RequestHandler = async (req: Request, res: Response) => {
    const orderDeatils = req.body?.orderDeatils;

    const finalProductList = await prepareFinalOrder(orderDeatils.products);
    await updateProductQuanities(finalProductList);

    try {
        const newOrder = await order.create({
            userId: orderDeatils.userId,
            placedOn: new Date().toISOString(),
            products: finalProductList,
        });
        console.log(newOrder);
        res.status(201).json(newOrder);
    } catch (error: any) {
        console.log(error);
    }
};

const prepareFinalOrder = async (products: any) => {
    const finalProductList = products.filter(async (product: any) => {
        if (await isProductAvailable(product.productId, product.quantity)) {
            return true;
        } else {
            console.log(
                `Product ${product.productId} is out of stock. Hence, skipping`
            );
            return false;
        }
    });

    return finalProductList;
};

const updateProductQuanities = async (products: any) => {
    products.forEach(async (product: any) => {
        await updateProductQuanity(product.productId, product.quantity);
    });
};

export default createOrder;
