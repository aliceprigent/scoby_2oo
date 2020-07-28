require("dotenv").config(); // import all key/value pairs from .env in process.env : really usefull when going online :)
require("./../config/dbConnection");

const userModel = require("../models/User");
const itemModel = require("../models/Item");
const { Mongoose } = require("mongoose");

async function seedIt() {
  try {
    const user = {
      firstName: "Patrick",
      lastName: "Plant",
      profileImg:
        "https://vignette.wikia.nocookie.net/simpsons/images/1/14/Ralph_Wiggum.png/revision/latest/top-crop/width/360/height/360?cb=20100704163100",
      email: "patrick@plant.com",
      password: "toto",
      phoneNumber: "06060606",
      secondaryEmail: "patrick2@plant.com",
      city: "PlantCity",
    };

    const userSeed = await userModel.create(user);

    const item = {
      name: "Monstera",
      description: "My fav plant",
      image:
        "https://cdn1.iconfinder.com/data/icons/gardening-filled-line/614/1935_-_Growing_Plant-512.png",
      category: "Plant",
      quantity: 1,
      address: "3 rue des Lilas, 75019 Paris",
      location: {
        type: "Point",
      },
      id_user: userSeed._id,
    };

    await itemModel.create(item);
  } catch (err) {
    console.error(err);
  }
}

seedIt();
