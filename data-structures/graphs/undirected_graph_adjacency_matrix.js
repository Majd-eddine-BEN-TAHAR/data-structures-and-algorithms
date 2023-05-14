/**
 * Represents an undirected graph using an adjacency matrix.
 */
class UndirectedGraphMatrix {
  constructor() {
    this.vertices = []; // Stores the vertices(nodes) of the graph
    this.matrix = []; // Adjacency matrix representing the connections between vertices
  }

  addVertex(value) {
    const vertexIndex = this.vertices.length;
    this.vertices.push(value);

    // Add a new column for existing rows
    for (let i = 0; i < vertexIndex; i++) {
      this.matrix[i].push(0);
    }

    // Add new row for the new vertex
    this.matrix.push(new Array(vertexIndex + 1).fill(0));
  }

  /**
   * Adds an undirected edge between two vertices in the graph.
   * @param {*} sourceVertex - The value of the source vertex.
   * @param {*} destinationVertex - The value of the destination vertex.
   */
  addEdge(sourceVertex, destinationVertex) {
    const sourceIndex = this.vertices.indexOf(sourceVertex);
    const destinationIndex = this.vertices.indexOf(destinationVertex);

    if (sourceIndex !== -1 && destinationIndex !== -1) {
      // Set the matrix entries for both vertices to indicate the connection
      this.matrix[sourceIndex][destinationIndex] = 1;
      this.matrix[destinationIndex][sourceIndex] = 1;
    }
  }

  removeEdge(sourceVertex, destinationVertex) {
    const sourceIndex = this.vertices.indexOf(sourceVertex);
    const destinationIndex = this.vertices.indexOf(destinationVertex);

    if (sourceIndex !== -1 && destinationIndex !== -1) {
      this.matrix[sourceIndex][destinationIndex] = 0;
      this.matrix[destinationIndex][sourceIndex] = 0;
    }
  }

  printGraph() {
    // Print column headers
    const headerRow = [" "].concat(this.vertices);
    console.log(headerRow.join(" "));

    // Print matrix rows
    for (let i = 0; i < this.vertices.length; i++) {
      const row = [this.vertices[i]];

      // Add matrix entries for each row
      for (let j = 0; j < this.vertices.length; j++) {
        row.push(this.matrix[i][j]);
      }

      console.log(row.join(" "));
    }
  }
}

const graph = new UndirectedGraphMatrix();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "E");
graph.addEdge("B", "C");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("C", "D");
graph.addEdge("D", "E");

// Print the graph
graph.printGraph();
