/*
  -- A binary heap is typically implemented as an array, where the root
    element is stored at index 0, and the children of element at index i are
    stored at indices 2i+1 and 2i+2. This array representation allows
    for efficient indexing and access to the elements in the heap, as well as for 
    the use of binary heap algorithms, such as heap sort and heap insertion/deletion. 
    The values in the array satisfy the heap property, where the value of each parent node 
    is greater than or equal to the values of its child nodes.
            50              |               80
          /    \            |             /    \
        40      30          |          70       50   
       /  \    /  \         |         /  \     /  \    
     20   10  5    2        |       40   30   20  10     
                            |
[50, 40, 30, 20, 10, 5, 2]  | [80, 70, 50, 40, 30, 20, 10]

*/
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(newValue) {
    this.values.push(newValue);
    const addedValueIndex = this.values.length - 1;
    this.bubbleUp(addedValueIndex);
  }
  bubbleUp(addedValueIndex) {
    if (addedValueIndex === 0) return; // The root node has been reached

    let parentIndex = Math.floor((addedValueIndex - 1) / 2);

    // if child > parent => Swap the parent and the child and call bubbleUp again with the new index of the added value which is the index of his previous parent
    if (this.values[addedValueIndex] > this.values[parentIndex]) {
      let temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[addedValueIndex];
      this.values[addedValueIndex] = temp;

      // you can just pass directly parentIndex to bubbleUp, but i did it to make it clear
      addedValueIndex = parentIndex;
      this.bubbleUp(addedValueIndex);
    }
  }

  extractMax() {
    if (this.values.length === 0) return null;

    if (this.values.length === 1)
      return this.values.pop(); // If the heap has only one element, it's the maximum, so we can safely remove it and return it witout doing adjustemnts because the heap is empty
    else {
      const max = this.values[0];
      const lastElement = this.values.pop(); // Remove the last element to use it as the new root of the heap
      this.values[0] = lastElement; // add the new root to of the heap
      this.adjust_element_to_its_correct_position(0); // Adjust the new root element (its index is 0) to its correct position in the heap
      return max; // return the removed element from the heap
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
      if (current < leftChild) {
        largestIndex = leftChildIndex;
      }
    }

    if (rightChildIndex < heapLength) {
      // check if the right counted index is out of bounds, if it's out of bounds that's means it doesn't has a left child
      rightChild = this.values[rightChildIndex];
      if (current < rightChild && rightChild > leftChild) {
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
  getHeapTextRepresentation() {
    let output = "**************** \n";
    let level = Math.ceil(Math.log2(this.values.length + 1)) - 1;
    let levelNodes = 1;
    let levelCounter = 0;

    for (let i = 0; i < this.values.length; i++) {
      if (levelCounter === 0) {
        output += "  ".repeat(level);
      }

      output += this.values[i] + " ";

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

const maxHeap = new MaxBinaryHeap();
maxHeap.values = [50, 40, 30, 20, 10, 5, 2]; // example to fill the heap quickly

console.log(maxHeap.getHeapTextRepresentation());
maxHeap.insert(43);
console.log(maxHeap.getHeapTextRepresentation());
maxHeap.insert(13);
console.log(maxHeap.getHeapTextRepresentation());
console.log(maxHeap.extractMax()); // Output: 50
console.log(maxHeap.getHeapTextRepresentation());
