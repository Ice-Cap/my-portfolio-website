import React from 'react';

function Algorithm(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div className='array-container'>
                {props.display}
            </div>
            <button onClick={() => props.sort()}>Sort</button>
            <button onClick={() => props.reset()}>Reset</button>
        </div>
    );
}

export default Algorithm;