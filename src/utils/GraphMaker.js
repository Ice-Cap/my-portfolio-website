
class GraphMaker {
    constructor(ctx, graph) {
        this.graph = graph;
        this.ctx = ctx;

        this.ctx.fillStyle = 'green';
        this.createGraph();
    }

    createGraph() {
        for (let node in this.graph) {
            const nodeObj = this.graph[node];
            this.createSquare(nodeObj.x, nodeObj.y);
        }

        for (let node in this.graph) {
            const nodeObj = this.graph[node];

            for (let neighbor of nodeObj.neighbors) {
                const neighborObj = this.graph[neighbor];
                this.createLine(nodeObj.x + 12.5, nodeObj.y + 12.5, neighborObj.x + 12.5, neighborObj.y + 12.5);
            }
        }
    }

    createLine(x1, y1, x2, y2) {
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    }

    createSquare(x, y, size = 25) {
        this.ctx.fillRect(x, y, size, size);
    }
}

export default GraphMaker;