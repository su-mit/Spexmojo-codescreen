const order = require("../../database/schema/order");

export const listOrderByDate = async (date: string) => {
    try {
        return (await order.find({ date: { $regex: date } })).length;
    } catch (error: any) {
        console.log(error);
    }
};
