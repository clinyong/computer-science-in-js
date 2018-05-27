import test from "ava";
import isSequenceOfBST from "../24-is-sequence-of-bst";

test("is sequence of BST", t => {
    t.is(isSequenceOfBST([5, 7, 6, 9, 11, 10, 8]), true);
    t.is(isSequenceOfBST([7, 4, 6, 5]), false);
});
