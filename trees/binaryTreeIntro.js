class Node{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
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
            return value
        }
        
    }
}
class Tree{
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
            this.root = newNode
        } else {
            this.root.add(newNode)
        }
    }
    add(value) {
        const newNode = new Node(value); 
        let currentNode = this.root
        if (currentNode) {
        //while loop currentNode != null
            while (currentNode !== null) {
                if (value >= currentNode.value) {
                    if (currentNode.right === null) {
                        currentNode.right = newNode
                        break
                    }
                    currentNode = currentNode.right;
                    
                } else {
                    if (currentNode.left === null) {
                        currentNode.left = newNode
                        break
                    }
                    currentNode = currentNode.left;
                }
            }
            //if condition determine where new node goes in left or right
            //assign branch left or right new node accordingly
        } else {
            // init root?
            this.root = newNode
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

tree.add2(9);

// console.log('here is the tree', tree)
// console.log('here is the tree', tree2)
console.log('here is the min', tree.max());