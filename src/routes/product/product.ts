import { RequestHandler, Request, Response } from "express";

const product = require("../../database/schema/product");

export const findProduct = async (productId: string) => {
    try {
        return await product.find({ id: productId });
    } catch (error: any) {
        console.log(error);
    }
};

export const productInStock = async (productId: string) => {
    try {
        const productInDB = await findProduct(productId);
        return productInDB.quantityInStock;
    } catch (error: any) {
        console.log(error);
    }
};

export const isProductAvailable = async (
    productId: string,
    numberOfOrders: number
) => {
    try {
        return (await productInStock(productId)) >= numberOfOrders;
    } catch (error: any) {
        console.log(error);
    }
};

export const updateProductQuanity = async (
    productId: string,
    numberOfOrders: number
) => {
    try {
        const numberOfProducts = await productInStock(productId);

        const updateProductQuanity = await product.updateOne(
            { id: productId },
            { $set: { quantityInStock: numberOfProducts - numberOfOrders } }
        );
        console.log(
            `For product ${productId} now the quantity in stock is ${updateProductQuanity}`
        );
    } catch (error: any) {
        console.log(error);
    }
};
