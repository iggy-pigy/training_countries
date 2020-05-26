import React from 'react';

const Flag = (props) => {
    const { flag } = props
    return (
        <div>
            <img src={flag} alt="flag" width="180" height="130" />
        </div>
    );
};

export default Flag;