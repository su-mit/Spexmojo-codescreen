import mongooes from "../connection";

export const product = new mongooes.Schema({
    name: String,
    quantityInStock: Number,
    price: Number,
});

module.exports = mongooes.model("Product", product);
