import React, { Component } from 'react'

const JsonProducts = require('../ProductsPage/jsonData/products.json')
const styleButtons = require('../ProductsPage/jsonData/styleButtons.json')
const priceButtons = require('../ProductsPage/jsonData/priceButtons.json')

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Oldproducts: JsonProducts,
            Newproducts: JsonProducts,
            styleButtons: styleButtons,
            priceButtons: priceButtons

        }
    }

    //Product Filter Function

    yeezyFilter = (shoeType) => {
        this.setState(state => {
            const Newproducts = state.Oldproducts.filter(value => value.category.includes(shoeType));
            return {
                Newproducts
            }
        })
    }

    //Price fillter Function
    yeezyPrice = (price) => {
        this.setState(state => {
            const Newproducts = state.Oldproducts.filter(value => value.priceCategory.includes(price));

            return {
                Newproducts
            }
        })
    }
    //RESET Function 
    reset = () => {
        this.setState(state => {
            const Newproducts = state.Oldproducts;
            return {
                Newproducts
            }
        })
    }

    // FUTURE FILTER FUNCTIONALITY

    // yeezyFilter = () => {
    //     const products = state.Newproducts.filter(value => value.category.includes(this.state.filterProducts) && value.priceCategory.includes(this.state.filterPrice));
    //     this.setState({products}) 
    // }


    render() {

        return (

            <div>
                <div className="container-filters">
                    <h1 className="header">Yeezy Inventory</h1>

                    <h2 className="styles">Style</h2>
                    <div className="filters">
                        {this.state.styleButtons.map((value) => {
                            return (
                                <button type='button' onClick={() => this.yeezyFilter(value.filterFilterString)}> {value.buttonName} </button>
                            )
                        })}
                    </div>

                    <h2 className="prices">Price</h2>
                    <div className="price-filters">
                        {this.state.priceButtons.map((value) => {
                            return (
                                <button type='button' onClick={() => this.yeezyPrice(value.priceFilterString)}>{value.buttonName}</button>
                            )
                        })}
                    </div>
                    <br />

                    <div className="reset">
                        <button type='button' onClick={() => this.reset()}>RESET</button>
                    </div>

                </div>



                <div className="posts" >
                    {this.state.Newproducts.map((value) => {

                        return (

                            <div className="post" data-category={value.category} data-category2={value.priceCategory}>

                                <section className={value.id}>
                                    <h2><img src={value.cover} alt="" className="shoeimg" /></h2>
                                    <p className="title">{value.title} </p>
                                    <p className="info"> {value.description}</p>
                                    <p className="price">{value.price} <br />New </p>
                                    <a href={value.url} className="button">
                                        Add to Cart</a>
                                </section>
                            </div>
                        )
                    })}
                </div>
            </div>
        );

    }
}



export default Filter;
