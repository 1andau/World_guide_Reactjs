import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CardUnusual from '../unusual/CardUnsusual';

function LiveSearch() {

  const [value, setValues] = React.useState(''); //поиск

  return (




<div className="searchContainer">
    <div className="form">
        <input type="text" id="search" placeholder="Seach..."
          value={value}
          onChange={(event) => setValues(event.target.value)
          }
        ></input>
        <button id="button">Search</button>


</div>


</div>
    
  )
}









export default LiveSearch