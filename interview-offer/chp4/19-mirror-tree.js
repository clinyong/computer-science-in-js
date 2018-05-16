/**
 * 输入一个二叉树的根节点，返回这棵树的镜像
 *
 * @param {*} root
 */
module.exports = function getMirrorTree(root) {
    if (!root) {
        return root;
    }

    if (root.left || root.right) {
        const right = root.right;
        root.right = getMirrorTree(root.left);
        root.left = getMirrorTree(right);
    }

    return root;
};
