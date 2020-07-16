import React from 'react'
import Navbar from '../Navbar/navbar'
import Homecontent from '../HomeContents/homeContents'
import Footer from '../Footer/footer'
import '../../styles/master.css'

function Home(){

        return(

            <div className="Home">
            <Navbar/>
            <Homecontent/>
            <Footer/>
           </div>



        )

}

export default Home