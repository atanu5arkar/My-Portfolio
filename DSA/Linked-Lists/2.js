// Aim: Implement a Doubly Linked List

class Node {
    constructor(prev, value, next) {
        this.prev = prev;
        this.value = value;
        this.next = next;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead(value) {
        const newNode = new Node(null, value, this.head);

        if (!this.head) this.tail = newNode;
        else this.head.prev = newNode

        this.head = newNode;
        return console.log(`New node with value ${value} inserted at Head.`);
    }

    addToTail(value) {
        const newNode = new Node(this.tail, value, null);

        if (!this.tail) this.head = newNode;
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

        if (!head.next) {
            this.head = this.tail = null;
            return printMsg();
        }
        this.head = head.next;
        this.head.prev = null;
        return printMsg();
    }

    removeTail() {
        const tail = this.tail;
        if (!tail) return console.log("Linked List is Empty.");

        function printMsg() {
            console.log(`Node with value ${tail.value} removed at Tail.`);
        }

        if (!tail.prev) {
            this.head = this.tail = null;
            return printMsg();
        }
        this.tail = tail.prev;
        this.tail.next = null;
        return printMsg();
    }

    traverse() {
        let currentNode = this.head;
        if (!currentNode) return console.log('Linked List is Empty.');

        console.log('\nTraverse Result :\n');
        console.log('Head Node Value:', currentNode.value);

        while (1) {
            // Optional chaining is for the head
            console.log('Prev Node Value:', currentNode.prev?.value ?? null);
            console.log('Node Value:', currentNode.value);

            if (currentNode == this.tail) {
                console.log('Next Node Value:', null);
                break;
            }
            console.log('Next Node Value:', currentNode.next.value);
            currentNode = currentNode.next;
        }
        return console.log('Tail Node Value:', currentNode.value);
    }
}

const dll = new DoublyLinkedList();

dll.addToHead(25);
dll.addToHead(45);

dll.addToTail(35);
dll.addToTail(54);

dll.removeHead();
dll.removeTail();

dll.traverse();
// console.dir(dll, { depth: null });