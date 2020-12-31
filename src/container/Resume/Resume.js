import React, { Component } from 'react';
import './Resume.css'
import eduImg from '../../images/test.png'

import exp from '../../images/experience.png'
import ProgressBar from '../ProgressBar'
class Resume extends Component {
    render() {
        return (
            <div className="resume">
                <div className="container-fluid">
                    <div className="animation_div">
                        <div className="about_me_div">MY SKILLS
                            <div className="about_line"></div>
                        </div>
                    </div>        
                            <div className="row myskills">
                                   
                                <div className="col-md-6">
                                <div className="skil">Html</div>        
                                <div className="row">
                                    <div className="skills">
                                        <p>90%</p>
                                    </div> 
                                    <div className="pro">
                                        <ProgressBar done="90"/>         
                                      </div>
                                </div>



                                <div className="skil">Css</div>        
                                <div className="row">
                                    <div className="skills">
                                        <p>90%</p>
                                    </div> 
                                    <div class="pro">
                                      <ProgressBar done="90"/>                                 
                                   </div>
                                </div>
                                <div className="skil">ReactJs</div>        
                                <div className="row">
                                    <div className="skills">
                                        <p>80%</p>
                                    </div> 
                                    <div class="pro">
                                      <ProgressBar done="80"/>
                                    </div>
                                </div>
                                <div className="skil">Photoshop</div>        
                                <div className="row">
                                    <div className="skills">
                                        <p>65%</p>
                                    </div> 
                                    <div class="pro">
                                      <ProgressBar done="65"/>
                                    </div>
                                </div>    
                                </div>                                    
                                
                                <div className="col-md-6">
                                <div className="skil">Redux</div>        
                                <div className="row">
                                    <div className="skills">
                                        <p>80%</p>
                                    </div> 
                                    <div class="pro">
                                      <ProgressBar done="80"/>
                                    </div>
                                </div>

                                <div className="skil">Javascript</div>        
                                <div className="row">
                                    <div className="skills">
                                        <p>70%</p>
                                    </div> 
                                    <div class="pro">
                                      <ProgressBar done="70"/>
                                    </div>
                                </div>
                                <div className="skil">Android</div>        
                                <div className="row">
                                    <div className="skills">
                                        <p>60%</p>
                                    </div> 
                                    <div class="pro">
                                      <ProgressBar done="60"/>
                                    </div>
                                </div>

                                
                                <div className="skil">Php</div>        
                                <div className="row">
                                    <div className="skills">
                                        <p>70%</p>
                                    </div> 
                                    <div class="pro">
                                      <ProgressBar done="70"/>
                                    </div>
                                </div>
   
                                </div>
                                
                            </div>
                            
                        
                    <div className="about_me_div">RESUME
                        <div className="about_line"></div>
                    </div>
                    <div className="row ml-3">
                                <div className="ml-1 mr-3"><img style={{height:'40px',width:'40px'}} src={eduImg}></img></div>
                                <div style={{fontSize:'28px',color:'black'}}>Education Qualification</div>
                            </div>

                        <div className="qualification">
                            
                                <div class="containdiv">

                                <div class="timeline-block timeline-block-right">
                                    <div class="marker"></div>
                                    <div class="timeline-content">
                                        <h3>Schooling</h3>
                                        <span>Araniko Secondary English School</span>
                                        <p>2070-First Division</p>
                                    </div>
                                </div>

                                <div class="timeline-block timeline-block-left">
                                    <div class="marker"></div>
                                    <div class="timeline-content">
                                        <h3>+2 (Science)</h3>
                                        <span>Times International College</span>
                                        <p>2073- First Division (73%)</p>
                                    </div>
                                </div>

                                <div class="timeline-block timeline-block-right">
                                    <div class="marker"></div>
                                    <div class="timeline-content">
                                        <h3>Bachelor (BSCCSIT)</h3>
                                        <span>Madan Bhandari College</span>
                                        <p>2074-Present</p>
                                    </div>
                                </div>

                                
                                </div>
                        
                        </div>  
                        <div className="row ml-3">
                                <div className="ml-1 mr-3"><img style={{height:'40px',width:'40px'}} src={exp}></img></div>
                                <div style={{fontSize:'28px',color:'black'}}>Experience and Hacks</div>
                            </div>

                        <main class="CV-page">
                            <div class="CV-grid">
                                <div class="CV-grid-column">
                                <div class="CV-jobs">
                                    <section class="CV-timeline CV-job">
                                    <h3 class="CV-timeline-heading"><span class="CV-timeline-heading-title">Skyward Consultancy's Website</span>&#8211;<small class="CV-timeline-heading-duration">July 2019 - Present</small></h3>
                                    <ul class="CV-timeline-details">
                                        <li class="CV-job-timeline-item">Developed and maintained code for in-house and client websites utilizing HTML5, CSS3, Javascript, jQuery.</li>
                                        <li class="CV-job-timeline-item">Tested front-end code in multiple browsers to ensure cross-browser compatability.</li>
                                      </ul>
                                    </section>
                                    <section class="CV-timeline CV-job">
                                    <h3 class="CV-timeline-heading"><span class="CV-timeline-heading-title">HEX Hackathon</span>&#8211; <span class="CV-timeline-heading-location">Himalayan International College</span><small class="CV-timeline-heading-duration">July 2018</small></h3>
                                    <ul class="CV-timeline-details">
                                        <li class="CV-timeline-details-item">Developed a prototype of smart securites system with team</li>
                                        <li class="CV-timeline-details-item">Secured 1st Postion in the competition</li>
                                    </ul>
                                    </section>
                                    <section class="CV-timeline CV-job">
                                    <h3 class="CV-timeline-heading"><span class="CV-timeline-heading-title">Organized 3 days Frontend Workshop</span>&#8211; <span class="CV-timeline-heading-location">Madan Bhandari College </span><small class="CV-timeline-heading-duration">March 2019</small></h3>
                                    <ul class="CV-timeline-details">
                                        <li class="CV-job-timeline-item">Provided a knowledge in frontend also with skills of photoshop form a experienced trainer</li>
                                        <li class="CV-job-timeline-item">Worked as a senior mentor</li>
                                    </ul>
                                    </section>
                                    <section class="CV-timeline CV-job">
                                    <h3 class="CV-timeline-heading"><span class="CV-timeline-heading-title">TechTrix Hack </span>&#8211; <span class="CV-timeline-heading-location">New Summit College</span><small class="CV-timeline-heading-duration">2018</small></h3>
                                    <ul class="CV-timeline-details">
                                        <li class="CV-timeline-details-item">Took Participate in Hack</li>
                                        <li class="CV-timeline-details-item">Developed a prototype of rental hub</li>
                                        
                                        <li class="CV-timeline-details-item">Done work of frontend</li>
                                        
                                    </ul>
                                    </section>
                                    <section class="CV-timeline CV-job">
                                    <h3 class="CV-timeline-heading"><span class="CV-timeline-heading-title">Angular Workshop</span>&#8211; <span class="CV-timeline-heading-location">College Nepal</span><small class="CV-timeline-heading-duration">Dec 2017</small></h3>
                                    <ul class="CV-timeline-details">
                                        <li class="CV-job-timeline-item">Took participate in 4 days angular workshop</li>
                                    </ul>
                                    </section>
                                    <section class="CV-timeline CV-job">
                                    <h3 class="CV-timeline-heading"><span class="CV-timeline-heading-title">It meet </span>&#8211; <span class="CV-timeline-heading-location">Visit Nepal 2020 hack organised by Leapfrog</span><small class="CV-timeline-heading-duration">2019</small></h3>
                                    <ul class="CV-timeline-details">
                                        <li class="CV-timeline-details-item">Took Participate in Hack</li>
                                        <li class="CV-timeline-details-item">Developed a prototype of  tourist smart securites app</li>
                                        
                                    </ul>
                                    </section>
                                    
                                </div>
                                </div>
                            </div>
                            
                            </main>                  

                    </div>
                </div>

        );
    }
}

export default Resume;














