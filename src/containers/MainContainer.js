import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

state = {
  stocks: [],
  portfolio: [],
  filter: ""
}
  fetchStocks = () => {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(stocks => this.setState({
      stocks: stocks
    }))
  }

  componentDidMount() {
    this.fetchStocks()
  }

  addToPortfolio = (id) => {
    this.setState({
      portfolio: [...this.state.portfolio, this.state.stocks.find(stock => stock.id === id)]
    })
  }

  removeFromPortfolio = (id) => {
    this.state.portfolio.splice(id, 1)
    this.setState({
      portfolio: this.state.portfolio
    })
  }

  sortAlphabet = () => {
    this.setState({
      stocks: this.state.stocks.sort((a,b)=> { if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;})
    })
  }

  sortPrice = () => {
    this.setState({
      stocks: this.state.stocks.sort((a,b)=> { if(a.price < b.price) { return -1; }
      if(a.price > b.price) { return 1; }
      return 0;})
    })
  }

  handleFilterChange = (e) => {
    this.setState({
      filter: e.target.value,
    }) 
  }


  render() {
    console.log(this.state.filter)
    return (
      <div>
        <SearchBar handleFilterChange={this.handleFilterChange} sortAlphabet={this.sortAlphabet} sortPrice={this.sortPrice}/>
          <div className="row">
            <div className="col-8">
              <StockContainer handleFilterChange={this.handleFilterChange} filter={this.state.filter} stocks={this.state.stocks} addToPortfolio={this.addToPortfolio}/>
            </div>
            <div className="col-4">
              <PortfolioContainer portfolio={this.state.portfolio} removeFromPortfolio={this.removeFromPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
