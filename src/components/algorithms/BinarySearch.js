import React from 'react';
import useSearchAlgorithm from '../../hooks/useSearchAlgorithm';
import SearchAlgorithm from './SearchAlgorithm';
import { delay } from '../../utils/utils';

function BinarySearch(props) {
    const [state, setState, display, reset] = useSearchAlgorithm(14, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

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

    return (
        <SearchAlgorithm 
            title='Binary Search'
            display={display}
            search={search}
            reset={reset}
        />
    );
}

export default BinarySearch;