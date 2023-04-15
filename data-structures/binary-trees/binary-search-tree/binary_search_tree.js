/*
  -- The insert method of a binary search tree adds a new node with a given value to the tree while maintaining the binary search tree property. It starts at the root node and traverses the tree to find the correct position to insert the new node. If the value already exists in the tree, it doesn't insert a new node. Once it finds the correct position, it creates a new node with the new value and inserts it as a child of the appropriate node.
*/
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(newValue) {
    if (!this.root) {
      this.root = new Node(newValue);
      return this;
    }

    let current = this.root;
    while (current) {
      // don't insert if duplicated
      if (newValue === current.value) return undefined;

      if (newValue < current.value) {
        if (!current.left) {
          current.left = new Node(newValue);
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = new Node(newValue);
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (!this.root) return false;
    if (this.root.value === value) return true;
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      else if (value < current.value) current = current.left;
      else current = current.right;
    }
    return false;
  }
}

const tree = new BinarySearchTree();
tree.insert(4);
tree.insert(5);
tree.insert(2);
tree.insert(3);
tree.insert(6);

console.log(tree.find(1));
console.log(tree.find(4));
