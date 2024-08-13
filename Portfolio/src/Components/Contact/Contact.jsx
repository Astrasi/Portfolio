/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Contact = () => {

        const [result, setResult] = React.useState("");
      
        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "264a7bcd-dcd6-4b04-b95a-e726a445dd63");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
            setResult("Contact envoyé avec succès");
            alert(data.message);
            event.target.reset();
          } else {
            console.log("Erreur", data);
            setResult(data.message);
          }

        };

  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Contactez Moi</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Des Besoins ou des Envies</h1>
                <p>je suis pour la realisations de tout vos projets, pour plus d'informations contactez-moi </p>
                <div className='contact-details'>
                    <div className='contact_detail'>
                        <img src={mail_icon} alt=''/> <p>christianpoka46@gmail.com</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={call_icon} alt=''/> <p>+237 651-99-37-36</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={location_icon} alt=''/> <p>CA, Douala</p>
                    </div>
                 </div>
            </div>
            
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor=''>Votre Nom</label>
                <input type='text' placeholder='Entrez votre nom' name='nom'/>
                <label htmlFor=''>Votre Email</label>
                <input type='email' placeholder='Entrez votre email' name='email'/>
                <label htmlFor=''>Ecrivez votre message ici</label>
                <textarea name='message' rows={8} placeholder='Entrez votre message'/>
                <button type='submit' className='contact-submit'>Envoyer</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
