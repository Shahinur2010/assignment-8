import React from 'react';
import './Answers.css'

const Answers = () => {
     

    return (
        <div className='answer'>
            <h3 className='title'>Answers</h3>
            <div>1. State is owned locally and the component itself updates it. Props are owned and read-only by a parent.
            </div>
            <div>2. useEffect is a tool that lets us interact with the outside world but not affect the rendering or performance of the component that it's in.
            </div>
            <div>3. Validating an input while it's receiving characters is another great application for useEffect . Directly updating the DOM are some examples of side effects.
            </div>
            <div>4.
                React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. React basically maintains a tree for us. This tree is able to do efficient diff computations on the nodes.
            </div>
        </div>
    );
};

export default Answers;