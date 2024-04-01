import React from 'react';
import useSearchAlgorithm from '../../hooks/useSearchAlgorithm';
import SearchAlgorithm from './SearchAlgorithm';
import { delay } from '../../utils/utils';

function LinearSearch(props) {
    const [state, setState, display, reset] = useSearchAlgorithm(9, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

    /**
     * Linear search is used to find the position of a target value within an array.
     * It sequentially checks each element of the array until a match is found or the whole array has been searched.
     * 
     * Time Complexity: O(n)
     * 
     * @returns {number}
     */
    async function search() {
        for (let i = 0; i < state.array.length; i++) {
            await delay(150);

            setState((prev) => {
                return {...prev, currIndex: i};
            });

            if (state.array[i] === state.needle) {
                return i;
            }
        }

        return -1;
    }

    return (
        <SearchAlgorithm 
            title='Linear Search'
            display={display}
            search={search}
            reset={reset}
        />
    );
}

export default LinearSearch;