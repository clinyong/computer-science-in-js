/**
 * 用两个堆栈实现队列
 */
class Queue {
    constructor() {
        this.statck1 = [];
        this.statck2 = [];
    }

    appendTail(item) {
        this.statck1.push(item);
    }

    deleteHead() {
        if (this.statck2.length === 0 && this.statck1.length > 0) {
            while (this.statck1.length > 0) {
                const item = this.statck1.pop();
                this.statck2.push(item);
            }
        }

        return this.statck2.pop();
    }
}

/**
 * 用两个队列实现堆栈
 */
class Stack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    appendTail(item) {
        if (this.queue1.length > 0) {
            this.queue1.push(item);
        } else {
            this.queue2.push(item);
        }
    }

    deleteHead() {
        let l1, l2;

        if (this.queue1.length > 0) {
            l1 = this.queue1;
            l2 = this.queue2;
        } else {
            l1 = this.queue2;
            l2 = this.queue1;
        }

        while (l1.length > 1) {
            l2.push(l1.shift());
        }

        return l1.shift();
    }
}

module.exports = {
    Queue,
    Stack
};
