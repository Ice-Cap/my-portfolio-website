import React from 'react';

function SortAlgorithm(props) {
    return (
        <div className='algo search'>
            <h3>{props.title}</h3>
            <div className='search-container'>
                {props.display}
            </div>
            <div className="flex space-between buttons-container">
                <button onClick={() => props.reset()}>Reset</button>
                <button onClick={() => props.search()}>Search</button>
            </div>
        </div>
    );
}

export default SortAlgorithm;