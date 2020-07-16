import React, { Component } from 'react'
import Oldproducts from './jsonData/products.json'
import styleButtons from './jsonData/styleButtons.json'
import priceButtons from './jsonData/priceButtons.json'


class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Oldproducts,
            Newproducts:[...Oldproducts],
            styleButtons,
            priceButtons,

        }
    }

    // const {NewFilterproducts, NewPriceproducts} = this.state;
    // let displayedProducts = productlist.map((value)=>{

    //     if (NewFilterproducts === '' && NewPriceproducts === '') {
    //         return <Oldproducts value={value}/>
    //     }
    //     if (NewFilterproducts !== '' && NewPriceproducts !== '') {
    //         if (NewFilterproducts === value.NewFilterproducts && NewPriceproducts === value.NewPriceproducts){
    //             return <Oldproducts value={value}/>
    //         }
    //     }
    //     if (NewFilterproducts !== '' && NewPriceproducts === '') {
    //         if (NewFilterproducts === value.NewFilterproducts){
    //             return <Oldproducts value={value}/>
    //         }
    //     }
    //     if (NewFilterproducts === '' && NewPriceproducts !== '') {
    //         if (NewPriceproducts === value.NewPriceproducts){
    //             return <Oldproducts value={value}/>
    //         }
    //     }


        
    // });


    yeezyAllFilters = (shoeType, price) =>{
         let Newproducts=[...Oldproducts]
        if (
             this.setState(state => {
                
                  Newproducts = state.Oldproducts.filter(value => value.category.includes(shoeType))

                 return {
                     Newproducts
                 }
                 
             }));

        else if (
                this.setState(state => {
                   
                     Newproducts = state.Oldproducts.filter(value => value.category.includes(price))
   
                    return {
                        Newproducts
                    }
                    
                }));
         
            // this.setState(state => {
            //      Newproducts = state.Oldproducts.filter(value => value.priceCategory.includes(price));
            //     return {
            //         Newproducts
            //     }
            // })

        
        
        
    }

    // Product Filter Function

    // yeezyFilter = (shoeType) => {
    //    let Newproducts=[...Oldproducts]
    //     this.setState(state => {
    //          Newproducts = state.Oldproducts.filter(value => value.category.includes(shoeType));
    //         return {
    //             Newproducts
    //         }
            
    //     })
    // }


    // //Price fillter Function
    // yeezyPrice = (price) => {
    //     let Newproducts=[...Oldproducts]
    //     this.setState(state => {
    //          Newproducts = state.Oldproducts.filter(value => value.priceCategory.includes(price));
    //         return {
    //             Newproducts
    //         }
    //     })
        
    // }
    //RESET Function 
    reset = () => {
        let Newproducts=[...Oldproducts]
        this.setState(state => {
             Newproducts = state.Oldproducts;
            return {
                Newproducts
            }
        })
    }

    // FUTURE FILTER FUNCTIONALITY

    // yeezyFilterProducts = () => {
    //     this.setState(state => {
    //     const FilterProductsPrice = state.Newproducts.filter(value => value.category.includes(this.state.filterProducts) && value.priceCategory.includes(this.state.filterPrice));
    //     return{
    //     FilterProductsPrice
    //     }
        
    // })
    
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
                                <button type='button' onClick={() => this.yeezyAllFilters(value.filterFilterString)}> {value.buttonName} </button>
                            )
                        })}
                    </div>

                    <h2 className="prices">Price</h2>
                    <div className="price-filters">
                        {this.state.priceButtons.map((value) => {
                            return (
                                <button type='button' onClick={() => this.yeezyAllFilters(value.priceFilterString)}>{value.buttonName}</button>
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
