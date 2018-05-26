function printTree(node, childList) {
    if (node.left) {
        childList.push(node.left);
    }
    if (node.right) {
        childList.push(node.right);
    }

    return node.data;
}

/**
 * 从上到下遍历二叉树
 */
module.exports = function printTopBottomTree(root) {
    if (!root) {
        return;
    }

    const list = [];

    // 树的广度遍历，利用队列
    const child = [];
    child.push(root);
    while (child.length !== 0) {
        const node = child.shift();
        list.push(printTree(node, child));
    }

    return list;
};
