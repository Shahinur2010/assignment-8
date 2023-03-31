import React from 'react';
import './Output.css'

const Output = ({bookMark}) => {
    

// let numberOfBookmark = 0;
// for(const singleBookmark of bookMark.title){
//     numberOfBookmark = numberOfBookmark + singleBookmark.numberOfBookmark;
// }

    return (
        <div>
            {/* {numberOfBookmark} */}
            <div>
            {bookMark.title}
            </div>
            <div>

            </div>
        </div>
    );
};

export default Output;