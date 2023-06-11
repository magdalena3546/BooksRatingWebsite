const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const cors = require("cors");
const authRoute = require("./routes/auth.routes");
const userRoute = require("./routes/user.routes");
require("dotenv").config();
const passportSetup = require("./passport");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(process.env.DB_URL, () => {
  console.log("connected to md");
});

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 10000,
    keys: [process.env.KEY],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, DELETE, PUT",
    credentials: true,
  })
);

app.use("/auth", authRoute);
app.use("/profile", userRoute);

app.listen("5000", () => {
  console.log("Server is running");
});
