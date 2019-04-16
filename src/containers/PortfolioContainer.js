import React, { Component } from 'react';
import MyStock from '../components/MyStock'

class PortfolioContainer extends Component {

  render() {
   
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.portfolio.map((stock, index) => <MyStock key={index} id={index} stock={stock} removeFromPortfolio={this.props.removeFromPortfolio}/>)
          }
      </div>
    );
  }
}

export default PortfolioContainer;
