const { ObjectId } = require("mongodb");
const User = require("../models/user_model");
const router = require("express").Router();

router.patch("/:id", async (req, res) => {
  // const updates = req.body;
  // await User.findByIdAndUpdate(req.params.id, {
  //   updates,
  // })
  //   .then((result) => {
  //     res.status(200).json(result);
  //   })
  //   .catch((err) => {
  //     res.status(500).json("wrong");
  //     console.log(err);
  //   });
  try {
    // const { id } = req.params.id;
    if (ObjectId.isValid(req.params.id)) {
      const user = await User.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        {
          new: true,
        }
      );
      console.log(req.body);
      res.json({ user });
    }
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: "something went wrong" });
  }
});

module.exports = router;
