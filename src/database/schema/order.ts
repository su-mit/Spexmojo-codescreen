import mongooes from "../connection";

export const order = new mongooes.Schema({
    userId: String, // userId
    placedOn: String, //placed Date and time ISO string
    products: [
        {
            productId: String,
            quantity: Number,
            price: Number,
        },
    ],
});

module.exports = mongooes.model("Order", order);
