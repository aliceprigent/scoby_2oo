const express = require("express");
const router = express.Router();
const userModel = require("../models/User");

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.patch("/", (req, res) => {
  userModel
    .findByIdAndUpdate(req.session.currentUser.id, req.body, { new: true })
    .then((updatedUser) => {
      res.status(200).json(updatedUser);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
