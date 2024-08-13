/* eslint-disable no-unused-vars */
import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
                <img src={footer_logo} alt=''/>
                <p>Transformons vos idées en réalité digitale. Basé à Douala, Cameroun, je suis dédié à créer des sites web qui dépassent vos attentes et renforcent votre présence en ligne</p>
            </div>
            
            <div className='footer-top-right'>
                <div className='footer-email-input'>
                    <img src={user_icon} alt=''/>
                    <input type='email' placeholder='Entrer votre email'/> 
                </div>               
                <div className='footer-subscribe'>Souscrire</div>         
            </div>
        </div>
        <hr/>
        <div className='footer-bottom'>
            <p className='footer-bottom-left'>© 2024 Astra Silver. Tout droits réserves</p>
            <div className='footer-bottom-right'>
                <p>Termes des Services</p>
                <p>Politique de confidentialité</p>
                <p>Restez connectez avec moi</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
