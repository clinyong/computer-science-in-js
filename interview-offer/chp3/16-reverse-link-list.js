/**
 * 反转链表
 *
 * @param {any} head
 */
module.exports = function reverseLinkList(head) {
    if (!head) {
        return null;
    }

    let curr = head,
        pre = null,
        next = head;

    while (curr) {
        next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
    }

    return pre;
};
