import test from "ava";
import {
    preOrderTraverse,
    middleOrderTraverse,
    postOrderTraverse
} from "../../../data-structures/05-binary-tree";
import rebuildTree from "../06-rebuild-tree";

test("rebuild binary tree from pre and middle traverse", t => {
    const preOrderList = [1, 2, 4, 7, 3, 5, 6, 8];
    const middleOrderList = [4, 7, 2, 1, 5, 3, 8, 6];

    const head = rebuildTree(preOrderList, middleOrderList);

    const postOrderList = [7, 4, 2, 5, 8, 6, 3, 1];
    t.deepEqual(preOrderTraverse(head), preOrderList);
    t.deepEqual(middleOrderTraverse(head), middleOrderList);
    t.deepEqual(postOrderTraverse(head), postOrderList);
});
