import React, { useState } from 'react';
import { delay } from '../../utils/utils';

function BinarySearch(props) {
    const [state, setState] = useState({
        currIndex: 0,
        nextIndex: null,
        needle: 7,
        array: [5, 3, 8, 6, 2, 7, 1, 4, 10, 9]
    });

    async function search() {
        let low = 0;
        let high = state.array.length - 1;
        let mid = Math.floor((high + low) / 2);

        while (low <= high) {
            await delay(150);
            setState((prev) => {
                return {...prev, currIndex: mid};
            });

            if (state.array[mid] === state.needle) {
                return mid;
            } else if (state.array[mid] < state.needle) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
            mid = Math.floor((high + low) / 2);
        }

        return -1;
    }

    const display = state.array.map((item, index) => {
        const isCurrent = index === state.currIndex;
        const isNext = index === state.nextIndex;
        const isNeedle = item === state.needle;
        const isFound = state.array[state.currIndex] === state.needle;

        let classes = 'search-item ';
        if (isCurrent) classes += 'current ';
        if (isNext) classes += 'next ';
        if (isNeedle) classes += 'needle ';
        if (isFound) classes += 'found ';
        return <span className={classes} key={item + '-' + index}>{item}</span>;
    });
    return (
        <div className='algo search'>
            <h3>Binary Search</h3>
            <div className='search-container'>
                {display}
            </div>
            <div className="flex space-between">
                <button onClick={() => search()}>Search</button>
                <button onClick={() => props.reset()}>Reset</button>
            </div>
        </div>
    );
}

export default BinarySearch;