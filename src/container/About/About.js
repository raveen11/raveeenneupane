import React, { Component,useState } from 'react';
import './About.css'
import Image from '../../images/hero2.jpg'
import app from '../../images/app.png'
import web from '../../images/web.png'
import photoshop from '../../images/photoshop.png'
import {Link} from 'react-router-dom'
import uploadedFileLink from './cv.pdf'
import {Button, Modal} from 'react-bootstrap'
import FsLightbox from 'fslightbox-react';
import mg from '../../images/mg.png'
const About =()=>{
        
    const [modalShow,setModalShow]=React.useState(false);
    const [toggler, setToggler] = useState(false);
    const [img,setImg]=React.useState(Image)
    
        return (
            <div>
                <div className="container-fluid">
                    <div className="animation_div">
                    <div className="about_me_div">ABOUT ME
                        <div className="about_line"></div>
                   </div>
                    </div>    
                        <div className="row">
                            <div className="col-sm col-md-6">
                                    <div className="left">
                                        <img className="image rounded" src={img}></img>
                                        <div class="middle">
                                             <img onClick={() => setToggler(!toggler)} className="zoom_icon" src={mg}/> 
                                        </div>

                                        <FsLightbox
                                        toggler={toggler}
                                        sources={[
                                        img
                                        ]}
                                        />
                                    </div>
                            </div>
                            <div className="col-sm col-md-6">
                                <div className="right">
                                    <h3>I am <a style={{textDecoration:'none'}} className="name">Rabin Neupane</a></h3>
                                    <div>
                                        <h6>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium massa id luctus sodales. Nullam elementum nec nisl eget porta. Ut lacinia rutrum mauris quis ultrices.
                                        </h6>
                                    </div>
                                            <div className="les">
                                                <div><h5 className="intro">Full Name <m className="me">: Rabin Neupane</m></h5></div>
                                                <div><h5 className="intro">Age       <m className="age">: 22 years</m></h5></div>
                                                <div><h5 className="intro">Nationality <m className="nationlity">: Nepali</m></h5></div>
                                                <div><h5 className="intro">Language <m className="lang">: Nepali,English</m></h5></div>
                                                <div><h5 className="intro">Address <m className="add">: Koshi,Terhathum</m></h5></div>
                                                <div><h5 className="intro">Freelance <m className="free">: Avaliable</m></h5></div>               
                                                <div><h5 className="intro">Contacts <m className="number">: 9842510254</m></h5></div>
                                            </div>
                                    
                                    <div>
                                        <a href={uploadedFileLink} target="_blank" rel="noopener noreferrer" download>
                                            <Button className="btns">
                                                <i className="fa fa-download"/>
                                                Download CV
                                            </Button>
                                        </a>
                                    </div>
                                </div>                                 
                           </div>
                        </div>


                        <div className="about_me_div">SERVICES
                            <div className="about_line"></div>
                        </div>
                    
                        <div className="row p-3">
                            <div className="col-md-4">
                                <div className="card" style={{width: '19rem',height:'16rem',backgroundColor:'#006d77',borderTop:'6px solid #2b2d42',margin:'2px'}}>
                                   <div style={{padding:'10px'}}>
                                        <div className="card_icon"><img src={app} style={{height:'60px',width:'50px'}}></img></div> 
                                        <div className="title">MOBILE APPLICATION</div>
                                        <div style={{borderBottom:'3px solid #393761',width:'60px',marginTop:'5px'}}></div>
                                        <div className="card_body">
                                            <p>Well designed mobile application can be made</p>
                                        </div>
                                   </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                            <div className="card" style={{width: '19rem',height:'16rem',backgroundColor:'#006d77',borderTop:'6px solid #2b2d42',margin:'2px'}}>
                                   <div style={{padding:'10px'}}>
                                        <div className="card_icon"><img src={web} style={{height:'60px',width:'50px'}}></img></div> 
                                        <div className="title">WEB DESIGN</div>
                                        <div style={{borderBottom:'3px solid #393761',width:'60px',marginTop:'5px'}}></div>
                                        <div className="card_body">
                                            <p>Designed websites using Reactjs or Html css.</p>
                                        </div>
                                   </div>
                                </div>

                            </div>
                            <div className="col-md-4">
                            <div className="card" style={{width: '19rem',height:'16rem',backgroundColor:'#006d77',borderTop:'6px solid #2b2d42',margin:'2px'}}>
                                   <div style={{padding:'10px'}}>
                                        <div className="card_icon"><img src={photoshop} style={{height:'60px',width:'50px'}}></img></div> 
                                        <div className="title">PHOTOSHOP</div>
                                        <div style={{borderBottom:'3px solid #393761',width:'60px',marginTop:'5px'}}></div>
                                        <div className="card_body">
                                            <p>Basic knowledge of photoshop with skills of adobe illustrator and can design Logo,Broucher,Flyier,Social Media Post etc </p>
                                        </div>
                                   </div>
                                </div>

                            </div>
                        </div>



                    </div>
                </div>

        );
    }

export default About;



