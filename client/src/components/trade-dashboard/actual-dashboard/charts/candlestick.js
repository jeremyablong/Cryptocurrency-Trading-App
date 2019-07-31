import React, { Component } from 'react';
import axios from "axios";


class InteractiveCandlestickChart extends Component {
  constructor(props) {
    super(props);


    this.state = {

    }
  }
  componentDidMount() {
      axios.get("/chart/data").then((res) => {
        console.log(res.data)
        this.setState({
          data: res.data
        })
      }).catch((err) => {
      console.log(err);
      });
    
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default InteractiveCandlestickChart;