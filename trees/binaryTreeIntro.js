class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  size() {
    let counter = 1;
    if (this.left != null) {
      counter += this.left.size();
      console.log("left if triggered", counter);
    }
    if (this.right != null) {
      counter += this.right.size();
      console.log("right if triggered", counter);
    }
    return counter;
  }

  contains(value) {
    if (this.value === value) {
      return true;
    }
    if (this.value > value && this.left != null) {
      return this.left.contains(value);
    }
    if (this.value < value && this.right != null) {
      return this.right.contains(value);
    }
    return false;
  }

  height() {
    let left = 0;
    let right = 0;
    if (this.left != null) {
      left += this.left.height();
    }
    if (this.right != null) {
      right += this.right.height();
    }
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  isbalanced() {
    let left = 0;
    let right = 0;
    if (this.left != null) {
      left += this.left.height();
    }
    if (this.right != null) {
      right += this.right.height();
    }
    console.log("This is Left", left);
    console.log("This is Right", right);
    let difference = Math.max(left, right) - Math.min(left, right);
    if (difference > 1) {
      return false;
    }
    let leftside = true;
    let rightside = true;
    if (this.left != null) {
      leftside = this.left.isbalanced();
    }
    if (this.right != null) {
      rightside = this.right.isbalanced();
    }
    return leftside && rightside;
  }

  add(newNode) {
    if (newNode.value < this.value) {
      if (this.left === null) {
        this.left = newNode;
      } else {
        this.left.add(newNode);
      }
    }
    if (newNode.value > this.value) {
      if (this.right === null) {
        this.right = newNode;
      } else {
        this.right.add(newNode);
      }
    }
  }
  min() {
    if (this.left != null) {
      return this.left.min();
    } else {
      return this.value;
    }
    // if(this.left == null) base case
  }

  max() {
    if (this.right != null) {
      return this.right.min();
    } else {
      return this.value;
    }
    // if(this.right == null) base case
  }
  findValue(value) {
    if (this.value === value) {
      return value;
    }
  }
}
class Tree {
  constructor() {
    this.root = null;
  }
  max() {
    if (this.root != null) {
      return this.root.max();
    }
    return null;
  }
  min() {
    if (this.root != null) {
      return this.root.min();
    }
    return null;
  }
  add2(value) {
    const newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.root.add(newNode);
    }
  }
  add(value) {
    const newNode = new Node(value);
    let currentNode = this.root;
    if (currentNode) {
      //while loop currentNode != null
      while (currentNode !== null) {
        if (value >= currentNode.value) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            break;
          }
          currentNode = currentNode.right;
        } else {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            break;
          }
          currentNode = currentNode.left;
        }
      }
      //if condition determine where new node goes in left or right
      //assign branch left or right new node accordingly
    } else {
      // init root?
      this.root = newNode;
    }
  }
  isEmpty() {
    if (this.root == null) {
      return true;
    }
    return false;
  }

  size() {
    if (this.root != null) {
      return this.root.size();
    } else {
      return 0;
    }
  }
  contains(value) {
    if (this.root != null) {
      return this.root.contains(value);
    } else {
      return false;
    }
  }
  height() {
    if (this.root != null) {
      return this.root.height();
    }
    return 0;
  }
  isbalanced() {
    if (this.root != null) {
      return this.root.isbalanced();
    } else {
      return true;
    }
  }
}

const tree = new Tree();
const tree2 = new Tree();
// tree2.add(10);
// tree2.add(12);
// tree2.add(8);

tree.add2(10);
tree.add2(12);
tree.add2(8);
tree.add2(7);

tree.add2(9);
// tree.add2(6);
// tree.add2(5);

// console.log('here is the tree', tree)
// console.log('here is the tree', tree2)
console.log("here is the min", tree.contains(12));
console.log("this is the size of our tree", tree.size());
console.log("Is it empty?", tree.isEmpty(), tree2.isEmpty());
console.log("here is the height", tree.height());
console.log("Is it balanced?", tree.isbalanced());
