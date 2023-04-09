import ListNode from "./list_node.js";
// import push from "./operations/push.js";

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;

    // this.push = push.bind(this); // use it if you want to put the methods into seprate files
  }
  push(nodeVal) {
    let listNode = new ListNode(nodeVal);
    if (!this.head) {
      this.head = listNode;
      this.tail = listNode;
    } else {
      this.tail.next = listNode;
      this.tail = listNode;
    }
    this.length++;
    return listNode;
  }
  // remove an element from the end
  pop() {
    if (this.head === null || this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return null;
    }

    let current = this.head;
    let previous = null;

    while (current.next) {
      previous = current;
      current = current.next;
    }

    this.tail = previous;
    this.tail.next = null;
    this.length--;

    return current;
  }
  // remove an element from the start
  shift() {
    if (!this.head) return null;
    let current = this.head;

    if (this.length === 1) {
      this.tail = null;
      this.head = this.head.next;
      this.length--;
    } else {
      this.head = this.head.next;
      this.length--;
    }
    return current;
  }
  // add an element from the start
  unshift(value) {
    let node = new ListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return node;
  }

  // get a node by its index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    // this block is only reached when we are sure that the user used a valid index for thath there's no checks
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // update a node value
  set(index, newValue) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = newValue;
      return true;
    }
    return false;
  }

  insert(index, newValue) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(newValue);
    if (index === this.length) return !!this.push(newValue);

    let newNode = new ListNode(newValue);
    let nodeBefore = this.get(index - 1);

    let temp = nodeBefore.next;
    nodeBefore.next = newNode;
    newNode.next = temp;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    let nodeToRemove = this.get(index);
    let nodeBofore = this.get(index - 1);

    nodeBofore.next = nodeToRemove.next;
    this.length--;
    return true;
  }

  // print the content of the list as an array to facilitate debugging
  print() {
    let arr = [];
    let current = this.head;
    let i = 0;
    while (current) {
      const obj = {};
      obj[`${i}`] = current.value;
      arr.push(obj);

      current = current.next;
      i++;
    }
    console.log(console.log(arr));
  }

  reverse() {
    let current = this.head;
    let previous = null;

    this.head = this.tail;
    this.tail = current; // you can use this instead => new ListNode(this.head.value);

    while (current !== null) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    /* Another solution for reverse */
    // const listLength = list.length - 1;
    // for (let i = listLength; i > 0; i--) {
    //   const removedElement = this.shift();
    //   this.insert(i, removedElement.value);
    // }
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
// const removedItem = list.pop();
// list.unshift(2000000000);
// const shiftedItem = list.shift();
// console.log(list.get(0));
// list.set(0, "hello");
// list.insert(1, 412435524);
// list.remove(1);

list.print();
list.reverse();
list.print();

export default SinglyLinkedList;
