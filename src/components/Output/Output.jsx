import React from 'react';
import './Output.css'

const Output = (props) => {
    const {title} = props.bookMark;
    return (
        <div>
            <div>

<div>{title}</div>

            </div>
            <div>

            </div>
        </div>
    );
};

export default Output;