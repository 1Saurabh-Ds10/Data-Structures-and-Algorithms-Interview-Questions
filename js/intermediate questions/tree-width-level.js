/*
    0
  / |  \
1   2   3
|   |   
4   5
    |
    6

Answer: [1, 3, 2, 1]

*/

function levelWidth(root) {
  const arr = [root, 'levelEnd'];
  const count = [0];

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === 'levelEnd') {
      count.push(0);
      arr.push('levelEnd');
    } else {
      arr.push(...node.children);
      count[count.length - 1]++;
    }
  }

  return count;
}

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node => node.data !== data);
  }
}
