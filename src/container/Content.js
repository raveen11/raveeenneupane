import React, { Component } from 'react';
import './Content.css'
import emailjs from 'emailjs-com'
class Content extends Component {
  
  render() {
    return (
      <div style={{height:'720px',marginTop:'20px'}}>
            <div class="container">


                <div class="wrapper">

                  <div class="company-info">
                    <h3 className="h3">Connect With Me</h3>
                  
                    <ul>
                      <li><i class="fa fa-road" style={{fontSize:'25px',marginRight:'10px'}}></i> Lokanthali,Kathmandu Nepal</li>
                      <li><i class="fa fa-phone" style={{fontSize:'25px',marginRight:'10px'}}></i> (+977) 9842510254</li>
                      <li><i class="fa fa-envelope" style={{fontSize:'25px',marginRight:'10px'}}></i> neupane.rabin11@gmail.com</li>
                    </ul>
                  </div>
                  <div class="contact">

                    <form id="contact-form">

                      <p>
                        <label>Name</label>
                        <input type="text" name="name" id="name" required/>
                      </p>

                      <p>
                        <label>Company</label>
                        <input type="text" name="company" id="company"/>
                      </p>

                      <p>
                        <label>E-mail Address</label>
                        <input type="email" name="email" id="email" required/>
                      </p>

                      <p>
                        <label>Phone Number</label>
                        <input type="text" name="phone" id="phone"/>
                      </p>

                      <p class="full">
                        <label>Message</label>
                        <textarea name="message" rows="5" id="message"></textarea>
                      </p>

                      <p class="full">
                        <button type="submit" className="mb-5">Submit</button>
                      </p>

                    </form>
                    </div>
                </div>
                </div>
      
      </div>
    );
  }
}

export default Content;