module.exports = class Stack {
    constructor() {
        this.stack = [];
    }

    push(val) {
        this.stack.push(val);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    *[Symbol.iterator]() {
        for (let i = this.stack.length - 1; i >= 0; i--) {
            yield this.stack[i];
        }
    }
};
