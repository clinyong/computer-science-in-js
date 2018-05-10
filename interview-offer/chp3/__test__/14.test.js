import test from "ava";
import sortOddEven from "../14-sort-odd-even";

function isEven(num) {
    return num % 2 === 0;
}

test("sort even and odd", t => {
    function testEven(list, startIndx, result = true) {
        t.is(list.slice(startIndx).every(isEven), result);
    }

    let list = sortOddEven([6, 8, 1, 3]);
    testEven(list, 2);

    list = sortOddEven([1, 6, 8, 3]);
    testEven(list, 2);

    list = sortOddEven([6, 1, 8]);
    testEven(list, 1);

    list = sortOddEven([1, 6, 3]);
    testEven(list, 2);

    list = sortOddEven([6, 8]);
    testEven(list, 0);

    list = sortOddEven([6]);
    testEven(list, 0);

    list = sortOddEven([1, 3]);
    testEven(list, 0, false);

    list = sortOddEven([1]);
    testEven(list, 0, false);
});
