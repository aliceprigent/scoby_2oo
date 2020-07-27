require('dotenv').config(); // import all key/value pairs from .env in process.env : really usefull when going online :)
require('./../config/dbConnection');

const User = require('../models/User')

const users = [{
    firstName: "Patrick",
    lastName: "Plant",
    profileImg: "https://vignette.wikia.nocookie.net/simpsons/images/1/14/Ralph_Wiggum.png/revision/latest/top-crop/width/360/height/360?cb=20100704163100",
    email: "patrick@plant.com",
    password: "toto",
    phoneNumber: "06060606",
    secondaryEmail: "patrick2@plant.com",
    city: "PlantCity",
},
  ]


User.create(users)
.then(dbRes => console.log(dbRes))
.catch(dbErr => console.error(dbErr))
