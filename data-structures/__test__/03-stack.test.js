import test from "ava";
import Stack from "../03-stack";

test("traverse", t => {
    const list = [1, 2, 3];
    const stack = new Stack();

    list.forEach(item => stack.push(item));

    t.deepEqual([...stack], list.reverse());
});
