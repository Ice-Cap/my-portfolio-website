import React from 'react';

function SortAlgorithm(props) {
    return (
        <div className='algo'>
            <h3>{props.title}</h3>
            <div className='array-container'>
                {props.display}
            </div>
            <div className="flex space-between buttons-container">
                <button onClick={() => props.reset()}>Reset</button>
                <button onClick={() => props.sort()}>Sort</button>
            </div>
        </div>
    );
}

export default SortAlgorithm;