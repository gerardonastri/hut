import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__wrapper">
        <div className="footer__section">
          <h1 className='logo'>HUT</h1>
          <p>Un sito pensato per studenti, usato da studenti e realizzato da studenti. Trovi qui tutto quello che ti serve per affrontare 5 anni di scuole superiori senza dover chiedere gli appunti al secchione di turno.</p>
        </div>
        <div className="footer__section">
          <h3>Education</h3>
          <div className="footer__section-links">
            <a href="/">quiz</a>
            <a href="/">lista argomenti</a>
            <a href="/">ricerca</a>
            <a href="/">appunti</a>
          </div>
        </div>
        <div className="footer__section">
          <h3>Link veloci</h3>
          <div className="footer__section-links">
            <a href="/">home</a>
            <a href="/">iscriviti</a>
            <a href="/">sezioni</a>
            <a href="/">chi siamo?</a>
          </div>
        </div>
        <div className="footer__section">
          <h3>Info e contatti</h3>
          <div className="footer__section-links">
            <a href="tel:123456789">tel: 123456789</a>
            <a href="/">indirizzo: via trinità 27</a>
            <a href="mailto:loremipsum@gmail.com">mail: loremipsum@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer