const express = require("express");
const router = express.Router();

// add route
// public
router.get("/", (req, res) => {
	res.send("Posts route.")
});

module.exports = router;