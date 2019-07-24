const express = require("express");
const mongoose = require("mongoose");


const auction = new mongoose.Schema({
	currency: {
		type: String
	},
	id: {
		type: String
	},
	price: {
		type: String
	},
	price_date: {
		type: String
	},
	symbol: {
		type: String
	},
	circulating_supply: {
		type: String
	},
	max_supply: {
		type: String
	},
	name: {
		type: String
	},
	logo_url: {
		type: String
	},
	market_cap: {
		type: String
	},
	rank: {
		type: String
	},
	high: {
		type: String
	},
	high_timestamp: {
		type: String
	}
})

module.exports = auction = mongoose.model("action", auction);