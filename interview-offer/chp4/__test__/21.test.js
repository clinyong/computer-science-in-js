import test from "ava";
import StackWithMin from "../21-stack-with-min";

test("stack with min", t => {
    const stack = new StackWithMin();

    stack.push(2);
    stack.push(3);
    stack.push(1);

    t.is(stack.min(), 1);
    t.is(stack.pop(), 1);
    t.is(stack.min(), 2);
    t.is(stack.pop(), 3);
    t.is(stack.min(), 2);
    t.is(stack.pop(), 2);
});
