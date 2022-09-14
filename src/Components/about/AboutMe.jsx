

import React from 'react'
import { FaAward } from 'react-icons/fa';
import './about.css'
import ME from '../../assets/me-about-img.jpg';

export const AboutMe = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about_content">
          {/* <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>6 months Experienced Fresher</small>
            </article>

            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>projets</h5>
              <small></small>
            </article>

            
          </div> */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ea enim quae libero natus. Corrupti neque culpa, quod, facilis perspiciatis quas dolore nihil error impedit voluptates expedita laborum, illum ducimus.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
