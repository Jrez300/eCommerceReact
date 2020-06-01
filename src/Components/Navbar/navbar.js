import React from 'react';

class NavBar extends React.Component{
    render(){
        return(

<div className="container">

<header className="logo">
    <img src={require('../../images/logo.png')} alt="logo"/>
    <p>YEE<span style={{color:"#EB0E0E"}}>Ƶ</span>Y KICKS</p>

</header>
<nav className="navbar">
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="product.html">Products</a></li>
        <li><a href="contact.html">Contact Us</a></li>
    </ul>
</nav>

<figure className="search"><label htmlFor="input"><input type="text" id="input" className="searchTerm"
            placeholder="Need Help?"/></label><img src={require('../../images/shoppingcart.png')} alt="cart"/></figure>



</div>
        );

    }
}

export default NavBar;