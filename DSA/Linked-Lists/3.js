// Aim: Implement a Circular Singly Linked List

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class CircularSinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead(value) {
        const newNode = new Node(value, this.head);
        if (!this.head) this.tail = newNode;
        this.tail.next = this.head = newNode;
        return console.log(`New node with value ${value} inserted at Head.`);
    }

    addToTail(value) {
        const newNode = new Node(value, this.head);

        if (!this.tail) newNode.next = this.head = newNode;
        else this.tail.next = newNode;

        this.tail = newNode;
        return console.log(`New node with value ${value} inserted at Tail.`);
    }

    removeHead() {
        const head = this.head;
        if (!head) return console.log("Linked List is Empty.");

        function printMsg() {
            console.log(`Node with value ${head.value} removed at Head.`);
        }

        if (head.next == head) {
            this.head = this.tail = null;
            return printMsg();
        }
        this.tail.next = this.head = head.next;
        return printMsg();
    }

    removeTail() {
        const tail = this.tail;
        if (!tail) return console.log("Linked List is Empty.");

        function printMsg() {
            console.log(`Node with value ${tail.value} removed at Tail.`);
        }

        if (tail == this.head) {
            this.head = this.tail = null;
            return printMsg();
        }
        let currentNode = this.head;

        while (currentNode.next != tail) {
            currentNode = currentNode.next;
        }
        this.tail = currentNode;
        currentNode.next = this.head;
        return printMsg();
    }

    removeAtN(position) {
        let currentNode = this.head;
        let nodesCount = 1;

        if (!currentNode) return console.log('Linked List is Empty.');

        while (currentNode.next != this.head) {
            currentNode = currentNode.next;
            nodesCount++;
        }
        if (position < 1 || position > nodesCount)
            return console.log('Invalid Position.');

        function printMsg(val) {
            console.log(`Node with value ${val} removed at Position ${position}.`);
        }

        currentNode = this.head;
        let del = currentNode.value;

        if (nodesCount == 1) {
            this.head = this.tail = null;
            return printMsg(del);
        }
        if (position == 1) {
            this.tail.next = this.head = currentNode.next;
            return printMsg(del);
        }

        for (let i = 2; i <= position - 1; i++) {
            currentNode = currentNode.next;
        }
        const nodeToDel = currentNode.next;
        del = nodeToDel.value;

        if (nodeToDel == this.tail) this.tail = currentNode;
        currentNode.next = nodeToDel.next;
        return printMsg(del);
    }

    addToN(value, position) {
        function printMsg() {
            console.log(`Node with value ${value} inserted at Position ${position}.`);
        }

        const newNode = new Node(value, null);
        let currentNode = this.head;
        let nodesCount = 1;

        if (!currentNode) {
            if (position != 1) return console.log('Invalid Position.');
            newNode.next = this.head = this.tail = newNode;
            return printMsg();
        }

        while (currentNode.next != this.head) {
            currentNode = currentNode.next;
            nodesCount++;
        }
        if (position < 1 || position > nodesCount + 1)
            return console.log('Invalid Position.');

        if (position == 1) {
            newNode.next = this.head;
            this.tail.next = this.head = newNode;
            return printMsg();
        }

        currentNode = this.head;
        for (let i = 2; i <= position - 1; i++) {
            currentNode = currentNode.next;
        }

        if (currentNode == this.tail) this.tail = newNode;
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return printMsg();
    }

    search(element) {
        let currentNode = this.head;
        if (!currentNode) return console.log("Linked List is Empty.");

        let pos = 1, isFound = false;

        do {
            if (currentNode.value === element) {
                console.log(`Node with ${element} found at Position ${pos}.`);
                isFound = true;
            }
            pos++;
            currentNode = currentNode.next;
        } while (currentNode.next != this.head);

        if (!isFound) return console.log('Value not found.');
    }
    traverse() {
        let currentNode = this.head;
        if (!currentNode) return console.log('Linked List is Empty.');

        console.log('\nTraverse Result :\n');
        console.log('Head Node Value :', currentNode.value);

        while (1) {
            console.log('Node Value :', currentNode.value);
            if (currentNode.next == this.head) {
                console.log('Next Node Value : Head');
                break;
            }
            console.log('Next Node Value :', currentNode.next.value);
            currentNode = currentNode.next;
        }
        return console.log('Tail Node Value :', currentNode.value);
    }
}

const csll = new CircularSinglyLinkedList();

csll.addToHead(25);
csll.addToHead(35);

csll.addToTail(45);
csll.addToTail(55);

csll.removeHead();
csll.removeTail();

csll.removeAtN(2);
csll.addToN(22, 1);

csll.search(22);
csll.traverse();
// console.dir(csll, { depth: null });