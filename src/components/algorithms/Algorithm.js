import React from 'react';

function Algorithm(props) {
    return (
        <div className='algo'>
            <h3>{props.title}</h3>
            <div className='array-container'>
                {props.display}
            </div>
            <div className="flex space-between">
                <button onClick={() => props.sort()}>Sort</button>
                <button onClick={() => props.reset()}>Reset</button>
            </div>
        </div>
    );
}

export default Algorithm;