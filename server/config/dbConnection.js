const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();


mongoose
  .connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((self) => {
    console.log(`Connection to ${self.connection.name} established.`);
  })
  .catch((error) => {
    console.log(`An error occured try to connect to the DB ${error}`);
  });
