/**
 * 顺序查找出数组最小元素
 *
 * @param {number[]} list
 */
function minInOrder(list) {
    let min = list[0];

    for (let i = 1; i < list.length; i++) {
        if (list[i] < min) {
            min = list[i];
        }
    }

    return min;
}

/**
 * 在一个旋转数组中找最小数
 * 旋转数组定义： 一个递增排序的数组最开始的几个元素搬到数组末尾，比如 [1, 2, 3, 4, 5] => [3, 4, 5, 1, 2]
 *
 * @param {number[]} list
 *
 * @returns {number}
 */
module.exports = function min(list) {
    if (!Array.isArray(list) || list.length < 2) {
        return;
    }

    let left = 0,
        right = list.length - 1,
        min;

    // 利用旋转数组的规律，通过中间的数，不断地把查找范围减半， 复杂度为 logN
    while (true) {
        const middle = Math.floor((right - left + 1) / 2) + left;

        if (list[middle] < list[left]) {
            right = middle;
        } else if (list[middle] > list[left]) {
            left = middle;
        } else if (list[middle] === list[left]) {
            // 如果数组中存在重复的元素，则没办法判断中间的数的情况，则用普通的顺序查找方法
            break;
        }

        if (right - left <= 1) {
            min = list[right];
            break;
        }
    }

    return min ? min : minInOrder(list);
};
