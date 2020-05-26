import React from 'react';
import Languages from "./Languages";
import Flag from "./Flag";

const Country = (props) => {
    const { country } = props
    return (
        <div>
            <h2> {country.name}</h2>
            <ul>
                <li>capital {country.capital}</li>
                <li>population {country.population} </li>
            </ul>
            <h4>languages</h4>
            <Languages country={country.languages} />
            <Flag flag={country.flag} />
        </div>
    );
};

export default Country;