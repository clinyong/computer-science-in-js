import test from "ava";
import isSubTree from "../18-is-sub-tree";
import { BinaryTree } from "../../../data-structures/05-binary-tree";

test("check sub tree", t => {
    const tree1 = new BinaryTree([9, 8, 2, 5, 7], [9, 2, 8, 7, 5]);
    const tree2 = new BinaryTree([9, 8, 2], [9, 2, 8]);

    t.is(isSubTree(tree1.root, tree2.root), true);

    const tree3 = new BinaryTree([9, 8, 3], [9, 3, 8]);
    t.is(isSubTree(tree1.root, tree3.root), false);

    t.is(isSubTree(tree1.root, null), false);
    t.is(isSubTree(null, tree3.root), false);
    t.is(isSubTree(null, null), false);
});
