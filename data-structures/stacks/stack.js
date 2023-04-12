class Stack {
  constructor() {
    this.items = [];
  }

  // push method to add an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // pop method to remove the element from the top of the stack and return it
  pop() {
    if (this.items.length == 0) return "Underflow";
    return this.items.pop();
  }

  // peek method to return the element at the top of the stack without removing it
  peek() {
    return this.items[this.items.length - 1];
  }

  // isEmpty method to check if the stack is empty
  isEmpty() {
    return this.items.length == 0;
  }

  // printStack method to return a string representation of the stack
  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    return str;
  }
}
let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.printStack()); // Output: "10 20 30"

stack.pop();

console.log(stack.printStack()); // Output: "10 20"
