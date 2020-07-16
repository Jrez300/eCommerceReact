import React, { Component } from 'react'
import Slider from './slider'

class homeContent extends Component {
   

render(){

    return (

    <div className='container2'>
    <section class="shipping">
            <h1>Free Shipping & 60-Day Free Returns</h1>
        </section>

    
        <figure class="hero"><img src={require("../../images/hero-image.jpg")} alt="yeezys"/></figure>
        <article class="statement">
            <h2>At Yeezy Kicks, our world is comfort, but comfort is not our whole world.
                <br/>
                As fashionist, we’re evolving as the world evolves and we want to help you stay comfortable and stay in
                the trend.
            </h2>
        </article>
        <section className="new">
          
            <Slider />
            {/* <figure class="slide">
                <img class="mySlides" src={require("../../images/cinder1.png")} alt="cinder1"/>
                <img class="mySlides" src={require("../../images/cinder2.png")} alt="cinder2"/>
                <img class="mySlides" src={require("../../images/cinder3.png")} alt="cinder3"/>
                <img class="mySlides" src={require("../../images/cinder4.png")} alt="cinder4"/>
            </figure> */}

        </section>

        <section className="weekpicks">
            <h2 className="featured">This Weeks Picks</h2>
            <figure class="pic3">
                <p>Yeezy Boost 350 V2 Desert Sand</p> <img src={require("../../images/pic3.png")}
                        alt="desert"/>
            </figure>
            <figure class="pic4">
                <p>Yeezy Boost 700 Azael Sand</p><img src={require("../../images/pic4.png")} alt="azael"/>
            </figure>
            <figure class="pic5">
                <p>Yeezy Boost 700 Tephra</p><img src={require("../../images/pic5.png")} alt="tephra"/>
            </figure>
        </section>
    </div>
    )
}

}

export default homeContent