import test from "ava";
import DoublyLinkedList from "../02-doubly-linked-list";

test("traverse", t => {
    const list = [1, 2, 3];
    const linkedList = new DoublyLinkedList();

    list.forEach(item => {
        linkedList.addAtTail(item);
    });

    t.deepEqual([...linkedList], list);
});

test("reverse traverse", t => {
    const list = [1, 2, 3];
    const linkedList = new DoublyLinkedList();

    list.forEach(item => {
        linkedList.addAtHead(item);
    });

    t.deepEqual([...linkedList.reverse()], list);
});
