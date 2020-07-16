import React from 'react';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";



const App = () => (
 
  <section
  className="new"
> 
<h2 className="justIn">Just In</h2>
            <p>Yeezy Boost 350 V2 'Cinder'</p>
<Carousel arrows infinite>
        <div>
          <img class="mySlides" src = "../../images/cinder1.png" alt="1"/>
        </div>
        <div>
          <img class="mySlides" src = "../../images/cinder2.png" alt="2"/>
        </div>
        <div>
          <img class="mySlides" src = "../../images/cinder3.png" alt="3"/>
        </div>
        <div>
          <img class="mySlides" src = "../../images/cinder4.png" alt="4"/>
        </div>
        </Carousel>
        </section>
)

export default App