import React, { useEffect, useRef, useState } from 'react';
import GraphMaker from '../../utils/GraphMaker';
import { delay, cloneObject } from '../../utils/utils';

function DepthFirstSearch(props) {
    const [state, setState] = useState({
        nodeGrabbed: null,
        graph: graph,
        start: 'H'
    });
    const canvasRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        /**
         * Clear the canvas for each render.
         */
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        /**
         * Update the start node to be yellow.
         */
        state.graph[state.start].color = '#9a81c3';

        /**
         * Create graph on canvas on each render
         * to show updated state.
         */
        new GraphMaker(ctx, state.graph, '#fff');
    });

    /**
     * Depth-first search is an algorithm for traversing
     * or searching tree or graph data structures.
     * The algorithm starts at the root node and explores
     * as far as possible along each branch before backtracking.
     *
     * Time Complexity: O(V + E)
     *
     * @param {object} graph
     * @param {string} start
     * @param {object} visited
     */
    async function dfs(graph, start, visited = new Set()) {
        visited.add(start); // Mark the current node as visited

        await delay(150);

        /**
         * Update each visited node to be yellow.
         */
        setState((prev) => {
            const temp = cloneObject(prev);
            temp.graph[start].color = '#9a81c3';
            return temp;
        });

        /**
         * Iterate through all the neighbors of the current node
         */
        graph[start].neighbors.forEach(async (neighbor) => {
            await delay(150);
            if (!visited.has(neighbor)) {
                dfs(graph, neighbor, visited);
            }
        });
    }

    /**
     * This will handle grabbing a node on the canvas.
     *
     * @param {object} e
     */
    function handleGrab(e) {
        const rect = canvasRef.current.getBoundingClientRect();

        /**
         * get x and y coordinates of click relative to canvas
         */
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        /**
         * Check if click is within a node
         */
        for (let node in state.graph) {
            const nodeObj = state.graph[node];

            const inNodeBounds = (x >= nodeObj.x && x <= nodeObj.x + 25 && y >= nodeObj.y && y <= nodeObj.y + 25);
            if (inNodeBounds) {
                setState((prev) => {
                    return { ...prev, nodeGrabbed: node };
                });
                break;
            }
        }
    }

    /**
     * This will handle dragging a node on the canvas.
     * Dragging a node will update it's x and y coordinates.
     *
     * @param {object} e
     */
    function handleDrag(e) {
        if (!state.nodeGrabbed || !canvasRef.current) {
            return;
        }

        const rect = canvasRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setState((prev) => {
            const temp = cloneObject(prev);
            temp.graph[prev.nodeGrabbed].x = x;
            temp.graph[prev.nodeGrabbed].y = y;
            return temp;
        });
    }

    /**
     * This will change the start node of the graph
     * to be the node that was clicked.
     *
     * @param {object} e
     */
    function changeStartNode(e) {
        const rect = canvasRef.current.getBoundingClientRect();

        /**
         * get x and y coordinates of click relative to canvas
         */
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        /**
         * Check if click is within a node
         */
        for (let node in state.graph) {
            const nodeObj = state.graph[node];
            if (x >= nodeObj.x && x <= nodeObj.x + 25 && y >= nodeObj.y && y <= nodeObj.y + 25) {
                /**
                 * Update the start node to be the clicked node
                 * and update start colors accordingly.
                 */
                setState((prev) => {
                    const temp = cloneObject(prev);
                    temp.graph[prev.start].color = null;
                    temp.start = node;
                    temp.graph[node].color = '#b8b128';
                    return temp;
                });
                break;
            }
        }
    }

    /**
     * This will reset the graph to it's original state.
     */
    function reset() {
        setState((prev) => {
            return {
                ...prev,
                visited: new Set(),
                graph: graphClone,
                start: 'H'
            };
        });
    }

    return (
        <div className='algo search'>
            <h3>DFS</h3>
            <div className='flex align-center justify-center'>
                <canvas
                    onMouseDown={handleGrab}
                    onMouseUp={() => setState((prev) => ({ ...prev, nodeGrabbed: null }))}
                    onMouseMove={handleDrag}
                    onClick={changeStartNode}
                    ref={canvasRef}
                    width="185"
                    height="130"
                />
            </div>
            <div className="flex space-between buttons-container">
                <button onClick={reset}>Reset</button>
                <button onClick={() => dfs(state.graph, state.start)}>Search</button>
            </div>
        </div>
    );
}

export default DepthFirstSearch;

const graph = {
    'A': {
        x: 0,
        y: 0,
        neighbors: ['B', 'C']
    },
    'B': {
        x: 80,
        y: 0,
        neighbors: ['D', 'E', 'A']
    },
    'C': {
        x: 0,
        y: 50,
        neighbors: ['H', 'A']
    },
    'D': {
        x: 80,
        y: 50,
        neighbors: ['B']
    },
    'E': {
        x: 160,
        y: 0,
        neighbors: ['F', 'B']
    },
    'F': {
        x: 160,
        y: 50,
        neighbors: ['G', 'H', 'E']
    },
    'G': {
        x: 160,
        y: 100,
        neighbors: ['F']
    },
    'H': {
        x: 80,
        y: 100,
        neighbors: ['C', 'F']
    }
};

/**
 * Cloning the graph object
 * to preserve the original state.
 */
const graphClone = cloneObject(graph);