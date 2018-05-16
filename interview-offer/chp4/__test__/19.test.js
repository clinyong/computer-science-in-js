import test from "ava";
import getMirrorTree from "../19-mirror-tree";
import {
    BinaryTree,
    preOrderTraverse
} from "../../../data-structures/05-binary-tree";

test("get mirror tree", t => {
    function testHelper(originRoot, preOrderList) {
        t.deepEqual(preOrderTraverse(getMirrorTree(originRoot)), preOrderList);
    }

    const tree1 = new BinaryTree([3, 4, 2], [3, 2, 4]);
    testHelper(tree1.root, [4, 2, 3]);

    const tree2 = new BinaryTree(
        [5, 6, 7, 8, 9, 10, 11],
        [5, 7, 6, 9, 11, 10, 8]
    );
    testHelper(tree2.root, [8, 10, 11, 9, 6, 7, 5]);
});
