const { ObjectId } = require("mongodb");
const User = require("../models/user_model");
const router = require("express").Router();

router.patch("/removeRate/:id", async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      let user = await User.findOneAndUpdate(
        { $and: [{ _id: req.params.id, bookId: req.body.bookId }] },
        {
          $pull: {
            stars: { bookId: req.body.bookId },
          },
        }
      );
    }
  } catch (e) {
    res.status(500).json({ error: "something went wrong" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      let user = await User.findOneAndUpdate(
        { $and: [{ _id: req.params.id, bookId: req.body.bookId }] },
        {
          $pull: {
            stars: { bookId: req.body.bookId },
          },
        }
      );
      user = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { stars: req.body } }
      );
      res.json({ user });
    }
  } catch (e) {
    res.status(500).json({ error: "something went wrong" });
  }
});

module.exports = router;
