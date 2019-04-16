import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {


  render() {
    console.log(this.props.filter)
    if (this.props.filter === ""){
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map((stock, index) => <Stock key={index} stock={stock} addToPortfolio={this.props.addToPortfolio}/>)
        }
      </div>
    );
  }
  else return (
    <div>
      <h2>Stocks</h2>
      {
        this.props.stocks.filter(stock => stock.type === this.props.filter).map((stock, index) =>
        <Stock key={index} stock={stock} addToPortfolio={this.props.addToPortfolio}/>)
      }
    </div>
  );
}

}


export default StockContainer;


 