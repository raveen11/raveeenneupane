import React, { Component } from 'react';
import { Logo } from '../../components/UI/Logo/Logo';
import {Link} from 'react-router-dom'
import './Side.css'

import '../../App.css'
import {withGetScreen} from 'react-getscreen'

class Sidebar extends Component {
    render() {
            const leftclick=this.props;
            const click =(
                
                <Link to="/home" className="text" onClick={this.props.leftclick}  activeClassName="active" style={{textDecoration:'none'}}>HOME <span class="sr-only">(current) </span> </Link> 
                                                
              );
	
              const click1 =(
                        <ul className="navbar-nav  ml-auto">
                            <li className="nav-item box">
                                <Link to="/home" className="text"  onClick={this.props.leftclick} activeClassName="active" style={{textDecoration:'none'}}>HOME</Link> 
                            </li>
                            <li className="nav-item box">
                            <Link to="/about" className="text"  onClick={this.props.leftclick} activeClassName="active" style={{textDecoration:'none'}}>ABOUT</Link> 
                            </li>
                        
                            <li className="nav-item box">
                            <Link to="/resume" className="text"  onClick={this.props.leftclick} activeClassName="active" style={{textDecoration:'none'}}>RESUME</Link> 
                            </li>
                            <li className="nav-item box">
                                <Link to="/portfolio" className="text"  onClick={this.props.leftclick} activeClassName="active" style={{textDecoration:'none'}}>WORKS</Link>
                            </li>
                        
                            <li className="nav-item box">
                            <Link to="/contact" className="text"  onClick={this.props.leftclick} activeClassName="active" style={{textDecoration:'none'}}>CONTACTS</Link>
                            </li>
                    </ul> 
                                                
              );
              const click2 = (
                            <ul className="navbar-nav  ml-auto">
                            <li className="nav-item box">
                                <Link to="/home" className="text"  activeClassName="active" style={{textDecoration:'none'}}>HOME</Link> 
                            </li>
                            <li className="nav-item box">
                            <Link to="/about" className="text"  activeClassName="active" style={{textDecoration:'none'}}>ABOUT</Link> 
                            </li>
                        
                            <li className="nav-item box">
                            <Link to="/resume" className="text"  activeClassName="active" style={{textDecoration:'none'}}>RESUME</Link> 
                            </li>
                            <li className="nav-item box">
                                <Link to="/portfolio" className="text"  activeClassName="active" style={{textDecoration:'none'}}>WORKS</Link>
                            </li>
                        
                            <li className="nav-item box">
                            <Link to="/contact" className="text"  activeClassName="active" style={{textDecoration:'none'}}>CONTACTS</Link>
                            </li>
                    </ul>                                  
              );
               
            return (
                <div className="row">
                    <div className="side">
                                        <div className="logobox">
                                            <Link to="/home"><Logo/></Link>
                                        </div>
                                        <div style={{marginTop:'60px',height:'1px',backgroundColor:'#343a40',marginBottom:'30px'}}/>
                                        <div className="navlist">
                                                {(this.props.isMobile())?click1:click2}
                                        </div>   
                                    <div style={{marginTop:'80px',height:'1px',backgroundColor:'#343a40'}}/>
                                    <div className="footer">
                                    <footer>&copy; Copyright 2020 RABIN</footer>
                                    </div>
                                        
                                </div>
                                
                    </div>
                
           
        );
    }
}

export default withGetScreen(Sidebar);

