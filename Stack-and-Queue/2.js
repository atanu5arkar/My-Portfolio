// Aim: Implement a Queue using Stacks

class Stack {
    constructor() {
        this.items = [];
    }
    push(ele) {
        this.items.push(ele);
    }
    pop() {
        return this.items.pop();
    }
    isEmpty() {
        return this.items.length == 0;
    }
    peek() {
        return this.items.at(-1);
    }
    size() {
        return this.items.length;
    }
}

class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
    enqueue(ele) {        
        // The first entry is always at the top of stack1
        
        while (this.stack1.size()) {
            const e = this.stack1.pop();
            this.stack2.push(e);
        }
        this.stack1.push(ele);

        while (this.stack2.size()) {
            const e = this.stack2.pop();
            this.stack1.push(e);
        }
    }
    dequeue() {
        return this.stack1.pop();
    }
    isEmpty() {
        return this.stack1.isEmpty();
    }
    rear() {
        return this.isEmpty()
            ? "The Queue is Empty"
            : this.stack1.items[0];
    }
    front() {
        return this.isEmpty()
            ? "The Queue is Empty"
            : this.stack1.peek();
    }
    size() {
        return this.stack1.size();
    }
}

const queue = new Queue();

queue.enqueue("A");
queue.enqueue(-1);
queue.enqueue(12);
queue.enqueue("B");

queue.dequeue();
queue.dequeue();

console.log(`Front: ${queue.front()}
Rear: ${queue.rear()}
Size: ${queue.size()}
isEmpty: ${queue.isEmpty()}`);
