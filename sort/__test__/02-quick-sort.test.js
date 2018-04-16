import test from "ava";
import quickSort from "../02-quick-sort";

test("two values", t => {
    const l = [2, 1, 5, 3, 6, 0];
    quickSort(l);
    t.deepEqual(l, [0, 1, 2, 3, 5, 6]);
});
