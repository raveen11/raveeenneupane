import React from 'react'
import LogoImage from '../../../images/hero.jpg'
import './Logo.css'

export const Logo = () => {
    return (
        <div>
            <div className="rounded-circle roundborder">
            <img className="rounded-circle" src={LogoImage} style={{width:'180px',height:'190px'}}></img>
            </div>
        </div>
    )
}
