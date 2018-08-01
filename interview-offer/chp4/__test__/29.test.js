import test from "ava";
import { findNum } from "../29-list-half-num";

test("Find half occurrence num", t => {
    let result = findNum([1, 2, 3, 2, 2, 2, 2, 3]);
    t.deepEqual(result, 2);

    result = findNum([1, 2, 3, 2, 2, 2, 2]);
    t.deepEqual(result, 2);
});

test("Invalid input", t => {
    t.throws(() => findNum([2, 3, 4]));
    t.throws(() => findNum(null));
});
