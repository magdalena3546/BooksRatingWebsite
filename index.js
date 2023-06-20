const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const cors = require("cors");
const authRoute = require("./routes/auth.routes");
const userRoute = require("./routes/user.routes");
require("dotenv").config();
const passportSetup = require("./passport");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to the database");
});
db.on("error", (err) => console.log("Error " + err));

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 10000,
    keys: [process.env.KEY],
  })
);

app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "*",
      methods: "GET, POST, DELETE, PUT, PATCH",
      credentials: true,
    })
  );
}

app.listen(process.env.PORT || "5000", () => {
  console.log("Server is running");
});

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});
