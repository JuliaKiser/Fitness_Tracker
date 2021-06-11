const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;
const app = express();
require('dotenv').config();
app.use(logger("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use(require("./routes/api-routes"))//router(app) but since router is an object, we can't use app as a argument => not a function
app.use(require("./routes/html-routes"))
app.listen(PORT, () => {
    console.log("App is working its magic on port 3000")
})