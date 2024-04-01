import React, { useEffect, useRef, useState } from 'react';
import GraphMaker from '../../utils/GraphMaker';
import { delay } from '../../utils/utils';

const graph = {
    'A': {
        x: 0,
        y: 0,
        color: '#b8b128',
        neighbors: ['B', 'C']
    },
    'B': {
        x: 50,
        y: 0,
        neighbors: ['D', 'E']
    },
    'C': {
        x: 0,
        y: 50,
        neighbors: ['B']
    },
    'D': {
        x: 50,
        y: 50,
        neighbors: []
    },
    'E': {
        x: 100,
        y: 0,
        neighbors: ['F']
    },
    'F': {
        x: 100,
        y: 50,
        neighbors: []
    }
};

function DepthFirstSearch(props) {
    const [state, setState] = useState({
        currIndex: null,
        needle: 14,
        visited: new Set(),
        nodeGrabbed: null,
        graph: graph
    });
    const canvasRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Clear the canvas for each render
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const Graph = new GraphMaker(ctx, state.graph, '#3A0A86');
    });

    async function dfs(graph, start, visited = new Set()) {
        console.log(start); // Process the current node as needed
        visited.add(start); // Mark the current node as visited

        await delay(150);

        setState((prev) => {
            return { 
                ...prev, 
                currIndex: start, 
                visited: visited,
                graph: {
                    ...prev.graph,
                    [start]: {
                        ...prev.graph[start],
                        color: '#b8b128'
                    }
                }
            };
        });

        // Iterate through all the neighbors of the current node
        graph[start].neighbors.forEach(async (neighbor) => {
            await delay(150);
            if (!visited.has(neighbor)) { // If the neighbor hasn't been visited
                dfs(graph, neighbor, visited); // Recursively visit the neighbor
            }
        });
    }

    function handleClick(e) {
        // get bounding rectangle of canvas
        const rect = canvasRef.current.getBoundingClientRect();

        // get x and y coordinates of click relative to canvas
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;   
        
        // check if click is within a node
        for (let node in state.graph) {
            const nodeObj = state.graph[node];
            if (x >= nodeObj.x && x <= nodeObj.x + 25 && y >= nodeObj.y && y <= nodeObj.y + 25) {
                setState((prev) => {
                    return { ...prev, nodeGrabbed: node };
                });
                console.log(node);
                break;
            }
        }
    }

    function handleDrag(e) {
        if (!state.nodeGrabbed || !canvasRef.current) {
            return;
        }

        const rect = canvasRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setState((prev) => {
            return {
                ...prev,
                graph: {
                    ...prev.graph,
                    [prev.nodeGrabbed]: {
                        ...prev.graph[prev.nodeGrabbed],
                        x: x,
                        y: y
                    }
                }
            };
        });
    }

    function reset() {
        setState((prev) => {
            return {
                ...prev,
                visited: new Set(),
                graph: graph
            };
        });
    }

    return (
        <div className='algo search'>
            <h3>DFS</h3>
            <div className='flex align-center justify-center'>
                <canvas 
                    onMouseDown={handleClick} 
                    onMouseUp={() => setState((prev) => ({ ...prev, nodeGrabbed: null }))}
                    onMouseMove={handleDrag}
                    ref={canvasRef} 
                    width="185" 
                    height="130" 
                />
            </div>
            <div className="flex space-between search-buttons-container">
                <button onClick={() => dfs(state.graph, 'A')}>Search</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default DepthFirstSearch;