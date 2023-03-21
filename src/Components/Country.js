import React from 'react'
import './Country.css'


const Country = (props) => {
    // console.log(props);
    const { country } = props;
    // console.log(country);
    const { name, flags, capital, population, area } = country;

    const handleRemoveCountry = (name) => { //ekane value recive krbo, value er nam jkuno kisu deya jabe
        props.onRemoveCountry(name);
    }

    return (
        <article className='country'>
            <div className=''>
                <img className='flag' src={flags.png} alt={name.common} />
                <h3>Name : {name.common}</h3>
                <h3>Population : {population}</h3>
                <h3>Capital : {capital}</h3>
                <h3>Area : {area}</h3>
                <button onClick={() => { handleRemoveCountry(name.common) }} className='btn'>Remove Country</button>
                {/* remove btn e click krle just name dekabe, name er maddome remove krte chacchi cz each country name different */}
            </div>
        </article>
    )
}

export default Country;

/* main data gula app.js e royese, ekan teke data gula pass krsi countries e then country te
 tai parent e sbar age ashte hobe, remove btn e click krle data parent e pete chacchi , parent e name pele then filtering krbo 
 
 child teke parent e data niye ashte hobe 
 jar jnno app.js teke props hisebe function patate hobe
 */