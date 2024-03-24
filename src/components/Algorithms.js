import React, { useState } from 'react';
import Algorithm from './Algorithm';
import QuickSort from './algorithms/QuickSort';

function Algorithms() {
    const [arrayToSort, setArrayToSort] = useState([5, 3, 8, 6, 2, 7, 1, 4, 10, 9]);

    function reset() {
        setArrayToSort([5, 3, 8, 6, 2, 7, 1, 4, 10, 9]);
    }

    return (
        <section id="algos">
            <div className="container">
                <div className="section-heading">
                    <h2>Algorithms</h2>
                </div>
                <Algorithm 
                    title="Bubble sort" 
                    array={arrayToSort} 
                    reset={reset}
                    type={'bubble'}
                />
                <QuickSort 
                    title="Quick sort" 
                    array={arrayToSort} 
                    reset={reset}
                />
            </div>
        </section>
    );
}

export default Algorithms;