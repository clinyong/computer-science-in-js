import test from "ava";
import printMatrix from "../20-print-matrix";

test("print matrix clock wisely", t => {
    /**
     * @param {number} maxLen
     * @param {number[]} resultList
     */
    function testHelper(maxLen, resultList) {
        const matrix = [];
        for (let i = 0; i < maxLen; i++) {
            const row = [];
            for (let j = 1; j <= maxLen; j++) {
                row.push(j + maxLen * i);
            }
            matrix.push(row);
        }

        t.deepEqual(printMatrix(matrix), resultList);
    }

    testHelper(1, [1]);
    testHelper(2, [1, 2, 4, 3]);
    testHelper(3, [1, 2, 3, 6, 9, 8, 7, 4, 5]);
    testHelper(4, [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
});
