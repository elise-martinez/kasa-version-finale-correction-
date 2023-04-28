import React from "react";
import { useState } from 'react'

// Importation des images flèches
import arrowLeft from "../assets/arrowLeft.png"
import arrowRight from "../assets/arrowRight.png"


const LogementCarousel = ({ logementPictures }) => {
    // console.log("Props du carousel = ", logementPictures)

    // Définition du state du composant = Index de l'image
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageNumber = logementPictures.length;

    // Au click sur une flèche nous changeons l'index dans le tableau l'image
    const carouselLeftScrolling = () => {
        if (currentIndex < 1) {
            return setCurrentIndex(imageNumber - 1)
        }
        return setCurrentIndex(currentIndex - 1)
    }
    const carouselRightScrolling = () => {
        if (currentIndex === logementPictures.length - 1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex + 1)
    }

    // Si le nombre d'images est supérieur à 1 on affiche un carousel
    return (
        <div className="carouselContainer">
            <div className="carouselImg" style={{
                backgroundPositionY: "center",
                backgroundPositionX: "center",
                backgroundSize: "cover",
                backgroundImage: `url(${logementPictures[currentIndex]})`
            }}>
            {(imageNumber > 1) ?
                    <div className="carouselSwitch">
                        <div className="carouselArrows">
                            <img onClick={carouselLeftScrolling} className="arrowLeft" src={arrowLeft} alt="Photo précédente" />
                            <img onClick={carouselRightScrolling} className="arrowRight" src={arrowRight} alt="Photo suivante" />
                        </div>
                        <p className="carouselCounter">{currentIndex + 1}/{logementPictures.length}</p>
                    </div> : null
                }
            </div>
        </div>
    )

}

export default LogementCarousel;
