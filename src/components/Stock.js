import React from 'react'

const Stock = (props) => {
  const handleClick = () => {
    props.addToPortfolio(props.stock.id)
  }

  return(

    <div onClick={handleClick} className="card">
      <div className="card-body">
        <h5 className="card-title">{
            props.stock.name
          }</h5>
        <p className="card-text">{
          `${props.stock.ticker}: ${props.stock.price}`
            //ticker: stock price
          }</p>
      </div>
    </div>

);}

export default Stock
