import React from 'react';
import './Output.css'

const Output = ({ bookMark }) => {

    return (
        <div className='bookMark-title'>
            {bookMark.title}
        </div>
    );
};

export default Output;