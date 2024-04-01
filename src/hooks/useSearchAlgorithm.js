import React, { useState } from 'react';

function useSearchAlgorithm(needle, array) {
    const [state, setState] = useState({
        currIndex: null,
        needle: needle,
        array: array
    });

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

    return [state, setState, display, reset];
}

export default useSearchAlgorithm;