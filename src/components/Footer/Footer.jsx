import React, { useContext, useEffect, useState } from 'react';
import ContactForm from '../ContactForm/ContactForm'
import { BiCurrentLocation, BiEnvelope, BiPhone } from 'react-icons/bi'
import { BsLinkedin,BsGithub,BsChatText } from 'react-icons/bs'
import { IconContext } from 'react-icons';
import { ViewportContext } from '../ViewportContext/ViewportContext';

import "./Footer.css"

export default function Footer() {
  const { width, height } = useContext(ViewportContext);
  const [mobile, setMobile] = useState(false);
  
  useEffect(() => {
    function checkWidth() {
      if (width <= 940) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, [width]);

  function handleEmailClick() {
    const emailAddress = 'curtismsalcedo@gmail.com';
    const emailSubject = 'Hello Curtis!';
    const emailBody = 'Hi Curtis, my name is ________ and I wanted to connect with you.';
    const emailLink = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;
    window.location.href = emailLink;
  }

  function handlePhoneClick() {
    const phoneNumber = '7207721689';
    window.location.href = `tel:${phoneNumber}`;
  }

  function handleTextClick() {
    const phoneNumber = '7207721689';
    const message = 'Hi Curtis, I would like to get in touch with you!';
    const smsLink = `sms:${phoneNumber}?body=${message}`;
    window.location.href = smsLink;
  }

  function handleLocationClick() {
    const location = 'Westminster, CO';
    const locationLink = `https://www.google.com/maps/place/${location}`;
    window.location.href = locationLink;
  }

  return (
    <>
    <div id="contact" className="FooterContainer">
      <div className="ContactContainer">

        <div className="ContactInfo">

          <ContactForm />

          <div className='FooterMainInfo'>
            <div className='FooterName'>Curtis Salcedo</div>
            
            { mobile ? (
                <div className="MobileFooterIcons">
                  <div className="ContactEmail">
                    <IconContext.Provider value={{ size: '3em', color: 'black' }} onClick={handleEmailClick}>
                      <BiEnvelope />
                    </IconContext.Provider>
                  </div>
                  <div className="ContactPhone" onClick={handlePhoneClick}>
                    <IconContext.Provider value={{ size: '3em', color: 'black' }}>
                      <BiPhone />
                    </IconContext.Provider>
                  </div>
                  <div className="ContactText" onClick={handleTextClick}>
                    <IconContext.Provider value={{ size: '3em', color: 'black' }}>
                      <BsChatText />
                    </IconContext.Provider>
                  </div>
                  <IconContext.Provider value={{ size: '3em', color: 'black', margin: '.25vmin' }}>
                    <a href="https://www.linkedin.com/in/curtis-salcedo" target="_blank" rel="noopener noreferrer">
                      <BsLinkedin />
                    </a>
                  </IconContext.Provider>
                  <IconContext.Provider value={{ size: '3em', color: 'black' }}>
                    <a href="https://github.com/curtis-salcedo" target="_blank" rel="noopener noreferrer">
                      <BsGithub />
                    </a>
                  </IconContext.Provider>
                </div>
            ) : (
              <>
                <div className="ContactLocation" onClick={handleLocationClick}><BiCurrentLocation /> Westminster, CO</div>
                <div className="ContactEmail" onClick={handleEmailClick}><BiEnvelope /> curtismsalcedo@gmail.com</div>
                <div className="ContactPhone" onClick={handlePhoneClick}><BiPhone /> | <BsChatText />  (720) 772-1689</div>
                <div className="FooterIconLinks">
                <IconContext.Provider value={{ size: '2em', color: 'blue', margin: '.25vmin' }}>
                  <a href="https://www.linkedin.com/in/curtis-salcedo" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
                </IconContext.Provider>
                <IconContext.Provider value={{ size: '2em', color: 'black' }}>
                  <a href="https://github.com/curtis-salcedo" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                </IconContext.Provider>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}