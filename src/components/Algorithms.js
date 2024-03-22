import React from 'react';
import Algorithm from './Algorithm';

function Algorithms() {

    return (
        <section id="algos">
            <div className="container">
                <div className="section-heading">
                    <h2>Algorithms</h2>
                </div>
                <Algorithm title="Bubble sort" />
            </div>
        </section>
    );
}

export default Algorithms;