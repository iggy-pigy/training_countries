import React from 'react';

const Languages = (props) => {
    const { country } = props
    console.log(props)
    return (
        <div>
            <ul>
                {country.map(languages => <li>{languages.name} </li>)}
            </ul>
        </div>
    );
};

export default Languages;