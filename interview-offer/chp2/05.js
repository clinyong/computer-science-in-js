/**
 * 反向输出链表
 */
module.exports = function print(head) {
    if (!head) {
        return;
    }

    if (head.next) {
        print(head.next);
    }

    console.log(head.data);
};
