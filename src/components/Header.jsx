import React from 'react';
import Button from './Button';
 import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from './NavBar';
import LiveSearch from './search/LiveSearch';



function Header(){
  const { totalCount } = useSelector(({cart}) => cart);
    return(
        <div className="header">
          
        <div className="container">


   <NavBar/>




   

 <div className="header__cart">

 <Link to="/cart">
<Button className="button--cart">
<span> <i>✈️</i> {totalCount}</span>
</Button>
</Link>

 </div>
        </div>
      </div>

    )
}
export default Header;