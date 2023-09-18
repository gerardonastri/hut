import React, {useState} from 'react'
import {TbSend} from 'react-icons/tb'
import './Newsletter.css'

const Newsletter = () => {

    const [email, setEmail] = useState('')

  return (
    <div className='newsletter'>
        <h1 className="logo-dark">HUT</h1>
        <h3>ISCRIVITI ALLA NEWSLETTER DI HUT PER RICEVERE LE NOTIFICHE</h3>
        <div className="newsletter__input">
            <input type="email" name="email" placeholder='Inserisci la tua email...' value={email} onChange={(e) => setEmail(e.target.value)}  />
            <span className="newsletter__input-icon"><TbSend /></span>
        </div>
    </div>
  )
}

export default Newsletter