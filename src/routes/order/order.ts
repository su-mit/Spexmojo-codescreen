const order = require("../../database/schema/order");

/*  This method is called by the cron job to get the order place
    on a particular day

    @param Date
 */
export const listOrderByDate = async (date: string) => {
    try {
        return (await order.find({ date: { $regex: date } })).length;
    } catch (error: any) {
        console.log(error);
    }
};
