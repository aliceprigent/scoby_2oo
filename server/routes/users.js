const express = require("express");
const router = express.Router();
const userModel = require("../models/User");

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
  // userModel
  //   .find()
  //   .then((users) => {
  //     res.status(200).json(users);
  //   })
  //   .catch((err) => {
  //     res.status(500).json(err);
  //   });
});

router.patch("/:id", (req, res) => {
  userModel
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedUser) => {
      res.status(200).json(updatedUser);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
