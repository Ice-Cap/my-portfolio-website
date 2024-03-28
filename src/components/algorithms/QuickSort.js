import React from 'react';
import useSortAlgorithm from '../../hooks/useSortAlgorithm';
import SortAlgorithm from './SortAlgorithm';
import { delay } from '../../utils/utils';

function QuickSort(props) {
    let [state, setState, display, reset] = useSortAlgorithm();
    const arrayToSort = state.array;

    /**
     * Quick sort is a divide and conquer algorithm
     * that picks an element as the pivot and partitions
     * the given array around the picked pivot.
     * 
     * The pivot element is selected such that elements
     * smaller than the pivot are moved to the left of the pivot
     * and elements larger than the pivot are moved to the right.
     * 
     * The algorithms is called recursively until the array is sorted.
     * 
     * Average Time complexity is O(nlog(n))
     * with a worst case of O(n^2)
     * 
     * @param {array} arr
     * @param {number} start
     * @param {number} end
     * @returns {array}
     */
    async function quickSort(arr, start, end) {
        setState((prev) => ({...prev, isSorted: false}));
        if (start >= end) {
            return;
        }

        const pivot = await partition(arr, start, end);

        await quickSort(arr, start, pivot - 1);
        await quickSort(arr, pivot + 1, end);

        setState((prev) => ({...prev, isSorted: true}));
    }

    /**
     * Partitions the array by selecting the last element
     * as the pivot and places it in the correct position
     * in the array.
     * 
     * @param {array} arr
     * @param {number} start
     * @param {number} end
     * @returns {number}
     */
    async function partition(arr, start, end) {
        const pivot = arr[end];
        let i = start - 1;

        for (let j = start; j < end; j++) {
            await delay(40);

            if (arr[j] < pivot) {
                i++;
                swap(arr, i, j);
                setState((prev) => ({
                    ...prev, 
                    currIndex: i, 
                    nextIndex: j, 
                    array: arr,
                    swap: true
                }));
            }
        }

        swap(arr, i + 1, end);
        setState((prev) => ({
            ...prev, 
            currIndex: i + 1, 
            nextIndex: end, 
            array: arr,
            swap: true
        }));

        await delay(40);

        return i + 1;
    }

    /**
     * Swaps two elements in an array.
     * 
     * @param {array} arr
     * @param {number} firstIndex
     * @param {number} secondIndex
     */
    const swap = (arr, firstIndex, secondIndex) => {
        const temp = arr[firstIndex];
        arr[firstIndex] = arr[secondIndex];
        arr[secondIndex] = temp;
    };

    return (
        <SortAlgorithm 
            title='Quick Sort' 
            display={display} 
            sort={() => quickSort(arrayToSort, 0, arrayToSort.length - 1)} 
            reset={reset}
        />
    );
}

export default QuickSort;