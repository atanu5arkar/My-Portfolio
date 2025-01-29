// Aim: Implement a Singly Linked List

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead(value) {
        const newNode = new Node(value, this.head);
        if (!this.head) this.tail = newNode;
        this.head = newNode;
        return console.log(`New Node with value ${value} inserted at Head.`);
    }

    addToTail(value) {
        const newNode = new Node(value, null);

        if (!this.tail) this.head = newNode;
        else this.tail.next = newNode;

        this.tail = newNode;
        return console.log(`New Node with value ${value} inserted at Tail.`);
    }

    removeHead() {
        const head = this.head;
        if (!head) return console.log("Linked List is Empty.");

        if (!head.next) this.head = this.tail = null; // Single node
        else this.head = head.next;

        return console.log(`Node with value ${head.value} removed at Head.`);
    }

    removeTail() {
        const tail = this.tail;
        if (!tail) return console.log("Linked List is Empty.");

        function printMsg() {
            console.log(`Node with value ${tail.value} removed at Tail.`);
        }        
        let currentNode = this.head;

        if (!currentNode.next) {
            this.head = this.tail = null;
            return printMsg();
        }

        while (currentNode.next != tail) {
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        this.tail = currentNode;
        return printMsg();
    }

    removeAtN(position) {
        let currentNode = this.head;
        let nodesCount = 1;

        if (!currentNode) return console.log('Linked List is Empty.');

        while (currentNode.next != null) {
            currentNode = currentNode.next;
            nodesCount++;
        }
        if (position < 1 || position > nodesCount)
            return console.log('Invalid Position.');

        // DRY Code
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
            this.head = currentNode.next;
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

        if (!currentNode) { // Empty List
            if (position != 1) return console.log('Invalid Position.');
            this.head = this.tail = newNode;
            return printMsg();
        }

        while (currentNode.next != null) {
            currentNode = currentNode.next;
            nodesCount++;
        }
        if (position < 1 || position > nodesCount + 1)
            return console.log('Invalid Position.');

        currentNode = this.head;

        if (position == 1) {
            newNode.next = currentNode;
            this.head = newNode;
            return printMsg();
        }
        for (let i = 2; i <= position - 1; i++) {
            currentNode = currentNode.next;
        }
        newNode.next = currentNode.next;
        if (currentNode == this.tail) this.tail = newNode;
        currentNode.next = newNode;
        return printMsg();
    }

    search(element) {
        let currentNode = this.head;
        if (!currentNode) return console.log('Linked List is Empty');

        let pos = 1, isFound = false;

        while (currentNode) {
            if (currentNode.value === element) {
                console.log(`Node with ${element} found at Position ${pos}.`);
                isFound = true;
            }
            pos++;
            currentNode = currentNode.next;
        }
        if (!isFound) return console.log('Value not found');
    }

    traverse() {
        let currentNode = this.head;
        if (!currentNode) return console.log('Singly Linked List is Empty.');

        console.log('\nTraverse Result :');
        console.log('\nHead Node Value :', currentNode.value);

        while (1) {
            console.log('Node Value :', currentNode.value);
            if (currentNode == this.tail) {
                console.log('Next Node Value : null');
                break;
            }
            console.log('Next Node Value :', currentNode.next.value);
            currentNode = currentNode.next;
        }
        return console.log('Tail Node Value :', currentNode.value);
    }
}

const sll = new SinglyLinkedList();

sll.addToHead(25);
sll.addToHead(35);

sll.addToTail(45);
sll.addToTail(55);

sll.addToHead(16);
sll.addToTail(54);

sll.removeHead();
sll.removeTail();

sll.removeAtN(1);
sll.addToN(22, 3);

sll.search(45);
sll.traverse();