/**
 * 输入两个整数序列，第一个表示压入顺序，第二个表示弹出顺序
 * 判断第二个序列是不是第一个的一个弹出序列
 *
 * @param {number[]} pushList
 * @param {number[]} popList
 */
module.exports = function isStackPopSequence(pushList, popList) {
    let isPopSequence = false;

    let tmpStack = [];
    while (true) {
        tmpStack.push(pushList.shift());

        // 如果 tmpStack 栈顶元素等于 popList 的第一个元素，则检查下一个元素，否则，跳出循环，继续压入 tmpStack
        // 当 popList 为空的时候则正确
        while (tmpStack[tmpStack.length - 1] === popList[0]) {
            tmpStack.pop();
            popList.shift();

            if (tmpStack.length === 0 || popList.length === 0) {
                if (popList.length === 0) {
                    isPopSequence = true;
                }

                break;
            }
        }

        if (pushList.length === 0) {
            break;
        }
    }

    return isPopSequence;
};
