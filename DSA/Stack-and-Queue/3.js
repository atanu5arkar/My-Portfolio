// A CLI for Stack Operations

import { question, questionInt } from "readline-sync";

class Stack {
    constructor() {
        this.items = [];
    }
    push(ele) {
        this.items.push(ele);
        return `${ele} is pushed into the Stack.`;
    }
    isEmpty() {
        return this.items.length == 0;
    }
    pop() {
        return this.isEmpty()
            ? "The Stack is Empty."
            : `${this.items.pop()} is removed from the Stack.`;
    }
    top() {
        return this.isEmpty()
            ? "The Stack is Empty."
            : this.items.at(-1);
    }
    size() {
        return this.items.length;
    }
}

const stack = new Stack();
const options = ['Push', 'Pop', 'Top', 'Size', 'IsEmpty', 'Exit'];

const operations = {
    1: () => {
        const ele = question('Enter the element to push: ');
        console.log(stack.push(ele));
    },

    2: () => console.log(stack.pop()),

    3: () => stack.isEmpty()
        ? console.log(stack.top())
        : console.log(stack.top(), 'is the top element of the Stack.'),

    4: () => console.log('Current size of the Stack is', stack.size()),

    5: () => console.log(stack.isEmpty()),

    6: () => {
        console.log(`\n${"-".repeat(30)}`);
        console.log('Current status of the Stack:\n');
        console.log('Stack Elements:', stack.items);
        console.log('Top:', stack.top());
        console.log('Size:', stack.size());
    }
}

function runCli() {
    const choice = questionInt('\nChoose an option: ');

    if (choice == 6) return operations[6]();

    if (0 < choice && choice <= options.length) {
        operations[choice]();
        return runCli();
    }
    console.log('\nInvalid input. Try again!');
    return runCli();
}

console.clear();
console.log('Stack Operations Menu:\n');
options.forEach((opt, i) => console.log(i + 1, opt));

runCli();