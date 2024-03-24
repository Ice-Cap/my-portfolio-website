import React, { useState, useEffect, useMemo, useCallback } from 'react';
import useAlgorithmState from '../../hooks/useAlgorithmState';
import Algorithm from './Algorithm';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function QuickSort(props) {
    let [state, setState, display, reset] = useAlgorithmState();
    const arrayToSort = state.array;

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

    const swap = (arr, firstIndex, secondIndex) => {
        let temp = arr[firstIndex];
        arr[firstIndex] = arr[secondIndex];
        arr[secondIndex] = temp;
    };

    return (
        <Algorithm 
            title='Quick Sort' 
            display={display} 
            sort={() => quickSort(arrayToSort, 0, arrayToSort.length - 1)} 
            reset={reset}
        />
    );
}

export default QuickSort;