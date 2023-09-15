require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const peopleController = require("./controllers/peopleController");
const morgan = require("morgan");

app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true}));

app.use("/people", peopleController);



app.listen(PORT , () => console.log("give me the love on port", PORT))