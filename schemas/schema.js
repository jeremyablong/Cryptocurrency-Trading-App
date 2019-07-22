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
		}
	}
})

module.exports = new GraphQLSchema({
	query: RootQuery
})