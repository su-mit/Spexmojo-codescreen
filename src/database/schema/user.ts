import mongooes from "../connection";

export const user = new mongooes.Schema({
    name: String,
    email: String,
    password: String,
});

module.exports = mongooes.model("User", user);
