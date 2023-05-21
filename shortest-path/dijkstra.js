/**
    Dijkstra's Algorithm
    Dijkstra's algorithm is a widely-used method for finding the shortest path between nodes in a graph. Its objective is to determine the minimum distance from a starting node to all other nodes within the graph. This algorithm is particularly valuable in applications such as route planning and network optimization.
    Algorithm Overview:
        1. Initialize the distances from the starting node to all other nodes as infinity, except for the starting node itself, which is set to 0.
        2. Explore the neighboring nodes of the current node, updating their distances if a shorter path is discovered.
        3. Repeat step 2 until all nodes have been visited or the target node has been reached.
        4. Use a priority queue to efficiently select the node with the smallest distance for exploration.
        5. Keep track of predecessor information to reconstruct the shortest path from the start node to any other node.
    Methods:

      Dijkstra(start, end): Implements Dijkstra's algorithm to find the shortest path between a start and end vertex in the graph.
        1. Checks if the start and end vertices exist in the graph. If not, returns null.
        2. Initializes distances to infinity for all vertices except the start vertex, which is set to 0.
        3. Uses a priority queue to select the vertex with the smallest distance for exploration.
        4. Updates distances and predecessor information while exploring neighboring vertices.
        5. Stops exploring when the end vertex is reached or all nodes have been visited.
        6. Returns the shortest distance and path between the start and end vertices.
    
    Complexity:
        *  The time complexity of Dijkstra's algorithm is O((V + E) log V), where V is the number of vertices and E is the number of edges in the graph.
        *  In the worst case, when using a binary heap as the priority queue, the space complexity is O(V + E).
    
    This implementation of Dijkstra's algorithm provides a reliable and efficient solution for finding the shortest path in a graph. It includes a PriorityQueue class to select vertices for exploration based on their distances from the start node. The WeightedGraph class represents the graph using an adjacency list and provides methods to add vertices and edges. The Dijkstra method implements the algorithm, handling cases where the start or end vertex does not exist. Example usage demonstrates how to create a graph, add vertices and edges, and find the shortest path using Dijkstra's algorithm.

    Note:
      Dijkstra's algorithm prioritizes exploring nodes with the shortest distances from the start node. Once it reaches the target node or destination, it can stop the exploration process as it guarantees that the shortest path to that node has been found. Therefore, it does not exhaustively search all paths in the graph, resulting in improved efficiency.
    

*/

// this is a simple priority queue to make things easier to visualize and understand how every thing is related together, but for sure you can use a min binary heap to implement a priority queue which will be more efficient
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  push(vertex, distanceFromStart) {
    this.values.push({ vertex, distanceFromStart });
    this.sort();
  }

  removeSmallest() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.distanceFromStart - b.distanceFromStart);
  }

  isEmpty() {
    return this.values.length === 0;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(source, destination, weight) {
    // Checks if both source and destination vertices exist
    if (this.adjacencyList[source] && this.adjacencyList[destination]) {
      this.adjacencyList[source].push({ value: destination, weight: weight });
      this.adjacencyList[destination].push({ value: source, weight: weight });
    }
  }

  Dijkstra(start, end) {
    if (!this.adjacencyList[start] || !this.adjacencyList[end]) {
      return null; // Either start or end vertex does not exist
    }

    const explorationQueue = new PriorityQueue(); // The priority queue is used to efficiently select the next vertex to explore, and the selected vertex is the vertex that has the shortest distance from the start vertex, this is a rule for the diskstra's algorithm
    const visited = new Set();
    const shortestDistances = {};
    const previousVertices = {}; // Stores the previous vertex for each vertex in the shortest path

    // Initialize the distances to Infinity for all vertices except the start vertex, which is set to 0
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        shortestDistances[vertex] = 0;
        explorationQueue.push(vertex, 0);
      } else {
        shortestDistances[vertex] = Infinity;
        explorationQueue.push(vertex, Infinity);
      }
      previousVertices[vertex] = null;
    }

    while (!explorationQueue.isEmpty()) {
      // this is a renaming => vertex: currentVertex
      // Remove the vertex with the smallest distance from the start to exlpre it next, this is a rule of dijkstra's algorithm, and we are sure that the dequeued is the smallest vertex because the array is sorted in the priority queue class
      const { vertex: currentVertex, distanceFromStart } =
        explorationQueue.removeSmallest();

      if (visited.has(currentVertex)) continue;

      visited.add(currentVertex);

      // you can delete this if you want to get all the shortest paths to every vertex in the graph instead of breaking the work when we find the shortest path from a source to a destination vertex
      if (currentVertex === end) {
        break; // Break the loop if the current vertex is the end vertex (shortest path found)
      }

      // Iterate over the neighbors of the removed vertex to explore them
      for (let connectedVertex of this.adjacencyList[currentVertex]) {
        const distance = distanceFromStart + connectedVertex.weight; // In the first iteration, the distance from the start vertex is set to 0. In the next following iterations, we add a number to the current distance. This is done to avoid having a sum of (Infinity + another number) which will sum always to Infinity. As the algorithm continues, the Infinity values are gradually replaced by real distances. This means that the calculations involve adding one number to another until we reach the end.
        // Update the distance if a shorter path is found
        if (distance < shortestDistances[connectedVertex.value]) {
          shortestDistances[connectedVertex.value] = distance; // Update the distance if it's smaller than the current distance
          explorationQueue.push(connectedVertex.value, distance);
          previousVertices[connectedVertex.value] = currentVertex;
        }
      }
    }
    if (shortestDistances[end] === Infinity) {
      return null; // no path found from the start vertex to the end vertex
    }

    // Build the shortest path by traversing the previousVertices
    let shortestPath = "";
    let currentVertex = end;
    while (currentVertex) {
      shortestPath = currentVertex + shortestPath;
      currentVertex = previousVertices[currentVertex];
    }

    // if you want all shortest distances for every vertex in the graph you can return instead all the distances object and also delete this => if (currentVertex === end) { break; }
    return {
      distance: shortestDistances[end],
      path: shortestPath,
    };
  }
}

// Example usage
const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
const shortestPath = graph.Dijkstra("A", "E");

console.log(shortestPath); // Output : { distance: 6, path: 'ACDFE' }
