/**
 *
 * @param {any[][]} matrix
 * @param {number} start
 * @param {number} rowLen
 * @param {number} colLen
 */
function printCycle(matrix, start, rowLen, colLen) {
    const list = [];

    // 从左到右
    for (let row = start, col = start; col < colLen; col++) {
        list.push(matrix[row][col]);
    }

    // 从上到下
    for (let row = start + 1, col = colLen - 1; row < rowLen; row++) {
        list.push(matrix[row][col]);
    }

    // 从右到左
    for (let row = rowLen - 1, col = colLen - 2; col >= start; col--) {
        list.push(matrix[row][col]);
    }

    // 从下到上
    for (let row = rowLen - 2, col = start; row > start; row--) {
        list.push(matrix[row][col]);
    }

    return list;
}

/**
 * 顺时针打印矩阵
 *
 * @param {any[][]} matrix
 * matrix 是一个二维数组，[row1, row2, row3...]
 *
 */
module.exports = function printMatrix(matrix) {
    let count = 0,
        maxRow = matrix.length,
        maxCol = matrix[0].length;

    let list = [];
    while (maxRow >= count * 2 && maxCol >= count * 2) {
        list = list.concat(
            printCycle(matrix, count, maxRow - count, maxCol - count)
        );
        count++;
    }

    return list;
};
