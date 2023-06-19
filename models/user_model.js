const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: String,
  photo: String,
  googleId: String,
  stars: [
    {
      bookId: String,
      rate: Number,
    },
  ],
});

const User = mongoose.model("user", userSchema);

module.exports = User;
