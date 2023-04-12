class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // push an element to the end of the queue
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // Removes and returns the first element in the queue
  dequeue() {
    if (!this.head) return null;
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    if (this.size === 0) {
      this.tail = null;
    }
    return value;
  }

  // Returns the first element in the queue
  peek() {
    return this.head ? this.head.value : null;
  }

  // Checks if the queue is empty
  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // Returns a string of all elements in the queue
  toString() {
    let currentNode = this.head;
    let string = "";
    while (currentNode) {
      string += currentNode.value;
      if (currentNode.next) {
        string += ", ";
      }
      currentNode = currentNode.next;
    }
    return string;
  }
}

const myQueue = new Queue();

// Add some items to the queue
myQueue.enqueue("apple");
myQueue.enqueue("banana");
myQueue.enqueue("cherry");

// Get the size of the queue
console.log("Size of queue:", myQueue.getSize());

// Check if the queue is empty
console.log("Is queue empty?", myQueue.isEmpty());

// Remove the first item from the queue
console.log("Removed item:", myQueue.dequeue());

// Get the first item in the queue without removing it
console.log("First item in queue:", myQueue.peek());

// Add another item to the queue
myQueue.enqueue("date");

// Print out all the items in the queue
console.log("All items in queue:", myQueue.toString());
