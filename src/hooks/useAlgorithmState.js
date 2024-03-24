import React, { useState } from 'react';

let arrayToSort = [5, 3, 8, 6, 2, 7, 1, 4, 10, 9];

function useAlgorithmState(props) {
    const [state, setState] = useState({
        currIndex: null,
        nextIndex: null,
        swap: false,
        isSorted: false, 
        array: [5, 3, 8, 6, 2, 7, 1, 4, 10, 9]
    });

    let display = state.array.map((item, index) => {
        const isCurrent = index === state.currIndex;
        const isNext = index === state.nextIndex;
        let classes = 'item ' + 'i' + item + ' ';
        if ((isCurrent || isNext) && !state.isSorted) {
            classes += 'check-swap';
        }

        return <span className={classes} key={item + '-' + index}></span>;
    });

    function reset() {
        setState((prev) => ({...prev, array: arrayToSort}));
    }

    return [state, setState, display, reset];
}

export default useAlgorithmState;