import test from "ava";
import mergeSort from "../01-merge-sort";

test("empty elements", t => {
    const l1 = [];
    const l2 = mergeSort(l1);

    t.is(l2.length, 0);
});

test("one elements", t => {
    const l1 = [1];
    const l2 = mergeSort(l1);

    t.deepEqual(l1, l2);
});

test("two elements", t => {
    const l1 = [2, 1];
    const l2 = mergeSort(l1);

    t.deepEqual(l2, [1, 2]);
});
