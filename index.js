const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const cors = require("cors");
const authRoute = require("./routes/auth");
require("dotenv").config();
const passportSetup = require("./passport");
const app = express();

app.use(
  cookieSession({
    name: "session",
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

app.listen("5000", () => {
  console.log("Server is running");
});
