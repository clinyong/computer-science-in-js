/**
 * 合并两个递增链表
 *
 * @param {*} head1
 * @param {*} head2
 */
module.exports = function mergeIncLinkList(head1, head2) {
    if (!head1) {
        return head2;
    } else if (!head2) {
        return head1;
    }

    let newHead = null;

    if (head1.data < head2.data) {
        newHead = head1;
        newHead.next = mergeIncLinkList(head1.next, head2);
    } else {
        newHead = head2;
        newHead.next = mergeIncLinkList(head1, head2.next);
    }

    return newHead;
};
