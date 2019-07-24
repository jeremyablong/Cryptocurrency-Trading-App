// const graphql = require("graphql");
// const _ = require("lodash");
// const mongoose = require("mongoose");
// const config = require("config");
// const axios = require("axios");

// const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList } = graphql;


// const GeneralCryptoType = new GraphQLObjectType({
// 	name: "CryptoIntervalData", 
// 	fields: () => ({
// 		timestamp: {
// 			type: GraphQLString
// 		},
// 		open: {
// 			type: GraphQLString
// 		},
// 		close: {
// 			type: GraphQLString
// 		},
// 		low: {
// 			type: GraphQLString
// 		},
// 		high: {
// 			type: GraphQLString
// 		}
// 	})
// })

// // create Root Query
// const SecondRootQuery = new GraphQLObjectType({
// 	name: "IntervalCryptoType",
// 	fields: {
// 		IntervalCryptoData: {
// 			type: new GraphQLList(GeneralCryptoType),
// 			resolve(parent, args) {
// 				return (
// 					axios.get("https://api.nomics.com/v1/candles?key=561df32fa25fd3d93ae7064e0da5c8a2&interval=1d&currency=BTC").then((res) => {
// 				    console.log(res.data)
// 				  }).catch((err) => {
// 				    console.log(err)
// 				  })
// 				)
// 			}
// 		}
// 	}
// });

// module.exports = new GraphQLSchema({
// 	Secondquery: SecondRootQuery
// })