class WeightedUndirectedGraph {
  constructor() {
    this.AdjacencyList = {};
  }

  // Adds a new vertex to the graph, a vertex is a node
  addVertex(vertex) {
    // Checks if the vertex doesn't already exist
    if (!this.AdjacencyList[vertex]) {
      this.AdjacencyList[vertex] = [];
    }
  }

  // Adds an edge between two vertices (both directions)
  addEdge(source, destination) {
    // Checks if both source and destination vertices exist
    if (this.AdjacencyList[source] && this.AdjacencyList[destination]) {
      this.AdjacencyList[source].push({ node: destination, weight: weight });
      this.AdjacencyList[destination].push({ node: source, weight: weight });
    }
  }
}
