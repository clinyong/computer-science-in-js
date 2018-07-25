function Node(data) {
    this.data = data;
    this.next = null;
    this.sibling = null;
}

exports.duplicateLinkList = function duplicateLinkList(head) {
    let h = head;
    while (h) {
        const newNode = new Node(h.data);
        newNode.next = h.next;
        h.next = newNode;

        h = h.next.next;
    }
};

exports.splitDupLinkList = function splitDupLinkList(head) {
    let oldList = head,
        newList = head.next,
        h = newList.next,
        newHead = head.next;

    while (h) {
        oldList.next = h;
        newList.next = h.next;

        oldList = oldList.next;
        newList = newList.next;

        h = h.next.next;
    }

    oldList.next = null;

    return newHead;
};

function genSiblingForDupNode(head) {
    let h = head;
    while (h) {
        const sibling = h.sibling;
        h.next.sibling = sibling.next;

        h = h.next.next;
    }
}

/**
 * 复杂链表的复制
 * 复杂链表指的是，每个节点，除了一个 next 指针指向下一个节点外，还有一个 sibling 的指针指向任意一个节点
 *
 * @param {*} head
 */
exports.complexLinkListClone = function complexLinkListClone(head) {
    if (!head) {
        return;
    }

    duplicateLinkList(head);
    genSiblingForDupNode(head);
    return splitDupLinkList(head);
};
