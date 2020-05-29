const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require('body-parser')

const items = require("./routes/api/items.js"); // routes

// ---------------- Set Up Server ----------------

const app = express();

// BodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ------------------ MongoDB ------------------

const db = require("./config/keys").mongoURI;

mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Connected to MongoDB..."))
	.catch((err) => console.log(err));

// ------------------ Routing ------------------

app.use("/api/items", items);

// ---------------- Init Server ----------------

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on port " + port));
