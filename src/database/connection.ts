require("dotenv").config();

const mongooes = require("mongoose");

mongooes.connect(
    process.env.DATABASE_URL,
    () => {
        console.info("Database connection sucessfull");
    },
    (error: any) => console.error(error)
);

export default mongooes;
