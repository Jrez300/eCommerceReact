import React, { Component } from 'react'


class Filter extends Component {
    constructor(props) {
        super(props);
    this.state = {
        initialProducts: require('../ProductsPage/products.json'),
        newProducts: require('../ProductsPage/products.json')
        
    }
}

//Product Filter Function
yeezy350 = () =>{
    this.setState (state => {
        const newProducts = state.initialProducts.filter(value => value.category.includes('350')  );
        return{
            newProducts
        }
    })
}
yeezy500 = () =>{
    this.setState (state => {
        const newProducts = state.initialProducts.filter(value => value.category.includes('500')  );
        return{
            newProducts
        }
    })
}
yeezy700 = () =>{
    this.setState (state => {
        const newProducts = state.initialProducts.filter(value => value.category.includes('700')  );
        return{
            newProducts
        }
    })
}

//Price fillter Function
twoHundred= () =>{
    this.setState (state => {
        const newProducts = state.initialProducts.filter(value => value.priceCategory.includes('$0-$200')  );
        return{
            newProducts
        }
    })
}
threeHundred= () =>{
    this.setState (state => {
        const newProducts = state.initialProducts.filter(value => value.priceCategory.includes('$200-$300')  );
        return{
            newProducts
        }
    })
}
fourHundred= () =>{
    this.setState (state => {
        const newProducts = state.initialProducts.filter(value => value.priceCategory.includes('$300-$400')  );
        return{
            newProducts
        }
    })
}
aboveHundred= () =>{
    this.setState (state => {
        const newProducts = state.initialProducts.filter(value => value.priceCategory.includes('$400+')  );
        return{
            newProducts
        }
    })
}
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

<h2 className="styles">Styles</h2>
<div className="filters">

<button   type='button' onClick={() => this.yeezy350()}>Yeezy 350</button>

<button  type='button' onClick={() => this.yeezy500()}>Yeezy 500</button>

<button type='button' onClick={() => this.yeezy700()}>Yeezy 700</button>
</div>
<div className="price-filters">

<button   type='button' onClick={() => this.twoHundred()}>$0-$200</button>

<button  type='button' onClick={() => this.threeHundred()}>$200-$300</button>

<button type='button' onClick={() => this.fourHundred()}>$300-$400</button>

<button type='button' onClick={() => this.aboveHundred()}>$400+</button>

<br/>

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
