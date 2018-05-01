const { Node } = require("../../data-structures/05-binary-tree");

/**
 * 根据前序遍历和中序遍历的结果，重建二叉树
 *
 * @param {number[]} preOrderList
 * @param {number[]} middleOrderList
 */
module.exports = function rebuildTree(preOrderList, middleOrderList) {
    if (
        !Array.isArray(preOrderList) ||
        !Array.isArray(middleOrderList) ||
        preOrderList.length !== middleOrderList.length
    ) {
        return null;
    }

    const root = preOrderList[0];
    const node = new Node(root);

    const rootInexInMiddle = middleOrderList.findIndex(item => item === root);

    const leftTreeLen = rootInexInMiddle - 0;
    const rightTreeLen = preOrderList.length - leftTreeLen - 1;

    if (leftTreeLen > 0) {
        node.left = rebuildTree(
            preOrderList.slice(1, leftTreeLen + 1),
            middleOrderList.slice(0, rootInexInMiddle)
        );
    }

    if (rightTreeLen > 0) {
        node.right = rebuildTree(
            preOrderList.slice(leftTreeLen + 1),
            middleOrderList.slice(rootInexInMiddle + 1)
        );
    }

    return node;
};
