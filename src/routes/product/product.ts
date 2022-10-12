import { RequestHandler, Request, Response } from "express";

const product = require("../../database/schema/product");

//  This method is used to find a product by its ID
export const findProduct = async (productId: string) => {
    try {
        return await product.findOne({ _id: productId });
    } catch (error: any) {
        console.log(error);
    }
};

//  This method is used to get the no. of if product in stock
export const productInStock = async (productId: string) => {
    try {
        const productInDB = await findProduct(productId);
        return productInDB.quantityInStock;
    } catch (error: any) {
        console.log(error);
    }
};

//  This method is used to check if product is in stock of not
export const isProductAvailable = async (
    productId: string,
    numberOfProductOrdered: number = 1
) => {
    const productQuantity = await productInStock(productId);

    return productQuantity >= numberOfProductOrdered;
};

//  This method is updated the produt quantity in stock once the order is prepared successfully
export const updateProductQuanity = async (
    productId: string,
    numberOfProductOrdered: number
) => {
    try {
        const numberOfProducts = await productInStock(productId);

        await product.updateOne(
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
