import React from 'react'
import { NavLink } from 'react-router-dom'

// Importation du logo kasa saumon
import logo from '../assets/logoSalmon.png'

const Header = () => {
    return <header className="headerKasa">
        <img className="logoHeader" src={logo} alt="" />
        <div className="navLinkHeader">
            <NavLink className="navLinkHeader-nav" to="/kasa">Accueil</NavLink>
            <NavLink className="navLinkHeader-nav" to="/about">A Propos</NavLink>
        </div>
    </header>
}

export default Header;