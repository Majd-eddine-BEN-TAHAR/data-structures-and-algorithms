/*
  -- The insert method of a binary search tree adds a new node with a given value to the tree while maintaining the binary search tree property. It starts at the root node and traverses the tree to find the correct position to insert the new node. If the value already exists in the tree, it doesn't insert a new node. Once it finds the correct position, it creates a new node with the new value and inserts it as a child of the appropriate node.
    //      1
    //    /   \
    //   3     15 
    //  / \    / \
    // 8   4  20  26
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

  /**
   * Traverses the binary search tree in a breadth-first manner, visiting all nodes from left to right at a given level before moving on to the next level. Returns an array of all visited node values in the order they were visited.
   *
   * @returns {Array} An array of all visited node values in the order they were visited.
   */
  breadthFirstTraversal() {
    const queue = [];
    const visited = [];
    let currentNode = this.root;
    queue.push(currentNode);

    // Process the queue until it is empty.
    while (queue.length) {
      currentNode = queue.shift();
      visited.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return visited;
  }

  /**
   * Performs a depth-first preorder traversal on the binary search tree, visiting the current node first, then recursively visiting its left and right subtrees in that order, and returning an array of visited nodes in the order they were visited.
   *
   * @returns {Array} An array of visited nodes in the order they were visited.
   */
  dfs_pre_order() {
    const visited = [];

    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return visited;
  }

  /**
   * Performs a depth-first postorder traversal on the binary search tree, visiting the left and right subtrees of the current node recursively in that order, and then visiting the current node, and returning an array of visited nodes in the order they were visited.
   * @returns {Array} An array of visited nodes in the order they were visited.
   */
  dfs_post_order() {
    const visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }

    traverse(this.root);

    return visited;
  }

  /**
   * Performs a depth-first inorder traversal on the binary search tree, visiting the left subtree first, then the current node, and finally the right subtree, and returning an array of visited nodes in the order they were visited.
   * @returns {Array} An array of visited nodes in the order they were visited.
   */
  dfs_in_order() {
    const visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return visited;
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
console.log("breadth first =>", tree.breadthFirstTraversal());
console.log("depth pre-order =>", tree.dfs_pre_order());
console.log("depth post-order =>", tree.dfs_post_order());
console.log("depth in-order =>", tree.dfs_in_order());
