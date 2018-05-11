/**
 * 找出链表中的倒数第 k 个节点
 *
 * @param {any} head
 * @param {number} k
 */
module.exports = function findLinkListNode(head, k) {
    if (!head || k <= 0) {
        return null;
    }

    // 倒数第 k 个数，就是正数第 n-k+1 个数
    // 为了在一次遍历中得到结果，用两个指针，其中当一个指针走到末尾时，另一个刚好走到倒数第 k 个

    let len = 1,
        cursor1 = head,
        cursor2 = head;

    while (cursor1.next) {
        cursor1 = cursor1.next;
        len++;

        if (len > k) {
            cursor2 = cursor2.next;
        }
    }

    if (k < len) {
        return cursor2;
    } else {
        return null;
    }
};
