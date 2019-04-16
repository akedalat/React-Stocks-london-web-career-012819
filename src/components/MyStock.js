import React from 'react'

const MyStock = (props) => {
  
  const handleClick = () => {
    props.removeFromPortfolio(props.id)
  }

  return(
    <div onClick={handleClick}>
    <div  className="card">
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
    </div> 
);}

export default MyStock
