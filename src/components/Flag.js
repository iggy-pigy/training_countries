import React from 'react';

const Flag = (props) => {
    const { flag } = props
    return (
        <div>
            <img src={flag} alt="flag" width="15%" height="15%" />
        </div>
    );
};

export default Flag;