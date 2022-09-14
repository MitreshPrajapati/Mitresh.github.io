
import React from 'react'
import { CTA } from './CTA'
import './header.css'
import ME from '../../assets/me.jpg'
import { HeaderSocials } from './HeaderSocials'


export const Header = () => {
  return (
    <header>
        <div className="container header_container">
            <h5>Hello I'm</h5>
            <h1>Mitresh</h1>
            <h5 className="text-light">
                Full Stack Developer
            </h5>
            <CTA/>
            <HeaderSocials/>
            
            <div className="me">
                <img src={ME} alt="me" />
            </div>

           <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
    </header>
  )
}
