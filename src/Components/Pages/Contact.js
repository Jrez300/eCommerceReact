import React from 'react';
import Navbar from "../Navbar/navbar"
import Footer from '../Footer/footer'
import '../../styles/master.css'
import Form from '../ContactContents/form'

function Contact(){
 

  
  return (

    <div className=".contact-container" >
      <Navbar />
      <Form />
      <Footer />
    </div>

  );
  
}

export default Contact;
