import React from 'react';

function Algorithms() {
    const arrayToSort = [5, 3, 8, 6, 2, 7, 1, 4, 10, 9, 11, 5];

    /**
     * Bubble sort sorts an array by 
     * comparing each element with the next
     * and swapping them if the condition is met. 
     * This eventually places the largest element at
     * the end of the array. The process is repeated 
     * for each element in the array.
     * 
     * Time complexity is O(n^2)
     * 
     * Can be used when memory is limited.
     * 
     * @param {array} arr 
     * @returns {array}
     */
    function bubbleSort(arr) {
        const temp = arr;

        let sorted = false;
        let loop = 0;
        while (!sorted) {
            sorted = true;
            loop++;

            for (var i = 0; i < arr.length; i++) {
                let current = arr[i];
                let next = arr[i + 1];

                /**
                 * Swap current with next
                 * if current is larger.
                 */
                if (current > next) {
                    arr[i] = next;
                    arr[i + 1] = current;
                    sorted = false;
                }
            }
        }

        console.log('sorted on ' + loop + ' iteration', 'Array length: ' + arr.length);

        return temp;
    }

    return (
        <section id="algos">
            <div className="container">
                <div className="section-heading">
                    <h2>Algorithms</h2>
                </div>
                {bubbleSort(arrayToSort).join(', ')}
            </div>
        </section>
    );
}

export default Algorithms;