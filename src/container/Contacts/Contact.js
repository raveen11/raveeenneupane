import React, { Component } from 'react';
import emailjs from 'emailjs-com'

import './Contact.css'
import phone from '../../images/phone.png'
import email from '../../images/mail.png'
import address from '../../images/address.png'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name:'',
          email:'',
          subject:'',
          phone:'',
          contact1:'',
          
          contact2:'',
          message:'',
          text:''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
            
        });
        if(this.state.contact1===this.state.contact2){
            this.setState({
                text:'Matched'
            })
        }
        else{
            this.setState({
                text:''
            })
        }
       
      }
    
       handleSubmit(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'mail_template', e.target, 'user_k4CZ2gYX4FIaqzyY3G1hl')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          this.setState({ name:'',
          email:'',
          subject:'',
          phone:'',
          contact:'',
          message:''
        })
      }

      

    render() {
        return (
           <div style={{height:'720px',marginTop:'20px'}}>
<div class="container">


    <div class="wrapper">

      <div class="company-info">
        <h3 className="h3">Connect With Me</h3>
      
        <ul>
          <li className="add_an"><i class="fa fa-road" style={{fontSize:'25px',marginRight:'10px'}}></i> Lokanthali,Kathmandu Nepal</li>
          <li className="cont_an"><i class="fa fa-phone" style={{fontSize:'25px',marginRight:'10px'}}></i> (+977) 9842510254</li>
          <li className="email_an"><i class="fa fa-envelope" style={{fontSize:'25px',marginRight:'10px'}}></i> neupane.rabin11@gmail.com</li>
        </ul>
      </div>
      <div class="contact">

        <form id="contact-form" onSubmit={this.handleSubmit}>

          <p>
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} id="name" required/>
          </p>

          <p>
            <label>Company</label>
            <input type="text" name="subject" value={this.state.subject} onChange={this.handleChange} id="subject" required/>
          </p>

          <p>
            <label>E-mail Address</label>
            <input type="email" name="email"value={this.state.email}  onChange={this.handleChange} id="email" required/>
          </p>

          <p>
            <label>Phone Number</label>
            <input type="text" name="phone" value={this.state.phone}  onChange={this.handleChange} id="phone" required/>
          </p>

          <p class="full">
            <label>Message</label>
            <textarea name="message"value={this.state.message}  onChange={this.handleChange} rows="5" id="message" required></textarea>
          </p>

          <p class="full">
            <button type="submit" value="send" className="mb-5">Submit</button>
          </p>

        </form>
        </div>
    </div>
    </div>

</div>


        );
    }
}

export default Contact;