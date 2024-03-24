import React, { useState, useEffect, useMemo, useCallback } from 'react';
import useAlgorithmState from '../../hooks/useAlgorithmState';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function QuickSort(props) {
    let [state, setState, display, reset] = useAlgorithmState();
    let arrayToSort = [5, 3, 8, 6, 2, 7, 1, 4, 10, 9];

    async function quickSort(arr, start, end) {
        setState((prev) => ({...prev, isSorted: false}));
        if (start >= end) {
            return;
        }

        let pivot = await partition(arr, start, end);

        await quickSort(arr, start, pivot - 1);
        await quickSort(arr, pivot + 1, end);

        setState((prev) => ({...prev, isSorted: true}));
    }

    async function partition(arr, start, end) {
        let pivot = arr[end];
        let i = start - 1;

        for (let j = start; j < end; j++) {
            await delay(80);

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

        await delay(80);

        return i + 1;
    }

    const swap = (arr, firstIndex, secondIndex) => {
        let temp = arr[firstIndex];
        arr[firstIndex] = arr[secondIndex];
        arr[secondIndex] = temp;
    };

    return (
        <div>
            <h3>Quck Sort</h3>
            <div className='array-container'>
                {display}
            </div>
            <button onClick={() => quickSort(arrayToSort, 0, arrayToSort.length - 1)}>Sort</button>
            <button onClick={() => reset()}>Reset</button>
        </div>
    );
}

export default QuickSort;