import React, {useState} from 'react'
import './Navbar.css'
import {FaUser} from 'react-icons/fa'
import {useSelector} from 'react-redux'

const Navbar = () => {

  const [isActive, setIsActive] = useState(false)
  const user = useSelector(state => state.user)

  return (
    <div className='navbar'>
      <div className="navbar__wrapper">
        <h1 className='logo'>HUT</h1>
        <div className={isActive ? "navbar__links active" : "navbar__links"}>
          <a href="/">home page</a>
          <a href="/sezioni">sezioni</a>
          <a href="/contact">chi siamo?</a>
          <button>MENU</button>
          <a href={user?.currentUser ? `/profile/${user.currentUser._id}` : "/login"} className='profile'>
            <FaUser />
          </a>
        </div>
      </div>
      <div className='hamburger' onClick={() => {
        setIsActive(prev => !prev);
        }}>
        <span className={isActive ? 'bar active' : 'bar'}></span>
        <span className={isActive ? 'bar active' : 'bar'}></span>
        <span className={isActive ? 'bar active' : 'bar'}></span>
      </div>
    </div>
  )
}

export default Navbar