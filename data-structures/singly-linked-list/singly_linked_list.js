import ListNode from "./list_node.js";

// `
// {
//     next : {
//         next : {
//             next : null
//         },
//     },
// }
// `;

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
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
    return this;
  }
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
}

const list = new SinglyLinkedList();
list.push("majd");
list.push("eddine");
// list.push("ben");
// list.push("tahar");
const item = list.pop();

export default SinglyLinkedList;
