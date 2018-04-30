import test from "ava";
import find from "../03";

const matrix = [[1, 2, 8, 9], [2, 4, 9, 12], [4, 7, 10, 13], [6, 8, 11, 15]];

test("exits", t => {
    const exits = find(matrix, 7);
    t.is(exits, true);
});

test("not exits", t => {
    const exits = find(matrix, 5);
    t.is(exits, false);
});

test("maxtrix is not array", t => {
    const exits = find(null, 5);
    t.is(exits, false);
});

test("maxtrix item is not array", t => {
    const exits = find([null], 5);
    t.is(exits, false);
});
