import React, { useState, useEffect } from 'react';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let display = [];
let sortedArray = [];

function Algorithm(props) {
    const [state, setState] = useState({
        currIndex: null,
        nextIndex: null,
        swap: false,
        isSorted: false
    });
    let arrayToSort = props.array;

    useEffect(() => {
        switch (props.type) {
            case 'bubble':
                bubbleSort(arrayToSort);
        }
    }, []);

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
                    setState((prev) => ({...prev, swap: true}));
                }

                sortedArray = arr;

                await delay(100);
            }
        }

        setState((prev) => ({...prev, isSorted: true}));
    }

    display = arrayToSort.map((item, index) => {
        const isCurrent = index === state.currIndex;
        const isNext = index === state.nextIndex;
        let classes = 'item ' + 'i' + item + ' ';
        if ((isCurrent || isNext) && !state.isSorted) {
            classes += 'check-swap';
        }

        // return <span className={classes} key={item + '-' + index}>{item}</span>;
        return <span className={classes} key={item + '-' + index}></span>;
    });

    return (
        <>
            <h3>{props.title}</h3>
            <div className='array-container'>
                {display}
            </div>
            <button onClick={() => bubbleSort(arrayToSort)}>Sort</button>
            <button onClick={() => props.reset()}>Reset</button>
        </>
    );
}

export default Algorithm;