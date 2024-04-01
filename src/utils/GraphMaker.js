
class GraphMaker {
    constructor(ctx, graph, color = 'black') {
        this.graph = graph;
        this.ctx = ctx;
        this.defaultColor = color;
        this.ctx.fillStyle = color;
        this.createGraph();
    }

    createGraph() {
        for (let node in this.graph) {
            const nodeObj = this.graph[node];

            for (let neighbor of nodeObj.neighbors) {
                const neighborObj = this.graph[neighbor];
                this.createLine(nodeObj.x + 12.5, nodeObj.y + 12.5, neighborObj.x + 12.5, neighborObj.y + 12.5);
            }
        }

        for (let node in this.graph) {
            const nodeObj = this.graph[node];

            if (nodeObj.color) {
                this.createSquare(nodeObj.x, nodeObj.y, nodeObj.color);
            } else {
                this.createSquare(nodeObj.x, nodeObj.y);
            }
        }

    }

    createLine(x1, y1, x2, y2) {
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    }

    createSquare(x, y, color = null, size = 25) {
        this.ctx.fillStyle = color ?? this.defaultColor;
        this.ctx.fillRect(x, y, size, size);
        this.ctx.fillStyle = this.defaultColor;
    }
}

export default GraphMaker;