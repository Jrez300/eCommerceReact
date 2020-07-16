import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
  
        return(

<div className="container">

<header className="logo">
    <img src={require('../../images/logo.png')} alt="logo"/>
    <p>YEE<span style={{color:"#EB0E0E"}}>Ƶ</span>Y KICKS</p>

</header>
<nav className="navbar">
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Products'>Products</Link></li>
        <li><Link to='/Contact'>Contact Us</Link></li>
    </ul>
</nav>

<figure className="search"><label htmlFor="input"><input type="text" id="input" className="searchTerm"
            placeholder="Need Help?"/></label><img src={require('../../images/shoppingcart.png')} alt="cart"/></figure>



</div>
        );

    }


export default NavBar;