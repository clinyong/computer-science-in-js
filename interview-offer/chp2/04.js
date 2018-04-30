/**
 * 把空格替换成 %20
 *
 * @param {string[]} list
 *
 * @returns {string[]}
 */
module.exports = function replaceBlank(list) {
    if (!Array.isArray(list)) {
        return list;
    }

    let newLen = list.length;

    // 算出新的数组的长度
    list.forEach(i => {
        if (i === " ") {
            newLen += 2;
        }
    });

    let p1 = list.length - 1,
        p2 = newLen - 1;

    // 从后到前移动元素，遇到空格就替换
    while (p1 >= 0) {
        if (list[p1] === " ") {
            list[p2] = "0";
            list[--p2] = "2";
            list[--p2] = "%";
        } else {
            list[p2] = list[p1];
        }
        p2--;
        p1--;
    }

    return list;
};
