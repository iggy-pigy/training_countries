import React from 'react';
import Country from "./Country";

const Countries = (props) => {
    const { countries } = props
    return (
        <div>
            <ul>
                {countries.map(country => <Country key={country.name} country={country} />)}
            </ul>
        </div>
    );
};

export default Countries;