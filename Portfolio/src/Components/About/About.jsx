/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>A propos de moi</h1>
        <img src={theme_pattern}  alt=''/>
      </div>
      <div className='about-sections'>
        <div className='about-left'>
            <img src={profile_img} alt=''/>
        </div> 
        <div className='about-right'>
            <div className='about-para'>
              <p>Je suis un web designer passionné, spécialisé dans la création d'interfaces qui allient esthétique et fonctionnalité. Mon approche se concentre sur une compréhension profonde de vos objectifs et de votre audience, afin de concevoir des sites web personnalisés qui non seulement captivent l'attention, mais aussi offrent une expérience utilisateur engageante.</p>
              <p>En tant que web designer, je combine créativité et technologie pour concevoir des sites web qui non seulement captivent visuellement, mais aussi offrent une expérience utilisateur fluide et intuitive. Mon objectif est de donner vie à vos idées en créant des interfaces sur mesure, adaptées à vos besoins et à ceux de votre public, tout en respectant les meilleures pratiques du design web moderne.</p> 
            </div>
            <div className='about-skills'>
              <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
              <div className='about-skill'><p>React Js</p><hr style={{width:"70%"}}/></div>
              <div className='about-skill'><p>Javascript</p><hr style={{width:"60%"}}/></div>
              <div className='about-skill'><p>Angular & Laravel</p><hr style={{width:"50%"}}/></div>
              <div className='about-skill'><p>PHP</p><hr style={{width:"70%"}}/></div>
            </div>
        </div>
      </div>
      <div className='about-achievements'>
          <div className='about-achievement'>
              <h1>03+</h1>
              <p>ANS D'EXPERIENCES</p>
          </div>
          <hr />
          <div className='about-achievement'>
              <h1>15+</h1>
              <p>PROJETS COMPLETES</p>
          </div>
          <hr />
          <div className='about-achievement'>
              <h1>10+</h1>
              <p>CLIENTS SATISFAITS</p>
          </div>
      </div>
    </div>
  )
}

export default About
