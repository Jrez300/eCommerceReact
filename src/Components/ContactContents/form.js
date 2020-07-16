import React from 'react'


const initialState = {
    fname: '',
    lname: '',
    pnumber: '',
    email: '',
    subject:'',
    errorfname: '',
    errorlname: '',
    errorpnumber: '',
    erroremail: '',
    errorsubject:''
};

class ValidationForm extends React.Component{
    state = initialState;

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]:isCheckbox
            ? event.target.checked
            : event.target.value
        });
    };

    validate = (event) => {
        
        let errorfname = '';
        let errorlname = '';
        let errorpnumber= '';
        let erroremail= '';
        let errorsubject='';

        if (this.state.fname.length < 3) {
            errorfname = "Please Enter Valid First Name";
          }
             if (errorfname){
            this.setState({errorfname});
            return false
        }
        if (this.state.lname.length < 3) {
            errorlname = "Please Enter Valid Last Name";
          }
             if (errorlname){
            this.setState({errorlname});
            return false
        }
        if ( isNaN(this.state.pnumber)||this.state.pnumber.length !==10) {
            errorpnumber = "Please Enter Valid Phone Number";
          }
          if (errorpnumber){
            this.setState({errorpnumber});
            return false
        }
        if (this.state.email.indexOf('@') === -1 ||this.state.email.length < 6) {
            erroremail = "Please Enter Valid Email Address";
          }
          if (erroremail){
            this.setState({erroremail});
            return false
        }

        if (this.state.subject.length <=30) {
            errorsubject = "Please Enter More Than 30 Characters";
          }  
          if (errorsubject){
            this.setState({errorsubject});

            return false
            
        }

          return true;
          
       ;
          
    };

    handleSubmit = event => {
        const isValid = this.validate();
        if (isValid) {
          console.log(this.state);
          alert("Form Submitted Successfully!")
          // clear form
        //   this.setState(initialState);
        }
        else if (!isValid){
            event.preventDefault();

        }
};

render(){

return (
    <div className="contactformContainer">
        <h1 className="header">Contact Us.</h1>
    <form  class="contactform" onSubmit={this.handleSubmit}  action="https://formsubmit.co/joseperez940@live.com" method='POST'>

<label htmlFor="fname">First Name</label>
<input type="text" id="fname" name="fname" value={this.state.fname} onChange={this.handleChange}placeholder="Your name.."/>
<div style={{fontSize:12, color:"red"}}>
    {this.state.errorfname}
</div>

<label for="lname">Last Name</label>
<input type="text" id="lname" name="lname" value={this.state.lname} onChange={this.handleChange}placeholder="Your last name.."/>
<div style={{fontSize:12, color:"red"}}>
    {this.state.errorlname}
</div>

<label for="pnumber">Phone Number</label>
<input type="text" id="pnumber" name="pnumber" value={this.state.pnumber} onChange={this.handleChange}placeholder="Your phone number.."/>
<div style={{fontSize:12, color:"red"}}>
    {this.state.errorpnumber}
</div>


<label for="email">E-mail</label>
<input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange}placeholder="Your E-mail.."/>
<div style={{fontSize:12, color:"red"}}>
    {this.state.erroremail}
</div>


<label for="subject">Message Me</label>
<textarea id="subject" name="subject" value={this.state.subject} onChange={this.handleChange}placeholder="Write message.." style={{height:'200px'}}></textarea>
<div style={{fontSize:12, fontWeight:"bold", color:"red"}}>
    {this.state.errorsubject}
</div>

<div className="submitbuttonContainer">
    <button className="submitbutton" type="submit">Submit</button>
</div>

    </form>
    </div>
)
}
}

export default ValidationForm