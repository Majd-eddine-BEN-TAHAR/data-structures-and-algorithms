/**
 * Represents an undirected graph using an adjacency List.
 */

class UndirectedGraphList {
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
      this.AdjacencyList[source].push(destination);
      this.AdjacencyList[destination].push(source);
    }
  }

  // Removes an edge between two vertices
  removeEdge(source, destination) {
    // Checks if both source and destination vertices exist
    if (this.AdjacencyList[source] && this.AdjacencyList[destination]) {
      this.AdjacencyList[source] = this.AdjacencyList[source].filter(
        (el) => el !== destination
      );

      this.AdjacencyList[destination] = this.AdjacencyList[destination].filter(
        (el) => el !== source
      );
    }
  }

  // Removes a vertex from the graph
  removeVertex(vertex) {
    this.AdjacencyList[vertex].forEach((destination) => {
      // Removes the edge between the vertex and each connected destination vertex
      this.removeEdge(vertex, destination);
    });
    // Deletes the vertex from the AdjacencyList object
    delete this.AdjacencyList[vertex];
  }
}

const graph = new UndirectedGraphList();

// Add vertices to the graph
graph.addVertex(3);
graph.addVertex(2);
graph.addVertex(4);

// Add edges between vertices
graph.addEdge(4, 3);
graph.addEdge(2, 4);

// Remove vertex 2 and its associated edges
graph.removeVertex(2);
