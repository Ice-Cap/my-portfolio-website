import React from 'react';
import BubbleSort from './algorithms/BubbleSort';
import QuickSort from './algorithms/QuickSort';
import MergeSort from './algorithms/MergeSort';
import BinarySearch from './algorithms/BinarySearch';
import LinearSearch from './algorithms/LinearSearch';
import DepthFirstSearch from './algorithms/DepthFirstCanvas';

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
                        <LinearSearch />
                        <BinarySearch />
                        <DepthFirstSearch />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Algorithms;