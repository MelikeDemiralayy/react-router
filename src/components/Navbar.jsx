import React from 'react'
import logo from '../../public/assets/react-icon.png'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='navbar'>
     <Link to='/'>  <img src={logo} alt="" style={{width:50 , height:50}}/></Link>
      <ul>
        <Link to='/'><li>Home</li></Link> 
      <Link to='/product' >  <li>Products</li></Link>
      <Link to='/about'><li>About</li> </Link>  
      <Link to='/contact'> <li>Contact</li></Link>  
      </ul>
      <button>Get Started</button>
    </div>
  )
}

export default Navbar
