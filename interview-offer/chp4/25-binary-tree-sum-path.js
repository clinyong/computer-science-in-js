function findPath(root, resultList, currentList, currentSum, expectedSum) {
    currentList.push(root.data);
    currentSum += root.data;

    if (root.left) {
        findPath(root.left, resultList, currentList, currentSum, expectedSum);
    }
    if (root.right) {
        findPath(root.right, resultList, currentList, currentSum, expectedSum);
    }

    const isLeaf = !root.left && !root.right;
    if (currentSum === expectedSum && isLeaf) {
        resultList.push([...currentList]);
    }

    currentList.pop();
    currentSum -= root.data;
}

/**
 * 输入一棵二叉树和一个整数，打印出二叉树结点值的和为输入整数的所有路径
 *
 * @param {*} root
 * @param {number} sum
 *
 * @returns {number[][]}
 */
module.exports = function binaryTreeSumPath(root, sum) {
    if (!root || !sum) {
        return [];
    }

    const resultList = [];
    const currentList = [];
    const currentSum = 0;

    findPath(root, resultList, currentList, currentSum, sum);

    return resultList;
};
