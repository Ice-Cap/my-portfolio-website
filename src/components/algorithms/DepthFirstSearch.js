import React, { useEffect, useRef, useState } from 'react';

const nodes = [
    { id: 'A' }, { id: 'B' }, { id: 'C' }, { id: 'D' }, { id: 'E' }, { id: 'F' }
];

const links = [
    { source: 'A', target: 'B' }, { source: 'A', target: 'C' },
    { source: 'B', target: 'D' }, { source: 'B', target: 'E' },
    { source: 'C', target: 'F' }, { source: 'E', target: 'F' }
];

const Graph = ({ nodes, links }) => {
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        const width = +svg.attr('width');
        const height = +svg.attr('height');

        // Initialize simulation
        const simulation = d3.forceSimulation(nodes)
            .force('link', d3.forceLink(links).id(d => d.id))
            .force('charge', d3.forceManyBody())
            .force('center', d3.forceCenter(width / 2, height / 2));

        // Render links (edges)
        const link = svg.append('g')
            .attr('class', 'links')
            .selectAll('line')
            .data(links)
            .enter().append('line')
            .attr('stroke-width', 2)
            .attr('stroke', 'black');

        // Render nodes
        const node = svg.append('g')
            .attr('class', 'nodes')
            .selectAll('circle')
            .data(nodes)
            .enter().append('circle')
            .attr('r', 5)
            .attr('fill', 'red');

        // Update positions on each tick
        simulation.on('tick', () => {
            link
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);

            node
                .attr('cx', d => d.x)
                .attr('cy', d => d.y);
        });
    }, [nodes, links]);

    return (
        <svg ref={svgRef} width="150" height="150" />
    );
};

function DepthFirstSearch(props) {
    const [state, setState] = useState({
        currIndex: null,
        needle: 14,
        visited: new Set(),
        graph: {
            'A': ['B', 'C'],
            'B': ['D', 'E'],
            'C': ['F'],
            'D': [],
            'E': ['F'],
            'F': []
        }
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

    return (
        <div className='algo search'>
            <h3>Depth-First Search</h3>
                <Graph nodes={nodes} links={links} />
            <div className="flex space-between search-buttons-container">
                <button onClick={() => dfs(state.graph, 'A')}>Search</button>
                <button onClick={() => { }}>Reset</button>
            </div>
        </div>
    );
}

export default DepthFirstSearch;