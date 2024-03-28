import React, { useState } from 'react';

function BinarySearch(props) {
    const [state, setState] = useState({
        currIndex: null,
        nextIndex: null,
        array: [5, 3, 8, 6, 2, 7, 1, 4, 10, 9]
    });

    const display = state.array.map((item, index) => {
        const isCurrent = index === state.currIndex;
        const isNext = index === state.nextIndex;
        let classes = 'item ' + 'i' + item + ' ';
        return <span className={classes} key={item + '-' + index}></span>;
    });
    return (
        <div className='algo'>
            <h3>Binary Search</h3>
            <div className='array-container'>
                {display}
            </div>
            <div className="flex space-between">
                <button onClick={() => props.search()}>Search</button>
                <button onClick={() => props.reset()}>Reset</button>
            </div>
        </div>
    );
}

export default BinarySearch;