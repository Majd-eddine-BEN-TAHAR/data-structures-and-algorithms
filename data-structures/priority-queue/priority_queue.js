/*
  -- A priority queue is implemented using a binary heap, which is a complete binary tree
    stored as an array. The root element is stored at index 0, and the children of an element
    at index i are stored at indices 2i+1 and 2i+2. This array representation allows for efficient
    indexing and access to the elements in the priority queue, as well as for the use of binary
    heap algorithms.

  -- Each element in the priority queue consists of a value and its associated priority. The elements
    are stored in the array based on their priorities, with the element of highest priority at the
    root (index 0) and lower priority elements below it. The array representation allows efficient
    insertion and extraction of elements with the highest priority, supporting the priority queue
    operations.

  -- Example:
                  (1, "Task 1")
                 /           \
      (2, "Task 2")         (3, "Task 3")

  -- In the example above, the priority queue contains elements with their associated priorities.
     The elements are stored in an array, with the highest priority element at the root and lower
     priority elements in the subsequent positions.

  -- The enqueue operation adds a new element to the priority queue based on its priority. The new
     element is inserted at the end of the array and then moved up the heap to its correct position
     by comparing it with its parent elements and swapping if necessary.

  -- The dequeue operation removes and returns the element with the highest priority, which is always
     the root element. The last element in the array is moved to the root position, and then it is
     adjusted downwards in the heap to its correct position by comparing it with its child elements
     and swapping if necessary.

  -- The adjust_element_to_its_correct_position function is used in the dequeue operation to adjust
     an element at a given index to its correct position in the heap. It compares the element with its
     child elements and swaps it with the larger child if necessary, recursively calling the function
     on the swapped child index until the element reaches its correct position.

  -- The getQueueTextRepresentation method provides a textual representation of the priority queue,
     showing the elements organized in a tree structure. It can be useful for visualizing the heap
     and debugging purposes.
*/

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(newValue, priority) {
    const newNode = new Node(newValue, priority);
    this.values.push(newNode);
    const addedNodeIndex = this.values.length - 1;
    this.bubbleUp(addedNodeIndex);
  }
  bubbleUp(addedNodeIndex) {
    if (addedNodeIndex === 0) return; // The root node has been reached

    let parentIndex = Math.floor((addedNodeIndex - 1) / 2);

    // if child > parent => Swap the parent and the child and call bubbleUp again with the new index of the added value which is the index of his previous parent
    if (
      this.values[addedNodeIndex].priority < this.values[parentIndex].priority
    ) {
      let temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[addedNodeIndex];
      this.values[addedNodeIndex] = temp;

      // you can just pass directly parentIndex to bubbleUp, but i did it to make it clear
      addedNodeIndex = parentIndex;
      this.bubbleUp(addedNodeIndex);
    }
  }

  dequeue() {
    if (this.values.length === 0) return null;

    if (this.values.length === 1)
      return this.values.pop(); // If the heap has only one element, it's the maximum, so we can safely remove it and return it witout doing adjustemnts because the heap is empty
    else {
      const min = this.values[0];
      const lastElement = this.values.pop(); // Remove the last element to use it as the new root of the heap
      this.values[0] = lastElement; // add the new root to of the heap
      this.adjust_element_to_its_correct_position(0); // Adjust the new root element (its index is 0) to its correct position in the heap
      return min; // return the removed element from the heap
    }
  }

  adjust_element_to_its_correct_position(index_of_element_to_adjust) {
    let leftChildIndex = index_of_element_to_adjust * 2 + 1; // to get the index of its left child if it exist
    let rightChildIndex = index_of_element_to_adjust * 2 + 2; // // to get the index of its right child if it exist
    let heapLength = this.values.length;
    let current = this.values[index_of_element_to_adjust];
    let largestIndex = index_of_element_to_adjust;

    let leftChild = null;
    let rightChild = null;

    if (leftChildIndex < heapLength) {
      // check if the left counted index is out of bounds, if it's out of bounds that's means it doesn't has a left child
      leftChild = this.values[leftChildIndex];
      if (leftChild.priority < current.priority) {
        largestIndex = leftChildIndex;
      }
    }

    if (rightChildIndex < heapLength) {
      // check if the right counted index is out of bounds, if it's out of bounds that's means it doesn't has a left child
      rightChild = this.values[rightChildIndex];
      if (
        rightChild.priority < current.priority &&
        rightChild.priority < leftChild.priority
      ) {
        largestIndex = rightChildIndex;
      }
    }

    if (largestIndex !== index_of_element_to_adjust) {
      // Swap values to bring the larger child element to the current position and recursively call the adjustment function to continue adjusting the element at the new position to its correct position in the heap, as it may now also have children larger than itself.
      let temp = this.values[index_of_element_to_adjust];
      this.values[index_of_element_to_adjust] = this.values[largestIndex];
      this.values[largestIndex] = temp;

      this.adjust_element_to_its_correct_position(largestIndex);
    }
  }
  getQueueTextRepresentation() {
    let output = "**************** \n";
    let level = Math.ceil(Math.log2(this.values.length + 1)) - 1;
    let levelNodes = 1;
    let levelCounter = 0;

    for (let i = 0; i < this.values.length; i++) {
      if (levelCounter === 0) {
        output += "  ".repeat(level);
      }

      output += this.values[i].value + " ";

      levelCounter++;
      if (levelCounter === levelNodes) {
        output += "\n";
        level--;
        levelNodes *= 2;
        levelCounter = 0;
      }
    }
    output += "\n";
    output += "****************";

    return output;
  }
}

const queue = new PriorityQueue();

queue.enqueue("Task 1", 3);
queue.enqueue("Task 2", 1);
queue.enqueue("Task 3", 2);

console.log(queue.getQueueTextRepresentation());

console.log(queue.dequeue()); // Output : Node { value: 'apple', priority: 1 }
console.log(queue.getQueueTextRepresentation());
