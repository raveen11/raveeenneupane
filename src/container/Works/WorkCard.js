import React, { Component } from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap'
import vison from '../../images/vision.png'
import './Work.css'
import {Card} from 'react-bootstrap'

 const WorkCard = ({id,urls,img,title,name}) => {

    return (
                <div className="col-md-4 m-2 ml-auto mr-auto ">
                    <div class="cont">
                        <img src={img} className="carte_button"></img>
                        <div class="carte">
                                <a href={urls}><img src={vison} className="buttonimg"></img></a>
                        </div>    
                    </div>
                    <a href={urls} style={{textDecoration:'none'}}><h5 className="h5">{name}</h5></a>
                    
                               
                </div>
            
    )
}

export default WorkCard
