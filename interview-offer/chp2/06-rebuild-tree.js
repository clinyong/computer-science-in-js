const { Node } = require("../../data-structures/05-binary-tree");

/**
 * 根据前序遍历和中序遍历的结果，重建二叉树
 *
 * @param {number[]} preOrderList
 * @param {number[]} middleOrderList
 */
module.exports = function rebuildTree(preOrderList, middleOrderList) {
    const root = preOrderList[0];
    const Node = new Node(root);

    const rootInexInMiddle = middleOrderList.findIndex(item => item === root);

    const leftTreeLen = rootInexInMiddle - 0;

    // 找出所有左子树
    Node.left = rebuildTree(
        preOrderList.slice(1, leftTreeLen + 1),
        middleOrderList.slice(0, rootInexInMiddle)
    );

    // 找出所有右子树
    Node.right = rebuildTree(
        preOrderList.slice(leftTreeLen + 1),
        middleOrderList.slice(rootInexInMiddle + 1)
    );

    return Node;
};
