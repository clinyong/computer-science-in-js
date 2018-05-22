const Stack = require("../../data-structures/03-stack");

/**
 * 定义栈的数据结构，实现一个能得到栈最小元素的 min 函数
 * min，push，pop 的时间复杂度为 1
 */
module.exports = class StackWithMin {
    constructor() {
        this.data = new Stack();
        this.minList = new Stack();
    }

    push(data) {
        this.data.push(data);
        const topMin = this.minList.peek();

        if (topMin !== void 0 && topMin < data) {
            this.minList.push(topMin);
        } else {
            this.minList.push(data);
        }
    }

    pop() {
        this.minList.pop();
        return this.data.pop();
    }

    min() {
        return this.minList.peek();
    }
};
