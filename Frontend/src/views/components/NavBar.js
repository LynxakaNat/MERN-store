import './NavBar.css';
import {Link, useNavigate} from 'react-router-dom'
import {isLogin,logout,GetUser, GetAdmin} from '../../localstorage'
import React, { useEffect} from 'react'
function NavBar() {
    const navigate = useNavigate();
    const Logout = () => {
      console.log(isLogin())
      console.log(GetUser())
      logout()
      navigate('/')}

    return ( <nav className="navbar">
    <div className="navbar__logo">
      <h2><Link to='/' style={{'text-decoration': 'none'}}>TeaTeaTea</Link></h2>
    </div>

    <ul className="navbar__links">
    {GetAdmin() ? (
      <li>
      <Link to="/admin">
        Admin
        </Link>
        </li>) : (null)}
      <li>
      <Link to="/view">
        Shop
        </Link>
      </li>
        {!isLogin() ? (
          <li>
        <Link to="/login">
          Login
          </Link>
          </li>):( <li>
          <p  onClick={Logout}>
          Logout
          </p>
        </li>)}
        <li>
        <Link to="/cart">
          Cart
          </Link>
        </li>
        <li>

        </li>
    </ul>

    <div className="hamburger__menu">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </nav>
)
}

export default NavBar
