import React, { Component } from 'react';
import './Home.css'
import Texts from './Texts';
import bg1 from '../../images/bg1.jpg'
class Home extends Component {
    render() {
        
const texts: string[] = [
	"Rabin Neupane","React Developer","FreeLancer","Web Developer","Frontend Developer","UI/UX Designer","Photoshop Designer"
]; 
var sectionStyle = {
    width: "100%",
    height: "400%",
    backgroundImage: "url(" + { bg1 } + ")",
    padding:'20px',
    marginBottom:'200px'
  };
        return (
            <div style={sectionStyle} >
                
                <div class="context">
                    <div className="home_div">
                        <h2 className="h1">Hey, I am <Texts className={'texts'} waitbt={50} wait={2000} speed={27} texts={texts}/>
                           </h2> 
                            
                    <p style={{color:'#241c1c',margin:'12px',fontSize:'19px'}}> 
                    An independent and self-motivated person with patience and dedication in designing and Programming.
                    </p>
                    <hr style={{backgroundColor:'grey'}}/>

                   <div className="social">
        
                    <ul class="social-icons icon-circle icon-rotate list-unstyled list-inline"> 
                        <li> <a href="#"><i class="fa fa-youtube"></i></a> </li> 
                        <li> <a href="#"><i class="fa fa-instagram"></i></a></li>
                        <li> <a href="#"><i class="fa fa-facebook"></i></a></li>  
                        <li> <a href="#"><i class="fa fa-github"></i></a></li> 
                        <li> <a href="#"><i class="fa fa-linkedin"></i></a></li>   
                    </ul>

                   </div>
                </div>

    </div>
               
               
               
              
            </div>
        );
    }
}

export default Home;