// A CLI for Queue Operations

import { question, questionInt } from "readline-sync";

class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(ele) {
        this.items.push(ele);
        return `${ele} is inserted into the Queue.`;
    }
    isEmpty() {
        return this.items.length == 0;
    }
    dequeue() {
        return this.isEmpty()
            ? "The Queue is Empty."
            : `${this.items.pop()} is removed from the Queue.`;
    }
    front() {
        return this.isEmpty()
            ? "The Queue is Empty."
            : this.items[0];
    }
    rear() {
        return this.isEmpty()
            ? "The Queue is Empty."
            : this.items.at(-1);
    }
    size() {
        return this.items.length;
    }
}

const queue = new Queue();
const options = ['Enqueue', 'Dequeue', 'Front', 'Rear', 'Size', 'IsEmpty', 'Exit'];

const operations = {
    1: () => {
        const ele = question('Enter the element to enqueue: ');
        console.log(queue.enqueue(ele));
    },

    2: () => console.log(queue.dequeue()),

    3: () => queue.isEmpty()
        ? console.log(queue.front())
        : console.log(queue.front(), 'is the front element of the Queue.'),

    4: () => queue.isEmpty()
        ? console.log(queue.rear())
        : console.log(queue.rear(), 'is the rear element of the Queue.'),

    5: () => console.log('Current size of the Queue is', queue.size()),

    6: () => console.log(queue.isEmpty()),

    7: () => {
        console.log(`\n${"-".repeat(30)}`);
        console.log('Current status of the Queue:\n');
        console.log('Queue Elements:', queue.items);
        [
            `Front: ${queue.front()}`,
            `Rear: ${queue.rear()}`,
            `Size: ${queue.size()}`
        ].forEach(str => console.log(str));
    }
}

function runCli() {
    const choice = questionInt('\nEnter the operation number: ');

    if (choice == 7) return operations[7]();

    if (0 < choice && choice <= options.length) {
        operations[choice]();
        return runCli();
    }
    console.log('\nInvalid input. Try again!');
    return runCli();
}

console.clear();
console.log('Queue Operations Menu:\n');
options.forEach((opt, i) => console.log(i + 1, opt));

runCli();