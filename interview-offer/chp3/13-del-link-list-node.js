/**
 * 在 O(1) 的时间内删除一个链表的节点
 * 这里假设了 toDel 这个节点是在链表里面，可以在面试的时候询问下面试官这种情况
 */
module.exports = function delLinkListNode(head, toDel) {
    if (!head || !toDel) {
        return [];
    }

    if (toDel.next) {
        // 非常取巧的替换掉节点的数据，实现 O(1)
        const nextNode = toDel.next;
        toDel.data = nextNode.data;
        toDel.next = nextNode.next;
    } else {
        if (head === toDel) {
            head = null;
        } else {
            let node = head;
            while (node.next !== toDel) {
                node = node.next;
            }

            node.next = toDel.next;
        }
    }

    const resultList = [];
    if (head) {
        let node = head;
        while (node) {
            resultList.push(node.data);
            node = node.next;
        }
    }

    return resultList;
};
