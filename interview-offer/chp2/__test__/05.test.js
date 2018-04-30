import test from "ava";
import print from "../05";
import SinglyLinkedList from "../../../data-structures/01-singly-linked-list";

test("empty head", t => {
    print(null);
    t.pass();
});

test("print link list reverse", t => {
    const list = [1, 2, 3, 4];
    const linkList = new SinglyLinkedList();
    list.forEach(item => linkList.addAtTail(item));

    // rewrite console.log for test
    const logOutput = [];
    console.log = msg => logOutput.push(msg);

    print(linkList.head);

    t.deepEqual(logOutput, list.reverse());
});
