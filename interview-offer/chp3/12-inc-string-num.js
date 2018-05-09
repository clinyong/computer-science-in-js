/**
 * 将数字加 1，判断会不会超过设置的最大长度
 * 这道题目和课本实际的不太一样，但是同样是要考虑大数问题
 *
 * @param {string} stringNum
 * @param {number} maxLen
 */
module.exports = function inc(stringNum, maxLen) {
    const numList = stringNum.split("");
    if (numList.length > maxLen) {
        return {
            overflow: true
        };
    }

    for (let i = numList.length - 1; i >= 0; i--) {
        const n = Number(numList[i]) + 1;

        if (n > 9) {
            numList[i] = n % 10;
            if (i === 0) {
                numList.unshift("1");
            }
        } else {
            numList[i] = n;
            break;
        }
    }

    if (numList.length > maxLen) {
        return {
            overflow: true
        };
    } else {
        return {
            overflow: false,
            result: numList.join("")
        };
    }
};
