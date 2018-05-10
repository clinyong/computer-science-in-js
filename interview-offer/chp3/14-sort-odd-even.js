/**
 * 将数组里面的奇数全部移动到偶数的前面
 *
 * @param {number[]} list
 */
module.exports = function sortOddEven(list) {
    let i = 0,
        j = list.length - 1;

    // 采用的是快排里面找中位数的方法
    while (i < j) {
        while (list[i] % 2 !== 0 && i < j) {
            i++;
        }

        while (list[j] % 2 === 0 && i < j) {
            j--;
        }

        if (i < j) {
            const tmp = list[i];
            list[i] = list[j];
            list[j] = tmp;
            i++;
            j--;
        }
    }

    return list;
};
