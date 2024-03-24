import React from 'react';
import BubbleSort from './algorithms/BubbleSort';
import QuickSort from './algorithms/QuickSort';

function Algorithms() {
    return (
        <section id="algos">
            <div className="container">
                <div className="section-heading">
                    <h2>Algorithms</h2>
                </div>
                <BubbleSort />
                <QuickSort />
            </div>
        </section>
    );
}

export default Algorithms;