const hexList = [];
for (let i = 0; i < 10; i++) {
    hexList[i] = i.toString();
}
hexList.push(..."ABCDEF".split(""));

/**
 * 将十进制转为十六进制
 *
 * @param {number} num
 * @returns {string}
 */
exports.decimalToHex = function decimalToHex(num) {
    const words = [];
    let q = num;
    while (q) {
        const r = q % 16;
        words.unshift(hexList[r]);
        q = Math.floor(q / 16);
    }

    return "0x" + words.join("");
};

/**
 * 将十六进制转为十进制
 *
 * @param {string} hexNum
 * @returns {string}
 */
exports.hexToDecimal = function hexToDecimal(hexNum) {
    return hexNum
        .toUpperCase()
        .replace("0X", "")
        .split("")
        .reverse()
        .reduce((total, n, index) => {
            const decimalNum = hexList.findIndex(i => i === n);
            return total + decimalNum * Math.pow(16, index);
        }, 0)
        .toString();
};
