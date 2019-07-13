const express = require("express");
const app = express();
const connectDB = require("./config/db.js");
const router = express.Router();
// init middleware
const bodyParser = require('body-parser');
// connect db
connectDB();
app.use(bodyParser.json())
// define routes 
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/auth/login", require("./routes/login/auth.js"));



// index route
app.get("/", (req, res) => {
	res.send("API is running");
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`App is listening at port ${PORT}`)
})