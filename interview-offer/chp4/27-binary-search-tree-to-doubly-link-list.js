function findLastNode(root, lastNode) {
    if (!root) {
        return null;
    }

    // 先找左子树的最后一个节点
    if (root.left) {
        lastNode = findLastNode(root.left, lastNode);
    }

    root.left = lastNode;
    if (lastNode) {
        lastNode.right = root;
    }

    // 更新自己为最后一个节点
    lastNode = root;

    // 找右子树的最后一个节点
    if (root.right) {
        lastNode = findLastNode(root.right, lastNode);
    }

    // 当前排序好的数组的最后一个节点，返回
    return lastNode;
}

/**
 * 将二叉搜索树转为排序好的双向链表
 * 要求不能创建新节点，只能改变原先指针的位置
 *
 * @param {*} root
 */
exports.convertToDoublyLinkList = function convertToDoublyLinkList(root) {
    if (!root) {
        return root;
    }

    const lastNode = findLastNode(root, null);
    let head = lastNode;
    while (head.left) {
        head = head.left;
    }

    return head;
};
