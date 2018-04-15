/**
 * @param {any[]} left
 * @param {any[]} right
 * @returns {any[]}
 */
function merge(left, right) {
    const final = [];
    while (left.length && right.length) {
        final.push(left[0] < right[0] ? left.shift() : right.shift());
    }

    return final.concat(left).concat(right);
}

/**
 * @param {any[]} l
 * @returns {any[]}
 */
module.exports = function mergeSort(l) {
    if (l.length < 2) return l;
    const mid = Math.ceil(l.length / 2);
    return merge(mergeSort(l.slice(0, mid)), mergeSort(l.slice(mid)));
};
