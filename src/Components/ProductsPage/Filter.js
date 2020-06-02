import React, { Component } from 'react'


class Filter extends Component {
    constructor(props) {
        super(props);
    this.state = {
        initialProducts: require('../ProductsPage/products.json'),
        newProducts: require('../ProductsPage/products.json'),
        filterProducts:'',
        filterPrice:''
        
    }
}

//Product Filter Function

yeezyFilter = (shoeType) =>{
    this.setState (state => {
        const newProducts = state.initialProducts.filter(value => value.category.includes(shoeType)  );
        return{
            newProducts
        }
    })
}

//Price fillter Function
yeezyPrice = (price) =>{
    this.setState (state => {
        const newProducts = state.initialProducts.filter(value => value.priceCategory.includes(price));
        return{
            newProducts
        }
    })
}


// yeezyFilter = () => {
//     const products = state.initialProducts.filter(value => value.category.includes(this.state.filterProducts) && value.priceCategory.includes(this.state.filterPrice));
//     this.setState({products:products}) 
// }



//RESET Function 
reset= () =>{
    this.setState (state => {
        const newProducts = state.initialProducts;
        return{
            newProducts
        }
    })
}


   
    render(){
    
        return(

<div>
<div className="container-filters">
<h1 className="header">Yeezy Inventory</h1>

<h2 className="styles">Style</h2>
<div className= "filters">
<button   type='button' onClick={() => this.yeezyFilter('350')}>Yeezy 350</button>

<button  type='button' onClick={() => this.yeezyFilter('500')}>Yeezy 500</button>

<button type='button' onClick={() => this.yeezyFilter('700')}>Yeezy 700</button>
</div>
<h2 className="prices">Price</h2>
<div className="price-filters">
<button   type='button' onClick={() => this.yeezyPrice("$0-$200")}>$0-$200</button>

<button  type='button' onClick={() => this.yeezyPrice("$200-$300")}>$200-$300</button>

<button type='button' onClick={() => this.yeezyPrice("$300-$400")}>$300-$400</button>

<button type='button' onClick={() => this.yeezyPrice("$400+")}>$400+</button>
</div>
<br/>
<div className="reset">
<button type='button' onClick={() => this.reset()}>RESET</button>
</div>

</div>



<ol className="posts" >
            {this.state.newProducts.map((value) =>{
                
                return (
                    
                    <li className="post" data-category={value.category}data-category2={value.priceCategory}>
                        
                        <section className={value.id}>
                            <h2><img src={value.cover} alt="" className="shoeimg" /></h2>
                            <p className="title">{value.title} </p>
                            <p className="info"> {value.description}</p>
                            <p className="price">{value.price} <br />New </p>
                            <a href={value.url} className="button">
                                Add to Cart</a>
                        </section>
                    </li>
                )
            })}
    </ol>
    </div>
        );

    }
}

        

export default Filter;
