import test from "ava";
import binaryTreeSumPath from "../25-binary-tree-sum-path";
import { BinaryTree } from "../../../data-structures/05-binary-tree";

test("Find binary tree path", t => {
    const tree = new BinaryTree([4, 5, 7, 10, 12], [4, 7, 5, 12, 10]);

    t.deepEqual(binaryTreeSumPath(tree.root, 22), [[10, 5, 7], [10, 12]]);
});
