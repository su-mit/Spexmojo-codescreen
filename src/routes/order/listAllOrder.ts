import { RequestHandler, Request, Response } from "express";

const order = require("../../database/schema/order");

const listAllOrder: RequestHandler = async (req: Request, res: Response) => {
    try {
        const allOrders = await order.find();
        res.status(200).send(allOrders);
        console.log(allOrders);
    } catch (error: any) {
        console.log(error);
    }
};

export default listAllOrder;
