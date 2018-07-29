/**
 *
 * @param {any[]} list
 * @param {number} i
 * @param {number} j
 */
function swap(list, i, j) {
    if (i !== j) {
        const tmp = list[i];
        list[i] = list[j];
        list[j] = tmp;
    }
}

/**
 *
 * @param {string[]} strList
 * @param {string} beginIndex
 * @param {string[]} resultList
 */
function _permutation(strList, beginIndex, resultList) {
    if (beginIndex === strList.length) {
        resultList.push(strList.join(""));
        return;
    }

    for (let i = beginIndex; i < strList.length; i++) {
        swap(strList, i, beginIndex);
        _permutation(strList, beginIndex + 1, resultList);
        swap(strList, i, beginIndex);
    }
}

/**
 * 输入一个字符串，输出这个字符串中字符的所有组合
 *
 * @param {string} str
 */
exports.permutation = function permutation(str) {
    if (!str) {
        return [];
    }

    const strList = str.split("");
    const resultList = [];
    _permutation(strList, 0, resultList);

    return resultList;
};
