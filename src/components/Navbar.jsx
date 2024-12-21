
import logo from '../../public/assets/react-icon.png'
// import { Link } from 'react-router'
import { NavLink, useNavigate } from 'react-router'


const Navbar = () => {
   const navigate = useNavigate();

  return (
    <div className='navbar'>
     <NavLink to='/'>  <img src={logo} alt="" style={{width:50 , height:50}}/></NavLink>
      <ul>
        <NavLink to='/'><li>Home</li></NavLink> 
      <NavLink to='/product' >  <li>Products</li></NavLink>
      <NavLink to='/about'><li>About</li> </NavLink>  
      <NavLink to='/contact'> <li>Contact</li></NavLink>  
      </ul>
      <button onClick={()=>navigate('/about',{replace:true} )}>Get Started</button>
    </div>
  )
}

export default Navbar
