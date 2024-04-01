import React, { useEffect, useRef, useState } from 'react';
import GraphMaker from '../../utils/GraphMaker';


function DepthFirstSearch(props) {
    const [state, setState] = useState({
        currIndex: null,
        needle: 14,
        visited: new Set(),
        nodeGrabed: null,
        graph: {
            'A': {
                x: 0,
                y: 0,
                neighbors: ['B', 'C']
            },
            'B': {
                x: 50,
                y: 15,
                neighbors: ['D', 'E']
            },
            'C': {
                x: 0,
                y: 50,
                neighbors: ['F']
            },
            'D': {
                x: 65,
                y: 70,
                neighbors: []
            },
            'E': {
                x: 100,
                y: 0,
                neighbors: ['F']
            },
            'F': {
                x: 70,
                y: 120,
                neighbors: []
            }
        }
    });
    const canvasRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Clear the canvas for each render
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = 'green';

        const Graph = new GraphMaker(ctx, state.graph);
    });

    function dfs(graph, start, visited = new Set()) {
        console.log(start); // Process the current node as needed
        visited.add(start); // Mark the current node as visited
        setState((prev) => {
            return { ...prev, currIndex: start, visited: visited };
        });

        // Iterate through all the neighbors of the current node
        graph[start].forEach(neighbor => {
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
                    return { ...prev, nodeGrabed: node };
                });
                console.log(node);
                break;
            }
        }
    }

    function handleDrag(e) {
        if (!state.nodeGrabed || !canvasRef.current) {
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
                    [prev.nodeGrabed]: {
                        ...prev.graph[prev.nodeGrabed],
                        x: x,
                        y: y
                    }
                }
            };
        });
    }

    return (
        <div className='algo search'>
            <h3>Depth-First Search</h3>
            <canvas 
                onMouseDown={handleClick} 
                onMouseUp={() => setState((prev) => ({ ...prev, nodeGrabed: null }))}
                onMouseMove={handleDrag}
                ref={canvasRef} 
                width="200" 
                height="200" 
            />
            <div className="flex space-between search-buttons-container">
                <button onClick={() => dfs(state.graph, 'A')}>Search</button>
                <button onClick={() => { }}>Reset</button>
            </div>
        </div>
    );
}

export default DepthFirstSearch;