import { RequestHandler, Request, Response } from "express";
import { isProductAvailable, updateProductQuanity } from "../product/product";

const order = require("../../database/schema/order");

const createOrder: RequestHandler = async (req: Request, res: Response) => {
    const orderDeatils = req.body?.orderDeatils;

    const finalProductList = prepareFinalOrder(orderDeatils.products);

    try {
        const newOrder = await order.create({
            userId: orderDeatils.userId,
            placedOn: new Date().toISOString(),
            products: finalProductList,
        });
        console.log(newOrder);
    } catch (error: any) {
        console.log(error);
    }
};

const prepareFinalOrder = async (products: any) => {
    const finalProduct = products.forEach(async (product) => {
        if (await isProductAvailable(product.id, product.quantity)) {
            await updateProductQuanity(product.id, product.quantity);

            return true;
        } else {
            console.log(
                `Product ${product.name} is out of stock. Hence, skipping ${product.name}}`
            );
        }
    });

    return finalProduct;
};

export default createOrder;
