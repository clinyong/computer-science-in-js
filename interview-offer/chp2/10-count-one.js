/**
 * 统计输入的整数中，转换为二进制之后，有多少个 1
 *
 * @param {number} num
 */
module.exports = function countOne(num) {
    let count = 0;

    // 把一个整数减 1 再和原来的数相与，会把整数最右边一个 1 变成 0
    // 有多少个 1 就能进行多少次这样的操作
    while (num) {
        count++;
        num = (num - 1) & num;
    }

    return count;
};
