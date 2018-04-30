/**
 * 在一个矩阵中找数字，矩阵的每行从上到下递增，每列从左到右递增
 *
 * @param {number[][]} matrix
 * @param {number} target
 *
 * @returns {boolean}
 */
module.exports = function find(matrix, target) {
    if (!Array.isArray(matrix) || !matrix.every(row => Array.isArray(row))) {
        return false;
    }

    const maxRow = matrix.length - 1;
    let maxCol = matrix[0].length - 1;
    let startRow = 0;

    // 从右上角开始找，先去掉列，再去掉行
    while (startRow <= maxRow) {
        while (target < matrix[startRow][maxCol]) {
            maxCol--;
        }

        if (target === matrix[startRow][maxCol]) {
            return true;
        }

        startRow++;
    }

    return false;
};
