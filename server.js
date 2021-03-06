const express = require("express");
const path = require("path")
const morgan = require("morgan");;
const mongoose = require("mongoose");
const apiRouting = require("./routes/apiRouting")
const cors = require("cors")
require("dotenv").config()

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan("short"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

mongoose.connect(process.env.MONGODB_URI || "mongodb://tylerphopho:password1@ds335678.mlab.com:35678/heroku_fqqm362w",{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
},
() => console.log("Connected to MongoDB!")
);
app.use("/", apiRouting);
app.listen(PORT, () => {
    console.log(`Currently listening to http:localhost:${PORT}`)
});

