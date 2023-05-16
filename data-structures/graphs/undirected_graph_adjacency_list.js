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
  printGraph() {
    for (const vertex in this.AdjacencyList) {
      const edges = this.AdjacencyList[vertex].join(", ");
      console.log(`${vertex} -> ${edges}`);
    }
  }

  // it's to you to choose which vertix to start from traversing the graph
  recursiveDepthFirstTraversal(startingVertex) {
    if (!this.AdjacencyList[startingVertex]) {
      return "starting vertex doesn't exist";
    }

    // i created adjacencyList variable to avoid losing the context of this keyword when it's used in a closure, you can remove it if you want but make sure to use an arrow function for the traverse function instead
    const adjacencyList = this.AdjacencyList;
    const visited = {};
    const result = [];

    function traverse(vertex) {
      visited[vertex] = true; // Mark the vertex as visited
      result.push(vertex);

      // Traverse each connected vertex of the current vertex
      for (const connectedVertex of adjacencyList[vertex]) {
        if (!visited[connectedVertex]) traverse(connectedVertex);
      }
    }

    traverse(startingVertex);

    return result;
  }

  iterativeDepthFirstTraversal(startingVertex) {
    const stack = [startingVertex];
    const result = [];
    const visited = {};

    // mark the starting veertex as visited
    visited[startingVertex] = true;

    while (stack.length > 0) {
      let currentVertex = stack.pop();
      result.push(currentVertex);

      this.AdjacencyList[currentVertex].forEach((neighbor) => {
        //  If you added a vertex to the stack to iterate over its neighbors, there's no need to push it into the stack again.
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  breadthFirstTraversal(startingVertex) {
    const visited = {}; // Keep track of visited vertices
    const queue = [startingVertex]; // Initialize the queue with the starting vertex
    const result = [];

    while (queue.length > 0) {
      const currentVertex = queue.shift(); // Dequeue the front vertex from the queue
      result.push(currentVertex);

      for (const neighbor of this.AdjacencyList[currentVertex]) {
        if (!visited[neighbor]) {
          queue.push(neighbor);
          visited[currentVertex] = true; // Mark the current vertex as visited
        }
      }
    }

    return result;
  }
}

const graph = new UndirectedGraphList();

// Add vertices to the graph
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

// // Add edges between vertices
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("C", "F");

// Remove vertex 2 and its associated edges
// graph.removeVertex(2);

// print the graph
graph.printGraph();
console.log(graph.recursiveDepthFirstTraversal("A")); // [ 'A', 'B', 'D', 'E', 'C', 'F' ]
console.log(graph.iterativeDepthFirstTraversal("A")); // [ 'A', 'C', 'F', 'B', 'E', 'D' ]
console.log(graph.breadhFirstTraversal("A")); //         [ 'A', 'B', 'C', 'D', 'E', 'F' ]
