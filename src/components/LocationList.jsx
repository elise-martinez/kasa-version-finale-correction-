import React from 'react';
import { NavLink } from 'react-router-dom'

// Importation des données des logements
import dataList from '../assets/logements.json';

const Location = () => {
    return (
        <div className="locationContainer">
            {/* Mon .map() me permet d'aller chercher toutes les données des logements*/}
            {dataList.map((data) => (
                <NavLink className="locationCard" key={data.id} to={"/logement/" + data.id}>
                    <img className="locationImg" src={data.cover} alt={data.title} />
                    <p className="locationTitle" >
                        {data.title}
                    </p>
                </NavLink>
            ))}
        </div>)
}

export default Location;
