import React from 'react';
import BubbleSort from './algorithms/BubbleSort';
import QuickSort from './algorithms/QuickSort';
import MergeSort from './algorithms/MergeSort';

function Algorithms() {
    return (
        <section id="algos">
            <div className="container">
                <div className="section-heading">
                    <h2>Algorithms</h2>
                </div>
                <div className='algorithms-container'>
                    <div className='row'>
                        <BubbleSort />
                        <QuickSort />
                        <MergeSort />
                    </div>
                    <div className='row'>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Algorithms;