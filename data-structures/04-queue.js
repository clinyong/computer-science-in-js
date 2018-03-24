module.exports = class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(val) {
        this.queue.push(val);
    }

    dequeue() {
        return this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }

    *[Symbol.iterator]() {
        for (let val of this.queue) {
            yield val;
        }
    }
};
