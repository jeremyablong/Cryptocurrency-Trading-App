const express = require("express");
const app = express();
const connectDB = require("./config/db.js");
const router = express.Router();
const graphqlHTTP = require("express-graphql");
// init middleware
const bodyParser = require('body-parser');
const graphqlSchema = require("./schemas/schema.js");
// connect db
connectDB();

app.use("/graphql", graphqlHTTP({
	schema: graphqlSchema,
	graphiql: true
}));

app.use(bodyParser.json())
// define routes 
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/auth/login", require("./routes/login/auth.js"));
app.use("/auth/logout", require("./routes/login/logout.js"));
app.use("/forum/post", require("./routes/forum/post.js"));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
app.get('*', function(req, res) {
  res.sendFile(__dirname, './client/public/index.html')
})

if (process.env.NODE_ENV === "production") {
	// Express will serve up production files
	app.use(express.static("client/build"));
	// serve up index.html file if it doenst recognize the route
	app.get('*', function(_, res) {
	  res.sendFile(__dirname, './client/build/index.html'), function(err) {
	    if (err) {
	      res.status(500).send(err)
	    }
	  }
	})
}; 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`App is listening at port ${PORT}`)
})