import test from "ava";
import min from "../08-rotate-array";

function arrayTest(list, t) {
    for (let i = 1; i < list.length; i++) {
        t.is(min([...list.slice(i), ...list.slice(0, i)]), list[0]);
    }
}

test("even array length", t => {
    const l1 = [1, 2];
    const l2 = [1, 2, 3, 4, 5, 6];

    arrayTest(l1, t);
    arrayTest(l2, t);
});

test("odd array length", t => {
    const l = [1, 2, 3, 4, 5];
    arrayTest(l, t);
});

test("repeate element", t => {
    const l = [0, 1, 1, 1, 1];
    arrayTest(l, t);
});

test("test invalid array", t => {
    t.is(min(null), undefined);
    t.is(min([]), undefined);
    t.is(min([1]), undefined);
});
