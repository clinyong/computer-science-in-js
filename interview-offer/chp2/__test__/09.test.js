import test from "ava";
import fibonacci from "../09-fibonacci";

test("test fibonacci", t => {
    function testWrapper(n, result) {
        t.is(fibonacci(n), result);
    }

    testWrapper(0, 0);
    testWrapper(1, 1);
    testWrapper(2, 1);
    testWrapper(5, 5);
    testWrapper(6, 8);
    testWrapper(10, 55);
});
