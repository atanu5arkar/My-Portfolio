// Aim: Implement a Stack using Queues 

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
    isEmpty() {
        return this.items.length == 0;
    }
    front() {
        return this.items[0];
    }
    size() {
        return this.items.length;
    }
}

class Stack {
    constructor() {
        this.queue1 = new Queue();
        this.queue2 = new Queue();
    }
    push(ele) {
        this.queue2.enqueue(ele);
        // queue2 ensures that a new entry is always at the front of queue1
        
        while (this.queue1.size()) {
            const e = this.queue1.dequeue();
            this.queue2.enqueue(e);
        }
        const tempQ = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = tempQ;
    }
    pop() {
        return this.queue1.dequeue();
    }
    isEmpty() {
        return this.queue1.isEmpty();
    }
    peek() {
        return this.isEmpty()
            ? "The Stack is Empty"
            : this.queue1.front();
    }
    size() {
        return this.queue1.size();
    }
}

const stack = new Stack();

stack.push("A");
stack.push(-1);
stack.push(12);
stack.push("B");

stack.pop();
stack.pop();

console.log(`Peek: ${stack.peek()}
Size: ${stack.size()}
isEmpty: ${stack.isEmpty()}`);