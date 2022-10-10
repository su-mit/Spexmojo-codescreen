import mongooes from "../connection";

export const product = new mongooes.Schema({
    name: String,
    quanity: Number,
    description: String,
    price: Number,
});

module.exports = mongooes.model("Product", product);
