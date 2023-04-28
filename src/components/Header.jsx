import React from 'react'
import { NavLink } from 'react-router-dom'

// Importation du logo kasa saumon
import logo from '../assets/logoSalmon.png'

const Header = () => {
    return <header className="headerKasa">
         <NavLink to="/"> <img className="logoHeader" src={logo} alt="" /> </NavLink>
        <div className="navLinkHeader">
            <NavLink className="navLinkHeader-nav" to="/" style={isActive => ({})}>Accueil</NavLink>
            <NavLink className="navLinkHeader-nav" to="/about" style={isActive => ({})}>A Propos</NavLink>
        </div>
    </header>
}

export default Header;