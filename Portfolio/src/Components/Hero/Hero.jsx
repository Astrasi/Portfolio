/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt=''/>
      <h1><span>Je suis Christian Komguep,</span> Web designer </h1>
      <p>En tant que web designer basé à Douala, Cameroun, avec une riche expérience, je m'engage à transformer vos idées en sites web exceptionnels, en vous garantissant une satisfaction totale à chaque étape.</p>
      <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' href='#contact'>Connecter avec moi</AnchorLink></div>
        <div className='hero-resume'><AnchorLink className='anchor-link' href='#about'>Mon résume</AnchorLink></div>
      </div>
    </div>
  )
}

export default Hero
 