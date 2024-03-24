import React from 'react';
import useAlgorithmState from '../../hooks/useAlgorithmState';
import Algorithm from './Algorithm';
import { delay } from '../../utils/utils';

function BubbleSort(props) {
    let [state, setState, display, reset] = useAlgorithmState();

    /**
     * Bubble sort sorts an array by 
     * comparing each element with the next
     * and swapping them if the condition is met. 
     * This eventually places the largest element at
     * the end of the array. The process is repeated 
     * until the array is deemed sorted by going through an
     * iteration without a swap.
     * 
     * Time complexity is O(n^2)
     * 
     * Can be used when memory is limited.
     * 
     * @param {array} arr 
     */
    async function bubbleSort(arr) {
        setState((prev) => ({...prev, isSorted: false}));

        let sorted = false;
        let loop = 0;
        while (!sorted) {
            sorted = true;
            loop++;

            for (var i = 0; i < arr.length; i++) {
                let current = arr[i];
                let next = arr[i + 1];
                setState((prev) => ({...prev, currIndex: i}));
                setState((prev) => ({...prev, nextIndex: i + 1}));

                /**
                 * Swap current with next
                 * if current is larger.
                 */
                if (current > next) {
                    arr[i] = next;
                    arr[i + 1] = current;
                    sorted = false;
                    setState((prev) => ({...prev, swap: true, array: arr}));
                }

                await delay(70);
            }
        }

        setState((prev) => ({...prev, isSorted: true}));
    }

    return (
        <Algorithm 
            title='Bubble Sort' 
            display={display} 
            sort={() => bubbleSort(state.array)} 
            reset={reset} 
        />
    );
}

export default BubbleSort;