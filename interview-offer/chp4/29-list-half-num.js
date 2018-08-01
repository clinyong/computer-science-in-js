/**
 * @param {number[]} list
 * @param {number} item
 */
function checkMoreThanHalf(list, item) {
    const count = list.reduce((pre, current) => {
        return current === item ? pre + 1 : pre;
    }, 0);

    if (count <= Math.floor(list.length / 2)) {
        return false;
    }

    return true;
}

function swap(list, i, j) {
    if (i !== j) {
        const tmp = list[i];
        list[i] = list[j];
        list[j] = tmp;
    }
}

/**
 * @param {number[]} list
 * @param {number} left
 * @param {number} right
 */
function partition(list, left, right) {
    const pivotValue = list[left];
    let i = left + 1,
        j = right;

    while (i < j) {
        while (list[i] <= pivotValue && i < right) {
            i++;
        }

        while (list[j] >= pivotValue && j > left) {
            j--;
        }

        if (i < j) {
            swap(list, i, j);
        }
    }

    swap(list, left, j);

    return j;
}

/**
 * @param {number[]} list
 */
function findMiddle(list) {
    const middleIndex = Math.floor(list.length / 2);

    let start = 0,
        end = list.length - 1;
    let index = partition(list, start, end);
    while (index !== middleIndex) {
        if (index > middleIndex) {
            end = index - 1;
        } else {
            start = index + 1;
        }
        index = partition(list, start, end);
    }

    return list[index];
}

/**
 * 找出数组中超过数组一半的数字
 *
 * @param {num[]} list
 */
exports.findNum = function findNum(list) {
    const err = new Error("Invalid input list.");

    if (!Array.isArray(list)) {
        throw err;
    }

    // 这个数应该是数组的中位数
    const num = findMiddle(list);

    if (checkMoreThanHalf(list, num)) {
        return num;
    } else {
        throw err;
    }
};
