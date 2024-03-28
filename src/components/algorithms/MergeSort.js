import React from 'react';
import useAlgorithmState from '../../hooks/useAlgorithmState';
import Algorithm from './Algorithm';
import { delay } from '../../utils/utils';

function MergeSort(props) {
    let [state, setState, display, reset] = useAlgorithmState();

    /**
     * Merge sort is a divide and conquer algorithm
     * that divides an array into two halves, sorts them
     * and then merges them back together.
     * 
     * Time complexity is O(nlog(n))
     * 
     * @param {array} arr 
     * @returns {array}
     */
    async function mergeSort(arr) {
        if (arr.length < 2) {
            return arr;
        }

        const mid = Math.floor(arr.length / 2);

        const left = await mergeSort(arr.slice(0, mid));
        setState((prev) => {
            const temp = [...prev.array];
            temp.splice(0, left.length, ...left);
            return {...prev, array: temp};
        });

        const right = await mergeSort(arr.slice(mid));
        setState((prev) => {
            const temp = [...prev.array];
            temp.splice(mid, right.length, ...right);
            return {...prev, array: temp};
        });

        const result = await merge(left, right);
        setState((prev) => {
            const temp = [...prev.array];
            temp.splice(0, result.length, ...result);
            return {...prev, array: temp};
        
        });
        return result;
    }    

    /**
     * Takes two arrays and merges them
     * with the items in the correct order. 
     * 
     * @param {array} left 
     * @param {array} right 
     * @returns 
     */
    async function merge(left, right) {
        await delay(40);
        const result = [];

        while (left.length > 0 && right.length > 0) {
            await delay(40);
            let nextItem = null;

            setState((prev) => {
                const leftIndex = prev.array.indexOf(left[0]);
                const rightIndex = prev.array.indexOf(right[0]);
                return {...prev, currIndex: leftIndex, nextIndex: rightIndex};
            });

            if (left[0] < right[0]) {
                nextItem = left.shift();
            } else {
                nextItem = right.shift();
            }

            result.push(nextItem);
        }

        return result.concat(left.length ? left : right);
    }

    return (
        <Algorithm 
            title='Merge Sort' 
            display={display} 
            sort={async () => {
                setState((prev) => ({...prev, isSorted: false}));

                const result = await mergeSort(state.array);
                setState((prev) => ({...prev, array: result}));

                setState((prev) => ({...prev, isSorted: true}));
            }} 
            reset={reset} 
        />
    );
}

export default MergeSort;