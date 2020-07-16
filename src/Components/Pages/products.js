import React, {Component} from 'react';
import Navbar from "../Navbar/navbar"
import Footer from '../Footer/footer'
import '../../styles/master.css'

import Filter from "../ProductsContent/Filter"

class Products extends Component{
 

  render(){
  return (

    <div className="Products" >
      <Navbar />
      <Filter />
      <Footer />
    </div>

  );
  }
}

export default Products;


