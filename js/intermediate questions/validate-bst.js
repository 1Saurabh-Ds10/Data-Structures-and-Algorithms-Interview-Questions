/*
Validate Binary Search Tree
*/

function validate(node, min = null, max = null) {
  if (max !== null && node.data > max) return false;

  if (min !== null && node.data < min) return false;

  if (node.left && !validate(node.left, min, node.data)) return false;

  if (node.right && !validate(node.right, node.data, max)) return false;

  return true;
}

/*
Binary Search Tree
*/

class BST {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) this.left.insert(data);
    else if (data < this.data) this.left = new BST(data);
    else if (data > this.data && this.right) this.right.insert(data);
    else if (data > this.data) this.right = new BST(data);
  }

  contains(data) {
    if (this.data === data) return this;

    if (this.data < data && this.right) return this.right.contains(data);
    else if (this.data > data && this.left) return this.left.contains(data);

    return null;
  }
}
