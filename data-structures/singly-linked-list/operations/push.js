import ListNode from "../list_node.js";

function push(nodeValue) {
  let listNode = new ListNode(nodeValue);
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

export default push;
