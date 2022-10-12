import { RequestHandler, Request, Response } from "express";
import { isProductAvailable, updateProductQuanity } from "../product/product";

const order = require("../../database/schema/order");

const createOrder: RequestHandler = async (req: Request, res: Response) => {
    const orderDeatils = req.body?.orderDeatils;

    const { availableProducts, outOfStockProducts } = await prepareFinalOrder(
        orderDeatils.products
    );
    if (availableProducts.length > 0) {
        // await updateProductQuanities(availableProducts);

        try {
            const newOrder = await order.create({
                userId: orderDeatils.userId,
                placedOn: new Date().toISOString(),
                products: availableProducts,
            });
            console.log(newOrder);

            res.status(201).json({
                order: newOrder,
                message: `Order created successfully and your order id is ${newOrder._id}`,
                outOfStockProducts: {
                    message: "Following product are out of stock",
                    products: outOfStockProducts,
                },
            });
        } catch (error: any) {
            console.log(error);
            res.status(501).json({
                message:
                    "We are facing some issue while placing your order, please try again later",
            });
        }
    } else {
        res.status(200).json({
            message: "All product are out of stock",
            products: outOfStockProducts,
        });
    }
};

const prepareFinalOrder = async (products: any) => {
    let availableProducts = new Array();
    let outOfStockProducts = new Array();

    for (let product of products) {
        await isProductAvailable(product.productId, product.quantity).then(
            (result) => {
                if (result) availableProducts.push(product);
                else outOfStockProducts.push(product.productId);
            }
        );
    }

    return { availableProducts, outOfStockProducts };
};

const updateProductQuanities = async (products: any) => {
    products.forEach(async (product: any) => {
        await updateProductQuanity(product.productId, product.quantity);
    });
};

export default createOrder;
