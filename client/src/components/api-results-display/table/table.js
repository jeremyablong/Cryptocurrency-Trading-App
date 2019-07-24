import React, { Component } from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import TableResults from "./tableResults.js";
import "./table-display.css";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import _ from "lodash";
import matchSorter from 'match-sorter';

const CRYPTO_QUERY = gql`
	query {
		data {
			currency
			id
			price
			price_date
			symbol
			circulating_supply
			max_supply
			name
			logo_url
			market_cap
			rank
			high
			high_timestamp	
		}	
	}
`;


class TableData extends Component {
constructor () {
	super();


	this.state = {
		show: false,
		target: ""
	}
}
	// submitInput = (e) => {
	// 	e.preventDefault();
	// 	console.log(this.state.target)
	// 	this.setState({
	// 		show: true
	// 	})
		
	// };
	renderApiData = () => {
		if (this.state.show === true) {
			return (
				<Query query={CRYPTO_QUERY}>
					{
						({ loading, error, data }) => {
							if (loading) {
								return <h4>loading</h4>
							}
							if (error) {
								console.log(error);
							}
							return (
								<React.Fragment>
									<ul className="list_currencies">
									{
										data.data.map((item, index) => {
											return <TableResults key={index} data={item} />
										})
									}
									</ul>
								</React.Fragment>
							);
						}
					}
				</Query>
			);
		}
	};
	render() {
		return (
			<React.Fragment>
				<div style={{ marginBottom: "25px" }} className="container-fluid black_container">
					<h1 className="text-center adjust_size">Search for any cryptocurrency on the market! We have them all.</h1>
					<h1 className="text-center adjust_size_two">Swipe to view all the stats of each cryptocurrency or search</h1>
					{/*<form onSubmit={this.submitInput}>
						<div className="input-group">
						  <input onChange={(e) => {
							this.setState({
								target: e.target.value
							})
						}} type="text" className="form-control" placeholder={this.state.target}/>
						  <div className="input-group-append">
							<button className="btn btn-outline-info">Search Our Database</button>
						  </div>
						</div>
					</form>*/}
						
				</div>	
			<Query query={CRYPTO_QUERY}>
					{
					({ loading, error, data }) => {	
						
				 if (loading) {
				 	return <h1 className="text-center"> Loading... </h1>
				 }
				 if (error) {
				 	console.log(error);
				 }
				 if (data) {
				 	return ( <ReactTable
			          data={data.data}
			          filterable
			          sortable={false}
			          defaultFilterMethod={(filter, row) =>
			            String(row[filter.id]) === filter.value}
			          columns={[
			          	 {
		                  Header: "Crypto Logo",
		                  accessor: "Crypto Logo",
		                  id: "logo",
		                  filterable: false,
		                  accessor: d => !d.logo_url ? null : <img id="picture" src={d.logo_url} />
		                },
			          	{
		                  Header: "Ranking",
		           		  accessor: "Ranking",
		                  id: "Ranking",
		                  accessor: d => `${d.rank}`,
		                  filterMethod: (filter, rows) =>
		                  filter.value === rows.Ranking ? filter.value : null
		                  // console.log(filter.value),
		                  // console.log(rows.Ranking)
		                  // matchSorter(rows, filter.value, {
		                  // 	keys: "Ranking"
		                  // }),
		                  // filterAll: true
		                   
		                },
		                {
		                  Header: "Currency - Name",
		                  id: "CurrencyAndName",
		                  accessor: d => `${d.currency} - ${d.name}`,
		                  filterMethod: (filter, rows) =>
		                    matchSorter(rows, filter.value, { keys: ["CurrencyAndName"] }),
		                  filterAll: true
		                }, 
		                {
		                  Header: "Current Price",
		                  accessor: "Current Price",
		                  id: "CurrentPrice",
		                  filterable: false,
		                  accessor: d => {
		                  	return (
		                  		(Math.round(d.price * 100) / 100).toLocaleString()
		                  	);
		                  },
		                  filterMethod: (filter, rows) =>
		                  filter.value === rows.CurrentPrice ? rows.CurrentPrice : null
		                }, 
		                {
		                  Header: "Market Cap Price",
		                  accessor: "Market Cap Price",
		                  id: "MarketCap",
		                  filterable: false,
		                  accessor: d => (Math.round(d.market_cap * 100) / 100).toLocaleString(),
		                  filterMethod: (filter, row) =>
		                    row[filter.id].startsWith(filter.value) &&
		                    row[filter.id].endsWith(filter.value)
		                },
		                {
		                  Header: "Market Cap Date",
		                  accessor: "Market Cap Date",
		                  id: "MarketCapDate",
		                  filterable: false,
		                  accessor: d => d.high_timestamp,
		                  filterMethod: (filter, row) =>
		                    row[filter.id].startsWith(filter.value) &&
		                    row[filter.id].endsWith(filter.value)
		                },
		                
			            {
			              
			              columns: [
			                {
			                  Header: "Max Supply",
			                  accessor: "Max Supply",
			                  id: "MaxSupply",
		                  	  filterable: false,
			                  accessor: d => !d.max_supply ? "No Data Provided" : (Math.round(d.max_supply * 100) / 100).toLocaleString(),
			                  filterMethod: (filter, row) =>
			                    row[filter.id].startsWith(filter.value) &&
			                    row[filter.id].endsWith(filter.value)
			                }
			              ]
			            },
			            {
			             
			              columns: [
			                {
			                  Header: "Circulating Supply",
			                  accessor: "Circulating Supply",
			                  id: "CirculatingSupply",
		                      filterable: false,
			                  accessor: d => (Math.round(d.circulating_supply * 100) / 100).toLocaleString(),
			                  filterMethod: (filter, row) =>
			                    row[filter.id].startsWith(filter.value) &&
			                    row[filter.id].endsWith(filter.value)
			                }
			              ]
			            }
			          ]}
			          defaultPageSize={10}
			          className="-striped -highlight"
			        />
		        );
				 }
		        }
				}
			</Query>
				{this.renderApiData()}
			</React.Fragment>
		);
	}
}
export default TableData;