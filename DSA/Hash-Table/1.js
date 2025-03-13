// Logic for update and remove methods are in accordance with the session discussions.

import { question, questionInt } from "readline-sync";

class HashTable {
    constructor(size, primeFactor) {
        this.dataMap = new Array(size);
        this.primeFactor = primeFactor;
    }

    hash(key) {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * this.primeFactor) % this.dataMap.length;
        }
        return hash;
    }

    set(key, value) {
        if (this.loadFactor() > 0.7) this.resize();

        const index = this.hash(key);

        if (!this.dataMap[index])
            return this.dataMap[index] = [[key, value]];

        return this.dataMap[index].push([key, value]);
    }

    get(key) {
        const index = this.hash(key);
        const data = this.dataMap[index];

        if (!data) return undefined;

        const result = [];

        data.forEach(pair => {
            if (pair[0] == key) result.push(pair);
        });
        return result.length ? result : undefined;
    }

    loadFactor() {
        const items = this.dataMap.reduce((acc, arr) => acc += arr.length, 0);
        return items / this.dataMap.length;
    }

    resize() {
        const data = [];

        // Empty the table, saving all data
        this.dataMap.forEach((arr, i, dataMap) => {
            arr.forEach(pair => data.push(pair));
            delete dataMap[i];
        });
        // Double the table size and reset the data
        this.dataMap.length *= 2;
        return data.forEach(pair => this.set(...pair));
    }

    update() {
        const key = question('Enter the Key: ');
        const newValue = question('Enter the Value: ');

        const data = this.get(key);
        const index = this.hash(key);

        if (!data) return console.log('\nKey Not Found!');

        if (data.length == 1) {
            for (const pair of this.dataMap[index]) {
                if (pair[0] == key) {
                    pair[1] = newValue;
                    return console.log('\nValue Updated.');
                }
            }
        }
        console.log('\nMultiple values were found.')
        data.forEach((item, i) => console.log(`${i}: ${item[1]}`));

        while (1) {
            var updateIdx = questionInt('\nChoose an Index to update: ');
            if (updateIdx >= 0 && updateIdx < data.length) break;
            console.log('Invalid Input!');
        }
        for (const pair of this.dataMap[index]) {
            if (pair[0] == key && pair[1] == data[updateIdx][1]) {
                pair[1] = newValue;
                return console.log('\nValue Updated.');
            }
        }
    }

    remove() {
        const key = question('Enter the Key: ');

        const data = this.get(key);
        const index = this.hash(key);

        if (!data) return console.log('\nKey Not Found!');
        
        const pairs = this.dataMap[index];
        
        if (data.length == 1) {
            for (let i = 0; i < pairs.length; i++) {
                if (pairs[i][0] == key) {
                    pairs.splice(i, 1);
                    return console.log('\nData removed.');
                }
            }
        }
        console.log('\nMultiple values were found.')
        data.forEach((item, i) => console.log(`${i}: ${item[1]}`));

        while (1) {
            var updateIdx = questionInt('\nChoose an Index to remove: ');
            if (updateIdx >= 0 && updateIdx < data.length) break;
            console.log('Invalid Input!');
        }
        for (let i = 0; i < pairs.length; i++) {
            if (pairs[i][0] == key && pairs[i][1] == data[updateIdx][1]) {
                pairs.splice(i, 1);
                return console.log('\nData removed.');
            }
        }
    }
}

const hashTable = new HashTable(7, 23);

hashTable.set('shirts', 24);
hashTable.set('shirts', 34);
hashTable.set('shoes', 35);
hashTable.set('pants', 241);
hashTable.set('glasses', 51);

console.log(hashTable.loadFactor());

// LF > 0.7, so table size is doubled
hashTable.set('jackets', 73);
console.log(hashTable);

// hashTable.update();
hashTable.remove();

// console.log(hashTable.get('shirts'));
// console.log(hashTable.get('jackets'));