function swap(list, iIndex, jIndex) {
    const tmp = list[iIndex];
    list[iIndex] = list[jIndex];
    list[jIndex] = tmp;
}

/**
 * Use partition to find pivot index, in which
 * no larger entry in the leftside of pivot index
 * no smaller entry in the rightside of pivot index
 *
 * Process:
 * Repeat until i and j pointers cross.
 *     Scan i from left to right if l[i] < pivotValue
 *     Scan j from right to left if l[j] > pivotValue
 *     Exchange a[i] with a[j]
 * Last exchange left with j, and j is the pivot index
 *
 * @param {any[]} l
 * @param {number} left
 * @param {number} right
 */
function partition(l, left, right) {
    const pivotValue = l[left];

    let i = left + 1,
        j = right;
    while (true) {
        while (l[i] < pivotValue && i < right) {
            i++;
        }

        while (l[j] > pivotValue && j > left) {
            j--;
        }

        if (i >= j) break;

        swap(l, i, j);
    }

    swap(l, left, j);
    return j;
}

function _quickSort(l, left, right) {
    if (right > left) {
        const pivotIndex = partition(l, left, right);
        _quickSort(l, left, pivotIndex - 1);
        _quickSort(l, pivotIndex + 1, right);
    }
}

module.exports = function quickSort(list) {
    _quickSort(list, 0, list.length - 1);
};
