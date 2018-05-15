const { Node } = require("../../data-structures/05-binary-tree");

function checkSubTree(root1, root2) {
    // 要先判断 root2
    if (!root2) {
        return true;
    }
    if (!root1) {
        return false;
    }

    if (root1.data !== root2.data) {
        return false;
    }

    return (
        checkSubTree(root1.left, root2.left) &&
        checkSubTree(root1.right, root2.right)
    );
}

/**
 * 输入两棵二叉树的跟节点 roo1 和 root2，判断 root2 是不是 root1 的子树
 *
 * @param {*} root1
 * @param {*} root2
 */
module.exports = function isSubTree(root1, root2) {
    if (!root1 || !root2) {
        return false;
    }

    if (root1.data === root2.data) {
        return checkSubTree(root1, root2);
    }

    return isSubTree(root1.left, root2) || isSubTree(root1.right, root2);
};
