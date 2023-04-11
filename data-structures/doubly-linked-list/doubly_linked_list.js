import print from "./debug_list.js";
import Node from "./node.js";

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;

    // this is just for debugging, it's not related to doubly linked list
    this.print = print.bind(this);
  }

  push(value) {
    const newNode = new Node(value, this.tail);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Deletes a node from the last
  pop() {
    if (!this.head) return undefined;

    let elementToRemove = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;
      elementToRemove.previous = null;
    }

    this.length--;

    return elementToRemove;
  }

  // Removes a node from the begining
  shift() {
    if (!this.head) return undefined;

    let elementToRemove = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.previous = null;
      elementToRemove.next = null;
    }
    this.length--;
    return elementToRemove;
  }

  // adds a node at the begining
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return newNode;
  }

  // get a node by its index
  // This solution is optimized because it uses a technique called "midpoint optimization" to traverse the linked list efficiently, reducing the time complexity to O(n/2) for any given index.
  get(index) {
    if (index < 0 || index >= this.length || !this.head) return null;

    let count, current;
    if (index <= Math.floor(this.length / 2)) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.previous;
        count--;
      }
    }
    return current;
  }

  set(index, newValue) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = newValue;
      return true;
    }
    return false;
  }

  //   insert a node at a specific index
  insert(index, newValue) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift(newValue);
    if (index === this.length) return !!this.push(newValue);

    let newNode = new Node(newValue);
    let nodeAfter = this.get(index);
    let nodeBefore = nodeAfter.previous;

    newNode.previous = nodeBefore;
    newNode.next = nodeAfter;

    nodeAfter.previous = newNode;
    nodeBefore.next = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length) return !!this.pop();

    const nodeToRemove = this.get(index);
    const nodeBefore = nodeToRemove.previous;
    const nodeAfter = nodeToRemove.next;

    nodeBefore.next = nodeAfter;
    nodeAfter.previous = nodeBefore;

    nodeToRemove.next = null;
    nodeToRemove.previous = null;

    return nodeToRemove;
  }

  reverse() {
    // Swap the head and tail pointers
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    // Initialize a variable to keep track of the previous node
    let previousNode = null;

    // Traverse the list
    while (currentNode !== null) {
      // Save a reference to the next node
      const nextNode = currentNode.next;

      // Reverse the pointers for the current node
      currentNode.next = previousNode;
      currentNode.previous = nextNode;

      // Move the previous node pointer to the current node
      previousNode = currentNode;

      // Move the current node pointer to the next node
      currentNode = nextNode;
    }
  }

  mergeSort() {
    this.head = this._mergeSort(this.head);
    return this.head;
  }

  // Private recursive helper function for merge sort
  _mergeSort(head) {
    if (!head || !head.next) {
      return head;
    }

    // Split the list into two halves
    let middle = this._getMiddleNode(head);
    let left = head;
    let right = middle.next;
    right.prev = null;
    middle.next = null;

    // Recursively sort each half
    left = this._mergeSort(left);
    right = this._mergeSort(right);

    // Merge the sorted halves in place
    return this._merge(left, right);
  }

  // Private helper function to get the middle node of a list
  _getMiddleNode(head) {
    let previousNode = head;
    let nextNode = head.next;
    while (nextNode && nextNode.next) {
      previousNode = previousNode.next;
      nextNode = nextNode.next.next;
    }
    return previousNode;
  }

  // Private helper function to merge two sorted lists in place
  _merge(left, right) {
    let mergedListHead = new Node(null);
    let tail = mergedListHead;

    while (left && right) {
      if (left.value <= right.value) {
        tail.next = left;
        left.prev = tail;
        left = left.next;
      } else {
        tail.next = right;
        right.prev = tail;
        right = right.next;
      }
      tail = tail.next;
    }

    // Append any remaining nodes from the non-empty list
    tail.next = left || right;
    tail.next.prev = tail;

    return mergedListHead.next;
  }
}

const doubly_list = new DoublyLinkedList();

doubly_list.push(1);
doubly_list.push(0);
doubly_list.push(2);
// doubly_list.insert(1, "majd");
// doubly_list.remove(1);
doubly_list.reverse();
doubly_list.mergeSort();
// doubly_list.shift();
// doubly_list.push(5);
// console.log(doubly_list.pop());
// doubly_list.unshift(71);

// console.log(doubly_list.get(1));
// console.log(doubly_list.set(0, 9));

doubly_list.print();
