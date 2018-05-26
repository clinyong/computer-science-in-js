import test from "ava";
import printTopBottomTree from "../23-print-top-bottom-tree";
import { BinaryTree } from "../../../data-structures/05-binary-tree";

test("print top bottom tree", t => {
    const tree = new BinaryTree(
        [5, 6, 7, 8, 9, 10, 11],
        [5, 7, 6, 9, 11, 10, 8]
    );

    t.deepEqual(printTopBottomTree(tree.root), [8, 6, 10, 5, 7, 9, 11]);
});
