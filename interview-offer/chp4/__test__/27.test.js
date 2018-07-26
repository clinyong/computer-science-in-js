import test from "ava";
import { convertToDoublyLinkList } from "../27-binary-search-tree-to-doubly-link-list";
import { BinaryTree } from "../../../data-structures/05-binary-tree";

test("Convert binary search tree to doubly link list", t => {
    const orderList = [4, 6, 8, 10, 12, 14, 16];

    const tree = new BinaryTree(orderList, [4, 8, 6, 12, 16, 14, 10]);

    let head = convertToDoublyLinkList(tree.root);

    const forwardList = [];
    while (head.right) {
        forwardList.push(head.data);
        head = head.right;
    }
    forwardList.push(head.data);

    const backwardList = [];
    while (head.left) {
        backwardList.push(head.data);
        head = head.left;
    }
    backwardList.push(head.data);

    t.deepEqual(forwardList, orderList);
    t.deepEqual(backwardList, orderList.reverse());
});
