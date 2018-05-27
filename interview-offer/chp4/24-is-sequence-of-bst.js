/**
 * 判断输入的数组是不是二叉搜索树的后续遍历序列
 *
 * @param {number[]} list
 */
module.exports = function isSequenceOfBST(list) {
    if (list.length === 0) {
        return true;
    }

    // 后序遍历中，最后一个值为根节点
    // 小于根节点的值为左子树，大于的为右子树

    const root = list[list.length - 1];

    const left = [];
    const right = [];

    let result = true;
    for (let i = 0; i < list.length - 1; i++) {
        const item = list[i];
        if (item < root) {
            if (right.length > 0) {
                result = false;
                break;
            }

            left.push(item);
        } else {
            right.push(item);
        }
    }

    return result && isSequenceOfBST(left) && isSequenceOfBST(right);
};
