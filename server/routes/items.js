const express = require("express");
const router = new express.Router();
const itemModel = require("../models/Item");
const fileUpload = require("../config/cloudinary");

router.get("/", (req, res) => {
  itemModel
    .find()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  itemModel
    .findById(req.params.id)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", fileUpload.single("image"), (req, res) => {
  const newItem = { ...req.body, id_user: req.session.currentUser._id };
  console.log(newItem);
  itemModel
    .create(newItem)
    .then((item) => {
      res.status(201).json(item);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.patch("/:id", (req, res) => {
  itemModel
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedItem) => {
      res.status(200).json(updatedItem);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  itemModel
    .findByIdAndDelete(req.params.id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
