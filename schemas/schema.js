const graphql = require("graphql");
const _ = require("lodash");
const mongoose = require("mongoose");
const config = require("config");
const axios = require("axios");

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList } = graphql;


const CryptoType = new GraphQLObjectType({
	name: "CryptoData", 
	fields: () => ({
		currency: {
			type: GraphQLString
		},
		id: {
			type: GraphQLString
		},
		price: {
			type: GraphQLString
		},
		price_date: {
			type: GraphQLString
		},
		symbol: {
			type: GraphQLString
		},
		circulating_supply: {
			type: GraphQLString
		},
		max_supply: {
			type: GraphQLString
		},
		name: {
			type: GraphQLString
		},
		logo_url: {
			type: GraphQLString
		},
		market_cap: {
			type: GraphQLString
		},
		rank: {
			type: GraphQLString
		},
		high: {
			type: GraphQLString
		},
		high_timestamp: {
			type: GraphQLString
		}
	})
})


const BicoinIntervalCryptoType = new GraphQLObjectType({
	name: "BicoinIntervalData", 
	fields: () => ({
		timestamp: {
			type: GraphQLString
		},
		open: {
			type: GraphQLString
		},
		close: {
			type: GraphQLString
		},
		low: {
			type: GraphQLString
		},
		high: {
			type: GraphQLString
		}
	})
})


// create Root Query
const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		data: {
			type: new GraphQLList(CryptoType),
			resolve(parent, args) {
				// where we get our data //
				return axios.get("https://api.nomics.com/v1/currencies/ticker?key=561df32fa25fd3d93ae7064e0da5c8a2").then((res) => {
					return res.data
				}).catch((err) => {
					console.log(err)
				})
			}
		},
		bitcoinIntervalData: {
			type: new GraphQLList(BicoinIntervalCryptoType),
			resolve(parent, args) {
				return (
					axios.get("https://api.nomics.com/v1/candles?key=561df32fa25fd3d93ae7064e0da5c8a2&interval=1h&currency=BTC&start=2019-07-18T00:00:00Z&end=2019-07-24T00:00:00Z").then((res) => {
				    return res.data
				  }).catch((err) => {
				    console.log(err)
				  })
				)
			}
		}
	}
})

module.exports = new GraphQLSchema({
	query: RootQuery
})