const mongoose = require("mongoose");

require("dotenv").config();

exports.dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(console.log("DB Connection Sucessfull"))
    .catch((error) => {
        console.log("DB Connection Issue");
        console.error(error);
        process.exit(1);
    })
};