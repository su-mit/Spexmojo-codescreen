import { RequestHandler, Request, Response } from "express";

const product = require("../../database/schema/product");

export const findProduct = async (productId: string) => {
    try {
        return await product.findOne({ _id: productId });
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
    numberOfProductOrdered: number = 1
) => {
    const productQuantity = await productInStock(productId);

    return productQuantity >= numberOfProductOrdered;
};

export const updateProductQuanity = async (
    productId: string,
    numberOfProductOrdered: number
) => {
    try {
        const numberOfProducts = await productInStock(productId);

        const updatedProduct = await product.updateOne(
            { _id: productId },
            {
                $set: {
                    quantityInStock: numberOfProducts - numberOfProductOrdered,
                },
            }
        );
        console.log(
            `Product ${productId} previous stock was ${numberOfProducts}, update stock is ${
                numberOfProducts - numberOfProductOrdered
            }`
        );
    } catch (error: any) {
        console.log(error);
    }
};
