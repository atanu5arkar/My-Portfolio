/* 
 * In a Binary Tree, every node has at most 2 child nodes.

 * The Breadth-First Search (BFS) algorithm traverses a tree level by level, starting from the root node. It 
   visits all the nodes at the current level, across all branches, before moving on to the next level. 
 
 * In Pre-order DFS algorithm traverses the left-depth first of any branch.
*/

class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(ele) {
        this.items.push(ele);
    }
    dequeue() {
        return this.items.shift();
    }
    size() {
        return this.items.length;
    }
}

class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value, null, null);
        if (!this.root) return this.root = newNode;

        const queue = new Queue();
        queue.enqueue(this.root);

        while (1) {
            const currentNode = queue.dequeue();
            const leftChild = currentNode.left;
            const rightChild = currentNode.right;

            if (!leftChild) return currentNode.left = newNode;
            if (!rightChild) return currentNode.right = newNode;

            queue.enqueue(leftChild);
            queue.enqueue(rightChild);
        }
    }

    BFS() {
        const root = this.root;
        if (!root) return 'Tree is Empty.';

        const queue = new Queue()
        const results = [];
        queue.enqueue(root);

        while (queue.size()) {
            const currentNode = queue.dequeue();
            const leftChild = currentNode.left;
            const rightChild = currentNode.right;

            results.push(currentNode.value);

            if (leftChild) queue.enqueue(leftChild);
            if (rightChild) queue.enqueue(rightChild);
        }
        return `[${results.join(', ')}]`;
    }

    PreOrderDFS() {
        const currentNode = this.root;
        if (!currentNode) return 'Tree is Empty.';

        const results = [];

        function traversal(currentNode) {
            results.push(currentNode.value);

            const leftChild = currentNode.left;
            const rightChild = currentNode.right;

            if (leftChild) traversal(leftChild);
            if (rightChild) traversal(rightChild);
        }

        traversal(currentNode);
        return `[${results.join(', ')}]`;
    }
}

const tree = new BinaryTree();

tree.insert(47);
tree.insert(21);
tree.insert(76);
tree.insert(18);
tree.insert(27);
tree.insert(52);
tree.insert(82);
tree.insert(42);
tree.insert(52);
tree.insert(-4);
tree.insert("A");

console.log(tree.BFS());
console.log(tree.PreOrderDFS());
// console.dir(tree, { depth: null });