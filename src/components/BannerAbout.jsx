import React from 'react'

// Importation de la banière à propos
import bannerAbout from '../assets/banner1.png'

const BannerAbout = () => {
    return <div>
        <img className="bannerAboutImg" src={bannerAbout} alt="" />
    </div>
}

export default BannerAbout;