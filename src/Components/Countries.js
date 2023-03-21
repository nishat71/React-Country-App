import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Country from './Country';
import './Countries.css'


const Countries = (props) => {
    // console.log(props);
    return (
        <section className='countries'>
            {props.countries.map((country) => {
                const countryNew = { country, id: uuidv4() }
                // console.log(country)
                return (
                    <Country {...countryNew} key={countryNew.id} onRemoveCountry={props.onRemoveCountry}></Country> //country er modde  countryNew er data gula asksate pass krte pari
                )
            })}
        </section>
    )
}

export default Countries