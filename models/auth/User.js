const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	firstname: {
		type: String,
		required: true
	}, 
	lastname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	addressCity: {
		type: String,
		required: true
	},
	addressStreet: {
		type: String,
		required: true
	},
	addressZip: {
		type: String,
		required: true
	},
	checkbox: {
		type: Boolean,
		required: true
	},
	country: {
		type: String,
		required: true
	},
	state: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now()
	}
})

module.exports = User = mongoose.model("user", UserSchema);