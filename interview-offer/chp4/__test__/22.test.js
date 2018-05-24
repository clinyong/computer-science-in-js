import test from "ava";
import isStackPopSequence from "../22-is-stack-pop-sequence";

test("is stack pop sequence", t => {
    const pushList = [1, 2, 3, 4, 5];
    t.is(isStackPopSequence(pushList.slice(), [4, 5, 3, 2, 1]), true);
    t.is(isStackPopSequence(pushList.slice(), [4, 3, 5, 1, 2]), false);
    t.is(isStackPopSequence(pushList.slice(), [5, 4, 3, 2, 1]), true);

    t.is(isStackPopSequence([1], [1]), true);
    t.is(isStackPopSequence([1, 2], [2, 1]), true);
});
