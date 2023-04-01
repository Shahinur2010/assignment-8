import React from 'react';
import './Output.css'

const Output = ({bookMark}) => {

    return (
        <div>
            {bookMark.title}
        </div>
    );
};

export default Output;