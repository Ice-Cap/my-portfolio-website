import React from 'react';

function SortAlgorithm(props) {
    return (
        <div className='algo search'>
            <h3>{props.title}</h3>
            <div className='search-container'>
                {props.display}
            </div>
            <div className="flex space-between search-buttons-container">
                <button onClick={() => props.search()}>Search</button>
                <button onClick={() => props.reset()}>Reset</button>
            </div>
        </div>
    );
}

export default SortAlgorithm;