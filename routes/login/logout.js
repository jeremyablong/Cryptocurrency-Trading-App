const express = require("express");
const router = express.Router();
const LoginUser = require("../../models/auth/Login.js");
const mongo = require("mongodb");
const config = require("config");
const cors = require("cors");


mongo.connect(config.get("mongoURI"), cors(), function(err, db) {
  router.get('/', function(req, res, next) {
    return res.json({ user: "Email NOT found, account couldn't be authenticated." });
  });
})
module.exports = router;


