import React from 'react';

const SearchBar = (props) => {

  const handleSortChange = (e) => {
if (e.target.value === "Alphabetically" ){
  props.sortAlphabet()
}
else if (e.target.value === "Price" ){
  props.sortPrice()
}
  }

  const handleChange = (e) => {
   props.handleFilterChange(e)
  }


  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={handleSortChange}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={handleSortChange}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={handleChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
