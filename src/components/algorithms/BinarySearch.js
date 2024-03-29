import React, { useState } from 'react';
import { delay } from '../../utils/utils';

function BinarySearch(props) {
    const [state, setState] = useState({
        currIndex: null,
        needle: 4,
        array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    });

    /**
     * Binary search is used to find the position of a target value within a sorted array. 
     * It works by repeatedly dividing in half the portion of the list 
     * that could contain the target value, reducing the search area by half each time, 
     * until the target value is found or the search space is empty.
     * 
     * Time Complexity: O(log n)
     * 
     * @returns {number}
     */
    async function search() {
        let low = 0;
        let high = state.array.length - 1;
        let mid = Math.floor((high + low) / 2);

        while (low <= high) {
            await delay(250);
            const cursor = state.array[mid];

            setState((prev) => {
                return {...prev, currIndex: mid};
            });

            if (cursor === state.needle) {
                return mid;
            } else if (cursor < state.needle) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }

            mid = Math.floor((high + low) / 2);
        }

        return -1;
    }

    function reset() {
        setState((prev) => ({
            ...prev,
            currIndex: null
        }));
    }

    /**
     * Creating the squares to display the array
     * that will be searched.
     */
    const display = state.array.map((item, index) => {
        const isCurrent = index === state.currIndex;
        const isNeedle = item === state.needle;
        const isFound = (state.array[state.currIndex] === state.needle) && (state.currIndex === index);

        let classes = 'search-item ';
        if (isCurrent) classes += 'current ';
        if (isNeedle) classes += 'needle ';
        if (isFound) classes += 'found ';
        return (
            <span 
                className={classes} 
                key={item + '-' + index}
                onClick={() => setState((prev) => ({...prev, needle: item}))}
            >
                {item}
            </span>
        );
    });
    return (
        <div className='algo search'>
            <h3>Binary Search</h3>
            <div className='search-container'>
                {display}
            </div>
            <div className="flex space-between search-buttons-container">
                <button onClick={() => search()}>Search</button>
                <button onClick={() => reset()}>Reset</button>
            </div>
        </div>
    );
}

export default BinarySearch;