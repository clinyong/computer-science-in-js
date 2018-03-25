import test from "ava";
import BinaryTree from "../05-binary-tree";

test("traverse", t => {
    const preOrderList = "1245367".split("");
    const inOrderList = "4251637".split("");
    const postOrderList = "4526731".split("");
    const tree = new BinaryTree(inOrderList, postOrderList);

    t.deepEqual(tree.preOrderTraverse(), preOrderList);
    t.deepEqual(tree.inOrderTraverse(), inOrderList);
    t.deepEqual(tree.postOrderTraverse(), postOrderList);
});
